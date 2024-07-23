import React from 'react'
import "./DescribeChannel.css"
import {FaEdit, FaUpload} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const DescribeChannel = ({setvideouploadpage,cid,seteditcreatechannelbtn}) => {
  // const channel = [
  //   {
  //       _id: 1,
  //       name: "Abcd",
  //       email: "abcd@gmail.com",
  //       joinedon: "22-02-2024",
  //       desc: "Channel Description"
  //   }
  // ]

const channel= useSelector(state=>state.channelreducer)
const currentchannel=channel.filter((c)=>c._id===cid)[0]
const currentuser=useSelector(state=>state.currentuserreducer);
// console.log(currentchannel)
  return (
    <div className='container3_channel'>
      <div className="channel_logo_channel">
        <b>{currentchannel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_channel">
      <b>{currentchannel?.name}</b>
      <p>{currentchannel?.desc}</p>
      </div>
      {currentuser?.result._id===currentchannel?._id && (
        <>
        <p className='editbtn_channel' onClick={()=>seteditcreatechannelbtn(true)}>
          <FaEdit/>
          <b>Edit Channel</b>
        </p>
        <p className='uploadbtn_channel' onClick={()=>setvideouploadpage(true)}>
          <FaUpload/> 
          <b>Upload Video</b>
        </p>
        </>
      )}
    </div>
  )
}

export default DescribeChannel
