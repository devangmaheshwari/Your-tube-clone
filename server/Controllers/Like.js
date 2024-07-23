import Videofile from "../Models/Videofile.js";
import mongoose from 'mongoose'

export const likevideocontroller=async(req,res)=>{
    const {id:_id}=req.params
    const {Like}=req.body

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Video unavailable...")
    }

    try {
        const updatelike=await Videofile.findByIdAndUpdate(
            _id,{
                $set:{"Like":Like}
            }
        )
        res.status(200).json(updatelike)
    } catch (error) {
        res.status(400).json("Error",error)
    }
}