import styled from '@emotion/styled'

import { isMain } from '../../../utils/helpers'
import { MIN_LAPTOP_MEDIA } from '../../../utils/constants'

export const ActionButtonCaptionStyled = styled.span`
    font-family: 'Open Sans Bold', sans-serif;
    font-size: 20px;
    margin-left: 20px;
    display: inline-block;
    ${ MIN_LAPTOP_MEDIA } {
        ${({ postType }) => isMain(postType) &&`
            font-size: 30px;
            margin-right: 10px;
            margin-left: 40px;
        `}
    }
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
        ${ MIN_LAPTOP_MEDIA } {
            ${isMain(postType) ? `
                transition: 0.3s all;
                width: 108px;
                height: 108px;
                max-width: 104px;
                max-height: 104px;
            `: ''};
        }
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
