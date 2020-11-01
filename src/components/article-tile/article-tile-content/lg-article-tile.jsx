import React from 'react'
import {css} from '@emotion/core'

import { Title } from '../../partials/title'
import { ShortText } from '../../partials/short-text'
import { ActionButton } from '../../partials/action-button'
import { findTypeOfPost } from '../../../utils/helpers'
import { MD } from '../../../utils/constants'

import { LargeArticleTileStyled } from '../article-tile.styles'
import { RowStyled } from "../../partials/common.styles";

import { Category } from "../../partials/categories";
import { TagCollection } from "../../partials/tags";

export const LargeArticleTile = ({
    id,
    title,
    excerpt,
    uri,
    categories,
    tags,
    hideCategory = false,
    hideTitle = false,
    handleClick,
    articleTileSize,
    postType,
    ...rest
}) => (
    <LargeArticleTileStyled {...rest}>
        <RowStyled
            jc="flex-start"
            css={css`
                margin-bottom: 30px;
            `}
        >
            { !hideCategory && <Category {...categories.nodes[0]} /> }
            { tags && <TagCollection id={id} tags={tags?.nodes}/> }
        </RowStyled>
        { !hideTitle && <Title href={uri} size={MD}>{ title }</Title>}
        { excerpt && <ShortText text={excerpt} /> }
        <ActionButton onClick={handleClick} postType={postType} articleTileSize={articleTileSize} href={uri} />
    </LargeArticleTileStyled>
)
