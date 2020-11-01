import React, { useContext, useCallback } from 'react'

import { isPodcastsType } from '../../utils/helpers'
import { ArticleTileContent } from './article-tile-content'
import { PodcastTile } from './podcast-tile'

export const ArticleTileComponent = (props) => {
    const {
        postType
    } = props

    if (isPodcastsType(postType)) {
        return (
            <PodcastTile {...props} />
        )
    }

    return <ArticleTileContent {...props} />
}
