import React, { useEffect } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { Wrapper } from "../styles/layout";
import { Header } from "../components/header";
import { Headlines, Date } from "../components/partials";
import { useNoteResize } from "../utils/use-note-resize";

const Post = ({ data: { wordpressPost: post } }) => {

    useNoteResize()

    return (
        <>
            <Header title={post.title} />
            <Wrapper>
                {/*<h1>{post.title}</h1>*/}
                <Headlines.H1>{post.title}</Headlines.H1>
                {/*<Headlines.H1>Команда мечты: как мы снимаем напряжение и сближаем людей</Headlines.H1>*/}
                <Date time={post.date} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </Wrapper>
        </>
    )
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
      date
    }
  }
`
