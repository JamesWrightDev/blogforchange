/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpeg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(absolutePath: { regex: "/linkedin.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="c-bio">
      <Image
        className="c-bio__image"
        fadeIn={true}
        fixed={data.avatar.childImageSharp.fixed}
        objectFit="cover"
        objectPosition="50% 50%"
        alt="" />
      <p>
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
        </p>
        <div className="c-bio__social">
          <a href="https://uk.linkedin.com/in/fiona-points" target="_blank">
              <Image
              fadeIn={true}
              fixed={data.linkedin.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="" />
            </a>
        </div>

    </div>
  )
}

export default Bio
