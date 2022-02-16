import React,{useState} from 'react'
import {Badge, Button} from 'react-bootstrap'
import ModalPopup from '../../components/ModalPopup'
import ApproveSimulation from './ApproveSimulation'

const Admin = () => {
    const [approveSimulationPopup, setApproveSimulationPopup] = useState(false)
    return (
        <div>
            <Badge bg="light" text="dark">
                Filters
            </Badge>
            <Button onClick={()=>{setApproveSimulationPopup(true)}}>
                    Open Approve Simulation
            </Button>
            <ModalPopup size="xl" show={approveSimulationPopup}
                handleClose={()=>{setApproveSimulationPopup(false)}}

            >
                <ApproveSimulation/>
            </ModalPopup>
        </div>
    )
}

export default Admin
