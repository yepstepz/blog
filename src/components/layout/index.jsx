import React from "react"
import { Global, css } from '@emotion/core'

import { Header } from '../header'

import { Wrapper, BackgroundWrapperStyles } from './layout.styles'
import { globalStyles } from './global.styles'
import { postStyles } from '../partials/common.styles'
import { isPostPage } from '../../utils/constants'
import { useTheme } from 'emotion-theming'

import "../../assets/style.css"

const Layout = ({ children, layoutType }) => {
    const theme = useTheme()
    return (
        <BackgroundWrapperStyles>
            <Wrapper>
                <Global styles={css`
                    ${globalStyles}
                    ${isPostPage(layoutType) ? postStyles(theme) : ''}
                `}/>
                <div mb={10} mt={20}>
                    <Header/>
                </div>

                <div>{children}</div>
            </Wrapper>
        </BackgroundWrapperStyles>
    );
}

export { Layout }

export default Layout
