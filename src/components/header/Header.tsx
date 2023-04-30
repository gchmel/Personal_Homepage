import React from 'react';
import './Header.css';
import pfp from "../../assets/IMG_7517_2.jpg";

interface profileData {
    pfp: string,
    name: string,
    link: string,
    title: string
}

export default function Header() {

    function getCredentials(): profileData {
        let profile: profileData = {pfp: "", name: "", link: "", title: ""}
        profile.name = "George Chmel"
        profile.pfp = pfp
        profile.link = ""
        profile.title = "Software Engineer"
        return profile
    }

    let profile: profileData = getCredentials()

  return (
    <header>
        <img src={profile.pfp} className="header--pfp" alt="pfp"/>
        <div className="header--name-n-title">
            <h3 className="header--name">{profile.name}</h3>
            <p className="header--job">{profile.title}</p>
        </div>
    </header>
  );
}