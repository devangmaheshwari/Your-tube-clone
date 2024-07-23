import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
// import vid from "../../components/Videos/vid.mp4"
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import Comment from '../../components/Comment/Comment'
import "./Home.css"
import {useSelector} from 'react-redux'

const Home = () => {
  const currentuser = useSelector(state => state.currentuserreducer);
  const vids=useSelector(state=>state.videoreducer)?.data?.filter(q=>q).reverse();

  // const vids=[
  //   {
  //     _id:1,
  //     video_src:vid,
  //     channel:"ChannelName",
  //     title:"Video 1",
  //     uploader:"abc",
  //     description:"Description of Video 1"
  //   },
  //   {
  //     _id:2,
  //     video_src:vid,
  //     channel:"ChannelName",
  //     title:"Video 2",
  //     uploader:"abc",
  //     description:"Description of Video 2"
  //   },
  //   {
  //     _id:3,
  //     video_src:vid,
  //     channel:"ChannelName",
  //     title:"Video 3",
  //     uploader:"abc",
  //     description:"Description of Video 3"
  //   },
  //   {
  //     _id:4,
  //     video_src:vid,
  //     channel:"ChannelName",
  //     title:"Video 4",
  //     uploader:"abc",
  //     description:"Description of Video 4"
  //   }
  // ]

  const navlist=[
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy"
  ];
  return (
    <div className="container_Pages_App">
      <Leftsidebar/>
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {navlist.map((m)=>{
            return(
              <p key={m} className='btn_nav_home'>{m}</p>
            );
          })}
        </div>
        <ShowVideoGrid vid={vids}/>
      </div>
    </div>
  )
}

export default Home