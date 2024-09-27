import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button,CardImg } from 'reactstrap';
import { FaArrowRight } from 'react-icons/fa';  

import './services.css'; 

const hhsInfo = [
    {
        title: "Leadership",
        text: "The Department's leaders are public servants committed to your health and well-being."
    },
    {
        title: "Budget & Performance",
        text: "The HHS financial report provides fiscal and high-level performance results."
    },
    {
        title: "News",
        text: "The HHS newsroom is a gateway to the Department's latest news releases and press office information."
    },
    {
        title: "Careers",
        text: "HHS offers you a rewarding career working with the latest in health research, care, and technologies to improve the quality of life of millions."
    },
    {
        title: "I Am HHS",
        text: "A multi-part video series featuring HHS employees’ stories of their journey, passion, and experiences working for the Department."
    },
    {
        title: "Strategic Plan",
        text: "Every four years, HHS updates our Strategic Plan, which describes our work to address current health and human services issues."
    },
    {
        title: "HHS Guidance Portal",
        text: "A searchable database for HHS guidance documents currently in effect."
    },
    {
        title: "HHS Historical Highlights",
        text: "Major events in HHS history and a list of its Secretaries."
    },
    {
        title: "FOIA",
        text: "The Freedom of Information Act/Privacy Acts Division handles FOIA and Privacy Act issues and requests."
    },
    {
        title: "HHS Sustainability",
        text: "Outlines its path toward sustainable operation and efficiency."
    },
    {
        title: "Open Government at HHS",
        text: "HHS's open government plan, reports, and initiatives help the public hold the government accountable."
    },
    {
        title: "DEIA Program",
        text: "The Equal Employment Opportunity, Diversity & Inclusion Office promotes a culture of equality, fairness, and objectivity throughout HHS."
    },
];

const ServicesSection = () => {
    return (
        <div className="container-xxl py-5">
            <Container className="py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text text-uppercase">Our Services</h6>
                    <h1 className="mb-5">Explore Our Services</h1>
                </div>
                <Row className="g-4">
                    {/* Existing service cards */}
                    {/* <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.3s">
                        <Card className="service-item p-4">
                            <CardImg top className="img-fluid" src={services1} alt="Air Freight" />
                            <CardBody>
                                <CardTitle tag="h4" className="mb-3">Air Freight</CardTitle>
                                <CardText>Our air freight services ensure quick and reliable delivery for your urgent shipments.</CardText>
                                <Button className="btn-slide mt-2 btns d-flex align-items-center" href="">
                                    <FaArrowRight className="arrow-icon" /> <span className="read-more-text">Read More</span>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col> */}
                    {/* Additional service cards... */}

                    {/* New HHS Section Cards */}
                    {hhsInfo.map((item, index) => (
                        <Col md={6} lg={4} className="wow fadeInUp" key={index} data-wow-delay={`${0.1 + index * 0.2}s`}>
                            <Card className="service-item p-4">
                                <CardBody>
                                    <CardTitle tag="h4" className="mb-3">{item.title}</CardTitle>
                                    <CardText>{item.text}</CardText>
                                    {/* <Button className="btn-slide mt-2 btns d-flex align-items-center" href="">
                                        <FaArrowRight className="arrow-icon" /> <span className="read-more-text">Read More</span>
                                    </Button> */}
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ServicesSection;
