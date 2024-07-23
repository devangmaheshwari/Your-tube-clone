import React from 'react'
import './Leftsidebar.css'
import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdSubscriptions, MdOutlineWatchLater } from 'react-icons/md'
import { FaHistory } from 'react-icons/fa'
import shorts from "./shorts.png"
import { NavLink } from 'react-router-dom'


const Drawersliderbar = ({ toggledrawer, toggledrawersidebar }) => {
    return (
        <div className='container_DrawerLeftsidebar' style={toggledrawersidebar}>
            <div className="container2_DrawerLeftsidebar">
                <div className="Drawer_leftsidebar">
                    <NavLink to={'/'} className="icon_sidebar_div">
                        <p>
                            <AiOutlineHome size={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Home</div>
                        </p>
                    </NavLink>
                    <div className="icon_sidebar_div">
                        <p>
                            <MdOutlineExplore size={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Explore</div>
                        </p>
                    </div>
                    <div className="icon_sidebar_div">
                        <p>
                            <img src={shorts} width={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Shorts</div>
                        </p>
                    </div>
                    <div className="icon_sidebar_div">
                        <p>
                            <MdSubscriptions size={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Subscriptions</div>
                        </p>
                    </div>
                </div>
                <div className="librarybtn_DrawerLeftsidebar">
                    <NavLink to={'/Library'} className="icon_sidebar_div">
                        <p>
                            <MdOutlineVideoLibrary size={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Library</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/WatchHistory'} className="icon_sidebar_div">
                        <p>
                            <FaHistory size={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">History</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/YourVideos'} className="icon_sidebar_div">
                        <p>
                            <AiFillPlaySquare size={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Your Videos</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/WatchLater'} className="icon_sidebar_div">
                        <p>
                            <MdOutlineWatchLater size={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Watch Later</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/LikedVideos'} className="icon_sidebar_div">
                        <p>
                            <AiFillLike size={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Liked Videos</div>
                        </p>
                    </NavLink>
                </div>
                <div className="subscriptions_lsdbar">
                    <h3>Your Subscriptions</h3>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel1</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel2</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel3</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel4</div>
                    </div>
                </div>
            </div>
            <div className="container3_DrawerLeftsidebar" onClick={()=>toggledrawer()}></div>
        </div>
    )
}

export default Drawersliderbar
