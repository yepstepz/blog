import React from "react"
import styled from "@emotion/styled"

import {
    DEFAULT_MEDIA_QUERY
} from "typography-breakpoint-constants"

export const H1 = styled("h1")`
  width: 80%;
  ${DEFAULT_MEDIA_QUERY} {
    width: 100%;
  }
`

export const H2 = styled("h2")`
  letter-spacing: -0.87px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  font-size: 48px;
`

export const Headlines = {
    H1,
    H2
}
