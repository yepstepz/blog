import styled from '@emotion/styled'

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

export const LeadMainContentStyled = styled.section`
    max-width: 560px;
`
