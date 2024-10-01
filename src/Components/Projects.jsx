import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './style.css'


function Projects() {
  return (
    <div className='projects pt-5 bg-dark'>
      <h2 className='text-center text-light mt-5'>PROJECTS</h2>
      <h4 className='text-center text-light mt-4'><i>Here you will find some of the personal projects that I created with<br/> 
      each project containing its own case study</i></h4>

      <Container className='mt-5'>
        <Row>
            <Col>
                <Card style={{ width: '18rem' , height:'400px' }} className='bg-dark text-light'>
                    <Card.Img variant="top" src="/images/budget_calculator.png" style={{height:'180px'}} />
                    <Card.Body>
                        <Card.Title><u>Simple Budget Calculator </u></Card.Title>
                        <Card.Text>
                        This budget calculator helps you easily track your income and expenses, providing a 
                        clear overview of your financial health to help you make informed and responsible 
                        decisions.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem', height:'400px' }} className='bg-dark text-light'>
                    <Card.Img variant="top" src="/images/bank.png" style={{height:'180px'}} />
                    <Card.Body>
                        <Card.Title><u>Sample Bank Site</u></Card.Title>
                        <Card.Text>
                        This sample bank site offers a user-friendly interface for managing accounts, 
                        viewing transactions, and accessing essential banking services, ensuring a secure
                        and seamless banking experience.
                        </Card.Text>
                    </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem', height:'400px' }} className='bg-dark text-light'>
                    <Card.Img variant="top" src="/images/BMI.png" style={{height:'180px'}} />
                    <Card.Body>
                        <Card.Title><u>BMI Calculator</u></Card.Title>
                        <Card.Text>
                        This BMI calculator provides a quick and easy way to assess your body mass index, 
                        helping you track your health and fitness goals with accurate results.
                        </Card.Text>
                    </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem', height:'400px' }} className='bg-dark text-light'>
                    <Card.Img variant="top" src="/images/razer.png" style={{height:'180px'}} />
                    <Card.Body>
                        <Card.Title><u>Razer Clone</u></Card.Title>
                        <Card.Text>
                        Designed a responsive Razer website clone, focusing on replicating its sleek,
                         modern aesthetic for an optimal user experience.
                        </Card.Text>
                    </Card.Body>
            </Card>
            </Col>

            <Col className='mt-5'>
            <Card style={{ width: '18rem', height:'400px' }} className='bg-dark text-light'>
                    <Card.Img variant="top" src="/images/coffee.png" style={{height:'180px'}} />
                    <Card.Body>
                        <Card.Title><u>Brew Beans Co Clone</u></Card.Title>
                        <Card.Text>
                        Designed a Brew Beans Co website clone, focusing on creating a clean and visually appealing
                         interface for an enhanced user experience.
                        </Card.Text>
                    </Card.Body>
            </Card>
            </Col>

            <Col className='mt-5'>
            <Card style={{ width: '18rem', height:'400px' }} className='bg-dark text-light'>
                    <Card.Img variant="top" src="/images/media.png" style={{height:'180px'}} />
                    <Card.Body>
                        <Card.Title><u>Media Player</u></Card.Title>
                        <Card.Text>
                        Developed a custom media player, focusing on intuitive controls and seamless playback,
                        delivering a smooth and user-friendly media experience.
                        </Card.Text>
                    </Card.Body>
            </Card>
            </Col>

            <Col className='mt-5'>
            <Card style={{ width: '18rem', height:'400px' }} className='bg-dark text-light'>
                    <Card.Img variant="top" src="/images/compass.png" style={{height:'180px'}} />
                    <Card.Body>
                        <Card.Title><u>Against Compass Clone</u></Card.Title>
                        <Card.Text>
                        Designed a clone of the Against Compass website, focusing on crafting a visually
                        engaging and user-friendly interface to mirror the original site's style.
                        </Card.Text>
                    </Card.Body>
            </Card>
            </Col>

            <Col className='mt-5'>
            <Card style={{ width: '18rem', height:'400px' }} className='bg-dark text-light'>
                    <Card.Img variant="top" src="/images/dis.png" style={{height:'180px'}} />
                    <Card.Body>
                        <Card.Title><u>Discount Calculator</u></Card.Title>
                        <Card.Text>
                        Developed a discount calculator, allowing users to quickly and accurately calculate
                         price reductions with a simple and user-friendly interface.
                        </Card.Text>
                    </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
