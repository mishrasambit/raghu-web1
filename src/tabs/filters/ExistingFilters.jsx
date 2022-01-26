import React from 'react'
import { Table, Form } from 'react-bootstrap'

const ExistingFilters = () => {
    return (
        
        <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px'}}>
            <div style={{ display: 'flex', justifyContent: 'left', gap: '10px'}}>
                <div>Name 
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
                <div>Filters last modified
                    <Form.Control type="text" placeholder="MM/DD/YYYY" />
                </div>
                <div>Proxy
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
            </div>
            <Table responsive="lg">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Buyer</th>
                        <th>Owner</th>
                        <th>Create</th>
                        <th>Last Modified</th>
                        <th>Classes</th>
                        <th>Division</th>
                        <th>Schedule</th>
                        <th>Class Card</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ExistingFilters
