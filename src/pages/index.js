import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { css, Global } from "@emotion/core"

import { reset } from "../styles/reset"
import { Wrapper } from "../styles/layout"
import { Header } from '../components/header'
import { TwoColumnsText } from "../components/partials";

class Homepage extends Component {
    render() {
        const data = this.props.data

        return (
            <>
                <Header/>
                <Wrapper>
                    <h1>Приветики пистолетики!</h1>
                    {data.allWordpressPost.edges.map(({ node }) => (
                        <ul>
                            <li>
                                <Link to={node.slug}>
                                    <h2>{node.title}</h2>
                                </Link>
                                <div dangerouslySetInnerHTML={{__html: node.excerpt}}/>
                            </li>
                        </ul>
                    ))}
                </Wrapper>
            </>
        )
    }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
