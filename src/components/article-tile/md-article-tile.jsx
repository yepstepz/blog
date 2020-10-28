import React from 'react'

import { Title } from '../partials/title'
import { Category } from '../partials/categories'
import { ShortText } from '../partials/short-text'
import { ActionButton } from '../partials/action-button'
import { findTypeOfPost } from '../../utils/helpers'
import { SM } from '../../utils/constants'

import { MediumArticleTileStyled } from './article-tile.styles'

export const MediumArticleTile = ({ title, excerpt, uri, categories, type  }) => (
    <MediumArticleTileStyled>
        <Category {...categories.nodes[0]} />
        <Title href={uri} size={SM}>{ title }</Title>
        <ShortText text={excerpt} />
        <ActionButton type={type || findTypeOfPost(categories)} />
    </MediumArticleTileStyled>
)
