import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import parse from 'html-react-parser';

import { Wrapper, PostWrapper, EntryContent , PostHeader} from '../styles/layout';
import { Header } from '../components/header';
import { ArticleDate } from '../components/date/article-date';
import { replaceMedia } from '../utils/content-parser'

const pluginOptions = {
    wordPressUrl: `https://yepstepz.io/`,
    uploadsUrl: `https://yepstepz.io/wp-content/uploads/`,
};

const Post = ({ data: { wordpressPost: post } }) => {
    const {
        content
    } = post;
    return (
        <>
            <Header
                title={post.title}
                description={post.excerpt}
            />
            <PostHeader>
                <Link to={'/'}>Назад</Link>
                <h1>{post.title}</h1>
                <ArticleDate time={post.date}/>
            </PostHeader>
            <PostWrapper>
                <EntryContent>
                    {parse(content, {replace: replaceMedia})}
                </EntryContent>
                {/*<EntryContent dangerouslySetInnerHTML={{__html: post.content}}/>*/}
            </PostWrapper>
        </>
    );
}

Post.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default Post

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content,
      date,
      featured_media {
        source_url
      }
    }
  }
`
