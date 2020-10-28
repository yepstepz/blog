import styled from '@emotion/styled'

export const CategoryWrapperStyled = styled.div`
  margin-bottom: 30px;
`

export const CategoryLinkStyled = styled.a`
  text-decoration: none;
  font-family: 'Open Sans Extra Bold', sans-serif;
  font-size: 15px;
  ${({ theme }) => `
        color: ${theme.mainFontColor};
  `}
`
