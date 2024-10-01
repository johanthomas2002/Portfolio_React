import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <MDBFooter className='text-white'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase fs-4'>JOHAN THOMAS</h5>

            <p className='fs-5'>
            Crafted with passion, creativity, and precision, this portfolio showcases my 
            journey in web development, blending innovative design with a commitment to 
            delivering user-friendly and impactful digital experiences.
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 fs-4'>Links</h5>

            <ul className='list-unstyled fs-5'>
              <li>
                <h6 className='fs-4 mt-4'>
                  <Link to={"/"} style={{textDecoration:"none" , color:"white"}}>Home</Link>
                </h6>
              </li>
              <li>
              <h6 className='text-white fs-4'>
                  <Link to={"/about"} style={{textDecoration:"none" , color:"white"}}>About</Link>
                </h6>
              </li>
              <li>
              <h6 className='text-white fs-4'>
                  <Link to={"/projects"} style={{textDecoration:"none" , color:"white"}}>Projects</Link>
                </h6>
              </li>
              <li>
              <h6 className='text-white fs-4'>
                  <Link to={"/contact"} style={{textDecoration:"none" , color:"white"}}>Contact</Link>
                </h6>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='' style={{textDecoration:"none"}}>
        Made by <u>Johan Thomas</u></a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
