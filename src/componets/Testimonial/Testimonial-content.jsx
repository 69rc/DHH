import React from 'react';

const TestimonialItem = ({ imgSrc, clientName, profession, testimonialText }) => {
    return (
        <div className="testimonial-item p-4 my-5">
            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
            <div className="d-flex align-items-end mb-4">
                <img className="img-fluid flex-shrink-0" src={imgSrc} alt="Client" style={{ width: '80px', height: '80px' }} />
                <div className="ms-4">
                    <h5 className="mb-1">{clientName}</h5>
                    <p className="m-0">{profession}</p>
                </div>
            </div>
            <p className="mb-0">{testimonialText}</p>
        </div>
    );
}

export default TestimonialItem;
