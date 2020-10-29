import React from 'react'

import {
    CategoryWrapperStyled,
    CategoryLinkStyled
} from './categories.styles'

export const Category = ({
    size,
    name,
    uri,
    id,
    className
}) => (
    <CategoryWrapperStyled className={className}>
        <CategoryLinkStyled href={uri} key={id} size={size}>
            {name}
        </CategoryLinkStyled>
    </CategoryWrapperStyled>
)
