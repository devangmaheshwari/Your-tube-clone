import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import Videopage from './Pages/Videopage/Videopage'
import Channel from './Pages/Channel/Channel'
import Library from './Pages/Library/Library'
import LikedVideos from './Pages/LikedVideos/LikedVideos'
import WatchHistory from './Pages/WatchHistory/WatchHistory'
import WatchLater from './Pages/WatchLater/WatchLater'
import YourVideos from './Pages/YourVideos/YourVideos'

const Allroutes = ({ seteditcreatechannelbtn, setvideouploadpage }) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Search/:Searchquery' element={<Search/>} />
      <Route path='/Videopage/:vid' element={<Videopage/>} />
      <Route path='/Library' element={<Library/>} />
      <Route path='/LikedVideos' element={<LikedVideos/>} />
      <Route path='/WatchHistory' element={<WatchHistory/>} />
      <Route path='/WatchLater' element={<WatchLater/>} />
      <Route path='/YourVideos' element={<YourVideos/>} />
      <Route path='/Channel/:cid' element={<Channel seteditcreatechannelbtn={seteditcreatechannelbtn} setvideouploadpage={setvideouploadpage} />} />
    </Routes>
  )
}

export default Allroutes
