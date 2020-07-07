import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { css, Global } from "@emotion/core"

import { truncate } from '../utils/truncate'
import { Wrapper, List } from "../styles/layout"
import { Header } from '../components/header'
import { ArticlesList } from '../components/main-articles-list'
import { MainPageDate } from "../components/date/main-page-date";
import { TagsComponent } from '../components/tags'
import {
    ArticlesRow,
    LeftColumn,
    RightColumn,
    StyledTitle,
    ArticlePreview,
    ReadAll
} from "../components/main-articles-list/single-article.styles";

import { Articles } from '../components/main-articles-list'

class Homepage extends Component {
    render() {
        const data = this.props.data

        return (
            <>
                <Header/>
                <Wrapper>
                    <Articles posts={data.allWordpressPost.nodes} />
                </Wrapper>
            </>
        )
    }
}

export default Homepage

export const pageQuery = graphql`
{
  allWordpressPost {
    nodes {
      date
      excerpt
      path
      slug
      sticky
      tags {
        id
        path
        name
      }
      title
    }
  }
}
`
