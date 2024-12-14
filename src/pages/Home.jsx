import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/herosection/Hero'
import SearchBar from '../components/searchbar/SearchBar'
import FilterTags from '../components/filter/FilterTags'
import BeatList from '../components/beatlist/BeatList'
import allbeats from '../assets/beats_library/allbeats'


const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <SearchBar />
    <FilterTags />
    <BeatList beats={allbeats}/>
    <div className='py-10 text-center'>
    © Beat-Farm 2024. All rights reserved.
    </div>
    </>
  )
}

export default Home