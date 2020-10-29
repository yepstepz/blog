import styled from '@emotion/styled'

import { LG } from '../../../utils/constants'

export const ActionButtonCaptionStyled = styled.span`
    font-family: 'Open Sans Bold', sans-serif;
    font-size: 20px;
    margin-left: 20px;
    display: inline-block;
    transition: 0.3s all;
   ${({ size }) => size === LG &&`
        font-size: 30px;
        margin-right: 30px;
   `}
`

export const ActionButtonIconStyled = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    transition: 0.3s all;
    ${({ theme, size }) => `
        background: ${theme.buttonColor};
        ${size === LG ? `
            width: 108px;
            height: 108px;
            max-width: 104px;
            max-height: 104px;
        `: ''}
    `}
`

export const ActionButtonStyled = styled.button`
    display: flex;
    margin: 0;
    padding: 0;
    background: none;
    font-size: 0;
    justify-content: flex-start;
    align-items: center;
    border: 0;
    cursor: pointer;
    ${({ theme, size, podcastType }) => `
        &:hover {
            color: ${theme.buttonOnHover};
            ${podcastType ? `
                color: ${theme.buttonPodcastsOnHover};
            ` : ''}
            ${ActionButtonIconStyled} {
                background: ${theme.buttonOnHover};
                border: 0;
                ${podcastType ? `
                    background: ${theme.buttonPodcastsOnHover};
                `: ''}
                ${size === LG ? `
                     width: 108px;
                     height: 108px; 
                     max-width: initial;
                     max-height: initial;
                `: ''}
            }
        }
    `}
`
