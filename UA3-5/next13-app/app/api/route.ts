import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: Request) { /* obtém recurso */ }
// export async function POST(request: Request) { /* cria novo recurso */ }
// export async function PUT(request: Request) { /* edita um recurso */ }
// export async function DELETE(request: Request) {/* deleta um recurso */}

export async function GET(request: NextRequest) {
    return NextResponse.json({ message: 'Olá mundo!' },{ status: 200 });
}