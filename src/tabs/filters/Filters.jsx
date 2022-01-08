import React from 'react'
import {Badge} from 'react-bootstrap'
import FetchDataXls from '../../pages/FetchDataXls'

const Filters = () => {
    return (
        <div>
            <Badge bg="light" text="dark">
                Filters
            </Badge>
            <FetchDataXls/>
        </div>
    )
}

export default Filters
