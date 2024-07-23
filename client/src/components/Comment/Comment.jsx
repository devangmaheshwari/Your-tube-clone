import React, { useState } from 'react'
import "./Comment.css"
import DisplayComment from './DisplayComment'
import { useSelector, useDispatch } from 'react-redux'
import { postcomment } from '../../Action/Comment'

const Comment = ({ videoid }) => {
    const dispatch = useDispatch()
    const [commenttext, setcommenttext] = useState("");
    const currentuser = useSelector(state => state.currentuserreducer);
    const commentlist = useSelector(state => state.commentreducer)
    // const commentlist = [
    //     {
    //         _id: 1,
    //         commentbody: "Comment1",
    //         usercommented: "ABC"
    //     },
    //     {
    //         _id: 2,
    //         commentbody: "Comment2",
    //         usercommented: "ABC"
    //     }
    // ];
    const handleonsubmit = (e) => {
        e.preventDefault()
        if (currentuser) {
            if (!commenttext) {
                alert("Please type your comment!");
            }
            else {
                dispatch(postcomment({
                    videoid: videoid,
                    userid: currentuser?.result._id,
                    commentbody: commenttext,
                    usercommented: currentuser.result.name
                }))
                setcommenttext("");
            }
        }
        else {
            alert("Please login to comment");
        }
    }
    return (
        <>
            <form className='comments_sub_form_comments' onSubmit={handleonsubmit}>
                <input type="text" onChange={(e) => setcommenttext(e.target.value)} placeholder='Add a comment...' value={commenttext} className='comment_ibox' />
                <input type="submit" value="Add" className='comment_add_btn_comments' />
            </form>
            <div className="display_comment_container">
                {commentlist?.data?.filter((q) => videoid === q?.videoid) // adding a ? after data 
                    .reverse()
                    .map((m) => {
                        return (<DisplayComment cid={m._id} userid={m.userid} commentbody={m.commentbody} commenton={m.commenton} usercommented={m.usercommented} />)
                    })}
            </div>
        </>
    )
}

export default Comment
