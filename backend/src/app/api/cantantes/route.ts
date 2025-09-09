import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse>{
    return NextResponse.json({
        cantantes: "canta"
    })
}


export async function POST(req: NextRequest): Promise<NextResponse>{
    return NextResponse.json({
        cantantes: "canta"
    })
}