import React from 'react'
import {Form, Row, Table} from 'react-bootstrap'
import XLSX from 'xlsx';

import Page from '../components/Page'

const FetchDataXls = () => {
    const [fileName, setFileName] = React.useState('Upload')
    const [tableJson, setTableJson] = React.useState(undefined)
    const inputRef = React.useRef(null);
    const handleUpload=()=>{
        inputRef.current?.click();
    }

    const validate=(data)=>{
        return true;
    }

    const showData=(table)=>{
        //csv data is coming array or arrya 
        //we transform the data into a array of json 
        const jsondata = table.reduce((jsonarray, row, index)=>{
            jsonarray.push({id: index+1, value: row[1] });
            return jsonarray;
        },[]);
        console.log(JSON.stringify(jsondata));
        setTableJson(jsondata);
    }
    const handleDisplayFileDetails=()=>{
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
                    reader.onload = event =>{
                        //parse data
                        const bstr = event.target.result;
                        const wb = XLSX.read(bstr, {type: 'binary'});
                        //Get 1st worksheet
                        const wsname = wb.SheetNames[0];
                        const ws = wb.Sheets[wsname];
                        const csvdata = XLSX.utils.sheet_to_json(ws, {header: 1});
                        console.log(JSON.stringify(csvdata));
                        validate(csvdata) && showData(csvdata)                        
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
        <Page>
            
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
        </Page>
    )
}

export default FetchDataXls
