import React from 'react'

import { TitleWrapper, TitleStyled } from './title.styles'

export const Title = ({ href, ...rest }) => (
    <TitleWrapper href={href} as={ href ? 'a' : 'span'}>
        <TitleStyled {...rest} />
    </TitleWrapper>
)
