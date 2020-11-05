import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import styled from '@emotion/styled'

import {EpisodeContext, EpisodeProvider} from '../context/episode-provider.context'
import { MIN_LAPTOP_MEDIA, MAX_TABLET_MEDIA, MAX_MOBILE_MEDIA, LAPTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH } from "../../utils/constants";

export const Player = () => {
    const {
        currentPlayingUrl,
        setCurrentPlaying
    } = useContext(EpisodeContext)

    if (!currentPlayingUrl) {
        return null
    }

    return (
        <PlayerWrapperStyled>
            <PlayerStyled>
                <div onClick={() => setCurrentPlaying(null)}>Закрыть</div>
                <ReactPlayer height={'50px'} width={null} controls={true} playing={true} url={currentPlayingUrl} />
            </PlayerStyled>
        </PlayerWrapperStyled>
    )
}

const PlayerWrapperStyled = styled.div`
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

const PlayerStyled = styled.div`
    width: 80%;
`


