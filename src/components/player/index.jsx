import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from 'react-player'

import styled from '@emotion/styled'

import {EpisodeContext, EpisodeProvider} from '../context/episode-provider.context'

export const Player = () => {
    const {
        currentPlayingUrl,
        setCurrentPlaying
    } = useContext(EpisodeContext)

    if (!currentPlayingUrl) {
        return null
    }

    return (
        <PlayerStyled>
            <div>
                <div onClick={() => setCurrentPlaying(null)}>Закрыть</div>
                <ReactPlayer height={'50px'} controls={true} playing={true} url={currentPlayingUrl} />
            </div>
        </PlayerStyled>
    )
}

const PlayerStyled = styled.div`
    position: fixed;
    z-index: 1;
    bottom: 10px;
    left: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 100%;
    & > div {
        background: white;
        border: 1px solid black;
        cursor: pointer;
    }
`
