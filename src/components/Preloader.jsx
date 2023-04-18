import React from 'react'
import { Container } from 'react-bootstrap'
import pageLogo from '../assets/img/svg/pageLogo/Desktop/Shapes.svg'

const Preloader = () => {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none"
        document.body.classList.remove("overflow-hidden")
    }, 3000);
    return (
        <section className='bg-dark'>
            <Container>
                <div className="preloader">
                    <div className="d-flex align-items-center justify-content-center preloader">
                        <a className='fs_2lg fw-bold text-dark preloader_animation' href="#"><img src={pageLogo} alt="pageLogo" />Agenone</a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Preloader