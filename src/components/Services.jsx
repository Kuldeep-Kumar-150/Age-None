import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from "react-bootstrap/Accordion";
import accordionImage from '../assets/img/png/accordion-image.png'


const Services = () => {
    return (
        <section className="py-5 overflow-hidden" id='service'>
            <Container>
                <h2 className='fs_3xl fw-bold text-center mb-5'>The Services We Offer <span className='text_green'>For You</span></h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className='py-2 py-sm-3 bg_lightgrey pe-sm-4 border_r_20 pe-lg-5'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_32 fw-semibold px-3 px-sm-4 px-xl-5 me-xl-2 mb-0 mb-md-2'>01</p>
                                <p className='fs_32 fw-semibold mb-0 mb-md-2'>UI/UX Design</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="ps-sm-5 ms-md-2 ps-3">
                            <p className='ps-4 ps-md-3 ms-2 ms-sm-4 ms-xl-5 ps-xl-5 fs_md fe-normal text_grey mb-3 mb-md-4'>Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu. Ultricies nisl enim lacus id aliquam montes euismod urna sem.</p>
                            <img className='ps-4 ps-md-3 ms-2 ms-sm-4 ms-xl-5 ps-xl-5 w-100 pe-xl-5' src={accordionImage} alt="accordionImage" />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='mt-4 py-2 py-sm-3 bg_lightgrey pe-sm-4 border_r_20 pe-lg-5'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_32 fw-semibold px-3 px-sm-4 px-xl-5 me-xl-2 mb-0 mb-md-2'>02</p>
                                <p className='fs_32 fw-semibold mb-0 mb-md-2'>Digital Marketing</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="ps-sm-5 ms-md-2 ps-3">
                            <p className='ps-4 ps-md-3 ms-2 ms-sm-4 ms-xl-5 ps-xl-5 fs_md fe-normal text_grey mb-3 mb-md-4'>Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu. Ultricies nisl enim lacus id aliquam montes euismod urna sem.</p>
                            <img className='ps-4 ps-md-3 ms-2 ms-sm-4 ms-xl-5 ps-xl-5 w-100 pe-xl-5' src={accordionImage} alt="accordionImage" />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='mt-4 py-2 py-sm-3 bg_lightgrey pe-sm-4 border_r_20 pe-lg-5'>
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_32 fw-semibold px-3 px-sm-4 px-xl-5 me-xl-2 mb-0 mb-md-2'>03</p>
                                <p className='fs_32 fw-semibold mb-0 mb-md-2'>Social Media Management</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="ps-sm-5 ms-md-2 ps-3">
                            <p className='ps-4 ps-md-3 ms-2 ms-sm-4 ms-xl-5 ps-xl-5 fs_md fe-normal text_grey mb-3 mb-md-4'>Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu. Ultricies nisl enim lacus id aliquam montes euismod urna sem.</p>
                            <img className='ps-4 ps-md-3 ms-2 ms-sm-4 ms-xl-5 ps-xl-5 w-100 pe-xl-5' src={accordionImage} alt="accordionImage" />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='mt-4 py-2 py-sm-3 bg_lightgrey pe-sm-4 border_r_20 pe-lg-5' data-aos="fade-left">
                        <Accordion.Header className="ps-sm-3">
                            <div className="d-flex align-items-center">
                                <p className='fs_32 fw-semibold px-3 px-sm-4 px-xl-5 me-xl-2 mb-0 mb-md-2'>04</p>
                                <p className='fs_32 fw-semibold mb-0 mb-md-2'>Development</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="ps-sm-5 ms-md-2 ps-3">
                            <p className='ps-4 ps-md-3 ms-2 ms-sm-4 ms-xl-5 ps-xl-5 fs_md fe-normal text_grey mb-3 mb-md-4'>Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu. Ultricies nisl enim lacus id aliquam montes euismod urna sem.</p>
                            <img className='ps-4 ps-md-3 ms-2 ms-sm-4 ms-xl-5 ps-xl-5 w-100 pe-xl-5' src={accordionImage} alt="accordionImage" />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    )
}

export default Services