import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageLogo from '../assets/img/svg/pageLogo/Desktop/Shapes.svg'
import footerElipse1 from '../assets/img/svg/footer-elipse-1.svg'
import footerElipse2 from '../assets/img/svg/footer-elipse-2.svg'

const MyFooter = () => {
    return (
        <footer className='bg_darkblue position-relative' id='contactus'>
            <img className='footer_elipse_1 position-absolute' src={footerElipse1} alt="elipse" />
            <img className='footer_elipse_2 position-absolute' src={footerElipse2} alt="elipse" />
            <Container>
                <div className='w-100 d-sm-none d-lg-block'>
                    < hr />
                </div>
                <Row className='justify-content-between pt-5'>
                    <Col lg={4} className=' z_index_21' data-aos="zoom-in-down">
                        <a className='fs_2lg text-white fw-bold z_index_21' href="#"><img src={pageLogo} alt="pageLogo" />Agenone</a>
                        <p className='text_lightgrey fs_md fw-normal mt-4'>We're a team of experienced designers, developers, and marketers, passionate about delivering exceptional digital solutions.</p>
                        <a className='fs_md fw_medium text_lightgrey' href="mailto:hello@agenone.com">hello@agenone.com</a>
                    </Col>
                    <Col lg={6} data-aos="zoom-in-left">
                        <Row>
                            <Col xs={6} sm={4}>
                                <ul className='m-0 p-0 mt-4'>
                                    <li className='text-white fs_md fw-bold'>Menu</li>
                                    <li className='my-3'><a href="#">Home</a></li>
                                    <li className='my-3'><a href="#">Services</a></li>
                                    <li className='my-3'><a href="#">About Us</a></li>
                                    <li className='my-3'><a href="#">Project</a></li>
                                    <li className='my-3'><a href="#">Contact</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={4} className='z_index_21'>
                                <ul className='m-0 p-0 mt-4'>
                                    <li className='text-white fs_md fw-bold'>Support</li>
                                    <li className='my-3'><a href="#">FAQ</a></li>
                                    <li className='my-3'><a href="#">Privacy Policy</a></li>
                                    <li className='my-3'><a href="#">Terms of Service</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={4} className='z_index_21'>
                                <ul className='m-0 p-0 mt-4'>
                                    <li className='text-white fs_md fw-bold'>Social Media</li>
                                    <li className='my-3'><a href="#">Linked In</a></li>
                                    <li className='my-3'><a href="#">Twitter</a></li>
                                    <li className='my-3'><a href="#">Instagram</a></li>
                                    <li className='my-3'><a href="#">Dribbble</a></li>
                                    <li className='my-3'><a href="#">Behance</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <p className='fs_md fw-normal text_lightgrey text-center mb-0 py-4'>Copyright © 2023 by Agenone. All rights reserved.</p>
            </Container>
        </footer>
    )
}

export default MyFooter