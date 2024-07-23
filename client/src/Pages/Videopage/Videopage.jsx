import React, { useEffect } from 'react'
import "./Videopage.css"
import moment from 'moment'
import LikeWatchlaterSavebtn from './LikeWatchlaterSavebtn'
import { useParams, Link } from 'react-router-dom'
// import vidd from '../../components/Videos/vid.mp4'
import Comment from '../../components/Comment/Comment'
import { useSelector, useDispatch } from 'react-redux'
import { viewsvideo } from '../../Action/Video'
import { addtohistory } from '../../Action/History'

const Videopage = () => {
    const {vid}=useParams();
    const dispatch=useDispatch()
    const vids=useSelector((state)=>state.videoreducer)

    // const [viewsInc,setviewsInc]=useState(false)
    
    const vv = vids?.data?.filter((q) => q._id === vid)[0] //adding a ? after data
    
    const currentuser = useSelector(state => state.currentuserreducer);

    const handleviews=()=>{
        dispatch(viewsvideo({id:vid}))
    }
    
    const handlehistory=()=>{
        dispatch(addtohistory({
            videoid:vid,
            viewer:currentuser?.result._id,
        }))
    }
    
    useEffect(()=>{
        if(currentuser){
            handlehistory()
            handleviews()
        }
    },[])
    

    // useEffect(()=>{
    //     if(currentuser && vid){
    //         dispatch(addtohistory({
    //             videoid:vid,
    //             viewer:currentuser?.result._id,
    //         }))
    //     }
    //     if(!viewsInc &&vid){
    //         dispatch(viewsvideo({id:vid}))
    //         setviewsInc(true)
    //     }
    // },[currentuser,vid,dispatch,viewsInc])

    
    
    // const vids=[
    //     {
    //         _id:1,
    //         video_src:vidd,
    //         channel:"ChannelName",
    //         title:"Video 1",
    //         uploader:"abc",
    //         description:"Description of Video 1"
    //     },
    //     {
    //         _id:2,
    //         video_src:vidd,
    //         channel:"ChannelName",
    //         title:"Video 2",
    //         uploader:"abc",
    //         description:"Description of Video 2"
    //     },
    //     {
    //         _id:3,
    //         video_src:vidd,
    //         channel:"ChannelName",
    //         title:"Video 3",
    //         uploader:"abc",
    //         description:"Description of Video 3"
    //     },
    //     {
    //         _id:4,
    //         video_src:vidd,
    //         channel:"ChannelName",
    //         title:"Video 4",
    //         uploader:"abc",
    //         description:"Description of Video 4"
    //     }
    // ]
    // const vidNumber=parseInt(vid,10);
    
    console.log(vids);
    return (
        <>
        {currentuser?(
            <div className='container_Videopage'>
                <div className='container2_Videopage'>
                    <div className="video_display_screen_Videopage">
                        <video src={`http://localhost:5050/${vv?.filepath}`} className="video_ShowVideo_Videopage" controls></video>
                        <div className="video_details_Videopage">
                            <div className="video_btns_title_Videopage_cont">
                                <p className="video_title_Videopage">{vv?.videotitle}</p>
                                <div className="views_date_btns_Videopage">
                                    <div className="views_Videopage">
                                    {vv?.views} views <div className="dot"></div>{" "}
                                        {moment(vv?.createdat).fromNow()}
                                    </div>
                                    <LikeWatchlaterSavebtn vv={vv} vid={vid}/>
                                </div>
                            </div>
                            <Link to={'/'} className='channel_details_Videopage'>
                                <b className="channel_logo_Videopage">
                                    <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
                                </b>
                                <p className="channel_name_Videopage">{vv?.uploader}</p> 
                                {/* adding a ? after vv */}
                            </Link>
                            <div className="comments_Videopage">
                                <h2>
                                    <u>Comments</u>
                                </h2>
                                <Comment videoid={vv?._id}/> 
                                {/* adding a ? after vv */}
                            </div>
                        </div>
                    </div>
                    <div className="moreVideoBar">More Videos</div>
                </div>
            </div>
        ):(
            <h2>Uhoh! Login to watch Video</h2>
        )}
        </>
    )
}

export default Videopage