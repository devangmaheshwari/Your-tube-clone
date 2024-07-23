import express from 'express'
import { postcomment,getallcomment,deletecomment,editcomment } from '../Controllers/Comment.js'
import Auth from "../Middleware/Auth.js"

const routes=express.Router();

routes.post("/post",Auth,postcomment)
routes.get("/get",getallcomment)
routes.delete("/delete/:id",Auth,deletecomment)
routes.patch("/edit/:id",Auth,editcomment)

export default routes