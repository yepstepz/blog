import React from 'react'
import { graphql, Link } from 'gatsby'
import parse from 'html-react-parser'
import { css } from '@emotion/core'

import { Layout } from '../../components/layout'
import { normalizePath } from '../../utils/get-url-path'
import { LAYOUT_POST_PAGE } from '../../utils/constants'
import { replaceMedia } from '../../utils/content-parser'
import { RowStyled, ColumnStyled } from '../../components/partials/common.styles'

export default ({ data }) =>  {
  const { nextPage, previousPage, page } = data
  const { title, content } = page

  return (
      <Layout layoutType={LAYOUT_POST_PAGE}>
          <RowStyled css={css`
              align-items: flex-start;
          `}>
              <ColumnStyled css={css`
                  flex: 0 0 90%;
                  align-items: flex-start;
              `}>
                  <h1>{ title }</h1>
                  <section className="content" css={css`
                      padding-right: 100px;
                  `}>
                      { parse(content ?? '', {replace: replaceMedia}) }
                  </section>

                  <br />
                  {!!nextPage && (
                      <Link to={normalizePath(nextPage.uri)}>Next: {nextPage.title}</Link>
                  )}
                  <br />
                  {!!previousPage && (
                      <Link to={normalizePath(previousPage.uri)}>
                          Previous: {previousPage.title}
                      </Link>
                  )}
                  <br />
              </ColumnStyled>
          </RowStyled>
      </Layout>
  )
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          localFile {
            ...HeroImage
          }
        }
      }
    }

    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
