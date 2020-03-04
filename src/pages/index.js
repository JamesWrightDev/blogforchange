import React from "react"
import { Link, graphql } from "gatsby"
import ImageRender from '../components/ImageRender';

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {

        const imageSrc  = node.frontmatter.image;
        const title = node.frontmatter.title || node.fields.slug
        const featured = node.frontmatter.featured ? 'c-post-card--featured' :'';
        return (
          <article className={`c-post-card ${featured}`} key={node.fields.slug}>
            <ImageRender filename={imageSrc}/>
            <header>
              <h3>

                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {eq: true}}}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          blocks {
            template
            text
            image_positon
            image
          }
          featured
          image
        }
      }
    }
  }
  }
`
