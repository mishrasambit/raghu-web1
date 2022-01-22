import React from 'react'
import { Modal, Spinner } from 'react-bootstrap'

const SpinLoader = ({loading}) => {
    return (
        <Modal show={loading} className="d-flex flex-column align-items-center"
            backdrop="static"
            keyboard={false}
            centered>
            <Spinner animation="grow" size="lg"/>
        </Modal>
    )
}

export default SpinLoader
