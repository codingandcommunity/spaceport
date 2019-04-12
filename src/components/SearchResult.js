import React from 'react'
import './SearchResult.css'

const searchResult = (props) => {
  return (
    <div className='search-result'>
      <img className="search-result-img" src={props.src} alt={props.alt}/>
      <p className="search-result-title">{props.name}</p>
      <div>
        <p className="search-result-description">{props.description}</p>
        <div className="search-result-tags">
          {props.tags.map((tag,index) => {
            return <p className="search-result-tag" key={index.toString()}>{tag}</p>
          })}
        </div>
      </div>

    </div>
  );
}

export default searchResult;
