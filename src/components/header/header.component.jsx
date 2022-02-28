import React from "react";
import {Link} from "react-router-dom";

import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser}) => (
    <div className="header">
        <a href="/">
            <Logo />
        </a>
        <div className="options">
            <a href="/shop" className="option">SHOP</a>
            <a href="/shop" className="option">CONTACT</a>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <a className="option" href="/signin">SIGN IN</a>
            }
        </div>
    </div>
);

export default Header;