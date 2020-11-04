import React from 'react'
import styled from '@emotion/styled'

import { Category } from '../partials/categories'
import { MAX_LAPTOP_MEDIA } from '../../utils/constants'

export const PageSectionCategory = (props) => (
    <PageSectionCategoryStyled {...props} />
)


const PageSectionCategoryStyled = styled(Category)`
    margin-bottom: 60px;
    ${ MAX_LAPTOP_MEDIA } {
      margin-top: 60px;
    }
`
