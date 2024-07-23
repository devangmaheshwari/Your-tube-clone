import React from 'react'
// import vid from "../../components/Videos/vid.mp4"
import WHL from '../../components/WHL/WHL'
import { useSelector } from 'react-redux'

const WatchHistory = () => {
    const watchhistoryvideolist=useSelector(s=>s.historyreducer)
    // const watchhistoryvideolist = [
    //     {
    //         _id: 1,
    //         video_src: vid,
    //         channel: "ChannelName",
    //         title: "Video 1",
    //         uploader: "abc",
    //         description: "Description of Video 1"
    //     },
    //     {
    //         _id: 2,
    //         video_src: vid,
    //         channel: "ChannelName",
    //         title: "Video 2",
    //         uploader: "abc",
    //         description: "Description of Video 2"
    //     },
    //     {
    //         _id: 3,
    //         video_src: vid,
    //         channel: "ChannelName",
    //         title: "Video 3",
    //         uploader: "abc",
    //         description: "Description of Video 3"
    //     },
    //     {
    //         _id: 4,
    //         video_src: vid,
    //         channel: "ChannelName",
    //         title: "Video 4",
    //         uploader: "abc",
    //         description: "Description of Video 4"
    //     }
    // ]
  return (
    <WHL page={"History"} videolist={watchhistoryvideolist}/>
  )
}

export default WatchHistory
