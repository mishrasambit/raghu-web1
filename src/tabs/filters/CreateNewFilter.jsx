import React, {useState} from 'react'
import { NavDropdown, Form, Button, Table, Badge } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import {fetchDivisionFilter, setSelectedDivision} from '../../redux/filter/FilterAction'
import {fetchComparisonOperator, setSelectedComparisonOperator} from '../../redux/comparison/ComparisonReducer'
import {fetchWhatToComapre, setSelectedWhatToComapre} from '../../redux/whatToCompare/whatToCompareReducer'
import {fetchGroupingFilter, setSelectedGroupingFilter} from '../../redux/groupingFilter/groupingFilterReducer'

import {addSelectedFilter, removeSelectedFilter} from '../../redux/selectedFilter/selectedFilterReducer'
import SpinLoader from '../../components/SpinLoader'

const CreateNewFilter = () => {
    const [divisionDropDown, setDivisionDropDown] = useState(undefined)
    const [whatToCompareDropDown, setWhatToCompareDropDown] = useState(undefined)
    const [comparisonOperatorDropDown, setComparisonOperatorDropDown] = useState(undefined)
    const [groupingFilterDropDown, setGroupingFilterDropDown] = useState(undefined)
    const [compareToValue, setCompareToValue] = useState("");
    const [selectedFilterItems, setSelectedFilterItems] = useState(undefined);
    const dispatch = useDispatch()
    const brandReducer = useSelector(state => state.brandReducer)
    const filterReducer = useSelector(state => state.filterReducer)
    const comparisonOperatorReducer = useSelector(state => state.comparisonOperatorReducer)
    const whatToCompareReducer = useSelector(state => state.whatToCompareReducer)
    const groupingFilterReducer = useSelector(state => state.groupingFilterReducer)
    const selectedFilterReducer = useSelector(state => state.selectedFilterReducer)

    React.useEffect(() => {
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

    React.useEffect(() => {
        if(brandReducer.brandName){ 
            if(comparisonOperatorReducer.comparisonOperators 
                && !!comparisonOperatorReducer.comparisonOperators[brandReducer.brandName]){
                const brandComparisonOperators = comparisonOperatorReducer.comparisonOperators[brandReducer.brandName]
                setComparisonOperatorDropDown(brandComparisonOperators)
            }
            else if(comparisonOperatorReducer.comparisonOperators 
                && !comparisonOperatorReducer.comparisonOperators[brandReducer.brandName] 
                && !comparisonOperatorReducer.loading){
                dispatch(fetchComparisonOperator(brandReducer.brandName))
            }
        }else{
            
        }
    }, [brandReducer, comparisonOperatorReducer]);
      
    React.useEffect(() => {
        if(brandReducer.brandName){ 
            if(whatToCompareReducer.whatToComapres 
                && !!whatToCompareReducer.whatToComapres[brandReducer.brandName]){
                const brandWhatToCompare = whatToCompareReducer.whatToComapres[brandReducer.brandName]
                setWhatToCompareDropDown(brandWhatToCompare)
            }
            else if(whatToCompareReducer.whatToComapres 
                && !whatToCompareReducer.whatToComapres[brandReducer.brandName] 
                && !whatToCompareReducer.loading){
                dispatch(fetchWhatToComapre(brandReducer.brandName))
            }
        }else{
            
        }
    }, [brandReducer, whatToCompareReducer]);

    React.useEffect(() => {
        if(brandReducer.brandName){ 
            if(groupingFilterReducer.groupingFilters 
                && !!groupingFilterReducer.groupingFilters[brandReducer.brandName]){
                const brandWhatToCompare = groupingFilterReducer.groupingFilters[brandReducer.brandName]
                setGroupingFilterDropDown(brandWhatToCompare)
            }
            else if(groupingFilterReducer.groupingFilters 
                && !groupingFilterReducer.groupingFilters[brandReducer.brandName] 
                && !groupingFilterReducer.loading){
                dispatch(fetchGroupingFilter(brandReducer.brandName))
            }
        }else{
            
        }
    }, [brandReducer, groupingFilterReducer]);

    React.useEffect(() => {
        if(brandReducer.brandName){ 
            if(selectedFilterReducer.selectedFilters 
                && !!selectedFilterReducer.selectedFilters[brandReducer.brandName]){
                const brandSelectedFilterItems = selectedFilterReducer.selectedFilters[brandReducer.brandName]
                setSelectedFilterItems(brandSelectedFilterItems)
            }
        }
    }, [brandReducer, selectedFilterReducer]);

    const addFilter=()=>{  
        if(whatToCompareDropDown?.selectedOption && groupingFilterDropDown?.selectedOption && comparisonOperatorDropDown?.selectedOption ){
            const data = {
                whatToCompare : whatToCompareDropDown?.selectedOption,
                groupingFilter: groupingFilterDropDown?.selectedOption,
                comparisonOperator : comparisonOperatorDropDown?.selectedOption,
                compareTo: compareToValue
            }
            console.log("selectedFilter",data)
            dispatch(addSelectedFilter({brandValue :brandReducer.brandName, data}))    
        }

    }

    const removeFilter=(index)=>{
        dispatch(removeSelectedFilter({brandValue :brandReducer.brandName, index}))
    }

    // console.log("filterReducer:",filterReducer)
    // console.log("comparisonOperatorReducer:",comparisonOperatorReducer)
    // console.log("whatToCompareReducer:",whatToCompareReducer)
    // console.log("selectedFilterReducer:",selectedFilterReducer)
    // console.log("groupingFilterReducer:",groupingFilterReducer)
    console.log("selectedFilterItems:",selectedFilterItems)
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
                            <NavDropdown title={whatToCompareDropDown?.selectedOption?whatToCompareDropDown.selectedOption.Description:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                                {whatToCompareDropDown && whatToCompareDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.DIVISION} onClick={()=>{
                                    dispatch(setSelectedWhatToComapre({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.Description}</NavDropdown.Item>
                                ))
                            }
                            </NavDropdown>
                        </th>
                        <th>
                            <NavDropdown title={comparisonOperatorDropDown?.selectedOption?comparisonOperatorDropDown.selectedOption.operator:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                                {(comparisonOperatorDropDown && comparisonOperatorDropDown.data) && comparisonOperatorDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.id} onClick={()=>{
                                    dispatch(setSelectedComparisonOperator({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.operator}</NavDropdown.Item>
                                ))
                            }
                            </NavDropdown>
                        </th>
                        <th>
                            <Form.Control type="text" placeholder="Compare to" value={compareToValue} onChange={(e)=>{setCompareToValue(e.target.value)}}/>
                        </th>
                        <th>
                            <NavDropdown title={groupingFilterDropDown?.selectedOption?groupingFilterDropDown.selectedOption.groupingOperator:'Select a option'} className="header-dropdown filter-division" id="basic-nav-dropdown">
                                {groupingFilterDropDown && groupingFilterDropDown.data.map(ele=>(
                                <NavDropdown.Item key={ele.id} onClick={()=>{
                                    dispatch(setSelectedGroupingFilter({brandName: brandReducer.brandName, selectedOption : ele}))
                                }} >
                                {ele.groupingOperator}</NavDropdown.Item>
                                ))
                            }
                            </NavDropdown>
                        </th>
                        <th>
                            <Button onClick={addFilter}>Add</Button>
                        </th>
                    </tr>
                </tbody>
            </Table>
            <h5>
                <Badge bg="secondary">Selected Filter Item(s)</Badge>
            </h5>
            <Table responsive="lg">
                <thead>
                    <tr>
                        <th>What to Compare</th>
                        <th>Comparision</th>
                        <th>Compare to</th>
                        <th>Grouping</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedFilterItems && selectedFilterItems.map((ele, index)=>(
                        <tr key={index}>
                            <td>{ele.whatToCompare.DIVISION}</td>
                            <td>{ele.comparisonOperator.operator}</td>
                            <td>{ele.compareTo}</td>
                            <td>{ele.groupingFilter.groupingOperator}</td>
                            <td><Button variant="danger" onClick={()=>{removeFilter(index)}}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            <SpinLoader loading={filterReducer.loading} />
        </div>
    )
}

export default CreateNewFilter
