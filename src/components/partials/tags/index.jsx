import React from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import { normalizePath } from '../../../utils/get-url-path'

import { TagStyled } from './tags.styles'

export const Tag = ({
    uri,
    name
}) => <TagStyled to={normalizePath(uri)}>#{name}</TagStyled>

export const TagCollection = ({ tags }) => (
    <Flex>
        {
            tags.map((tag, i) => <Box ml={i && 10}><Tag {...tag} /></Box>)
        }
    </Flex>
)
