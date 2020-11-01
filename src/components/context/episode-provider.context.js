import React, { useState } from "react"

export const EpisodeContext = React.createContext({
    currentPlayingUrl: ''
})

export const EpisodeProvider = (props) => {
    const [currentPlayingUrl, setCurrentPlaying] = useState(null)
    return (
        <EpisodeContext.Provider
            value={{
                currentPlayingUrl,
                setCurrentPlaying,
            }}
            {...props}
        />
    )
}
