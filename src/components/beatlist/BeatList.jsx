import React, { useState } from 'react'
import BeatItem from './BeatItem'
import allbeats from '../../assets/beats_library/allbeats'
import Sidebar from '../sidebar/Sidebar'


const BeatList = ({beats}) => {

  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    if (currentSong == song) {
      setCurrentSong(null); 
    } else {
      setCurrentSong(song);
    }
  };
  
  return (
    <>
    <div className='flex md:px-10 gap-3 py-4 border border-cream' id='beatsid'>
    <div className='w-full px-2 py-2 space-y-10'>
      <h3 className='text-2xl text-darkBrown'>Recent</h3>
      {beats.map((beat)=><div key={beat.id}>
        <BeatItem beat={beat} playSong={playSong} currentsong={currentSong}/>
      </div>)}
    </div>
    <Sidebar beats={allbeats}/>
    </div>
    </>
  )
}

export default BeatList