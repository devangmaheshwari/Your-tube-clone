import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Allroutes from './Allroutes'
import { BrowserRouter as Router } from "react-router-dom";
import Drawersliderbar from '../src/components/Leftsidebar/Drawersliderbar'
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import Videoupload from "./Pages/Videoupload/Videoupload";
import { useDispatch } from "react-redux";
import { fetchallchannel } from "./Action/channeluser";
import { getallvideo } from "./Action/Video";
import { getallcomment } from "./Action/Comment";
import { getallhistory } from "./Action/History";
import { getalllikedvideo } from "./Action/LikedVideo";
import { getallwatchlater } from "./Action/WatchLater";

function App() {
  const [toggledrawersidebar, settoggledrawersidebar] = useState({
    display: "none"
  });

  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchallchannel())
    dispatch(getallvideo())
    dispatch(getallcomment())
    dispatch(getallhistory())
    dispatch(getalllikedvideo())
    dispatch(getallwatchlater())
  },[dispatch])
  
  const toggledrawer = () => {
    if (toggledrawersidebar.display === "none") {
      settoggledrawersidebar({
        display: "flex",
      });
    } else {
      settoggledrawersidebar({
        display: "none",
      });
    }
  };
  const [editcreatechannelbtn, seteditcreatechannelbtn] = useState(false);
  const [videouploadpage, setvideouploadpage] = useState(false);
  return (
    <Router>
      {
        videouploadpage && <Videoupload setvideouploadpage={setvideouploadpage}/>
      }
      {
        editcreatechannelbtn && (<CreateEditChannel seteditcreatechannelbtn={seteditcreatechannelbtn}/>)
      }
      <Navbar seteditcreatechannelbtn={seteditcreatechannelbtn} toggledrawer={toggledrawer}/>
      <Drawersliderbar toggledrawer={toggledrawer} toggledrawersidebar={toggledrawersidebar}/>
      <Allroutes seteditcreatechannelbtn={seteditcreatechannelbtn} setvideouploadpage={setvideouploadpage}/>
    </Router>
  );
}

export default App;
