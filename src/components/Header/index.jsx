import './Header.css';
import React from "react";
import {
  Link
} from "react-router-dom";

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/players">Players</Link>
                    </li>
                    <li>
                        <Link to="/teams">Teams</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;