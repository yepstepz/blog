import styled from '@emotion/styled'

import { ActionButtonStyled } from '../partials/action-button/action-button.styles'

export const ArticleTileStyled = styled.article`
    ${ActionButtonStyled} {
        margin-top: 40px;
    }
`

export const LargeArticleTileStyled = styled(ArticleTileStyled)`
    min-width: 720px;
    width: 720px;
`

export const MediumArticleTileStyled = styled(ArticleTileStyled)`
    min-width: 540px;
    width: 540px;
`

export const SmallArticleTileStyled = styled(ArticleTileStyled)`
    min-width: 340px;
    width: 340px;
`
