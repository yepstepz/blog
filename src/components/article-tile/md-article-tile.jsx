import React from 'react'
import { Flex, Box } from '@rebass/grid/emotion'
import { css } from '@emotion/core'

import { Title } from '../partials/title'
import { Category } from '../partials/categories'
import { ShortText } from '../partials/short-text'
import { ActionButton } from '../partials/action-button'
import { TagCollection } from '../partials/tags'
import { findTypeOfPost } from '../../utils/helpers'
import { SM } from '../../utils/constants'

import { MediumArticleTileStyled } from './article-tile.styles'

export const MediumArticleTile = ({ title, excerpt, uri, categories, type, tags  }) => (
    <MediumArticleTileStyled>
        <Flex
            css={css`
                max-width: 360px;
            `}
        >
            <Category
                css={css`
                    margin-right: 10px;
                `}
                {...categories.nodes[0]}
            />
            <TagCollection tags={tags?.nodes}/>
        </Flex>
        <Title href={uri} size={SM}>{ title }</Title>
        <ShortText text={excerpt} />
        <ActionButton type={type || findTypeOfPost(categories)} />
    </MediumArticleTileStyled>
)
