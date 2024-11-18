import dbConnect from "@/backend/dbConnect";
import { Blog } from "@/backend/models/Blog";
import { NextResponse } from "next/server";

export async function PUT(req,{params}) {
     await dbConnect()
    try {

        let id = params.id

        let {title,image,description,category} = await req.json()

        // if(!title || !image || !description || !category){
        //     return NextResponse.json({
        //     message : "Please fill all the credentials!"
        //     },{status:401})
        // }

        let blog = await Blog.findByIdAndUpdate(id,{
            title,image,description,category
        },{new:true})


        return NextResponse.json({
            blog
        }, {status:200})




    } catch (error) {
        return NextResponse.json({
            message : error.message
        }, {status:400})

    }
    
}

export async function GET(req,{params}) {

    await dbConnect()

    try {

        let id = params.id
        
        let blog = await Blog.findById(id)
        return NextResponse.json({
            blog
        }, {status:200})


    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            message : error.message
        }, {status:400})
    }
    
}


export async function DELETE(req,{params}) { 
await dbConnect()
    try {

        let id = params.id
         let deletedblog = await Blog.findByIdAndDelete(id)

        return NextResponse.json({
            message : "Blog deleted successfully!",
            deletedblog
        }, {status:200})




    } catch (error) {
        return NextResponse.json({
            message : error.message
        }, {status:400})

    }
    
}