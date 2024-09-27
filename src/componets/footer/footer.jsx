import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: '6rem', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
            <Container className="py-5">
                <Row className="g-5">
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Grant Address</h4>
                        <p className="mb-2"><FaMapMarkerAlt className="me-3" />HHS Headquarters
200 Independence Avenue, S.W.
Washington, D.C. 20201
Toll Free Call Center: 1-877-696-6775​</p>
                        
                        <p className="mb-2"><FaEnvelope className="me-3" />dhhs09282@gmail.com</p>
                        <div className="d-flex pt-2">
                            <Button className="btn-outline-light btn-social"><FaTwitter /></Button>
                            <Button className="btn-outline-light btn-social"><FaFacebookF /></Button>
                            <Button className="btn-outline-light btn-social"><FaYoutube /></Button>
                            <Button className="btn-outline-light btn-social"><FaLinkedinIn /></Button>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Grant Services</h4>
                        <Button className="btn-link">Grant Application</Button>
                        <Button className="btn-link">Grant Management</Button>
                        <Button className="btn-link">Grant Reporting</Button>
                        <Button className="btn-link">Grant Solutions</Button>
                        <Button className="btn-link">Grant Resources</Button>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Quick Grants</h4>
                        <Button className="btn-link">About Grants</Button>
                        <Button className="btn-link">Contact Grants</Button>
                        <Button className="btn-link">Our Grants</Button>
                        <Button className="btn-link">Terms & Grant Conditions</Button>
                        <Button className="btn-link">Grant Support</Button>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-light mb-4">Grant Information</h4>
                        <ul className="list-unstyled mb-4">
                            <li><Button className="btn-link">Grant Careers</Button></li>
                            <li><Button className="btn-link">Grant FAQs</Button></li>
                            <li><Button className="btn-link">Nondiscrimination Grant Notice</Button></li>
                            <li><Button className="btn-link">Grant Archive</Button></li>
                            <li><Button className="btn-link">Accessibility Grant Statement</Button></li>
                            <li><Button className="btn-link">Grant Privacy Policy</Button></li>
                            <li><Button className="btn-link">Viewers & Grant Players</Button></li>
                            <li><Button className="btn-link">Grant Budget/Performance</Button></li>
                            <li><Button className="btn-link">Grant Inspector General</Button></li>
                            <li><Button className="btn-link">Web Site Grant Disclaimers</Button></li>
                            <li><Button className="btn-link">EEO/No Grant Act</Button></li>
                            <li><Button className="btn-link">Grant FOIA</Button></li>
                            <li><Button className="btn-link">The Grant House</Button></li>
                            <li><Button className="btn-link">USA Grant.gov</Button></li>
                            <li><Button className="btn-link">Vulnerability Disclosure Grant Policy</Button></li>
                        </ul>
                        <h5>Sign Up for Grant Updates</h5>
                        <p>Receive the latest updates from Grant Secretary, Blogs, and Grant Releases.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <Button className="btn btns py-2 position-absolute top-0 end-0 mt-2 me-2">Sign Up</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="copyright">
                    <Row>
                        <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                            © <a className="border-bottom" href="#">Grant Tech</a>, All Rights Reserved.
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            {/* Additional attribution can be added here if needed */}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
