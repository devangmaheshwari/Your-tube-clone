import React, { useState } from 'react'
import "./CreateEditChannel.css"
import { useSelector } from 'react-redux';
import {updatechanneldata} from "../../Action/channeluser"
import { useDispatch } from 'react-redux';
import { login } from '../../Action/Auth';

const CreateEditChannel = ({ seteditcreatechannelbtn }) => {
    const dispatch=useDispatch()
    const currentuser = useSelector(state=>state.currentuserreducer);
    const [name, setname] = useState(currentuser?.result.name)
    const [desc,setdesc]=useState(currentuser?.result?.desc)
    const handlesubmit=()=>{
        if(!name){
            alert("Please enter your name")
        }
        else if(!desc){
            alert("Please enter description")
        }
        else{
            dispatch(updatechanneldata(currentuser?.result._id,{name:name,desc:desc}))
            seteditcreatechannelbtn(false)
            setTimeout(()=>{
                dispatch(login({email:currentuser.result.email}))
            },5000)
        }
    }
    return (
        <div className='container_CreateEditChannel'>
            <input type="submit" name="text" value={'X'} onClick={()=>seteditcreatechannelbtn(false)} className='ibtn_x'/>
            <div className="container2_CreateEditChannel">
                <h1>{currentuser?.result?.name ? <>Edit</>:<>Create</>} Your Channel</h1>
                <input type="text" placeholder='Enter Channel Name' name='text' value={name} onChange={(e)=>setname(e.target.value)} className='ibox'/>
                <textarea type="text" rows={15} placeholder='Enter Channel Description' className='ibox' value={desc} onChange={(e)=>setdesc(e.target.value)} id=""></textarea>
                <input type="submit" value="Submit" onClick={handlesubmit} className='ibtn'/>
            </div>
        </div>
    )
}

export default CreateEditChannel
