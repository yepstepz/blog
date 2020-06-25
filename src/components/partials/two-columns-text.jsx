import React from "react"
import styled from "@emotion/styled"

import {
    DEFAULT_MEDIA_QUERY,
    TABLET_WIDTH,
    TABLET_MEDIA_QUERY,
    MOBILE_WIDTH,
    MOBILE_MEDIA_QUERY,
} from "typography-breakpoint-constants"

export const TwoColumnsText = styled("p")`
  column-count: 2;
  column-gap: 127px;
  column-width: 247px;
  ${DEFAULT_MEDIA_QUERY} {
    column-gap: 100px;
  }
  ${TABLET_MEDIA_QUERY} {
      max-width: ${TABLET_WIDTH};
      column-count: 1;
  }
  ${MOBILE_MEDIA_QUERY} {
      max-width: ${MOBILE_WIDTH};
  }
`
