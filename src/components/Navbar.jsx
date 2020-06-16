import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav justify-content-center p-3 shadow">
            <NavLink className="text-primary p-2 mx-3" activeClassName="text-danger border-bottom border-top border-danger" exact to="/">
                Home
            </NavLink>
            <NavLink className="text-primary p-2 mx-3" activeClassName="text-danger border-bottom border-top border-danger" to="/albums">
                Albums
            </NavLink>
            <NavLink className="text-primary p-2 mx-3" activeClassName="text-danger border-bottom border-top border-danger" exact to="/chirper">
                Chirper
            </NavLink>
        </nav>
    );
}

export default Navbar;
