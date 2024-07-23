import React from 'react'
import "./ShowVideoGrid.css"
import ShowVideo from '../ShowVideo/ShowVideo'

const ShowVideoGrid = ({ vid }) => {
    return (
        <div className='container_ShowVideoGrid'>
            {
                vid?.reverse().map(vi => {
                    return (
                        <div key={vi._id} className="video_box_app">
                            <ShowVideo vid={vi} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowVideoGrid