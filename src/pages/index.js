import React from "react";
import { Link, graphql } from "gatsby";
// import ImageRender from '../components/ImageRender';
import PostCard from "../components/PostCard";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const featured = node.frontmatter.featured
          ? "c-post-card--featured"
          : "";
        return (
          <PostCard
            key={node.fields.slug}
            title={title}
            date={node.frontmatter.date}
            slug={node.fields.slug}
            imageSrc={node.frontmatter.image}
          />
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
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
`;
