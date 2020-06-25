import React from 'react'
import { Global } from '@emotion/core'

import { Logo } from '../logo'
import TopMenu from '../top-menu'
import SEO from '../seo'
import {wordpressStyles} from "../../styles/wordpress-styles";

export const Header = ({
    title = "default title"
}) => (
    <header>
        <SEO title={title} />
        <Global
            styles={wordpressStyles}
        />
        <TopMenu/>
    </header>
)
