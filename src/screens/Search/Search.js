// written by Saketh Dargula (@sak6lab)
import React, {Component} from 'react';
//import './Search.css'
import PageFrame from '../../components/PageFrame';
import SearchFilter from '../../components/SearchFilter';
import SearchResults from '../../components/SearchResults';

class Search extends Component {
    constructor() {
      super();
      this.state = {searchResult: {
        filter: "projects",
        results: [
          {
            name: "Project Name",
            src: "",
            alt: "dummy1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. An tu me de L. Sed ego in hoc resisto; Duo Reges: constructio interrete. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Tuo vero id quidem, inquam, arbitratu. Quae quidem vel cum periculo est quaerenda vobis.",
            tags: [],
          },
        ],
      }};
      this.updateResults = this.updateResults.bind(this);
    }

    updateResults(filter) {
      fetch('/__mocks/search_' + filter + '.json')
          .then(res => {
              return res.json();
          })
          .then(searchResult => {
              this.setState({searchResult});
              console.log(this.state);
          });
    }

    render() {
      const searchFilterStyle = {width: "20%", float: "left"};
      const searchResultsStyle = {width: "70%", float: "left", margin: "0 5%"};
      return (
          <PageFrame>
           <SearchFilter style={searchFilterStyle} updateResults={this.updateResults}/>
           <SearchResults style={searchResultsStyle} results={this.state.searchResult.results}/>
          </PageFrame>
      );
    }

    componentDidMount() {
        fetch('/__mocks/search_projects.json')
            .then(res => {
                return res.json();
            })
            .then(searchResult => {
                this.setState({searchResult});
                console.log(this.state);
            });
    }
}

export default Search;
