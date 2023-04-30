import React from 'react';

import './Project.css';

interface ProjectProps {
    props: { img: string, name: string, link: string, id: number, description: string}
}

export default function Project({props}: ProjectProps) {

    const text: string = props.toString()

    const realImg = props.img ? props.img : "https://via.placeholder.com/150"

    return (
        <div className="project">
            <h3>Project {props.name}</h3>
            <img src={realImg} alt="project"/>

            <p>{props.description}</p>
        </div>
    )
}