import React from 'react'
import { Table} from 'react-bootstrap'
import XLSX from 'xlsx';
import { object, array, string, number } from 'yup';



const FetchDataXls = () => {
    const [fileName, setFileName] = React.useState('Upload')
    const [tableJson, setTableJson] = React.useState(undefined)
    const inputRef = React.useRef(null);
    const handleUpload=()=>{
        inputRef.current?.click();
    }

    const transformJsonArray=(table)=>{
        //csv data is coming array or arrya 
        //we transform the data into a array of json 
        const jsondata = table.reduce((jsonarray, row, index)=>{
            jsonarray.push({id: index+1, value: row[0] });
            return jsonarray;
        },[]);
        return jsondata;
    }

    const validate=async (data)=>{
        let result = true;
        //get the first element
        const firstElement = (data && data.length>0) && data[0];
        if(firstElement){
            //get the value
            const value = firstElement.value;
            if(value && value.length>0){
                //get the pattern from value
                const valuePattern = getPatternForValue(value);

                const validationSchema = array(object({
                    id: number().required(),
                    value: string().required().matches(valuePattern)
                })).min(1);
                try {
                    const validatedData = await validationSchema.validateSync(data);
                    console.log(JSON.stringify(validatedData));
                } catch (err) {
                    console.log(JSON.stringify(err));
                    result = false;
                }  
            }else{
                result = false;
            }                
        }else{
            result = false;
        }          
        return result;
    }
    const getFirstRegExp=(val)=>{
        const regChar = new RegExp('[A-Z]');
        const regNumeric = new RegExp('[0-9]');
        let regEx = '';
        if(regChar.test(val)){
            regEx = '[A-Z]';
        }else if(regNumeric.test(val)){
            regEx = '[0-9]';
        }
        return regEx;
    }
    const getPatternForValue=(value)=>{
        console.log(value);
        const valueLength = value.length;
        let valArray = value.split("");
        let firstRegExString = getFirstRegExp(valArray[0])
        let restRegexString = valArray.splice(1).reduce((aggr, val)=>{
            //console.log(val)
            const regChar = new RegExp('[A-Z]');
            const regNumeric = new RegExp('[0-9]');
            if(regChar.test(val) ){
                aggr = aggr + '[A-Z0-9]'
            }else if(regNumeric.test(val)){
                aggr = aggr + '[A-Z0-9]'
            }else{
                aggr = aggr + `[${val}]`
            }
            //aggr+=val;
            return aggr;
        },'')
        let regexString = firstRegExString+restRegexString;
        console.log(regexString);
        //get the pattern
            //check if the value has color code
            //check if there is asterik
                //get two substring based on the asterik
                //Take find the length of the first substring
                    //find the pattern
                //Take the length of the 2nd substring
                    //find the pattern
            //if no asterik
                //Take the length
                //find the pattern
        return new RegExp(regexString);
    }

    const showData=(jsondata)=>{        
        console.log(JSON.stringify(jsondata));
        setTableJson(jsondata);
    }
    const handleDisplayFileDetails= ()=>{
        const haveFile = inputRef.current?.files.length;
        if( inputRef.current?.files && haveFile >= 0 ){
            const selectedFile = inputRef.current.files[0];
            if(selectedFile){
                let formatString = /[^.]*$/.exec(selectedFile.name)[0];

                let isCSVFile = formatString.includes('csv');
                let isXLSFile = formatString.includes('xls');
                let isXLSXFile = formatString.includes('xlsx');
                if(isCSVFile || isXLSFile || isXLSXFile){
                    setFileName(selectedFile.name);
                    const reader = new FileReader();
                    reader.onload = async  event =>{
                        //parse data
                        const bstr = event.target.result;
                        const wb = XLSX.read(bstr, {type: 'binary'});
                        //Get 1st worksheet
                        const wsname = wb.SheetNames[0];
                        const ws = wb.Sheets[wsname];
                        const csvdata = XLSX.utils.sheet_to_json(ws, {header: 1});
                        console.log(JSON.stringify(csvdata));
                        const transformedJson = transformJsonArray(csvdata);
                        const validationResult = await validate(transformedJson);
                        if(validationResult) showData(transformedJson);
                        else {
                            setFileName('Please try with valid file');
                            setTableJson(undefined);
                        }
                    }
                    reader.readAsBinaryString(selectedFile);
                }else{
                    setFileName('File Type Not Supported! Please try with valid file');
                }
            }else{
                setFileName('Please try with valid file');
            }
            
        } else{
            setFileName('Upload');
        }

    }

    return (
        <>
            
            <label className="mx-3">Upload your file (Allowed File type : .CSV, .XLSX, .XLS):</label>
            <input
                ref={inputRef}
                onChange={handleDisplayFileDetails}
                className="d-none"
                type="file"
                accept=".csv,.xlsx,.xls"
            />
            <button
                onClick={handleUpload}
                className={`btn btn-${
                    fileName ? "success" : "primary"
                }`}
            >
                {fileName ? fileName : "Upload"}
            </button>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Model Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tableJson && tableJson.map((row)=>(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.value}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            <pre>
                {
                    JSON.stringify()
                }
            </pre>
        </>
    )
}

export default FetchDataXls
