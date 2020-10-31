import styled from '@emotion/styled'

import { CategoryWrapperStyled } from '../partials/categories/categories.styles'
import { ShortTextStyled } from '../partials/short-text/short-text.styles'
import { TitleStyled } from '../partials/title/title.styles'
import { ActionButtonIconStyled } from '../partials/action-button/action-button.styles'

export const ArticleTileStyled = styled.article`
    ${ShortTextStyled} {
       min-height: 60px;
    }
    ${({ width }) => `
            width: 100%;
            ${ width ? `max-width: ${width};` : ''}
    `}
`

export const LargeArticleTileStyled = styled(ArticleTileStyled)`
    ${ShortTextStyled} {
       margin-bottom: 30px;
    }
    ${ CategoryWrapperStyled } {
        margin-right: 10px;
    }
`

export const MediumArticleTileStyled = styled(ArticleTileStyled)`
    ${ShortTextStyled} {
       margin-bottom: 20px;
    }
`

export const SmallArticleTileStyled = styled(ArticleTileStyled)``

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
