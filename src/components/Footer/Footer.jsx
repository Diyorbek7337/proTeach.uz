import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";



function Footer() {
    return (
        <div className='footer' id='contact'>
            <div className='containerS footerWrapper'>
                <div className='footerContentOne'>
                    <div className='footerLogo'>
                        <div className='footerLogoTitle'>
                            <a href='#'>
                                <div>
                                    <span className='brace'>&#123;</span>
                                    <h3 className='logoBegin mainLogoName'>PRO</h3>
                                    <h3 className='mainLogoName logoEnd'>Teach</h3>
                                    <span className='brace'>&#125;</span>
                                </div>
                            </a>
                            <p className='footerLogoContinue'>Dasturlash  akademiyasi</p>
                        </div>
                    </div>
                    <div className='footerSocial'>
                        <a href='#' className='instagram'><FaInstagram /></a>
                        <a href='#' className='telegram'><FaTelegram /></a>
                        <a href='#' className='youtube'><IoLogoYoutube /></a>
                    </div>
                </div>
                <div className='footerContentTwo'>
                    <ul className='menu'>
                        <li><a href='#about'>Biz haqimizda</a></li>
                        <li><a href='#'>O'quv jarayoni</a></li>
                        <li><a href='#courses'>O'quv kurslari</a></li>
                        <li><a href='#contact'>Aloqa</a></li>
                    </ul>
                    <div className='footerLocation'>
                        <div className='footerLocationItem'>
                            <p><a href='tel:+998903777337' className='tel'>+998(90) 377 73 37</a></p>
                            <p><a href='mailto:info@proTeach.uz' className='mail'>info@ProTeach.uz</a></p>
                        </div>
                        <div className='footerLocationItem'>
                            <p><a className='address' href='#'>Sho'rchi tumani,<br></br> Mustaqillik ko'chasi,<br></br> 41-uy</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footerBottom container'>
                <p>Copyright © 2024 ProTeach.uz</p>
            </div>
        </div>
    )
}

export default Footer