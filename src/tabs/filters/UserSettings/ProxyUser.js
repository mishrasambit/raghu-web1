import React from 'react'
import { Button, Form } from 'react-bootstrap'

const ProxyUser = () => {
  return (
    <div className='d-flex flex-column p-3 font-size-12'>
      <p>
        Your proxy user have access to update and submit your simulations.
      </p>
      <p>
        Enter the short name of the user you would like to grant access to your simulations.
      </p>
      <div className='d-flex justify-content-around'>
        <Form.Control type="text" placeholder="proxy user" className='input-box-small'/> 
        <Button variant="primary" size="sm" className='popup-button'>No Proxy</Button>
        <Button variant="primary" size="sm" className='popup-button'>OK</Button>
      </div>
    </div>
  )
}

export default ProxyUser