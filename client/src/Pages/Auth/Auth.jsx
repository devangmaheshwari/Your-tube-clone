import React, {useEffect} from 'react'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import "./Auth.css"
import { googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux'
import { setcurrentuser } from '../../Action/currentuser';

const Auth = ({ seteditcreatechannelbtn, setauthbtn, user }) => {
    const dispatch=useDispatch()
    const logout=()=>{
        dispatch(setcurrentuser(null))
        googleLogout()
        localStorage.clear()
    }
    return (
        <div className='Auth_container' onClick={() => setauthbtn(false)}>
            <div className="Auth_container2">
                <p className="User_details">
                    <div className="channel_logo_App">
                        <p className="firstChar_logo_App">
                            {user?.result.name ? (
                                <>{user?.result.name.charAt(0).toUpperCase()}</>
                            ) : (
                                <>{user?.result.email.charAt(0).toUpperCase()}</>
                            )}
                        </p>
                    </div>
                    <div className="email_auth">{user?.result.email}</div>
                </p>
                <div className="btns_Auth">
                    {user?.result.name ? (
                        <>
                            {
                                <Link to={`/Channel/${user?.result?._id}`} className='btn_Auth'>Your Channel</Link>
                            }
                        </>
                    ):(
                        <>
                            <input type="submit" className='btn_Auth' value="Create Channel" onClick={()=>seteditcreatechannelbtn(true)}/>
                        </>
                    )}
                    <div>
                        <div className="btn_Auth" onClick={()=>logout()}>
                            <BiLogOut/>
                            Log Out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
