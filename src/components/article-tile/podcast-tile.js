import React, { useContext, useCallback } from 'react'

import { EpisodeContext } from '../context/episode-provider.context'
import { MAIN_PODCAST_TYPE } from '../../utils/constants'

import { ArticleTileContent } from './article-tile-content'

export const PodcastTile = (props) => {

    const context = useContext(EpisodeContext)

    const {
       setCurrentPlaying
    } = context

    const {
        title,
        description,
        slug,
        enclosureUrl
    } = props

    const handleClick = () => {
        setCurrentPlaying(enclosureUrl)
    }

    return (
        <ArticleTileContent
            handleClick={handleClick}
            title={title}
            excerpt={description}
            uri={`/podcasts/${slug}`}
            {...props}
        />
    )
}
