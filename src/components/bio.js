import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      bio: file(sourceInstanceName: { eq: "bio" }) {
        id
        childMarkdownRemark {
          headings {
            value
            depth
          }
          frontmatter {
            name
            description
            linkedin
          }
        }
      }
    }
  `);

  const bio = data.bio.childMarkdownRemark.frontmatter;

  return (
    <div className="c-bio">
      {/* <Image
        className="c-bio__image"
        fadeIn
        fixed={data.avatar.childImageSharp.fixed}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
      /> */}
      <p>
        {bio.description}
      </p>
      <div className="c-bio__social">
        <a
          href={bio.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            fadeIn
            fixed={data.linkedin.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          /> */}
        </a>
    </div>
    </div>
  );
};

export default Bio;
