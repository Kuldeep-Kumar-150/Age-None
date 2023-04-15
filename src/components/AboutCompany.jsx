import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AboutCompany = () => {
    return (
        <section className='about_company_bgimage py-4 py-sm-5'>
            <Container>
                <p className='mb-0 fs_2xl fw_medium text_dark'>We are passionate about helping businesses grow and succeed in the digital age. We pride in our work and strive to exceed your expectations every time.</p>
                <Row className="bg_green_linear py-4 py-md-5 my-4 my-md-5 justify-content-center">
                    <Col sm={6} lg={4} xl={3} className='text-center' data-aos="flip-left">
                        <p className='mb-0 fs_3xl fw-bold text-white'>10+</p>
                        <p className='mb-0 fs_2lg fw_medium text-white'>Years of Experiences</p>
                    </Col>
                    <Col sm={6} lg={4} xl={3} className='text-center mt-4 mt-sm-0' data-aos="flip-right">
                        <p className='mb-0 fs_3xl fw-bold text-white'>666+</p>
                        <p className='mb-0 fs_2lg fw_medium text-white'>Project Completed</p>
                    </Col>
                    <Col sm={6} lg={4} xl={3} className='text-center mt-4 mt-lg-0' data-aos="flip-left">
                        <p className='mb-0 fs_3xl fw-bold text-white'>555+</p>
                        <p className='mb-0 fs_2lg fw_medium text-white'>Satisfied Client</p>
                    </Col>
                    <Col sm={6} lg={4} xl={3} className='text-center mt-4 mt-xl-0' data-aos="flip-right">
                        <p className='mb-0 fs_3xl fw-bold text-white'>10+</p>
                        <p className='mb-0 fs_2lg fw_medium text-white'>Awards Achieved</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutCompany