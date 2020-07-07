import React from 'react'
import { Link } from 'gatsby'

import {
    TagList,
    TagItem,
    StyledLink
} from './index.styles'

export const TagsComponent = ({ tags = [] }) => {
    console.log(tags)

    if (tags.length) {
        return (
            <TagList>
                { tags
                    .map((tag) => ({
                        ...tag,
                        name: `#${tag.name}`
                    }))
                    .map(({ id, path, name }) => (
                        <TagItem>
                            <StyledLink to={path}>{name}</StyledLink>
                        </TagItem>
                    ))}
            </TagList>
        )
    }

    return null
}
