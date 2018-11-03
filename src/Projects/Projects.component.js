import React, {Component} from 'react';
import {fetchProjects} from "../common/api";

/**
 * Projects
 *
 * view component
 *
 * This view is responsible for loading and rendering a list of projects from the
 *  AWS lambda API endpoint. It should show a list of projects
 */
class Projects extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            projects: []
        };
    }

    componentDidMount() {
        fetchProjects().then((res) => {
            res.json().then((projects) => {
                this.setState({
                    loading: false,
                    projects: projects
                });
            })
        });
    }

    render() {
        return (
            <div>
                <h1>Projects</h1>
                <ul>
                    {
                        this.state.projects.map((project, i) =>
                            <li key={i}>
                                {project.name}
                                <img src={project.image_src} width={50}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Projects;
