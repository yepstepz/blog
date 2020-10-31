import React from 'react'

import { Category } from '../partials/categories'
import { ActionButton } from '../partials/action-button'
import { Title } from '../partials/title'
import { ShortText } from '../partials/short-text'
import { LG } from '../../utils/constants'
import { findTypeOfPost } from '../../utils/helpers'

import {
    LeadMainPostStyled,
    LeadMainContentStyled,
    LeadMainCategory
} from './lead-main-post.styles'

export const LeadMainPost = ({ post, type }) => {
    const {
        uri,
        id,
        title,
        categories,
        excerpt
    } = post

    return (
        <LeadMainPostStyled key={id}>
            <LeadMainContentStyled>
                <LeadMainCategory {...categories.nodes[0]} />
                <Title href={uri} size={LG}>{title}</Title>
                <ShortText text={excerpt} />
            </LeadMainContentStyled>
            <ActionButton type={type || findTypeOfPost(categories)} size={LG} />
        </LeadMainPostStyled>
    )
}
