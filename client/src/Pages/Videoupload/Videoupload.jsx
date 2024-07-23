import React, { useState } from 'react'
import "./Videoupload.css"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { useSelector, useDispatch } from 'react-redux'
import { uploadvideo } from "../../Action/Video"

const Videoupload = ({ setvideouploadpage }) => {
    const [title, settitle] = useState("");
    const [videofile, setvideofile] = useState("");
    const [progress, setprogress] = useState(0);
    const dispatch = useDispatch()

    const handlesetvideofile = (e) => {
        setvideofile(e.target.files[0])
    }
    const currentuser = useSelector(state => state.currentuserreducer);

    const fileoption = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setprogress(percentage)
            if (percentage === 100) {
                // setTimeout(function () { }, 3000)
                // setvideouploadpage(false)
                setTimeout(() => {
                    setvideouploadpage(false);
                }, 3000);
            }
        },
    };

    const uploadvideofile = () => {
        if (!title) {
            alert("Please add video title")
        }
        else if (!videofile) {
            alert("Please attach a video file")
        }
        else if (videofile.size > 1000000) {
            alert("Please attach a file less than 1 MB")
        }
        else {
            const filedata = new FormData();
            filedata.append("file", videofile);
            filedata.append("title", title);
            filedata.append("channel", currentuser?.result?._id);
            filedata.append("uploader", currentuser?.result?.name);
            console.log(videofile)
            dispatch(uploadvideo({ filedata: filedata, fileoption: fileoption }))
        }
    }

    return (
        <div className='container_Videoupload'>
            <input type="submit" name='text' value={'X'} onClick={() => setvideouploadpage(false)} className='ibtn_x' />
            <div className="container2_Videoupload">
                <div className="ibox_div_Videoupload">
                    <input type="text" maxLength={30} placeholder='Enter video title' className='ibox_Videoupload' onChange={(e) => {
                        settitle(e.target.value);
                    }} />
                    <label htmlFor="file" className='ibox_Videoupload btn_Videoupload'>
                        <input type="file" name='file' style={{ fontSize: "1rem" }} onChange={(e) => {handlesetvideofile(e)}} className="ibox_Videoupload" />
                    </label>
                </div>
                <div className="ibox_div_Videoupload">
                    <input type="submit" onClick={() => uploadvideofile()} value={"Upload"} className='ibox_Videoupload btn_Videoupload' />
                    <div className="loader ibox_div_Videoupload">
                        <CircularProgressbar
                            value={progress}
                            text={`${progress}`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "butt",
                                textSize: "20px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255,255,255,${progress / 100})`,
                                textColor: "#f88",
                                trailColor: "#adff2f",
                                backgroundColor: "#3e98c7",
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videoupload
