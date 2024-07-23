import Videofile from "../Models/Videofile.js";

export const uploadvideo=async(req,res)=>{
    if(req.file===undefined){
        res.status(404).json({message:"Please upload a .mp4 video file only"})
    }
    else{
        try {
            const file=new Videofile({
                videotitle: req.body.title,
                filename: req.file.originalname,
                filetype: req.file.mimetype,
                filepath: req.file.path,
                filesize: req.file.size,
                videochannel: req.body.channel,
                uploader: req.body.uploader
            })
            console.log(file)
            await file.save()
            res.status(200).send("File uploaded successfully")
        } catch (error) {
            res.status(404).json(error.message)
            return
        }
    }
}

export const getallvideos=async(req,res)=>{
    try {
        const files=await Videofile.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(404).json(error.message)
        return
    }
}