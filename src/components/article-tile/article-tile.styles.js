import styled from '@emotion/styled'

import { CategoryWrapperStyled } from '../partials/categories/categories.styles'
import { ShortTextStyled } from '../partials/short-text/short-text.styles'
import { TitleStyled } from '../partials/title/title.styles'
import { ActionButtonIconStyled } from '../partials/action-button/action-button.styles'
import {
    MAX_LAPTOP_MEDIA,
    LAPTOP_WIDTH,
    MAX_TABLET_MEDIA,
    TABLET_WIDTH,
    MAX_MOBILE_MEDIA,
    MOBILE_WIDTH
} from '../../utils/constants'

export const ArticleTileStyled = styled.article`
    ${ShortTextStyled} {
       min-height: 60px;
    }
    ${({ tileWidth }) => `
        width: 100%;
        ${ tileWidth ? `max-width: ${tileWidth};` : ''}
    `}
`

export const LargeArticleTileStyled = styled(ArticleTileStyled)`
    ${ TitleStyled } {
        margin-bottom: 35px;
    }
    ${ShortTextStyled} {
        margin-bottom: 40px;
    }
    ${ CategoryWrapperStyled } {
        margin-right: 10px;
    }
`

export const MediumArticleTileStyled = styled(ArticleTileStyled)`
    ${ TitleStyled } {
        margin-bottom: 25px;
    }
    ${ShortTextStyled} {
       margin-bottom: 30px;
    }
`

export const ExtraSmallArticleTileStyled = styled(ArticleTileStyled)`
    &:hover {
       ${({ theme }) => `
          ${ TitleStyled } {
            color: ${theme.buttonPodcastsOnHover};
          }
          ${ ActionButtonIconStyled } {
            background: ${theme.buttonPodcastsOnHover};
          }
       `}
    }
`
