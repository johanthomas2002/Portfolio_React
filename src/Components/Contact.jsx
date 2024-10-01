import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'



function Contact() {
  return (
    <div className=' contact bg-dark pt-5'>
      <h2 className='text-center text-light mt-5'>CONTACT</h2>
      <h4 className='text-center text-light mt-4'><i>Feel free to Contact me by submitting the form below and I will get back to you as soon as<br/> 
      possible</i></h4>

      <Container className='w-50 mt-5'>

        <Form.Control size="lg" type="text" placeholder="Enter your name" className='bg-secondary text-light' />
        <Form.Control size="lg" type="email" placeholder="Enter your E-mail" className='bg-secondary text-light mt-5'/>
        <Form.Control as="textarea" rows={5}  className='bg-secondary text-light mt-5' placeholder='Enter your Message'/>

        <div className='button text-center'>
            <Button className='w-50 mb-5 mt-5'>Submit</Button>
        </div>

      </Container>
    </div>
   
  )
}

export default Contact
