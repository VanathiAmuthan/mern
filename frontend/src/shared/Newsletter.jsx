import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/cath.jpg'

const NewsLetter = () => {
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     <h2>Subcribe now to get useful traveling information</h2>

                     <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subcribe</button>
                     </div>
                     <p>Experience unparalleled service and attention to detail with our expertly crafted solutions. 
                        Let us cater to your needs with precision and care.
                     </p>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default NewsLetter