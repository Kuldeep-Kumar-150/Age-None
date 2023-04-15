import React from 'react'
import { Container } from 'react-bootstrap'
import arrow from '../assets/img/svg/right_arrow/Desktop/Vector.svg'
import shapeImgLeft from '../assets/img/svg/left-shape-img.svg'
import shapeImgRight from '../assets/img/svg/right-shape-img.svg'

const ShapeSection = () => {
    return (
        <section className='overflow-hidden'>
            <Container className='position-relative bg_darkblue text-center text-lg-start px-5 pb-5 pt-4 py-sm-4 py-lg-4 d-lg-flex align-items-center justify-content-around'>
                <img className='shape_img_left position-absolute' src={shapeImgLeft} alt="shapeImgLeft" />
                <img className='shape_img_right position-absolute' src={shapeImgRight} alt="shapeImgLeft" />
                <p className='fs_2xl fw-semibold text-white pb-4'>Let’s discuss and bring <span className='d-lg-block'>your vision to life.</span></p>
                <a href='#' className='common_btn text-white fs_md fw_medium'>Let’s Talk <img className='ps-3 header_btn_img' src={arrow} alt="arow" /></a>
            </Container>
        </section>
    )
}

export default ShapeSection