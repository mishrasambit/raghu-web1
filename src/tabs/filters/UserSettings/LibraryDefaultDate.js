import React from 'react'
import { Button, Form } from 'react-bootstrap'

const LibraryDefaultDate = () => {
  return (
    <div className='d-flex flex-column p-3 font-size-12'>
      <p>Show only simulations that have been modified after this date.
        Filter and simulations that have not been modified since this date will be hidden.
      </p>
      <div className='d-flex justify-content-around'>
        <Form.Control type="date" className='input-box-small'/> 
        <Button variant="primary" size="sm" className='new-price-button'>OK</Button>
      </div>
    </div>
  )
}

export default LibraryDefaultDate