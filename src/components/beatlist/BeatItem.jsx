import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { IoPlay } from "react-icons/io5";
import { TiMediaPause } from "react-icons/ti";
import { FiSend } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BiSolidLike } from "react-icons/bi";
import { useContextApi } from '../../context/contextProvider'


const waveOptions = (ref)=>(
  {"container": ref,
    "waveColor": "#ff4e00",
  "progressColor": "#dd5e98",
    "cursorColor": '#ddd5e9',
    "responsive": true,
    "height": '39',
    "backend": 'WebAudio',
    "barGap": 1,
    "barWidth": 1,
  })

// Helper function to format time
function formatTime(seconds){
  let date = new Date(0);
  date.setSeconds(seconds)
  return date.toISOString().slice(14,19);
}

const BeatItem = ({beat,currentsong,playSong}) => {
  const waveformRef = useRef(null)
  const wavesurfer = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    // create Wavesurfer instance with options
    const options = waveOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    // Load the audio file
    wavesurfer.current.load(beat.beatFile);

    // When WaveSurfer is ready 
    wavesurfer.current.on('ready',()=>{
      setDuration(wavesurfer.current.getDuration())
    })

    // Update current time in state as audio plays
    wavesurfer.current.on('audioprocess',()=>{
      setCurrentTime(wavesurfer.current.getCurrentTime());
    })

    wavesurfer.current.on('click', () => {
      setPlaying(true);
      playSong(beat.id);
      wavesurfer.current.play()
    })

  
    return () => {
      wavesurfer.current.un('audioprocess');
      wavesurfer.current.un('ready');
      wavesurfer.current.destroy();
    }
  }, []);

  const handlePlayPause = ()=>{
    setPlaying(!playing);
    playSong(beat.id);
    wavesurfer.current.playPause() 
  }

  useEffect(() => {
    if(currentsong != beat.id){
      setPlaying(false);
      wavesurfer.current.media.pause()
    }
  }, [currentsong])
  
  
  
  const hostUrl = "http://localhost:5173/";
  

  // for sharing
  const handleShare = async () => {
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: beat.beatName,
          url: `${hostUrl}/artist/${beat.id}`,
        });
        console.log('Share successful!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      alert('Share functionality is not supported in your browser.');
    }
  };
  
  const {addToCart,items,removeToCart,like,handleLike,handleUnLike} = useContextApi();
  const isItemInCart = items.includes(beat.id);
  const isLike = like.includes(beat.id);
  return (
   <>
    <div className='bg-cream rounded-md p-3 flex gap-3'>
    <Link to={`/artist/${beat.id}`}>
      <div className='h-28 rounded-md'>
        <img src={beat.logo} className='h-full object-cover rounded-md' alt="" />
      </div>
      </Link>
      <div className='flex-grow'>
       <div className='flex items-center gap-3'>
       <button className='bg-coral p-3 rounded-full text-white text-center text-xl' onClick={handlePlayPause}>
        {playing ? <TiMediaPause /> : <IoPlay/>}
        </button>
        <div className='text-darkBrown flex justify-between w-full items-center'>
         <div>
         <Link to={`/artist/${beat.id}`}>
         <span className='text-xs block underline cursor-pointer'>{beat.artist}</span>
         </Link>
         <span>{beat.beatName}</span>
         </div>
        
        </div>
       </div>
       <div id='waveform' ref={waveformRef} className='w-full pt-2 pl-2 relative'>
        
        <div className='absolute border-b-2 border-b-white w-full bottom-0 z-40 '>
        <div className='text-[9px] flex justify-between '>
          <span className='bg-darkBrown text-white px-0.5'>{formatTime(currentTime)}</span> 
          <span className='bg-darkBrown text-white px-0.5'>{formatTime(duration)}</span> 
        </div>
        </div>
       </div>
       <div className='flex gap-3 text-lg mt-3'>
       <button className={`rounded-full p-3 cursor-pointer ${isLike ? 'bg-electricBlue text-white': 'bg-gray-200 hover:bg-gray-300'}`} onClick={()=>isLike ? handleUnLike(beat.id) : handleLike(beat.id)}><BiSolidLike /></button>
         <button className='bg-gray-200 rounded-full p-3 cursor-pointer hover:bg-electricBlue hover:text-white' onClick={handleShare}><FiSend /></button>
         <button className={` rounded-xl p-3 cursor-pointer ${isItemInCart ? 'bg-amber-500 text-white': 'bg-gray-200 animate-bounce'}`} onClick={()=>isItemInCart ? removeToCart(beat.id) : addToCart(beat.id)} >{!isItemInCart ? <FaCartArrowDown />:<BsCartCheckFill />}</button>
         </div>
      </div>
    </div>
   </>
  );
};

export default BeatItem;
