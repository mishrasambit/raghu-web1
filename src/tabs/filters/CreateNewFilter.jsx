import React, {useState} from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, Button, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import {fetchDivisionFilter, setSelectedDivision} from '../../redux/filter/FilterAction'
import SpinLoader from '../../components/SpinLoader'

const CreateNewFilter = () => {
    const [divisionDropDown, setDivisionDropDown] = useState(undefined)
    const dispatch = useDispatch()
    const brandReducer = useSelector(state => state.brandReducer)
    const filterReducer = useSelector(state => state.filterReducer)
    React.useEffect(() => {
        let brandFilterDivisionFound = false;
        if(brandReducer.brandName){ 
            if(filterReducer.filterDivisions && !!filterReducer.filterDivisions[brandReducer.brandName]){
                const brandFilterDivision = filterReducer.filterDivisions[brandReducer.brandName]
                setDivisionDropDown(brandFilterDivision)
            }
            else if(filterReducer.filterDivisions && !filterReducer.filterDivisions[brandReducer.brandName] && !filterReducer.loading){
                dispatch(fetchDivisionFilter(brandReducer.brandName))
            }
        }else{
            
        }
    }, [brandReducer, filterReducer]);
    
    console.log("filterReducer:",filterReducer)
    return (
        <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px'}}>
            <div style={{ display: 'flex', justifyContent: 'left', gap: '10px'}}>
                <div>
                    Division
                    <NavDropdown title={divisionDropDown?.selectedOption?divisionDropDown.selectedOption.Description:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                    {divisionDropDown && divisionDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.DIVISION} onClick={()=>{
                                    dispatch(setSelectedDivision({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.Description}</NavDropdown.Item>
                            ))
                    }
                    </NavDropdown>
                </div>   
                <div>
                    Buyer
                    <NavDropdown title={divisionDropDown?.selectedOption?divisionDropDown.selectedOption.Description:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                    {divisionDropDown && divisionDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.DIVISION} onClick={()=>{
                                    dispatch(setSelectedDivision({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.Description}</NavDropdown.Item>
                            ))
                    }
                    </NavDropdown>
                </div> 
            </div>

            <Table responsive="lg">
                <thead>
                    <tr>
                        <th></th>
                        <th>What to Compare</th>
                        <th>Comparision</th>
                        <th>Compare to</th>
                        <th>Grouping</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Add filter(s): </th>
                        <th>
                            <NavDropdown title={divisionDropDown?.selectedOption?divisionDropDown.selectedOption.Description:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                                {divisionDropDown && divisionDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.DIVISION} onClick={()=>{
                                    dispatch(setSelectedDivision({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.Description}</NavDropdown.Item>
                                ))
                            }
                            </NavDropdown>
                        </th>
                        <th>
                            <NavDropdown title={divisionDropDown?.selectedOption?divisionDropDown.selectedOption.Description:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                                {divisionDropDown && divisionDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.DIVISION} onClick={()=>{
                                    dispatch(setSelectedDivision({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.Description}</NavDropdown.Item>
                                ))
                            }
                            </NavDropdown>
                        </th>
                        <th>
                            <Form.Control type="email" placeholder="Compare to" />
                        </th>
                        <th>
                            <NavDropdown title={divisionDropDown?.selectedOption?divisionDropDown.selectedOption.Description:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                                {divisionDropDown && divisionDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.DIVISION} onClick={()=>{
                                    dispatch(setSelectedDivision({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.Description}</NavDropdown.Item>
                                ))
                            }
                            </NavDropdown>
                        </th>
                        <th>
                            <Button >Add</Button>
                        </th>
                    </tr>
                    <tr>
                        <th>Add filter(s): </th>
                        <th>
                            <NavDropdown title={divisionDropDown?.selectedOption?divisionDropDown.selectedOption.Description:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                                {divisionDropDown && divisionDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.DIVISION} onClick={()=>{
                                    dispatch(setSelectedDivision({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.Description}</NavDropdown.Item>
                                ))
                            }
                            </NavDropdown>
                        </th>
                        <th>
                            <NavDropdown title={divisionDropDown?.selectedOption?divisionDropDown.selectedOption.Description:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                                {divisionDropDown && divisionDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.DIVISION} onClick={()=>{
                                    dispatch(setSelectedDivision({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.Description}</NavDropdown.Item>
                                ))
                            }
                            </NavDropdown>
                        </th>
                        <th>
                            <Form.Control type="email" placeholder="Compare to" />
                        </th>
                        <th>
                            <NavDropdown title={divisionDropDown?.selectedOption?divisionDropDown.selectedOption.Description:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                                {divisionDropDown && divisionDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.DIVISION} onClick={()=>{
                                    dispatch(setSelectedDivision({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.Description}</NavDropdown.Item>
                                ))
                            }
                            </NavDropdown>
                        </th>
                        <th>
                            <Button >Add</Button>
                        </th>
                    </tr>
                </tbody>
            </Table>
            
            {/* <Form.Select aria-label="Default select example">
                {divisionDropDown && divisionDropDown.data.map(ele=>(
                            <option value={ele.DIVISION} key={ele.DIVISION}  onChange={(event)=>{
                                event.preventDefault()
                                dispatch(setSelectedDivision({brandName: brandReducer.brandName, selectedOption : ele}))
                            }}>
                                {ele.Description}
                            </option>
                        ))
                }
            </Form.Select> */}

            <SpinLoader loading={filterReducer.loading} />
        </div>
    )
}

export default CreateNewFilter
