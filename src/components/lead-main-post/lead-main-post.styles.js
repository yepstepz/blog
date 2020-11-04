import styled from '@emotion/styled'

import { Category } from '../partials/categories'
import { divider } from '../partials/common.styles'
import { MAX_LAPTOP_MEDIA, MIN_LAPTOP_MEDIA } from '../../utils/constants'
import { TitleStyled } from '../partials/title/title.styles'
import { ShortTextStyled } from '../partials/short-text/short-text.styles'

export const LeadMainPostStyled = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 150px;
    padding-top: 55px;
    ${({theme}) => `
        ${divider(theme)};
    `}
    ${ TitleStyled } {
        margin-top: 10px;
    }
    ${MAX_LAPTOP_MEDIA} {
        padding-bottom: 55px;
        flex-direction: column;
        align-items: flex-start;
        ${ ShortTextStyled } {
            margin-bottom: 30px;
        }
    }

    
`

export const LeadMainCategory = styled(Category)`
    margin-bottom: 15px;
`

export const LeadMainContentStyled = styled.section`
    max-width: 560px;
`
