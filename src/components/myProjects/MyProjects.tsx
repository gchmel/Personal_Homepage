import React from 'react';

import './MyProjects.css';

const projects = [<h3>Project</h3>, <h3>Project</h3>, <h3>Project</h3>, <h3>Project</h3>]

export default function MyProjects() {
    return (
        <div className="myProjects">
        <h1 className="myProjects--title">My Projects:</h1>
        <div className="myProjects--projects">
            {projects}
        </div>
        </div>
    );
}