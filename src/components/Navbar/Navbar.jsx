import React, {useState} from 'react';
import "./navbar.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";



function Navbar() {

    let [menuAnimation, setMenuAnimation] = useState(false);

    return (
        <div className='navBox containerS'>
            <div className='navbar'>
                <div className='leftNavbar'>
                    <div className='logo'>
                        <a href='#'><h3 className='logoBegin'>PRO</h3><h3 className='logoEnd'>Teach</h3></a>
                    </div>
                    <ul className='menu'>
                        <li><a href='#about'>Biz haqimizda</a></li>
                        <li><a href='#process'>O'quv jarayoni</a></li>
                        <li><a href='#courses'>O'quv kurslari</a></li>
                        <li><a href='#contact'>Aloqa</a></li>
                    </ul>
                </div>
                {/* <div className='rightNavbar'>
                    <a href='#'>Ro'yxatdan o'tish</a>
                    <a href='#' className='login'><FaArrowRightLong className='loginArrow' /><span>Kirish</span></a>
                </div> */}
                <div className='mobileLogin'>
                    <a href='#' className='login'><FaArrowRightLong className='loginArrow' /><span>Kirish</span></a>
                </div>
                <div className={menuAnimation ? "mobileMenu change" : "mobileMenu"} onClick={() => setMenuAnimation(!menuAnimation)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

            </div>
        </div>
    )
}

export default Navbar