
import { Track } from '../constants/types'
import React, {useState,PropsWithChildren,createContext, useContext } from 'react'


type PlayerContextType ={
    track? : Track,
    setTrack : (track: Track) => void
}
const PlayerContext = createContext<PlayerContextType>({
    setTrack : ()=>{}
})

export default function PlayerProvider ({children} : PropsWithChildren){
    const [track, setTrack] = useState<Track>();

    
    return (
        <PlayerContext.Provider value={{track, setTrack}}>
            {children}
        </PlayerContext.Provider>
    )
}

export  const usePlayerContext = ()=> useContext(PlayerContext)