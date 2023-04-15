import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import arrow from '../assets/img/svg/right_arrow/Desktop/Vector.svg'
import iconOne from '../assets/img/svg/icon_1/Desktop/Special Icon.svg'
import iconSecond from '../assets/img/svg/icon_2/Desktop/Special Icon.svg'
import iconThird from '../assets/img/svg/icon_3/Desktop/Special Icon.svg'
import iconFour from '../assets/img/svg/icon_4/Desktop/Special Icon.svg'
import Slider from "react-slick";
import headerPositionImg1 from '../assets/img/svg/header-position-img-1 (2).svg'
import headerPositionImg2 from '../assets/img/svg/header-position-img-2.svg'


const Header = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 8000,
                settings: "unslick",
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            }]
    }
    return (
        <section className='py-5 py-xl-5 mt-xl-0 mt-md-5 d-flex flex-column align-items-center justify-content-center flex-grow-1'>
            <Container>
                <div className="text-center" data-aos="zoom-in">
                    <p className='fs_xsm fw_medium text-white mb-0 header_number_btn d-inline-block'>NUMBER ONE CREATIVE DIGITAL AGENCY </p>
                    <h1 className='fs_3xl fw-bold text_green mb-0 mt-2'>Smart Choices</h1>
                    <h2 className='fs_3xl fw-bold text-white mb-0'>For Your Business Growth</h2>
                    <p className='fs_lg fw_medium text_lightgrey mb-0 mt-4'>We're a team of experienced designers, developers, <span className='d-md-block'>and marketers, passionate about delivering exceptional digital solutions.</span></p>
                    <a href="#" className='fs_ms fw_medium text-white common_btn d-inline-block mt-4 mt-lg-5 mb-lg-4'>Contact Us <img className='ps-3 header_btn_img' src={arrow} alt="arow" /></a>
                </div>

                {/*SECTION-2*/}
                <div className="bg_green_img_header py-3 py-md-4 mt-lg-5 mt-5 position-relative overflow-hidden">
                    <img className='position-absolute headerPositionImg2' src={headerPositionImg2} alt="headerPositionImg1" />
                    <img className='position-absolute headerPositionImg1' src={headerPositionImg1} alt="headerPositionImg2" />
                    <h3 className='text-white text-center fs_xl fw-semibold'>Benefit of <span className=' d-block d-xl-inline-block'>improving your business</span></h3>
                    <Slider {...settings} className='py-5 pt-xl-5 pb-xl-2 row'>
                        {/* <Row className='pt-5'> */}
                        <Col sm={3} className='d-flex flex-column align-items-center' data-aos="zoom-in-down">
                            <div className='w-50 business_icons'>
                                <img className='w-100' src={iconOne} alt="icons" />
                            </div>
                            <p className='fs_2lg ps-xl-4 fw_medium text-white pt-2 text-center'>Expanding the Market</p>
                        </Col>
                        <Col sm={3} className='d-flex flex-column align-items-center' data-aos="zoom-in-left">
                            <div className='w-50 business_icons'>
                                <img className='w-100' src={iconSecond} alt="icons" />
                            </div>
                            <p className='fs_2lg fw_medium text-white pt-2'>Cost-Effective</p>
                        </Col>
                        <Col sm={3} className='d-flex flex-column align-items-center' data-aos="zoom-in-right">
                            <div className='w-50 business_icons'>
                                <img className='w-100' src={iconThird} alt="icons" />
                            </div>
                            <p className='fs_2lg fw_medium text-white pt-2'>More Professional</p>
                        </Col>
                        <Col sm={3} className='d-flex flex-column align-items-center z_index_21' data-aos="zoom-out">
                            <div className='w-50 business_icons'>
                                <img className='w-100' src={iconFour} alt="icons" />
                            </div>
                            <p className='fs_2lg fw_medium text-white pt-2'>Attract Client</p>
                        </Col>
                        {/* </Row> */}
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Header