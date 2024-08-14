import { Request, Response, Router } from "express";
import { SignUpDto } from "./user.dto";
import { dtoValidation } from "../../utils/dtoValidation";

const userRoutes = Router()

userRoutes.post("/signup", async(req:Request, res: Response)=>{
  const data = new SignUpDto()
  data.email = req.body.email
  data.password = req.body.password
  const error = await dtoValidation(data)
  if(error) {
    res.json(error)
    return
  }  
  res.json(req.body)
})

export default userRoutes