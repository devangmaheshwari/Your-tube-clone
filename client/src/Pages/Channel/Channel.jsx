import React from 'react'
import DescribeChannel from './DescribeChannel'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../components/Videos/vid.mp4'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Channel = ({ seteditcreatechannelbtn, setvideouploadpage }) => {
  const {cid}=useParams();
  const vids=useSelector(state=>state.videoreducer)?.data?.filter(q=>q?.videochannel===cid).reverse()
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     channel: "ChannelName",
  //     title: "Video 1",
  //     uploader: "abc",
  //     description: "Description of Video 1"
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     channel: "ChannelName",
  //     title: "Video 2",
  //     uploader: "abc",
  //     description: "Description of Video 2"
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     channel: "ChannelName",
  //     title: "Video 3",
  //     uploader: "abc",
  //     description: "Description of Video 3"
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     channel: "ChannelName",
  //     title: "Video 4",
  //     uploader: "abc",
  //     description: "Description of Video 4"
  //   }
  // ];

  return (
    <div className='container_Pages_App'>
      <Leftsidebar/>
      <div className="container2_Pages_App">
        <DescribeChannel cid={cid} setvideouploadpage={setvideouploadpage} seteditcreatechannelbtn={seteditcreatechannelbtn}/>
        <ShowVideoGrid vids={vids}/>
      </div>
    </div>
  )
}

export default Channel
