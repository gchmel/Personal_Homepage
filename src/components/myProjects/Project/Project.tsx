import React from 'react';

import './Project.css';

interface ProjectProps {
    props: { img: string, name: string, link: string, id: number }
}

export default function Project({props}: ProjectProps) {

    const text: string = props.toString()

    return (
        <div>
            <h3>Project</h3>
            <p>{text}</p>
        </div>
    )
}