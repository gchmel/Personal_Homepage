import React from 'react';
import './Header.css';
import pfp from "../../assets/IMG_7517_2.jpg";
import LinkedInApiResponse from "../../data/sampleData/linkedInApiResponseExample.json";

interface profileData {
    pfp: string,
    name: string,
    link: string,
    title: string
}

export default function Header() {

    function getCredentials(): profileData {
        let profile: profileData = {pfp: "", name: "", link: "", title: ""}
        profile.name = LinkedInApiResponse.localizedFirstName + " " + LinkedInApiResponse.localizedLastName
        profile.pfp = pfp
        profile.link = `https://www.linkedin.com/in/${LinkedInApiResponse.vanityName}-${LinkedInApiResponse.id}/`
        profile.title = LinkedInApiResponse.localizedHeadline
        return profile
    }

    let profile: profileData = getCredentials()

    function redirectToLinkedIn() {
        const url = profile.link
        window.open(url, '_blank');
    }

  return (
    <header>
        <img src={profile.pfp} className="header--pfp" alt="pfp"/>
        <div className="header--name-n-title" onDoubleClick={redirectToLinkedIn}>
            <h3 className="header--name">{profile.name}</h3>
            <p className="header--job">{profile.title}</p>
        </div>
    </header>
  );
}