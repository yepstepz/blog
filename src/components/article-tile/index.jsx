import React from 'react'

import { XS, MD, LG } from '../../utils/constants'

import { LargeArticleTile } from './lg-article-tile'
import { MediumArticleTile } from './md-article-tile'
import { ExtraSmallArticleTile } from './xs-article-tile'

export const ArticleTile = ({ size, ...rest }) => {
    if (size) {
        switch (size) {
            case XS:
                return <ExtraSmallArticleTile {...rest} />
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
