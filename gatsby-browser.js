/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

import { ThemeWrapper } from './src/theme-wrapper'
import { EpisodeProvider } from './src/components/context/episode-provider.context'
import { Player } from './src/components/player'

export const wrapRootElement = ({ element }) => (
    <ThemeWrapper>
        <EpisodeProvider>
            {element}
            <Player />
        </EpisodeProvider>
    </ThemeWrapper>
);
