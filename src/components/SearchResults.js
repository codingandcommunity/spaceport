import React from 'react';
import SearchResult from './SearchResult';
import './SearchResults.css';

const searchResults = (props) => {
  console.log(props);
    return (
      <div className="search-results" style={props.style}>
      <h2 className="search-results-count">{props.results.length} Result</h2>
      {props.results.map( (result,index) => {
        return (
          <SearchResult className="search-result" src={result.src} alt={result.alt} name={result.name} description={result.description} tags={result.tags} key={index.toString()}/>
        );
      } )}
      </div>
    );
}

export default searchResults;
