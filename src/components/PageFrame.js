import React from 'react';
import Navbar from './Navbar';
import './PageFrame.css';

/*
 * PageFrame is a wrapper component for pages in the webapp.
 */
const PageFrame = ({children}) => (
    <div>
        <Navbar></Navbar>
        <div id="page-frame-container" className="container">{children}</div>
    </div>
);

export default PageFrame;
