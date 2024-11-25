import { User } from "@/backend/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import dbConnect from "@/backend/dbConnect";

export async function POST(req) {
    await dbConnect()
    try {

        let {email,password} = await req.json()

        let alreadyExists = await User.findOne({email})

        if(alreadyExists){
            return NextResponse.json({
                message : "User Already Exists"
            },{status:401})
        }

        let hashPassword = await bcrypt.hash(password,10)
        

        let newUser = User({
            email,password : hashPassword
        })

        let finalUser = await newUser.save()
        return NextResponse.json({
            message : finalUser
        },{status:200})

        
    } catch (error) {
        return NextResponse.json({
            message : error.message
        },{status:400})
    }
}