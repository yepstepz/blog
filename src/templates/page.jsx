import React, { Component } from "react"
import { graphql } from "gatsby"

import { Wrapper } from "../styles/layout"
import {Header} from "../components/header";

class Page extends Component {
    render() {
        const StaticPage = this.props.data.wordpressPage

        return (
            <>
                <Header/>
                <Wrapper>
                    <h1>{StaticPage.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: StaticPage.content }}/>
                </Wrapper>
            </>
        )
    }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
