import React from "react";
import { FaArrowDown, FaBell, FaSearch } from 'react-icons/fa'; // Importing Font Awesome icons
import { RiArrowDropDownLine, RiNotificationLine } from 'react-icons/ri'; // Importing icons from Heroicons
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return()=> (window.onscroll=null);
    }

    return (
        <div className={isScrolled ?"navbar scrolled" : "navbar"}>
        <div className="navbar">
            <div className="container">
                <div className="left">
                <h1 style={{ color: 'red' }}>AlbMovie</h1>

                    <span></span>
                    <span>Movies</span>
                    <span>Series</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                    <span>Coming</span>
                </div>
                <div className="right">
                    <FaSearch className="icon" /> {/* Using the FaSearch icon */}
                    <span>ABC</span>
                    <FaBell className="icon" /> {/* Using the FaBell icon */}
                    <img src="/images/v.png" alt=""/>
                    <div className="profile">
                        <FaArrowDown className="icon" /> {/* Using the FaArrowDown icon */}
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
