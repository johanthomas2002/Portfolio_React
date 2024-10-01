import React from 'react'
import './style.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Intro() {
  return (
    <div className='intro bg-dark pt-3'>
      <h2 className='text-center text-light' style={{marginTop:"100px"}}>ABOUT ME</h2>
      <h4 className='text-center text-light mt-4'><i>Here you will find more information about me, what I do,<br/> 
        and my current skills mostly in terms of programming and technology</i></h4>
        

        <Container className='mt-5'>
        <Row>
            <Col className='ms-5' sm={6}>
                <h4 className='text-light fs-3 fw-bold'>Get to know me!</h4>
                <p className='fs-5 text-light'>Hello! I’m Johan Thomas a passionate and driven software developer with expertise in web development,
                programming, and technology. With a solid foundation in languages such as JavaScript, Python, and 
                React, I enjoy building user-friendly and dynamic applications. I’m always eager to learn new 
                technologies and improve my skill set. You can learn more about my professional journey and connect
                with me on LinkedIn.</p>

                <p className='fs-5 text-light'>In addition to my technical skills, I have a strong interest in problem-solving and enjoy tackling 
                challenges that require creative thinking and collaboration. Whether working on individual projects
                or within a team, I am dedicated to delivering high-quality solutions that make an impact. My 
                journey in tech has been fueled by curiosity and continuous learning, and I am excited to contribute
                my skills to exciting projects and further grow as a developer.</p>
                
            </Col>
            
            <Col className='ms-5'>
                <h4 className='text-light fs-3 fw-bold'>My Skills</h4>
                <div className='skills'>
                    <Button  className='bg-secondary text-light fs-5 me-3'>HTML</Button>
                    <Button  className='bg-secondary text-light fs-5 me-3'>CSS</Button>
                    <Button  className='bg-secondary text-light fs-5 me-3'>Bootstrap</Button>
                    <Button  className='bg-secondary text-light fs-5 me-3'>Javascript </Button><br/>
                    <Button  className='bg-secondary text-light fs-5 me-3 mt-3'>React </Button>
                    <Button  className='bg-secondary text-light fs-5 me-3 mt-3'>Angular</Button>
                    <Button  className='bg-secondary text-light fs-5 me-3 mt-3'>Git</Button>
                    <Button  className='bg-secondary text-light fs-5 me-3 mt-3'>Github</Button><br/>
                    <Button  className='bg-secondary text-light fs-5 me-3 mt-3'>SQL</Button>
                    <Button  className='bg-secondary text-light fs-5 me-3 mt-3'>Terminal</Button>
                    <Button  className='bg-secondary text-light fs-5 me-3 mt-3'>Responsive Design</Button>

                </div>
            </Col>
        </Row>
        </Container>    
    </div>


  )
}

export default Intro
