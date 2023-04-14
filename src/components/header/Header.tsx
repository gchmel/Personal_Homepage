import React from 'react';
import './Header.css';
import pfp from "../../assets/pfp-1.png";

export default function Header() {
  return (
    <header>
        <img src={pfp} className="header--pfp" alt="pfp"/>
        <div className="header--name-n-title">
            <h3 className="header--name">John Doe</h3>
            <p className="header--job">Software Engineer</p>
        </div>

    </header>
  );
}