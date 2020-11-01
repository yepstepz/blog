import React from 'react'

import { XS, MD, LG } from '../../../utils/constants'
import { isMain } from '../../../utils/helpers'
import { LeadMainPost } from '../../lead-main-post'

import { LargeArticleTile } from './lg-article-tile'
import { MediumArticleTile } from './md-article-tile'
import { ExtraSmallArticleTile } from './xs-article-tile'

export const ArticleTileContent = (props) => {
    if (isMain(props.postType)) {
        return <LeadMainPost {...props} />
    }

    if (props.articleTileSize) {
        switch (props.articleTileSize) {
            case XS:
                return <ExtraSmallArticleTile {...props} />
            case MD:
                return <MediumArticleTile {...props} />;
            case LG:
                return <LargeArticleTile {...props} />;
            default:
                return <LargeArticleTile {...props} />;
        }
    }

    return null
}
