import React from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap'

const ModalPopup = ({show, handleClose, handlePrimary, modalTitleText, modalBodyText, primaryButtonText, processing}) => {
    return (
        <>
          <Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered>
            <Modal.Header >
                <Modal.Title>{modalTitleText}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex align-items-center">
                {!processing && modalBodyText}
                {processing && <><Spinner animation="grow" size="lg"/>Processing</>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handlePrimary}>{primaryButtonText}</Button>
            </Modal.Footer>
          </Modal>  
        </>
    )
}

export default ModalPopup
