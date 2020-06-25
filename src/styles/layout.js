import React from "react"
import styled from "@emotion/styled"

import {
    LARGE_DISPLAY_MEDIA_QUERY,
    DEFAULT_WIDTH,
    DEFAULT_MEDIA_QUERY,
    TABLET_WIDTH,
    TABLET_MEDIA_QUERY,
    MOBILE_WIDTH,
    MOBILE_MEDIA_QUERY,
} from "typography-breakpoint-constants"

export const Wrapper = styled("main")`
  margin: 0 auto 0 247px;
  width: 1043px;
  ${LARGE_DISPLAY_MEDIA_QUERY} {
     margin: 0 auto;
     padding: 0 40px;
  }
  ${DEFAULT_MEDIA_QUERY} {
     max-width: ${DEFAULT_WIDTH};
  }
  ${TABLET_MEDIA_QUERY} {
      max-width: ${TABLET_WIDTH};
  }
  ${MOBILE_MEDIA_QUERY} {
      max-width: ${MOBILE_WIDTH};
  }
`
