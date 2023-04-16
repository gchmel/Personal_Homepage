import React from 'react';

import './Project.css';

interface ProjectProps {
    props: { gif: string, name: string, link: string, id: number }
}

export default function Project({props}: ProjectProps) {

    const text: string = props.toString()
    console.log(props)

    return (
        <div>
            <h3>Project</h3>
            <p>{text}</p>
        </div>
    )
}