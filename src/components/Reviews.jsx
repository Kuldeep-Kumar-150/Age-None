import React from 'react'
import { Container } from 'react-bootstrap'
import avatar from '../assets/img/svg/Avatar.svg'
import avatar2 from '../assets/img/svg/avatar-2/Desktop/Avatar.svg'
import avatar3 from '../assets/img/svg/avatar-3/Desktop/Avatar.svg'
import Slider from 'react-slick'
const Reviews = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        verticalSwiping: true,
        vertical: true,
        centerMargin: '40px',
        arrows: false
    };
    return (
        <section id='reviews'>
            <Container>
                <div className='d-xl-flex overflow-hidden'>
                    <Slider {...settings} className='h-100 w-100 slider_width_xl ms-lg-3'>
                        <div className="p-4 ps-lg-5">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 ps-lg-5">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar2} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 ps-lg-5">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar3} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 ps-lg-5">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 ps-lg-5">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar2} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 ps-lg-5">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar3} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <Slider {...settings} className='h-100 w-50 me-lg-5 d-none d-xl-flex'>
                        <div className="p-4">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar2} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar3} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar2} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='bg_lightgrey p-3 rounded-4 scroll_cards'>
                                <p className='text_light_dark fw-normal fs_lg scroll_card_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.</p>
                                <div className="d-flex align-items-center">
                                    <img src={avatar3} alt="girlIMage" />
                                    <div className='ps-3'>
                                        <p className='text_dark fs_lg fw-semibold mb-0 scroll_card_content'>Clara Insomnia</p>
                                        <p className='mb-0 text_light_dark fs_sm fw-normal scroll_card_content'>Occupation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container >
        </section >
    )
}

export default Reviews