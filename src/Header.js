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
        </nav>
    )
}

export default Header
