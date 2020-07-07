import React from 'react'
import styled from "@emotion/styled"

import {
    MIN_MOBILE_MEDIA_QUERY,
    MAX_TABLET_MEDIA_QUERY,
    MAX_MOBILE_MEDIA_QUERY
} from "../../utils/breakpoint-constants";

export const PersonalInfo = styled.section(`
        position: relative;
        padding: 2.5rem 2rem;
        ${MAX_TABLET_MEDIA_QUERY} {
            padding: 1.5rem 1.25rem;
            width: calc(40% - 0.5rem);
        }
        ${MAX_MOBILE_MEDIA_QUERY} {
            width: 100%;
        }
`)

export const Avatar = styled.div(
    `
        width: 75px;
        height: 75px;
        border-radius: 50%;
        overflow: hidden;
    `
)
