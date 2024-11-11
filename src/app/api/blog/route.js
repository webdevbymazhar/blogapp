import dbConnect from "@/backend/dbConnect"
import { Blog } from "@/backend/models/Blog"
import { NextResponse } from "next/server"


export async function POST(req) {

    await dbConnect()

    try {
        let {title,image,description,category} = await req.json()

        if(!title || !image || !description || !category){
            return NextResponse.json({
            message : "Please fill all the credentials!"
            },{status:401})
        }

        let blog = Blog({
            title,image,description,category
        })

        let savedBlog = await blog.save()

        return NextResponse.json({
            savedBlog
        }, {status:200})


    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            message : error.message
        }, {status:400})
    }
    
}



export async function GET(req) {

    await dbConnect()

    try {
        let blogs = await Blog.find()
        return NextResponse.json({
            blogs
        }, {status:200})


    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            message : error.message
        }, {status:400})
    }
    
}



