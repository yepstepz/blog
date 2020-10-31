import React from "react"
import { Global } from '@emotion/core'

import { Header } from '../header'

import { Wrapper, BackgroundWrapper } from './layout.styles'
import { globalStyles } from './global.styles'

import "../../assets/style.css"

const Layout = ({ children }) => (
    <BackgroundWrapper>
        <Wrapper>
            <Global styles={globalStyles} />
            <div mb={10} mt={20}>
                <Header />
            </div>

            <div>{children}</div>
        </Wrapper>
    </BackgroundWrapper>
)

export { Layout }

export default Layout
