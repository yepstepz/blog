import React from 'react'
import { css } from '@emotion/core'

import { Title } from '../../partials/title'
import { RowStyled } from '../../partials/common.styles'
import {ActionButton, ActionButtonIcon} from '../../partials/action-button'
import { ActionButtonStyled } from '../../partials/action-button/action-button.styles'
import { findTypeOfPost } from '../../../utils/helpers'
import { XS } from '../../../utils/constants'

import { ExtraSmallArticleTileStyled } from '../article-tile.styles'

export const ExtraSmallArticleTile = ({
    title,
    uri,
    handleClick,
    articleTileSize,
    postType,
    ...rest
}) => (
    <ExtraSmallArticleTileStyled {...rest}>
        <RowStyled
            jc="flex-start"
        >
            <ActionButton onClick={handleClick} postType={postType} articleTileSize={articleTileSize} href={uri} />
            <Title
                href={uri}
                size={XS}
                css={css`
                  max-width: 205px;
                  margin-left: 20px;
                `}
            >
                { title }
            </Title>
        </RowStyled>
    </ExtraSmallArticleTileStyled>
)
