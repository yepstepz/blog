import React from 'react'
import styled from "@emotion/styled";

import { MAX_MOBILE_MEDIA_QUERY } from '../../../utils/breakpoint-constants'

export const StyledDay = styled.span(`
    font-size: 90px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    height: 100%;
    line-height: 1;
    color: rgb(41, 41, 41);
    transition: all 0.35s ease-in-out 0s;
    ${ MAX_MOBILE_MEDIA_QUERY } {
      font-size: 25px;
      width: initial;
      line-height: 1;
      margin-right: 3px;
    }
`)

export const StyledMonth = styled.span(`
    font-size: 13px;
    font-weight: 400;
    display: block;
    margin-top: 12px;
    text-transform: uppercase;
    ${ MAX_MOBILE_MEDIA_QUERY } {
      margin: 0;
      font-size: 17px;
      line-height: 1;
      text-transform: none;
    }
`)
