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

export const EpisodeNumberStyled = styled.div`
    ${({ theme }) => `
        color: ${theme.mainFontColor};
    `}
`

export const postStyles = (theme) => `
    .content {
        p, li {
            font-family: 'Playfair Display Regular', serif;
            font-size: 24px;
            line-height: 1.67;
            letter-spacing: 0.7px;
            margin-bottom: 20px;
            color: ${theme.mainFontColor};
        }
        ul {
            text-indent: 10px;
            list-style: none;
            li:before { 
                content: '∙'; 
                margin-left: -20px; 
                margin-right: 10px; 
            } 
        }
    }
    
    div.gatsby-image-wrapper {
        max-width: 100%;
        padding: 0;
        margin: 40px 0;
    }
    
    .wp-block-image.size-large img {
        margin-bottom: 0;
    }
    
    .wp-block-image.size-large figcaption {
        color: #616161;
        font-style: italic;
        font-size: 14px;
    }
    
    iframe {
        margin-bottom: 0;
    }
    
    figure.wp-block-embed-youtube {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    
    .wp-block-pullquote blockquote {
        border-left: 4px solid ${theme.mainFontColor};
        margin: 40px 0;
        padding-left: 20px;
    }
    
    cite {
        color: ${theme.mainFontColor};
    }
    
    h1 {
        font-family: 'Open Sans Bold', serif;
        font-size: 56px;
        margin: 0 0 60px;
        color: ${theme.mainFontColor};
    }
    
    h2 {
        font-family: 'Open Sans Semi Bold', serif;
        font-weight: 400;
        font-size: 48px;
        margin: 80px 0 60px;
        color: ${theme.mainFontColor};
    }
    
    h3 {
      font-family: 'Open Sans Semi Bold', serif;
      font-size: 25px;
      margin: 60px 0 40px;
      color: ${theme.mainFontColor};
    }
`
