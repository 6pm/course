import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => (
    <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        
    </nav>
)

export default Menu
