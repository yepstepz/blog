import React from 'react'
import styled from '@emotion/styled'

import { Category } from '../partials/categories'

export const PageSectionCategory = (props) => (
    <PageSectionCategoryStyled {...props} />
)


const PageSectionCategoryStyled = styled(Category)`
    margin-bottom: 60px;
`
