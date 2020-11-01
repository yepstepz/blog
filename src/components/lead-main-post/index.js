import React from 'react'

import { ActionButton } from '../partials/action-button'
import { Title } from '../partials/title'
import { ShortText } from '../partials/short-text'
import { LG } from '../../utils/constants'
import { isPodcastsType } from '../../utils/helpers'

import {
    LeadMainPostStyled,
    LeadMainContentStyled,
    LeadMainCategory
} from './lead-main-post.styles'

export const LeadMainPost = (props) => {
    const {
        uri,
        postType,
        id,
        title,
        categories,
        excerpt,
        handleClick,
        articleTileSize,
        number,
        season
    } = props

    return (
        <LeadMainPostStyled key={id}>
            <LeadMainContentStyled>
                { categories ?
                    <LeadMainCategory {...categories.nodes[0]} /> :
                    <LeadMainCategory
                        name="Подкасты"
                        uri={'/podcasts'}
                        id={id}
                    />
                }
                { isPodcastsType(postType) && <div>Сезон {season.number}, эпизод {number}</div>}
                <Title href={uri} size={LG}>{title}</Title>
                <ShortText text={excerpt} />
            </LeadMainContentStyled>
            <ActionButton onClick={handleClick} postType={postType} articleTileSize={articleTileSize} href={uri} />
        </LeadMainPostStyled>
    )
}
