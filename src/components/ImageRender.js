import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const ImageRender = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              absolutePath
              name
              childImageSharp {
                fluid(maxWidth: 40) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {

      const image = data.images.edges.find(n => {
        return n.node.absolutePath.includes(props.filename);
      });

      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid}
        objectFit="cover"
      objectPosition="50% 50%"
      alt=""/>;
    }}
  />
);

export default ImageRender;