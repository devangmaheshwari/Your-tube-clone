import React from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import "./WHL.css"
import WHLVideoList from './WHLVideoList'
import { useSelector,useDispatch } from 'react-redux'
import { clearhistory } from '../../Action/History'

const WHL = ({ page, videolist }) => {
    const dispatch=useDispatch()
    const currentuser = useSelector(state=>state.currentuserreducer);
    const handleclearhistory=()=>{
        if(currentuser){
            dispatch(clearhistory({
                userid: currentuser?.result._id
            }))
        }
    }
    return (
        <div className='container_Pages_App'>
            <Leftsidebar />
            <div className='container2_Pages_App'>
                <p className="container_WHL">
                    <div className="box_WHL leftside_WHL">
                        <b>Your {page} Appear Here</b>
                        {
                            page==="History" &&
                            <div className="clear_history_btn" onClick={()=>handleclearhistory()}>Clear History</div>
                        }
                    </div>
                    <div className="rightside_WHL">
                        <h1>{page}</h1>
                        <div className="whl_list">
                            <WHLVideoList page={page} currentuser={currentuser?.result._id} videolist={videolist}/>
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default WHL