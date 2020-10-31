import React from 'react'
import { css } from '@emotion/core'

import { normalizePath } from '../../../utils/get-url-path'
import { RowStyled } from '../common.styles'

import { TagStyled } from './tags.styles'

export const Tag = ({
    uri,
    name,
    ...rest
}) => <TagStyled to={normalizePath(uri)} {...rest}>#{name}</TagStyled>

export const TagCollection = ({ tags }) => (
    <RowStyled>
        {
            tags.map((tag, i) =><Tag css={css`margin-right: 10px;`} {...tag} />)
        }
    </RowStyled>
)
