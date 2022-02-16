import React, {useState, useEffect} from 'react'
import { Button, Card, Form, ListGroup, NavDropdown, Table } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import ModalPopup from '../../components/ModalPopup'
import {fetchSimulationList, setSelectedSimulation} from './../../redux/admin/ApproveSimulationReducer'

const ApproveSimulation = () => {
    const [simulationApprovalData, setSimulationApprovalData] = useState(undefined)
    const [errorPopup, setErrorPopup] = useState(false)
    const [selectedSimulation, setSelectedSimulation] = useState(undefined)
    const dispatch = useDispatch();
    const brandReducer = useSelector(state=>state.brandReducer)
    const simulationApprovalReducer = useSelector(state=>state.simulationApprovalReducer)
    useEffect(() => {
      if(brandReducer.brandValue){
          if(simulationApprovalReducer.simulationApproval 
            && simulationApprovalReducer.simulationApproval[brandReducer.brandValue] ){
                const brandSimulationApprovalData = simulationApprovalReducer.simulationApproval[brandReducer.brandValue]
                setSimulationApprovalData(brandSimulationApprovalData)
          }else if(! (simulationApprovalReducer.simulationApproval[brandReducer.brandValue])
            && simulationApprovalReducer.error
            ){
                setErrorPopup(true);
          }else if(! (simulationApprovalReducer.simulationApproval[brandReducer.brandValue])
             && !simulationApprovalReducer.loading
            ){
                dispatch(fetchSimulationList(brandReducer.brandValue))
          }
        }   
      
    }, [brandReducer, simulationApprovalReducer])
    
    const selectSimulationRow = (simulationElement)=>{
        setSelectedSimulation(simulationElement);
    }
    
    console.log("simulationApprovalData", simulationApprovalData)
  return (
    <div>
        {selectedSimulation && <>
            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <ListGroup variant="">
                        <ListGroup.Item className='list-text list-heading'>Simulation ID: </ListGroup.Item>
                        <ListGroup.Item className='list-text list-heading'>Description: </ListGroup.Item>
                        <ListGroup.Item className='list-text list-heading'>Status: </ListGroup.Item>
                        <ListGroup.Item className='list-text list-heading'>Owner: </ListGroup.Item>
                        <ListGroup.Item className='list-text list-heading'>Type: </ListGroup.Item>
                        <ListGroup.Item className='list-text list-heading'>Buyer: </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="">
                        <ListGroup.Item className='list-text '>{selectedSimulation.simulationId} </ListGroup.Item>
                        <ListGroup.Item className='list-text '>{selectedSimulation.description}</ListGroup.Item>
                        <ListGroup.Item className='list-text '>{selectedSimulation.status}</ListGroup.Item>
                        <ListGroup.Item className='list-text '>{selectedSimulation.owner}</ListGroup.Item>
                        <ListGroup.Item className='list-text '>{selectedSimulation.type} </ListGroup.Item>
                        <ListGroup.Item className='list-text '>{selectedSimulation.buyer}</ListGroup.Item>
                    </ListGroup>
                </div>
                <div className='d-flex px-2'>
                    <ListGroup variant="" className='px-2'>
                        <ListGroup.Item className='list-text list-heading p-3'>
                            Start Date: <Form.Control type="date" className='new-price-textbox'/> 
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item className='list-text list-heading p-3'>
                            Notes: <Form.Control type="textarea" className='new-price-textbox'/> 
                        </ListGroup.Item>                        
                    </ListGroup>
                
                    <ListGroup variant="" className='px-2'>
                        <ListGroup.Item className='list-text list-heading px-2'>
                            <Button variant="primary" size="sm" className='new-price-button'>
                                Approve
                            </Button>
                        </ListGroup.Item>                        
                        <ListGroup.Item className='list-text list-heading px-2'>
                            <Button variant="primary" size="sm" className='new-price-button'>
                                Unlock
                            </Button>
                        </ListGroup.Item>                        
                        <ListGroup.Item className='list-text list-heading px-2'>
                            <Button variant="primary" size="sm" className='new-price-button'>
                                Print
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <Card className=''>
                
            </Card>
        </>}
        <Table className='table-font-small'>    
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Simulation ID</th>
                    <th>Description</th>
                    <th>Owner</th>
                    <th>Buyer</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Submitted Date</th>
                    <th>Approved Date</th>
                    <th>Approved By</th>
                    <th>Processed</th>
                    <th>PC Auth</th>
                </tr>
            </thead>
            <tbody>
                {
                    (simulationApprovalData && simulationApprovalData.data) 
                        && simulationApprovalData.data.map(ele=>(
                            <tr key={ele.id} className="simulation-ele {active}" 
                                onClick={()=>selectSimulationRow(ele)}>
                                <td>{ele.type}</td>
                                <td>{ele.simulationId}</td>
                                <td>{ele.description}</td>
                                <td>{ele.owner}</td>
                                <td>{ele.buyer}</td>
                                <td>{ele.startDate}</td>
                                <td>{ele.endDate}</td>
                                <td>{ele.status}</td>
                                <td>{ele.submittedDate}</td>
                                <td>{ele.approvedDate}</td>
                                <td>{ele.approvedBy}</td>
                                <td>{ele.processed}</td>
                                <td>{ele.pcAuth}</td>
                            </tr>
                    ))
                }
                
            </tbody>
        </Table>
        
        <ModalPopup size="md" show={errorPopup}
                handleClose={()=>{setErrorPopup(false)}}

            >
                <>Error Occured</>
        </ModalPopup>
    </div>

  )
}

export default ApproveSimulation