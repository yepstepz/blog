import React from 'react'
import styled from '@emotion/styled'

import {
    MIN_MOBILE_MEDIA_QUERY,
    MAX_TABLET_MEDIA_QUERY,
    MAX_MOBILE_MEDIA_QUERY,
    MIN_TABLET_MEDIA_QUERY
} from "../../utils/breakpoint-constants";


export const ArticlesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 2.5rem 2rem;
  ${MAX_TABLET_MEDIA_QUERY} {
    padding: 1.5rem 1.25rem;
  }
`
