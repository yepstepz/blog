import React from 'react'
import { Global, css } from '@emotion/core'

import { Logo } from '../logo'
import TopMenu from '../top-menu'
import SEO from '../seo'
import {wordpressStyles} from "../../styles/wordpress-styles";
export const Header = ({
    title = "default title",
    description="default description"
}) => (
    <header>
        <SEO
            title={title}
            description={description}
        />
        <Global
            styles={css`
               ${wordpressStyles}
            `}
        />
    </header>
)
