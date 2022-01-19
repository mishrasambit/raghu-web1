import React from 'react'
import { Table, Button} from 'react-bootstrap'
import XLSX from 'xlsx';
import { object, array, string, number } from 'yup';

import ModalPopup from '../components/ModalPopup'



const FetchDataXls = () => {
    const [fileName, setFileName] = React.useState('Upload')
    const [tableJson, setTableJson] = React.useState(undefined)
    const [showConfirmModal, setShowConfirmModal] = React.useState(false)
    const [uploading, setUploading] = React.useState(false)
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
                    value: string().required('Value can\'t be empty')
                    .test('len', `Must be exactly ${value.length} characters in length`, val => val.length === value.length)
                    .matches(valuePattern, `Value must match the pattern of ${valuePattern}`)
                })).min(1).test('array size', 'List should not exceed 5000', arr=> arr.length<5)
                .test('array size', 'List should not exceed 5000', arr=> arr.length<5);
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
        let regEx = `[${val}]`;
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

    const closeConfirmModal=()=>{
        setShowConfirmModal(false)
    }
    const confirmAndSubmit=()=>{
        setUploading(true)
        setTimeout(()=>{
            setUploading(false);
            setShowConfirmModal(false)
        }, 5000)
    }
    const confirmSubmission = ()=>{
        if(tableJson && tableJson.length<2){
            //do submission
        }else{
            setShowConfirmModal(true)
        }
    }

    return (
        <>
            
            <label className="mx-3">Select Your File For Upload (Allowed File type : .CSV, .XLSX, .XLS):</label>
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
            <Button onClick={confirmSubmission}>
                Upload Your File
            </Button>
            <ModalPopup show={showConfirmModal}
             handleClose={closeConfirmModal}
             handlePrimary={confirmAndSubmit} 
             modalTitleText={"Upload confirmation"}
             modalBodyText={"Records are more than 2000, Do you want to submit!"}
             processing={uploading}
             primaryButtonText={"Upload Data"}/>
            <pre>
                {
                    JSON.stringify()
                }
            </pre>
        </>
    )
}

export default FetchDataXls
