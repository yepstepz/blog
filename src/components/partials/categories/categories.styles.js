import styled from '@emotion/styled'

import { LG } from '../../../utils/constants'

export const CategoryWrapperStyled = styled.div`
  margin-bottom: 30px;
`

export const CategoryLinkStyled = styled.a`
  text-decoration: none;
  font-family: 'Open Sans Extra Bold', sans-serif;
  font-size: 15px;
  ${({ theme, size }) => `
        color: ${theme.mainFontColor};
        ${size === LG ? `
            font-size: 40px;
        `: ''}
  `}
`
