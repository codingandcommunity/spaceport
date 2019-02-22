import React from 'react'

const articleHeader = (props) => {
  return (
    <div className='Article Header'>
      <h1>{props.title}</h1>
      <p>{props.dateCreated}</p>
    </div>
  );
}

export default articleHeader;
