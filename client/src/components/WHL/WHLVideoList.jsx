import React from 'react' 
import ShowVideoList from '../ShowVideoList/ShowVideoList'

const WHLVideoList = ({ page, currentuser, videolist }) => {
    return (
        <>
            {currentuser?(
                <>
                    {
                        videolist?.data?.filter(q=>q?.viewer===currentuser).reverse().map(m=>{
                            console.log(m)
                            return(
                                <>
                                    <ShowVideoList videoid={m?.videoid} key={m?._id}/>
                                </>
                            )
                        })
                    }
                </>
            ):(
                <>
                    <h2 style={{color: "white"}}>Please login to watch your {page}</h2>
                </>
            )}
        </>
    )
}

export default WHLVideoList