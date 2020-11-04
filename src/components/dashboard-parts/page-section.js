import React from 'react'
import {css} from '@emotion/core'

import { divider } from '../partials/common.styles'


export const PageSection = ({ children, className, pd = '80px 0 120px' }) => (
    <section
        className={className}
        css={(theme) => (css`
            padding: ${pd};
            &:not(:last-child) {
                ${divider(theme)};
            }
        `)}
    >
        {children}
    </section>
)
