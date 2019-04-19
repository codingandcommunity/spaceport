import React, { Component } from 'react';
import { Jumbotron, Col } from 'react-bootstrap';

import PageFrame from '../components/PageFrame';
import '../components/Downloads.css';

import pic from '../images/Capture.PNG';

console.log('load')


class Downloads extends Component {

    render() {
        
        return (
				
            <PageFrame>
                <Jumbotron>
                    <h1> Start Coding Today </h1>
                </Jumbotron>


                <div class= "container">
                    <div class= "row">
                        <div class= "col-sm">
                            <h3> You first want to install atom by pressing this link and following the steps they give you. </h3>
                            <h4> <a href = "https://atom.io/" >atom.io</a> </h4> 
                            <h3> Once you have atom installed,  create a folder to store your new project. </h3>
                            <h3> Now, look on the right under Browse Projects for the project you’d like to begin. </h3>
                            <h3> Once you find your project, press Go! and begin coding!!  </h3>
                        </div>

                        <div class= "col-sm">
                            *this isnt the right picture its just for space*
                            <img src={pic} />
                        </div>                        

                    </div>
                </div>

            </PageFrame> 
        );
    }
}

export default Downloads;
