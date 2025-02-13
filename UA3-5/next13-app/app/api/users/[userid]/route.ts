//./app/users/[userId]/route.ts
import { NextRequest, NextResponse } from "next/server";

type Params = { params: { userid: string } };

export async function GET(req: NextRequest, { params: { userid } }: Params) {
    //console.log(userid);
    return NextResponse.json({ userId: userid }, { status: 200 });
}