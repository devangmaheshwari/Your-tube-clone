 import React, { useState,useEffect } from 'react'
import { BsThreeDots } from "react-icons/bs"
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai"
import { MdPlaylistAddCheck } from "react-icons/md"
import { RiPlayListAddFill, RiShareForwardLine } from "react-icons/ri"
import "./LikeWatchlaterSavebtn.css"
import { useSelector,useDispatch } from 'react-redux'
import {likevideo} from "../../Action/Video"
import { addtolikedvideo,deletelikedvideo } from '../../Action/LikedVideo'
import { addtowatchlater,deletewatchlater } from '../../Action/WatchLater'

const LikeWatchlaterSavebtn = ({vv,vid}) => {
    const dispatch=useDispatch()
    const [savevideo, setsavevideo] = useState(false);
    const [likebtn, setlikebtn] = useState(false);
    const [dislikebtn, setdislikebtn] = useState(false);
    const currentuser=useSelector(state=>state.currentuserreducer);
    const likedvideolist=useSelector((state)=>state.likedvideoreducer)
    const watchlaterlist=useSelector((s)=>s.watchlaterreducer)

    useEffect(()=>{
        likedvideolist?.data?.filter(
            (q)=>q.videoid===vid && q.viewer===currentuser.result._id
        )
        .map((m)=>setlikebtn(true));
        watchlaterlist?.data?.filter(
            (q)=>q.videoid===vid && q.viewer===currentuser.result._id
        )
        .map((m)=>setsavevideo(true))
    },[])

    const togglesavevideo=()=>{
        if(currentuser){
            if(savevideo){
                setsavevideo(false);
                dispatch(deletewatchlater({videoid:vid,viewer:currentuser?.result?._id}))
            }
            else{
                setsavevideo(true);
                dispatch(addtowatchlater({videoid:vid,viewer:currentuser?.result?._id}))
            }
        }
        else{
            alert("Please login to save video");
        }
    }

    const togglelikevideo=(e,like)=>{
        if(currentuser){
            if(likebtn){
                setlikebtn(false);
                dispatch(likevideo({id:vid,Like:like-1}))
                dispatch(deletelikedvideo({videoid:vid,viewer:currentuser?.result?._id}))
            }
            else{
                setlikebtn(true);
                dispatch(likevideo({id:vid,Like:like+1}))
                setdislikebtn(false);
                dispatch(addtolikedvideo({videoid:vid,viewer:currentuser?.result?._id}))
            }
        }
        else{
            alert("Please login to save video");
        }
    }

    const toggledislikevideo=(e,like)=>{
        if(currentuser){
            if(dislikebtn){
                setdislikebtn(false);
            }
            else{
                setdislikebtn(true);
                if(likebtn){
                    dispatch(likevideo({id:vid,Like:like-1}))
                    dispatch(deletelikedvideo({videoid:vid,viewer:currentuser?.result?._id}))
                }
                setlikebtn(false);
            }
        }
        else{
            alert("Please login to save video");
        }
    }

    return (
        <div className='btns_cont_Videopage'>
            <div className="btn_Videopage">
                <BsThreeDots />
            </div>
            <div className="btn_Videopage">
                <div className="like_Videopage" onClick={(e)=>togglelikevideo(e,vv.Like)}>
                    {likebtn ? (
                        <>
                            <AiFillLike size={22} className='btns_Videopage' />
                        </>
                    ) : (
                        <>
                            <AiOutlineLike size={22} className='btns_Videopage' />
                        </>
                    )}
                    <b>{vv?.Like}</b>
                    {/* adding a ? after vv */}
                </div>
                <div className="like_Videopage" onClick={(e)=>toggledislikevideo(e,vv.Like)}>
                    {dislikebtn ? (
                        <>
                            <AiFillDislike size={22} className='btns_Videopage' />
                        </>
                    ) : (
                        <>
                            <AiOutlineDislike size={22} className='btns_Videopage' />
                        </>
                    )}
                    <b>Dislike</b>
                </div>
                <div className="like_Videopage" onClick={(e)=>togglesavevideo(e)}>
                    {savevideo ? (
                        <>
                            <MdPlaylistAddCheck size={22} className='btns_Videopage' />
                            <b>Saved</b>
                        </>
                    ) : (
                        <>
                            <RiPlayListAddFill size={22} className='btns_Videopage' />
                            <b>Save</b>
                        </>
                    )}
                </div>
                <div className="like_Videopage">
                    <RiShareForwardLine size={22} className='btns_Videopage'/>
                    <b>Share</b>
                </div>
            </div>
        </div>
    )
}

export default LikeWatchlaterSavebtn