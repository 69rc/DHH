import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, NavLink, Button } from 'reactstrap';
import Aboutimg from '../../assets/pexels-fauxels-3183190.jpg'
import { CiGlobe } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import './about.css'
import Facts from './somefacts'


const AboutSection = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="container about py-5 px-lg-0 mt-5">
            <Container>
                <Row className="g-5 mx-lg-0">
                    <Col lg={6} className="ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="position-relative h-100">
                            <img className=" img-fluid w-100 h-100" src={Aboutimg} style={{ objectFit: 'cover' }} alt="" />
                        </div>
                    </Col>
                    <Col lg={6} className="about-text wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="text text-uppercase mb-3">About DHH
                        </h6>
                        <h1 className="mb-5">About the DHH Program Management Office
                        </h1>
                        <p className="mb-5">The mission of the U.S. Department of Health and Human Services (HHS) is to enhance the health and well-being of all Americans, by providing for effective health and human services and by fostering sound, sustained advances in the sciences underlying medicine, public health, and social services..

</p>
                 
                    </Col>
                </Row>
            </Container>
            <Facts/>
        </div>
    );
}

export default AboutSection;
