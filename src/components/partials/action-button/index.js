import React, { useCallback } from 'react'

import Ic24Speaker from '../../../assets/svg/ic_24_speaker.inline.svg'
import Ic24Stack from '../../../assets/svg/ic_24_stack.inline.svg'
import { isPodcastsType } from '../../../utils/helpers'
import { normalizePath } from '../../../utils/get-url-path'
import { XS } from '../../../utils/constants'

import {
    ActionButtonStyled,
    ActionButtonIconStyled,
    ActionButtonCaptionStyled,
    ActionButtonPodcastIconStyled,
    ActionButtonCaptionPodcastStyled
} from './action-button.styles'

const CAPTION_POST = 'Читать'
const CAPTION_PODCAST = 'Слушать'

export const ActionButtonIcon = ({
     postType,
}) => {


    if (isPodcastsType(postType)) {
        return (
            <ActionButtonPodcastIconStyled
                postType={postType}
            >
                <Ic24Speaker />
            </ActionButtonPodcastIconStyled>
        )
    }
    return (
        <ActionButtonIconStyled
            postType={postType}
        >
            <Ic24Stack />
        </ActionButtonIconStyled>
    );
}

export const ActionButtonCaption = ({
    postType
}) => {

    if (isPodcastsType(postType)) {
        return (
            <ActionButtonCaptionPodcastStyled
                postType={postType}
            >
                { CAPTION_PODCAST }
            </ActionButtonCaptionPodcastStyled>
        )
    }
    return (
        <ActionButtonCaptionStyled
            postType={postType}
        >
            { CAPTION_POST }
        </ActionButtonCaptionStyled>
    );
}

export const ActionButton = ({ postType, articleTileSize, href, onClick }) => (
        <ActionButtonStyled
            href={normalizePath(href)}
            as={isPodcastsType(postType) ? 'button' : 'a'}
            onClick={onClick}
        >
            <ActionButtonIcon
                postType={postType}
            />
            {
                articleTileSize !== XS &&
                <ActionButtonCaption
                    postType={postType}
                />
            }
        </ActionButtonStyled>
)

ActionButton.defaultProps = {
    postType: '',
    href: '',
    articleTileSize: '',
    onClick: () => {}
}
