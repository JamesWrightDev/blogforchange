import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DynamicComponent from '../components/DynamicComponent';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = pageContext.frontmatter;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.description || post.excerpt}
      />
      <article className="c-post">
        {/* <h1>blog post</h1> */}
        <header>
          <h1>
            {post.title}
          </h1>
          <p>
            {post.date}
          </p>
        </header>
        {
          post.blocks.map(item => {
            return(
              <DynamicComponent
                template={item.template}
                data={item}
                key={Math.random()}
              />
            )
          })
        }
      </article>
      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ←
                {' '}
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                {' '}
                →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
