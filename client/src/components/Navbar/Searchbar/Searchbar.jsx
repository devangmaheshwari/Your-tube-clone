import React,{useState} from 'react'
import "./Searchbar.css"
import {BsMicFill} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
import Searchlist from './Searchlist'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
const Searchbar = () => {
  const [Searchquery,setsearchquery]=useState("");
  const [searchlist,setsearchlist]=useState(false);
  const Titlearray=useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(Searchquery?.toUpperCase())).map(m=>m?.videotitle)
  const navigate = useNavigate();
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/Search/${Searchquery}`);
      setsearchlist(false); // Hide the search list on enter
    }
  }

  // const Titlearray=["video1", "video2", "animation video", "Movies"].filter(q=>q.toUpperCase().includes(Searchquery.toUpperCase()))
  return (
    <>
      <div className="searchbar_Container">
        <div className="searchbar_Container2">
          <div className="search_div">
            <input type="text" className='iBox_Searchbar' placeholder='Search' onChange={e=>setsearchquery(e.target.value)} value={Searchquery} onClick={e=>setsearchlist(true)} onKeyDown={handleKeyPress}/>
            <Link to={`/Search/${Searchquery}`}>
              <FaSearch className='searchIcon_Searchbar'/>
            </Link>
            <BsMicFill className='Mic_Searchbar'/>
            {Searchquery && searchlist && <Searchlist setsearchquery={setsearchquery} Titlearray={Titlearray}/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchbar