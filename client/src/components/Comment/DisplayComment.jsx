import React, { useState } from 'react'
import "./Comment.css"
import moment from 'moment'
import { useSelector,useDispatch } from 'react-redux'
import { editcomment,deletecomment } from '../../Action/Comment'

const DisplayComment = ({ cid, commentbody, userid, commenton, usercommented }) => {
    const dispatch=useDispatch()
    const [edit, setedit] = useState(false);
    const [comment_body, setcomment_body] = useState("")
    const [comment_id, setcomment_id] = useState("")
    const currentuser = useSelector(state=>state.currentuserreducer);
    const handleedit = (ctid, ctbdy) => {
        setedit(true);
        setcomment_id(ctid);
        setcomment_body(ctbdy);
    }

    const handleonsubmit=(e)=>{
        e.preventDefault()
        if(!comment_body){
            alert("Please type a comment to submit")
        }
        else{
            dispatch(editcomment({id:comment_id,commentbody:comment_body}))
            setcomment_body("")
        }
        setedit(false)
    }
    const handledelete=(id)=>{
        dispatch(deletecomment(id))
    }

    return (
        <>
            {edit?(
                <>
                    <form className='comments_sub_form_comments' onSubmit={handleonsubmit}>
                        <input type="text" onChange={(e)=>setcomment_body(e.target.value)} placeholder='Edit comment' value={comment_body} className='comment_ibox'/>
                        <input type="submit" value="Change" className='comment_add_btn_comments'/>
                    </form>
                </>
            ):(
                <p className="comment_body">{commentbody}</p>
            )}
            <p className="usercommented">{" "}- {usercommented} commented {moment(commenton).fromNow()}</p>
            {currentuser?.result?._id===userid && (
                <p className="EditDel_DisplayComment">
                    <i onClick={()=>handleedit(cid,commentbody)}>Edit</i>
                    <i onClick={()=>handledelete(cid)}>Delete</i>
                </p>
            )}
        </>
    )
}

export default DisplayComment