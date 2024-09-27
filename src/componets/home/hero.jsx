import React from 'react'
import {Row,Container,Button,Col,} from 'reactstrap'
import './home.css'
import About from '../about/about'
import Service from '../services/services'
import Features from '../features/features'
import Teem from '../teem/teem'
import Contact from "../contact/contact"
function Home() {
  return (
    <>
    <div className='home'>
    <section className="hero">
      <Container className="hero-content">
        <Row className="">
          <Col>
            <h1 className='head'>Order Your 4 Free At-⁠Home  <span className='span'>COVID-⁠19 Tests  </span></h1>
            <p className='head2 text-white'> Every U.S. household is eligible to order 4 free at-⁠home tests.

.</p>
<p className='head2 text-white'>COVID-19 testing can help you know if you have COVID-19 so you can decide what to do next, like getting treatment to reduce your risk of severe illness and taking steps to lower your chances of spreading the virus to others.

Your order of COVID tests is completely free – you won’t even pay for shipping. Orders can take at least a week to arrive.</p>
            <Button className='btns'  >
            Apply for a Grant Using Workspace
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
    
    </div>
    <About/>
    <Service/>
    <Features/>
    <Teem />
    <Contact/>
    </>
  )
}

export default Home