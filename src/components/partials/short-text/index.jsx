import React from 'react'

import { truncate } from '../../../utils/helpers'

import { ShortTextStyled } from './short-text.styles'

export const ShortText = ({ text }) => (
    <ShortTextStyled className='snippet' dangerouslySetInnerHTML={{ __html: truncate(text, 90) }}/>
)
