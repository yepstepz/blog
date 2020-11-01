import React from 'react'

import { normalizePath } from '../../../utils/get-url-path'

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
        <CategoryLinkStyled href={normalizePath(uri)} key={id} size={size}>
            {name}
        </CategoryLinkStyled>
    </CategoryWrapperStyled>
)
