import React from 'react'
import "./YourVideos.css"
import vid from "../../components/Videos/vid.mp4"
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import { useSelector } from 'react-redux'

const YourVideos = () => {
    const currentuser = useSelector(state=>state.currentuserreducer);
    const yourvideolist=useSelector(s=>s.videoreducer)?.data?.filter(q=>q.videochannel===currentuser?.result._id).reverse()
    // const yourvideolist = [
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
        <div className='container_Pages_App'>
            <Leftsidebar />
            <div className='container2_Pages_App'>
                <div className="container_yourVideo">
                    <h1>Your Videos</h1>
                    {
                        currentuser ? (
                            <>
                                <ShowVideoGrid vid={yourvideolist} />
                            </>
                        ) : (
                            <>
                                <h3>Please login to see your uploaded videos</h3>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default YourVideos
