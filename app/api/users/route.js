import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({name: "Haroon Ahmad Khan",age:20,city: "Sahiwal"},{status:200})
}