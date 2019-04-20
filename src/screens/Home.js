import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PageFrame from '../components/PageFrame';
import './Home.css'
class Home extends Component {

    render() {
        return (
            <PageFrame className="home-frame">
                <img className="home-background" src="./home-background.jpg" alt="kids learning"/>

                <div className="main-paragraph">
                  <h3 className="paragraph-header">Project - Based Learning</h3>
                  <p className="paragraph">Kids will learn how to effectively code through guided projects that teach the essential fundamentals and the problem solving mentality.</p>
                </div>

                <div className="paragraph-container">
                  <div className="tri-paragraph">
                    <h3 className="paragraph-header"> <i className="fas fa-object-group"></i> Curriculums</h3>
                    <p className="paragraph">Students will always have a direct focus and a clear goal in an aspect of whatever technology they choose to learn.</p>
                    <div className="explore-div">
                      <Link to="/curriculums" className="explore-link">Explore Curriculums</Link>
                      <div className="explore-icon"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>

                  <div className="tri-paragraph">
                    <h3 className="paragraph-header"> <i className="fas fa-project-diagram"></i> Projects</h3>
                    <p className="paragraph">Students will learn through a direct application of the technology they are learning and finish with a tangible product.</p>
                    <div className="explore-div">
                      <Link to="/projects" className="explore-link">Explore Projects</Link>
                      <div className="explore-icon"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>

                  <div className="tri-paragraph">
                    <h3 className="paragraph-header"> <i className="fas fa-book"></i> Articles</h3>
                    <p className="paragraph">Students have access to tailored documentation that encourages students to explore the power behind the technologies they use.</p>
                    <div className="explore-div">
                      <Link to="/articles" className="explore-link">Explore Articles</Link>
                      <div className="explore-icon"><i className="fas fa-angle-right"></i></div>
                    </div>
                  </div>

                </div>
            </PageFrame>
        );
    }
}

export default Home;
