import React from 'react';
import Project from "./Project/Project";

import './MyProjects.css';

import projectsData from "../../data/projectsData.json";

export default function MyProjects() {
    return (
        <div className="myProjects">
            <h1 className="myProjects--title">My Projects:</h1>
            <div className="myProjects--projects">
                {projectsData.map((project) => (
                    <Project key={project.id} props={project} />
                ))}
            </div>
        </div>
    );
}