import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import pageLogo from '../assets/img/svg/pageLogo/Desktop/Shapes.svg'
const MyNav = () => {
    const [Nav, setNav] = useState(false)
    if (Nav) {
        document.body.style.overflow = "hidden"
    }
    else {
        document.body.style.overflow = "visible"
    }
    return (
        <nav>
            <Container>
                <div className="d-flex align-items-center justify-content-between py-3">
                    <a className='fs_2lg text-white fw-bold z_index_21' href="#"><img src={pageLogo} alt="pageLogo" />Agenone</a>
                    <ul className='d-flex align-items-center gap-5 d-none d-lg-flex'>
                        <li><a className='nav_links position-relative' href="#">Home</a></li>
                        <li><a className='nav_links position-relative' href="#service">Services</a></li>
                        <li><a className='nav_links position-relative' href="#projects">Project</a></li>
                        <li><a className='nav_links position-relative' href="#reviews">About Us</a></li>
                    </ul>
                    <div onClick={() => setNav(!Nav)} className={Nav === true ? "menu_icon d-lg-none z_index_5 z_index_21" : " z_index_5 d-lg-none menu_icon_1 z_index_21"}>
                        <div className="menu_icon_border p-2">
                            <span className='menu_line'></span>
                            <span className='menu_line'></span>
                            <span className='menu_line'></span>
                        </div>
                    </div>
                    <a href="#contactus" className='d-none d-lg-flex bg_green_linear nav_btn text-white fs_sm fw_medium py-3 px-4 d-inline-block rounded-5'>Contact Us</a>
                    <ul className={Nav ? "open_nav d-lg-none gap-5" : "hide_nav d-lg-none gap-5"}>
                        <li><a onClick={() => setNav(false)} className='nav_links position-relative' href="#">Home</a></li>
                        <li><a onClick={() => setNav(false)} className='nav_links position-relative' href="#service">Services</a></li>
                        <li><a onClick={() => setNav(false)} className='nav_links position-relative' href="#projects">Project</a></li>
                        <li><a onClick={() => setNav(false)} className='nav_links position-relative' href="#reviews">About Us</a></li>
                        <li><a onClick={() => setNav(false)} className='bg_green_linear nav_btn text-white fs_sm fw_medium py-3 px-4 rounded-5' href="#contactus">Contact Us</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default MyNav