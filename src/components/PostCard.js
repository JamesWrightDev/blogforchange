import React from "react";
import ImageRender from "./ImageRender";
import { Link } from 'gatsby';

const PostCard = (props) => {
  const {
    featuredCard,
    title,
    date,
    imageSrc,
    content,
    slug  } = props;
  return (
    <article className={`c-post-card`} key={slug}>
      <ImageRender filename={imageSrc} />
      <header>
        <h3>
          <Link to={slug}>{title}</Link>
        </h3>
        <small>{date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </section>
    </article>
  );
};

export default PostCard;
