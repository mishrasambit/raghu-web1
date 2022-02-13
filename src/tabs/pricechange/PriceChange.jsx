import React from 'react'
import {Badge} from 'react-bootstrap'
import SimulationPopup from './SimulationPopup'

const PriceChange = () => {
    return (
        <div>
            <Badge bg="light" text="dark">
                Price Change
            </Badge>
            <SimulationPopup></SimulationPopup>
        </div>
    )
}

export default PriceChange
