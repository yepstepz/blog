import React from 'react'
import {css} from '@emotion/core'

import { Title } from '../partials/title'
import { ShortText } from '../partials/short-text'
import { ActionButton } from '../partials/action-button'
import { findTypeOfPost } from '../../utils/helpers'
import { MD } from '../../utils/constants'

import { LargeArticleTileStyled } from './article-tile.styles'
import { RowStyled } from "../partials/common.styles";

import { Category } from "../partials/categories";
import { TagCollection } from "../partials/tags";

export const LargeArticleTile = ({ title, excerpt, uri, categories, type, tags, hideCategory = false, ...rest  }) => (
    <LargeArticleTileStyled {...rest}>
        <RowStyled
            jc={'flex-start'}
            css={css`
                margin-bottom: 30px;
            `}
        >
            { !hideCategory && <Category {...categories.nodes[0]} /> }
            <TagCollection tags={tags?.nodes}/>
        </RowStyled>
        <Title href={uri} size={MD}>{ title }</Title>
        <ShortText text={excerpt} />
        <ActionButton type={type || findTypeOfPost(categories)} />
    </LargeArticleTileStyled>
)
