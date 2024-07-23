import React from 'react'
import "./Library.css"
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import { FaHistory } from "react-icons/fa"
import { MdOutlineWatchLater } from "react-icons/md"
import { AiOutlineLike } from "react-icons/ai"
// import vid from "../../components/Videos/vid.mp4"
import WHLVideoList from '../../components/WHL/WHLVideoList'
import { useSelector } from 'react-redux'

const Library = () => {
    const currentuser=useSelector(state=>state.currentuserreducer);
    const watchhistoryvideolist=useSelector(s=>s.historyreducer)
    const likedvideolist = useSelector((state) => state.likedvideoreducer)
    const watchlatervideolist=useSelector((s)=>s.watchlaterreducer)

    // const vids = [
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
            <Leftsidebar/>
            <div className="container2_Pages_App">
                <div className="container_Librarypage">
                    <h1 className="title_container_Librarypage">
                        <b>
                            <FaHistory/>
                        </b>
                        <b>History</b>
                    </h1>
                    <div className="container_videoList_Librarypage">
                        <WHLVideoList page={"History"} currentuser={currentuser?.result?._id} videolist={watchhistoryvideolist}/>
                    </div>
                </div>
                <div className="container_Librarypage">
                    <h1 className="title_container_Librarypage">
                        <b>
                            <MdOutlineWatchLater/>
                        </b>
                        <b>Watch Later</b>
                    </h1>
                    <div className="container_videoList_Librarypage">
                        <WHLVideoList page={"Watch Later"} currentuser={currentuser?.result?._id} videolist={watchlatervideolist}/>
                    </div>
                </div>
                <div className="container_Librarypage">
                    <h1 className="title_container_Librarypage">
                        <b>
                            <AiOutlineLike/>
                        </b>
                        <b>Liked Videos</b>
                    </h1>
                    <div className="container_videoList_Librarypage">
                        <WHLVideoList page={"Liked Videos"} currentuser={currentuser?.result?._id} videolist={likedvideolist}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Library
