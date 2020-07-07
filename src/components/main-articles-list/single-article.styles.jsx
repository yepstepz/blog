import React from 'react'
import styled from '@emotion/styled'

import { Link } from "gatsby";

import {
    MAX_MOBILE_MEDIA_QUERY,
    MAX_DEFAULT_MEDIA_QUERY
} from "../../utils/breakpoint-constants";

export const ArticlesRow = styled.li(`
    display: flex;
    justify-content: space-around;
    ${ MAX_MOBILE_MEDIA_QUERY } {
        flex-direction: column;
    }
    :not(:last-child) {
        margin-bottom: 120px;
        ${ MAX_DEFAULT_MEDIA_QUERY } {
            margin-bottom: 60px;
        }
    }
`)

export const LeftColumn = styled.div(`
    flex: 1 0 170px;
    ${ MAX_MOBILE_MEDIA_QUERY } {
        flex: 1 0 0;
        margin-bottom: 5px;
    }
`)

export const RightColumn = styled.div(`
    width: 100%;
`)


export const StyledTitle = styled.h1(`
   line-height: 1.4;
   font-size: 21px;
`)

export const ArticlePreview = styled.div(`
    font-size: 15px;
    letter-spacing: 0.5px;
    min-height: 75px;
`)

export const StyledLink = styled(Link)(`
    text-decoration: none;
    color: initial;
`)

export const ReadAll = styled(StyledLink)(`
    font-family: "Open Sans", sans-serif;
    margin-top: 16px;
    font-weight: 600;
    font-size: 15px;

    &:hover {
        text-decoration: underline;
    }
`)
