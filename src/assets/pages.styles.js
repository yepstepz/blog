import styled from '@emotion/styled'

import { ArticleTileStyled, LargeArticleTileStyled, MediumArticleTileStyled } from '../components/article-tile/article-tile.styles'
import { divider } from '../components/partials/common.styles'

export const DashboardStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 80px 0 120px;
    
    &:not(:last-child) {
        ${({ theme }) => `
            ${divider(theme)}
        `}
    }
`

export const ImportantArticleDashboardStyled = styled(DashboardStyled)` 
    & ${MediumArticleTileStyled} {
        margin-bottom: 90px;
        &:nth-child(2n+1) {
            margin-right: 100px;
        } 
    }
`
