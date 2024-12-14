import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../header/Header'
import allbeats from '../../assets/beats_library/allbeats'
import BeatList from '../beatlist/BeatList'


const Artist = () => {
    const [artist, setArtist] = useState([])
    const { id } = useParams();


    useEffect(() => {
        let artistId = id;
      let artinfo = allbeats.filter((item)=>item.id == artistId)
      setArtist(artinfo[0]);

    }, [id])
    

  return (
    <>
        <Header />
        <div className=''>
            <div className='pt-20 bg-gradient-to-r from-slate-500 to-slate-300 w-full flex items-center px-2 md:px-10 gap-5 md:gap-10 flex-col-reverse py-10 md:flex-row'>
            <div className='h-40 md:h-48 rounded-full'>
        <img src={artist.logo} className='h-full object-cover rounded-full' alt="" />
      </div>
      <div>
        <h1 className='text-3xl font-semibold text-center'>{artist.artist}</h1>
        <p>Music for your adventures</p>
      </div>
            </div>
        </div>
        <BeatList beats={[artist]} />
    </>
  )
}

export default Artist