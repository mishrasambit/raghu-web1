import React from 'react'
import { Button, Card, Form, ListGroup, NavDropdown, Table } from 'react-bootstrap'

const SimulationPopup = () => {
  return (
    <div className='container'>
        <div className='simulation-popup-header'>
            <div className='left-info'>
                <Card className=''>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='list-text'>MDS: </ListGroup.Item>
                        <ListGroup.Item className='list-text'>Simulation: </ListGroup.Item>
                        <ListGroup.Item className='list-text'>Description: </ListGroup.Item>
                        <ListGroup.Item className='list-text'>Buyer: </ListGroup.Item>
                        <ListGroup.Item className='list-text'>Filter: </ListGroup.Item>
                        <ListGroup.Item className='list-text'>Effective: </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className=''>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='list-text'>Permanent Markdown Stop</ListGroup.Item>
                        <ListGroup.Item className='list-text'>AMF33.220107</ListGroup.Item>
                        <ListGroup.Item className='list-text'>MD STOP SHOES</ListGroup.Item>
                        <ListGroup.Item className='list-text'>AMF33</ListGroup.Item>
                        <ListGroup.Item className='list-text'>MD Stop 1.7 CSV</ListGroup.Item>
                        <ListGroup.Item className='list-text'>00/00/00 to 1/7/2022</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div className='center-info'>
                <Card className=''>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='list-text' active>Method: </ListGroup.Item>
                        <ListGroup.Item className='list-text'><Form.Check type={"radio"} name="method-radio" id='price-point-radio' label={'Price Point'} /></ListGroup.Item>
                        <ListGroup.Item className='list-text'><Form.Check type={"radio"} name="method-radio" id='percentage-radio' label={'Percentage'} /></ListGroup.Item>
                        <ListGroup.Item className='list-text'><Form.Check type={"radio"} name="method-radio" id='dollar-off-radio' label={'Dollar Off'} /></ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className=''>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='list-text' active>Calculation:</ListGroup.Item>
                        <ListGroup.Item className='list-text'><Form.Check type={"radio"} name="calculation-radio" id='calc-radio1' label={'% on Cur Tkt Price'} /></ListGroup.Item>
                        <ListGroup.Item className='list-text'><Form.Check type={"radio"} name="calculation-radio" id='calc-radio2' label={'% on CDF Retail'} /></ListGroup.Item>
                        <ListGroup.Item className='list-text'><Form.Check type={"radio"} name="calculation-radio" id='calc-radio3' label={'% on Perm Retail'} /></ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className=''>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='list-text' active>New Price / Pct:</ListGroup.Item>
                        <ListGroup.Item className='list-text list-content'>
                            <Form.Control type="text" placeholder="New Price" className='new-price-textbox'/> 
                            <div className='newprice-buttons'>
                                <Button variant="secondary" size="sm" className='new-price-button'>Update</Button>
                                <Button variant="secondary" size="sm" className='new-price-button'>Undo</Button>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='list-text'>Liability Amt: </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div className='right-info'>
                <Card className=''>
                    <ListGroup horizontal>
                        <ListGroup.Item className='list-text item-input tool-button'>
                        <Button variant="secondary" size="sm" className='font-size-12'>Print PDF</Button>
                        <Button variant="secondary" size="sm" className='font-size-12'>Submit for Approval</Button>
                        <Button variant="secondary" size="sm" className='font-size-12'>Help</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className='filter-group'>
                    <ListGroup horizontal>
                        <ListGroup.Item className='list-text item-input tool-button'>Filter:
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item className='list-text item-input'>
                            Perm Retl Ending &nbsp; 
                            <NavDropdown
                            title="No .98 cent" className="simulation-filter-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">No .98 cent</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </ListGroup.Item>
                        <ListGroup.Item className='list-text item-input'>Last MD = <Form.Control type="text" placeholder="New Price" className='filter-selection'/> </ListGroup.Item>
                        <ListGroup.Item className='list-text item-input'>Cur Tkt Price = <Form.Control type="text" placeholder="New Price" className='filter-selection'/> </ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <ListGroup.Item className='list-text item-input'>OHU {">"} <Form.Control type="text" placeholder="New Price" className='filter-selection'/> </ListGroup.Item>
                        <ListGroup.Item className='list-text item-input'>MD CT = <Form.Control type="text" placeholder="New Price" className='filter-selection'/> </ListGroup.Item>
                        <ListGroup.Item className='list-text item-input'>Color = <Form.Control type="text" placeholder="New Price" className='filter-selection'/> </ListGroup.Item>
                    </ListGroup>
                </Card>

            </div>
        </div>
        <div className='simulation-table-list'>
            <Table  bordered hover responsive>
                <thead>
                    <tr>
                        <th>checkbox</th>
                        <th>Grp</th>
                        <th>Class</th>
                        <th>Class Desc</th>
                        <th>Vndr Style</th>
                        <th>Vndr</th>
                        <th>Vndr Name</th>
                        <th>Clr</th>
                        <th>Clr Desc</th>
                        <th>Lst Rect</th>
                        <th>Avg Cost</th>
                        <th>CDF</th>
                        <th>Perm Retail</th>
                        <th>Cur Tkt Price</th>
                        <th>Temp Retail</th>
                        <th>Last MD</th>
                        <th>MD Cnt</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>422</td>
                        <td>44CY</td>
                        <td>TALARICO CAP...</td>
                        <td>25321-001</td>
                        <td>7198</td>
                        <td>STACY AD...</td>
                        <td>40</td>
                        <td>NAVY</td>
                        <td>09/08/20</td>
                        <td>33.00</td>
                        <td>59.99</td>
                        <td>39.99</td>
                        <td>39.99</td>
                        <td></td>
                        <td>07/06/21</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default SimulationPopup