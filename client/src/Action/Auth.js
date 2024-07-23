import * as api from "../Api"
import { setcurrentuser } from "./currentuser";

export const login=(authdata)=>async(dispatch)=>{
    try {
        const {data}= await api.login(authdata);
        localStorage.setItem('Profile', JSON.stringify(data));
        dispatch({type:"AUTH", data})
        // dispatch(setcurrentuser(data));
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem('Profile'))))
    } 
    catch (error) {
        // alert(error)
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
    }
}