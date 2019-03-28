import React, {Component} from 'react'
import './SearchFilter.css'
class SearchFilter extends Component {
  constructor() {
    super();
    this.state = {filterStates: ["selected-filter", "", ""]};
  }

  onFilterClicked = (event, id, filter) => {
    const filterState = "selected-filter";
    const filterStates = ["","",""];
    filterStates[id] = filterState;
    this.setState({filterStates: filterStates});
    console.log(filter);
  }

  render() {
    return (
      <div className='search-filter-group' style={this.props.style}>
        <p className={"search-filter " + this.state.filterStates[0]} onClick={(event) => this.onFilterClicked(event, 0, "projects")}>Projects</p>
        <p className={"search-filter " + this.state.filterStates[1]} onClick={(event) => this.onFilterClicked(event, 1, "curriculums")}>Curriculums</p>
        <p className={"search-filter " + this.state.filterStates[2]} onClick={(event) => this.onFilterClicked(event, 2, "articles")}>Articles</p>
      </div>
    );
  }

}

export default SearchFilter;
