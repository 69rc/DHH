import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaSeedling, FaUsers, FaMoneyBillWave, FaHandHoldingHeart } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";
import './facts.css'; // Ensure to import your custom CSS file

const FactsSection = () => {
    return (
        <div className="container-xxl py-5">
            <Container className="py-5">
                <Row className="g-5">
                    <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="head3 text-uppercase mb-3 text-gold">Some Facts</h6>
                        <h1 className="mb-5 text-navy">Empowering Farmers with Grants</h1>
                        <p className="mb-5 text-dark">
                            At Agrant Solutions, we provide essential financial support and resources to farmers and agricultural entrepreneurs. Our commitment to fostering sustainable agriculture helps communities thrive, ensuring that every farmer has the tools they need to succeed.
                        </p>
                        <div className="d-flex align-items-center">
                            <div className='i'> 
                                <FaSeedling className="fa-3x flex-shrink-0 text-gold" />
                            </div>
                            <div className="ps-4 text-dark">
                                <h6>Contact us for support!</h6>
                                <h3 className="text-wanring m-0">dhhs09282@gmail.com</h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row className="g-4 align-items-center">
                            <Col sm={6}>
                                <Card className="bg-navy text-gold p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                                    <CardBody>
                                        <FaMoneyBillWave className="fa-2x mb-3" />
                                        <CardTitle tag="h2" className="mb-2" data-toggle="counter-up">200+</CardTitle>
                                        <CardText>Grants Approved</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="bg-gold text-dark p-4 wow fadeIn" data-wow-delay="0.5s">
                                    <CardBody>
                                        <FaHandHoldingHeart className="fa-2x mb-3" />
                                        <CardTitle tag="h2" className="mb-2" data-toggle="counter-up">300+</CardTitle>
                                        <CardText>Community Projects Funded</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="bg-navy text-gold p-4 wow fadeIn" data-wow-delay="0.7s">
                                    <CardBody>
                                        <FaUsers className="fa-2x mb-3" />
                                        <CardTitle tag="h2" className="mb-2" data-toggle="counter-up">1500+</CardTitle>
                                        <CardText>Farmers Supported</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FactsSection;
