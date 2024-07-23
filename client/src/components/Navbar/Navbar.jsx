import React, { useState, useEffect } from 'react'
import logo from "./logo.ico"
import { Link, generatePath } from "react-router-dom"
import "./Navbar.css"
import { RiVideoAddLine } from "react-icons/ri"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"
import Searchbar from './Searchbar/Searchbar'
import Auth from '../../Pages/Auth/Auth'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {login} from "../../Action/Auth"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'
import { setcurrentuser } from '../../Action/currentuser'

const Navbar = ({seteditcreatechannelbtn, toggledrawer }) => {
    const [authbtn, setauthbtn] = useState(false);
    const [user,setuser]=useState(null)
    const [profile,setprofile]=useState([])
    const dispatch=useDispatch()
    const currentuser=useSelector(state=>state.currentuserreducer);


    console.log(currentuser)
    // const currentuser = {
    //     result: {
    //         _id: 1,
    //         name: "Abcd",
    //         email: "abcd@gmail.com",
    //         joinedon: "22-02-2024",

    //     }
    // }
    const google_login = useGoogleLogin({
        onSuccess: tokenResponse => setuser(tokenResponse),
        onError: (error)=>console.log("Login failed",error)
    });

    useEffect(
        ()=>{
            if(user){
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,{
                    headers:{
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res)=>{
                    setprofile(res.data)
                    // successlogin()
                    console.log(res.data)
                })
                .catch((err)=>console.log(err))
            }
        },
        [user]
    );

    useEffect(()=>{
        if(profile.email){
            dispatch(login({email: profile.email}))
            // console.log(profile.email)
        }
    },  [profile, dispatch])

    const logout=()=>{
        dispatch(setcurrentuser(null))
        googleLogout()
        localStorage.clear()
    }

    // *****ADDED WITH CHATGPT****

    // useEffect(() => {
    //     const storedProfile = JSON.parse(localStorage.getItem('Profile'));
    //     if (storedProfile) {
    //         dispatch(setcurrentuser(storedProfile));
    //     }
    // }, [dispatch]);


    useEffect(()=>{
        const token=currentuser?.token;
        if(token){
            const decodetoken=jwtDecode(token)
            if(decodetoken.exp *1000 < new Date().getTime()){
                logout()
            }
        }
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))))
    },[currentuser?.token,dispatch])

    return (
        <>
            <div className="container_Navbar">
                <div className="burger_logo_Navbar">
                    <div className="burger" onClick={() => toggledrawer()}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <Link to={"/"} className='logo_div_Navbar'>
                        <img src={logo} alt="" />
                        <p className="logo_title_Navbar">Your-tube</p>
                    </Link>
                </div>
                <Searchbar />
                <RiVideoAddLine size={22} className={"video_bell_Navbar"} />
                <div className="apps_Box">
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                </div>
                <IoMdNotificationsOutline size={22} className={"video_bell_Navbar"} />
                <div className="Auth_cont_Navbar">
                    {currentuser ? (
                        <>
                            <div className="channel_logo_App" onClick={() => setauthbtn(true)}>
                                <p className="firstChar_logo_App">
                                    {currentuser?.result.name ? (
                                        <>{currentuser?.result.name.charAt(0).toUpperCase()}</>
                                    ) : (
                                        <>{currentuser?.result.email.charAt(0).toUpperCase()}</>
                                    )}
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className='Auth_btn' onClick={() => google_login()}>
                            <BiUserCircle size={22} />
                            <b>Sign in</b>
                            </p>
                        </>
                    )}
                </div>
            </div>
            {
                authbtn &&
                <Auth seteditcreatechannelbtn={seteditcreatechannelbtn} setauthbtn={setauthbtn} user={currentuser} />
            }
        </>
    )
}

export default Navbar
