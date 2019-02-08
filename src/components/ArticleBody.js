import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const articleBody = (props) => {
  return  (
    <div className='Article Body'>
      { ReactHtmlParser(props.content) }
    </div>
  )
}

export default articleBody;
