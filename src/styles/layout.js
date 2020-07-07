import React from "react"
import styled from "@emotion/styled"

import {
    MIN_MOBILE_MEDIA_QUERY,
    MAX_TABLET_MEDIA_QUERY,
    MAX_MOBILE_MEDIA_QUERY,
    MIN_TABLET_MEDIA_QUERY,
    MAX_DEFAULT_MEDIA_QUERY
} from "../utils/breakpoint-constants";

export const Wrapper = styled("main")`
  width: 45rem;
  margin: 0 auto;
  ${MAX_TABLET_MEDIA_QUERY} {
      max-width: 100%;
  }
  ${MAX_MOBILE_MEDIA_QUERY} {
  }
  ${MAX_DEFAULT_MEDIA_QUERY} {
      width: 100%;
  }
  
`

export const PostWrapper = styled("main")`
  max-width: 870px;
  margin: 0 auto;
  ul {
    text-indent: 10px;
    list-style: none;
    li:before { content: '∙'; margin-left: -20px; margin-right: 10px; } 
  }
  ${MAX_TABLET_MEDIA_QUERY} {
      max-width: 100%;
      padding: 0 10px;
  }
  ${MAX_MOBILE_MEDIA_QUERY} {
  }
  ${MAX_DEFAULT_MEDIA_QUERY} {
      width: 100%;
  }
  
`

export const PostHeader = styled("section")(`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`)

export const EntryContent = styled.div(`
    &>* {
        margin: 20px auto;
        max-width: 740px;
        padding-left: 20px;
        padding-right: 20px;
    }
`)
