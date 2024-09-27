import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaMoneyBill, FaBookOpen, FaUsers } from 'react-icons/fa'; // Changed icons to more relevant ones
// import featureImage from ''; // Update the image to reflect agriculture

const FeatureSection = () => {
    return (
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
            <Container className="feature py-5 px-lg-0">
                <Row className="g-5 mx-lg-0">
                    <Col lg={6} className="feature-text wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text text-uppercase mb-3 text-gold">Our Features</h6>
                        <h1 className="mb-5 text-navy">Supporting Agricultural Growth Since 1990</h1>
                        <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                            <FaMoneyBill className="text me-4 flex-shrink-0" size={48} />
                            <div>
                                <h5>Funding Opportunities</h5>
                                <p className="mb-0">We offer various funding programs to support agricultural projects and initiatives.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.5s">
                            <FaBookOpen className="text me-4 flex-shrink-0" size={48} />
                            <div>
                                <h5>Resources & Training</h5>
                                <p className="mb-0">Access our comprehensive resources and training programs to enhance your farming skills.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                            <FaUsers className="text me-4 flex-shrink-0" size={48} />
                            <div>
                                <h5>Community Engagement</h5>
                                <p className="mb-0">Join our community of farmers and grant recipients to share experiences and insights.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
                        <div className="position-relative h-100">
                            <img className="img-fluid w-100 h-100" src="" alt="Agriculture" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FeatureSection;
