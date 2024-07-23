import express from 'express'
import { likevideocontroller } from '../Controllers/Like.js';
import { viewscontroller } from '../Controllers/views.js';
import { uploadvideo, getallvideos } from '../Controllers/Video.js';
import { historycontroller,getallhistorycontroller,deletehistory } from '../Controllers/History.js';
import {likedvideocontroller,getalllikedvideocontroller,deletelikedvideo} from '../Controllers/LikedVideo.js'
import {watchlatercontroller,getallwatchlatercontroller,deletewatchlater,} from '../Controllers/WatchLater.js'
import upload from '../Helper/filehelper.js';
import Auth from "../Middleware/Auth.js"

const routes=express.Router();

routes.post("/uploadvideo",Auth,upload.single("file"),uploadvideo)

routes.get("/getvideos",getallvideos)
routes.patch('/like/:id',Auth,likevideocontroller)
routes.patch('/views/:id',viewscontroller)

routes.post('/history',Auth,historycontroller)
routes.get('/getallhistory',getallhistorycontroller)
routes.delete('/deletehistory/:userid',Auth,deletehistory)

routes.post('/likedvideo',Auth,likedvideocontroller)
routes.get('/getalllikedvideo',getalllikedvideocontroller)
routes.delete('/deletelikedvideo/:videoid/:viewer',Auth,deletelikedvideo)

routes.post('/watchlater',Auth,watchlatercontroller)
routes.get('/getallwatchlater',getallwatchlatercontroller)
routes.delete('/deletewatchlater/:videoid/:viewer',Auth,deletewatchlater)

export default routes