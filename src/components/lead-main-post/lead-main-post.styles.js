import styled from '@emotion/styled'

import { Category } from '../partials/categories'
import { divider } from '../partials/common.styles'

export const LeadMainPostStyled = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 150px;
    ${({theme}) => `
        ${divider(theme)};
    `}
`

export const LeadMainCategory = styled(Category)`
    margin-bottom: 30px;
`

export const LeadMainContentStyled = styled.section`
    max-width: 560px;
`
