import React from 'react'

import { SM, MD, LG } from '../../utils/constants'

import { LargeArticleTile } from './lg-article-tile'
import { MediumArticleTile } from './md-article-tile'
import { SmallArticleTile} from './sm-article-tile'

export const ArticleTile = ({ size, ...rest }) => {
    if (size) {
        switch (size) {
            case SM:
                return <SmallArticleTile {...rest} />;
            case MD:
                return <MediumArticleTile {...rest} />;
            case LG:
                return <LargeArticleTile {...rest} />;
            default:
                return <LargeArticleTile {...rest} />;
        }
    }

    return null
}
