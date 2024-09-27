import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import profile from '../../assets/WhatsApp Image 2024-09-25 at 1.47.08 PM (2).jpeg';
import profile2 from '../../assets/WhatsApp Image 2024-09-25 at 1.47.08 PM (1).jpeg';
import Profile3 from "../../assets/WhatsApp Image 2024-09-25 at 1.47.08 PM.jpeg";
import Profile4 from "../../assets/WhatsApp Image 2024-09-25 at 1.47.07 PM.jpeg";


const Testimonials = () => {
    return (
        <div className="container-xxl py-5">
            <Container className="py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text text-uppercase">Testimonials</h6>
                    <h1 className="mb-5">What Our Clients Say</h1>
                </div>
                <Row className="g-4">
                    <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
                        <div className="testimonial-item p-4 text-center">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid rounded-circle" src={profile} alt="Client 1" />
                            </div>
                            <FaQuoteLeft className="quote-icon" />
                            <p className="mb-4">"The service was exceptional! I can't recommend them enough."</p>
                            <FaQuoteRight className="quote-icon" />
                            <h5 className="mb-0">tina smith</h5>
                           
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
                        <div className="testimonial-item p-4 text-center">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid rounded-circle" src={profile2} alt="Client 2" />
                            </div>
                            <FaQuoteLeft className="quote-icon" />
                            <p className="mb-4">"Absolutely fantastic experience! Highly recommend!"</p>
                            <FaQuoteRight className="quote-icon" />
                            <h5 className="mb-0">statcy west</h5>
                        
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
                        <div className="testimonial-item p-4 text-center">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid rounded-circle" src={Profile4} alt="Client 3" />
                            </div>
                            <FaQuoteLeft className="quote-icon" />
                            <p className="mb-4">"Professional and dedicated team. Truly impressed!"</p>
                            <FaQuoteRight className="quote-icon" />
                            <h5 className="mb-0">lotia travis</h5>
                        
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.9s">
                        <div className="testimonial-item p-4 text-center">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid rounded-circle" src={Profile3} alt="Client 4" />
                            </div>
                            <FaQuoteLeft className="quote-icon" />
                            <p className="mb-4">"They went above and beyond! A great partnership."</p>
                            <FaQuoteRight className="quote-icon" />
                            <h5 className="mb-0">willams a west</h5>
                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Testimonials;
