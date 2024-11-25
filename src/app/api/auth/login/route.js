import dbConnect from "@/backend/dbConnect"
import { User } from "@/backend/models/User"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function POST(req) {

    await dbConnect()

    try {
        let {email,password} = await req.json()
        let checkUser = await User.findOne({email})

        if(!checkUser){
            return NextResponse.json({
                message : "Invalid Credentials!"
            },{status:400})
        }

        let isMatch = await bcrypt.compare(password,checkUser.password)

        if(!isMatch){
            return NextResponse.json({
                message : "Invalid Credentials!"
            },{status:400})
        }

        let token = jwt.sign({ id : checkUser._id},process.env.JWT_PRIVATE_KEY,{
            expiresIn : "1d"
        })
        
        return NextResponse.json({
            token : token
        },{status:200}) 

       

        

    } catch (error) {
        return NextResponse.json({
            message : error.message
        },{status:400})
    }
    
}
