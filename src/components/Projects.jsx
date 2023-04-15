import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cardImage1 from '../assets/img/png/card_img_1.png'
import cardImage2 from '../assets/img/png/card_img_2.png'
import arrowIcon from '../assets/img/svg/arrow_icon/Desktop/Special Icon.svg'
import slack from '../assets/img/svg/slack.svg'
import google from '../assets/img/svg/google.svg'
import netFlix from '../assets/img/svg/netflix.svg'
import airBnb from '../assets/img/svg/air-bnb.svg'
import adobe from '../assets/img/svg/adobe.svg'
import microSoft from '../assets/img/svg/micro-soft.svg'

const Projects = () => {
    const [first, setfirst] = useState(1)
    return (
        <section id='projects'>
            <div className='our_projects_section_bgimg py-5'>
                <Container className='mt-lg-4'>
                    <h4 className='fs_3xl fw-bold text-white mb-0 text-center'>Our Project Have Been <span className='text_green'>Done</span></h4>
                    <p className='text_lightgrey fs_lg fw_medium text-center pt-3'>Take a look at some of our recent projects and see how we've helped other businesses elevate their brand and drive business growth.</p>
                    <div className="mt-4 mt-lg-5 d-flex align-items-center justify-content-between project_type_btns_box mx-auto">
                        <button onClick={() => setfirst(1)} className={first === 1 ? "project_type_btn_active border-0 bg-transparent px-3 px-md-4 py-2 py-md-2 py-lg-3" : "project_type_btn border-0 bg-transparent px-3 px-md-4 py-2 py-md-2 py-lg-3"}>UI/UX <span className='d-none d-lg-inline-block'>Design</span></button>
                        <button onClick={() => setfirst(2)} className={first === 2 ? "project_type_btn_active border-0 bg-transparent px-3 px-md-4 py-2 py-md-2 py-lg-3" : "project_type_btn border-0 bg-transparent px-3 px-md-4 py-2 py-md-2 py-lg-3"}>Digital <span className='d-none d-lg-inline-block'>Marketing</span></button>
                        <button onClick={() => setfirst(3)} className={first === 3 ? "project_type_btn_active border-0 bg-transparent px-3 px-md-4 py-2 py-md-2 py-lg-3" : "project_type_btn border-0 bg-transparent px-3 px-md-4 py-2 py-md-2 py-lg-3"}><span className='d-lg-none'>SMM</span> <span className='d-none d-lg-flex'>Sosmed Management</span></button>
                        <button onClick={() => setfirst(4)} className={first === 4 ? "project_type_btn_active border-0 bg-transparent px-3 px-md-4 py-2 py-md-2 py-lg-3" : "project_type_btn border-0 bg-transparent px-3 px-md-4 py-2 py-md-2 py-lg-3"}>Dev<span className='d-none d-lg-inline-block'>elopment</span></button>
                    </div>
                    <Row className={first === 1 ? "d-flex my-5" : "d-none my-5"}>
                        <Col sm={6} data-aos="zoom-in">
                            <div className='p-3 cards_border'>
                                <div className="position-relative">
                                    <img className='w-100 rounded-4' src={cardImage1} alt="image" />
                                    <div className="position-absolute top-50 start-50 cards_hover_img d-flex justify-content-center align-items-center">
                                        <img className='image_hover_icon crusor_pointer' src={arrowIcon} alt="image" />
                                    </div>
                                </div>
                                <p className='text-white fs_xl fw-bold mb-0 mt-3'>Title</p>
                                <p className='text_lightgrey fs_lg fw-normal'>We are designed to help your business thrive in the online world.</p>
                            </div>
                        </Col>
                        <Col sm={6} data-aos="zoom-in-up">
                            <div className='p-3 cards_border mt-4 mt-sm-0'>
                                <div className="position-relative">
                                    <img className='w-100 rounded-4' src={cardImage2} alt="image" />
                                    <div className="position-absolute top-50 start-50 cards_hover_img d-flex justify-content-center align-items-center">
                                        <img className='image_hover_icon crusor_pointer' src={arrowIcon} alt="image" />
                                    </div>
                                </div>
                                <p className='text-white fs_xl fw-bold mb-0 mt-3'>Title</p>
                                <p className='text_lightgrey fs_lg fw-normal'>We are designed to help your business thrive in the online world.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={first === 2 ? "d-flex my-5" : "d-none my-5"}>
                        <Col sm={6} data-aos="zoom-in">
                            <div className='p-3 cards_border mt-4 mt-sm-0'>
                                <div className="position-relative">
                                    <img className='w-100 rounded-4' src={cardImage2} alt="image" />
                                    <div className="position-absolute top-50 start-50 cards_hover_img d-flex justify-content-center align-items-center">
                                        <img className='image_hover_icon crusor_pointer' src={arrowIcon} alt="image" />
                                    </div>
                                </div>
                                <p className='text-white fs_xl fw-bold mb-0 mt-3'>Title</p>
                                <p className='text_lightgrey fs_lg fw-normal'>We are designed to help your business thrive in the online world.</p>
                            </div>
                        </Col>
                        <Col sm={6} data-aos="zoom-in-up">
                            <div className='p-3 cards_border'>
                                <div className="position-relative">
                                    <img className='w-100 rounded-4' src={cardImage1} alt="image" />
                                    <div className="position-absolute top-50 start-50 cards_hover_img d-flex justify-content-center align-items-center">
                                        <img className='image_hover_icon crusor_pointer' src={arrowIcon} alt="image" />
                                    </div>
                                </div>
                                <p className='text-white fs_xl fw-bold mb-0 mt-3'>Title</p>
                                <p className='text_lightgrey fs_lg fw-normal'>We are designed to help your business thrive in the online world.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={first === 3 ? "d-flex my-5" : "d-none my-5"}>
                        <Col sm={6} data-aos="zoom-in">
                            <div className='p-3 cards_border'>
                                <div className="position-relative">
                                    <img className='w-100 rounded-4' src={cardImage1} alt="image" />
                                    <div className="position-absolute top-50 start-50 cards_hover_img d-flex justify-content-center align-items-center">
                                        <img className='image_hover_icon crusor_pointer' src={arrowIcon} alt="image" />
                                    </div>
                                </div>
                                <p className='text-white fs_xl fw-bold mb-0 mt-3'>Title</p>
                                <p className='text_lightgrey fs_lg fw-normal'>We are designed to help your business thrive in the online world.</p>
                            </div>
                        </Col>
                        <Col sm={6} data-aos="zoom-in-up">
                            <div className='p-3 cards_border mt-4 mt-sm-0'>
                                <div className="position-relative">
                                    <img className='w-100 rounded-4' src={cardImage2} alt="image" />
                                    <div className="position-absolute top-50 start-50 cards_hover_img d-flex justify-content-center align-items-center">
                                        <img className='image_hover_icon crusor_pointer' src={arrowIcon} alt="image" />
                                    </div>
                                </div>
                                <p className='text-white fs_xl fw-bold mb-0 mt-3'>Title</p>
                                <p className='text_lightgrey fs_lg fw-normal'>We are designed to help your business thrive in the online world.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={first === 4 ? "d-flex my-5" : "d-none my-5"}>
                        <Col sm={6} data-aos="zoom-in">
                            <div className='p-3 cards_border mt-4 mt-sm-0'>
                                <div className="position-relative">
                                    <img className='w-100 rounded-4' src={cardImage2} alt="image" />
                                    <div className="position-absolute top-50 start-50 cards_hover_img d-flex justify-content-center align-items-center">
                                        <img className='image_hover_icon crusor_pointer' src={arrowIcon} alt="image" />
                                    </div>
                                </div>
                                <p className='text-white fs_xl fw-bold mb-0 mt-3'>Title</p>
                                <p className='text_lightgrey fs_lg fw-normal'>We are designed to help your business thrive in the online world.</p>
                            </div>
                        </Col>
                        <Col sm={6} data-aos="zoom-in-up">
                            <div className='p-3 cards_border'>
                                <div className="position-relative">
                                    <img className='w-100 rounded-4' src={cardImage1} alt="image" />
                                    <div className="position-absolute top-50 start-50 cards_hover_img d-flex justify-content-center align-items-center">
                                        <img className='image_hover_icon crusor_pointer' src={arrowIcon} alt="image" />
                                    </div>
                                </div>
                                <p className='text-white fs_xl fw-bold mb-0 mt-3'>Title</p>
                                <p className='text_lightgrey fs_lg fw-normal'>We are designed to help your business thrive in the online world.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='projects_section_line'></div>
            <div className='bg_darkblue'>
                <Container>
                    {/********COMPANY ICONS*******/}
                    <Row className='pb-5'>
                        <Col xs={6} sm={4} md={3} lg={2} className='mt-5 d-flex justify-content-center'><img className='w-75 partner_companies' src={slack} alt="partner-companies" /></Col>
                        <Col xs={6} sm={4} md={3} lg={2} className='mt-5 d-flex justify-content-center'><img className='w-75 partner_companies' src={google} alt="partner-companies" /></Col>
                        <Col xs={6} sm={4} md={3} lg={2} className='mt-5 d-flex justify-content-center'><img className='w-75 partner_companies' src={netFlix} alt="partner-companies" /></Col>
                        <Col xs={6} sm={4} md={3} lg={2} className='mt-5 d-flex justify-content-center'><img className='w-75 partner_companies' src={airBnb} alt="partner-companies" /></Col>
                        <Col xs={6} sm={4} md={3} lg={2} className='mt-5 d-flex justify-content-center'><img className='w-75 partner_companies' src={adobe} alt="partner-companies" /></Col>
                        <Col xs={6} sm={4} md={3} lg={2} className='mt-5 d-flex justify-content-center'><img className='w-75 partner_companies' src={microSoft} alt="partner-companies" /></Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Projects