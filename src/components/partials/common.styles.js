import styled from '@emotion/styled'

export const divider = (theme) => `
    border-bottom: 2px solid ${theme.headerDivider};
`

export const RowStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${({ jc, ai }) => `
        justify-content: ${jc ? jc : 'space-between'};
        align-items: ${ai ? ai : 'center'};
    `}
`

export const ColumnStyled = styled.div`
    display: flex;
    flex-direction: column;
    ${({ width, ai, flex }) => `
        width: ${width ? width : 'auto'};
        align-items: ${ai ? ai : 'center'};
        flex: ${flex ? flex : '0 0 auto'};
    `}
`
