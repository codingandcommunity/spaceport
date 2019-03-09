// written by Saketh Dargula (@sak6lab)
import React, {Component} from 'react';
import './Search.css'
import PageFrame from '../../components/PageFrame';

class Search extends Component {
    constructor() {
        super();
        this.state = {content: {}};
    }

    render() {
        return (
            <PageFrame>


            </PageFrame>
        );
    }

    // componentDidMount() {
    //     fetch('/__mocks/articles.json')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(content => {
    //             this.setState({content});
    //             console.log(this.state);
    //         });
    // }
}

export default Search;
