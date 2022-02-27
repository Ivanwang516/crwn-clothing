import React from "react";
import {Link} from "react-router-dom";

import { ReactComponent as Logo } from '../../assests/crown.svg'; 

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <a href="/">
            <Logo />
        </a>
        <div className="options">
            <a href="/shop" className="option">SHOP</a>
            <a href="/shop" className="option">CONTACT</a>
        </div>
    </div>
);

export default Header;