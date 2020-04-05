import React from 'react';
import TwoColumn from './TwoColumn';
import BlogText from './BlogText';

const DynamicComponent = (props) => {
  const components = {
    'blog-text': BlogText,
    'two-column': TwoColumn
  }

  const TagName = components[props.template];

  return(
    <TagName
      data={props.data}
    />
  )
}

export default DynamicComponent;