import React from 'react'

const FilterTags = () => {
  return (
    <div className='text-darkBrown p-5 flex flex-wrap gap-4 items-center shadow-sm'>
        <button className='bg-cream hover:bg-cream px-4 py-2 rounded-full'>Genre</button>
        <button className='bg-white hover:bg-cream px-4 py-2 rounded-full'>Mood</button>
        <button className='bg-white hover:bg-cream px-4 py-2 rounded-full'>Instrument</button>
        <button className='bg-white hover:bg-cream px-4 py-2 rounded-full'>Key</button>
        <button className='bg-white hover:bg-cream px-4 py-2 rounded-full'>BPM</button>
    </div>
  )
}

export default FilterTags