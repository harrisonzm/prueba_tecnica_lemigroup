import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string }}): Promise<NextResponse>{
    return NextResponse.json({
        cantantes: "canta"
    })
}


export async function POST(req: NextRequest, { params }: { params: { id: string }}): Promise<NextResponse>{
    return NextResponse.json({
        cantantes: "canta"
    })
}