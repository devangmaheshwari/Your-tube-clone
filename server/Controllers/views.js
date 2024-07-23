import Videofile from "../Models/Videofile.js";
import mongoose from 'mongoose'

export const viewscontroller=async(req,res)=>{
    const {id:_id}=req.params

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Video unavailable...")
    }

    try {
        const files=await Videofile.findById(_id);
        const views=files.views;
        const updateview=await Videofile.findByIdAndUpdate(_id,{
            $set:{views:views+1}
        })
        res.status(200).json(updateview)
    } catch (error) {
        res.status(400).json("Error",error)
    }
}