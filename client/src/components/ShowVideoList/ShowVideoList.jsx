import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
// import vid from '../Videos/vid.mp4'
import {useSelector} from 'react-redux'

const ShowVideoList = ({videoid}) => {
    const vids=useSelector(state=>state.videoreducer)
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
        <div className='container_ShowVideoGrid'>
            {
                vids?.data?.filter(q=>q._id===videoid).map(vi=>{
                    return(
                        <div className="video_box_app" key={vi._id}>
                            <ShowVideo vid={vi}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowVideoList
