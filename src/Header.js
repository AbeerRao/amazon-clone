import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {SearchOutlined} from '@material-ui/icons';

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                className="header__logo"
                alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchOutlined
                className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__navLink">
                    <div className="header__option">
                        <span className="header__option1">Hello, </span>
                        <span className="header__option2">Sign in</span>
                    </div>
                </Link>

                <Link to="" className="header__navLink">
                    <div className="header__option">
                        <span className="header__option1">Returns </span>
                        <span className="header__option2">& Orders</span>
                    </div>
                </Link>

                <Link to="" className="header__navLink">
                    <div className="header__option">
                        <span className="header__option1">Your </span>
                        <span className="header__option2">Prime</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
