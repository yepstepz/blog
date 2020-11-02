import React, { useState } from 'react'

import { normalizePath } from '../../utils/get-url-path'

import { ItemLinkStyled, ItemWrapperStyled } from './header.styles'

export const ItemLink = ({ path, active, name}) => {

    const [ isActive, setIsActive ] = useState(false)
    return (
        <ItemWrapperStyled>
            <ItemLinkStyled
                to={normalizePath(path)}
                getProps={(props) => setIsActive(props.isCurrent)}
                active={isActive}
            >
                { name }
            </ItemLinkStyled>
        </ItemWrapperStyled>
    )
}
