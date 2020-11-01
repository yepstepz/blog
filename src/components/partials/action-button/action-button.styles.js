import styled from '@emotion/styled'

import { LG, MAIN_POST_TYPE, MAIN_PODCAST_TYPE } from '../../../utils/constants'
import { isPodcastsType, isMain } from '../../../utils/helpers'

export const ActionButtonCaptionStyled = styled.span`
    font-family: 'Open Sans Bold', sans-serif;
    font-size: 20px;
    margin-left: 20px;
    display: inline-block;
    ${({ postType }) => isMain(postType) &&`
        font-size: 30px;
        margin-right: 30px;
    `}
`

export const ActionButtonCaptionPodcastStyled = styled(ActionButtonCaptionStyled)``

export const ActionButtonIconStyled = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    border: 0;
    ${({ theme, postType }) => `
        background: ${theme.buttonColor};
        path {
          fill: ${theme.buttonIconColor};
        }
        ${isMain(postType) ? `
            transition: 0.3s all;
            width: 108px;
            height: 108px;
            max-width: 104px;
            max-height: 104px;
        `: ''};
    `}
`

export const ActionButtonPodcastIconStyled = styled(ActionButtonIconStyled)``

export const ActionButtonStyled = styled.a`
    display: flex;
    margin: 0;
    padding: 0;
    background: none;
    font-size: 0;
    justify-content: flex-start;
    align-items: center;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    ${({ theme, size, postType }) => `
        color: ${theme.mainFontColor};
        &:hover {
            ${ActionButtonCaptionStyled} {
                color: ${theme.buttonOnHover};
            }
            ${ActionButtonCaptionPodcastStyled} {
                color: ${theme.buttonPodcastsOnHover};
            }
            ${ActionButtonPodcastIconStyled} {
                background: ${theme.buttonPodcastsOnHover};
            }
            ${ActionButtonIconStyled} {
                background: ${theme.buttonOnHover}
                ${isMain(postType) ? `
                     width: 108px;
                     height: 108px; 
                     max-width: initial;
                     max-height: initial;
                `: ''}
            }
        }
    `}
`
