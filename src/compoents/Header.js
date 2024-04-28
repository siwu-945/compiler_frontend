import React from 'react';
import {
    Link
} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="header">
                <Link to="/" className="home-link"> YesCompiler</Link>
                <nav className={"navigation"}>
                    <Link to="/about">About</Link>
                    <Link to="/how">How Does This Work?</Link>
                </nav>
            </div>

        </header>
    );
}

export default Header;
