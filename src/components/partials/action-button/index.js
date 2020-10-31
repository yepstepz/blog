import React from 'react'

import Ic24Speaker from '../../../assets/svg/ic_24_speaker.inline.svg'
import Ic24Stack from '../../../assets/svg/ic_24_stack.inline.svg'
import { isPodcastsType } from '../../../utils/helpers'

import {
    ActionButtonStyled,
    ActionButtonIconStyled,
    ActionButtonCaptionStyled
} from './action-button.styles'

const getIconByType = (type) => isPodcastsType(type) ? <Ic24Speaker /> : <Ic24Stack/>
const getCaptionByType = (type) => isPodcastsType(type) ? 'Слушать' : 'Читать'

export const ActionButtonIcon = ({
     size,
     type
}) => (
    <ActionButtonIconStyled
        size={size}
    >
        {
            getIconByType(type)
        }
    </ActionButtonIconStyled>
)

export const ActionButton = ({ type, size }) => (
    <ActionButtonStyled
        podcastType={isPodcastsType(type)}
        size={size}
    >
        <ActionButtonIcon
            size={size}
            type={type}
        />
        <ActionButtonCaptionStyled
            size={size}
        >
            {getCaptionByType(type)}
        </ActionButtonCaptionStyled>
    </ActionButtonStyled>
)

ActionButton.defaultProps = {
    big: false
}
