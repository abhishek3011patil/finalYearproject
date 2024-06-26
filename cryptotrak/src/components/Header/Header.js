import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.svg'
import './Header.css'
import Button from '../Button/Button'


const Header = () => {
    function menu_toggle() {
        document.querySelector('.main-menu').classList.toggle('show');
    }

    return (
        <div className="Header">

            <header className="Navbar">
                <img src={logo} alt="" className="logo" />
                <a className="company_name" href="">CRYPTOTRAK</a>

                <nav>
                    <ul className="main-menu">
                        <Link className="Link" to="/">
                            <li><a href="">Home</a></li>

                        </Link>
                        <Link className="Link" to="/Tracker">
                            <li><a href="">Tracker</a></li>

                        </Link>
                        <Link className="Link" to="/News">
                            <li><a href="">News</a></li>



                        </Link>
                        <Link className="Link" to="/Contact">
                            <li><a href="">Contact</a></li>

                        </Link>

                    </ul>
                </nav>

                <Button classnames="buttonsHeader" style={{ width: '100px' }} name="Sign Up"> </Button>
                <div onClick={menu_toggle} className="menu-btn"> <i class="fa fa-bars" ></i>
                </div>
            </header>
        </div>
    )
}

export default Header
