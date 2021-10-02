import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const cart = useSelector(store => store.cart)
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/'}>home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/cart'}>Cart({cart.length})</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Header;