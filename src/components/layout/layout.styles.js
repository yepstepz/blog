import styled from '@emotion/styled'

import {
    DESKTOP_WIDTH,
    LAPTOP_WIDTH,
    TABLET_WIDTH,
    MOBILE_WIDTH,

    MIN_DESKTOP_MEDIA,
    MIN_LAPTOP_MEDIA,
    MIN_TABLET_MEDIA,
    MIN_MOBILE_MEDIA,

    MAX_MOBILE_MEDIA
} from "../../utils/constants";

export const Wrapper = styled.main`
    margin: 0 auto;
    ${MAX_MOBILE_MEDIA} {
        width: 100%;
        padding: 0 20px;
    }
    ${MIN_MOBILE_MEDIA} {
        width: ${MOBILE_WIDTH}px;
    }
    ${MIN_TABLET_MEDIA} {
        width: ${TABLET_WIDTH}px;
    }
    ${MIN_LAPTOP_MEDIA} {
        width: ${LAPTOP_WIDTH}px;
    }
    ${MIN_DESKTOP_MEDIA} {
        width: ${DESKTOP_WIDTH}px;
    }
`

export const BackgroundWrapper = styled.div`
    ${({ theme }) => `
        background: ${theme.background};
    `}
`
