import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogText = (props) => {
  console.log(ReactMarkdown, props);

  return(
    // <p>{props.data.text}</p>
    <ReactMarkdown
      className="c-post__content"
      source={props.data.text}
      />
  )
}
export default BlogText;