import React from 'react'

import {
    CategoryWrapperStyled,
    CategoryLinkStyled
} from './categories.styles'

export const Category = ({
    small,
    name,
    uri,
    id
}) => (
    <CategoryWrapperStyled>
        <CategoryLinkStyled href={uri} key={id} small={small}>
            {name}
        </CategoryLinkStyled>
    </CategoryWrapperStyled>
)
