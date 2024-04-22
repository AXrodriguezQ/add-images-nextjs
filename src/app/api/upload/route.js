import { writeFile } from 'fs/promises'
import path from 'path'

export async function GET(request) {
    return new Response(
        JSON.stringify({
            message: 'Hello World!'
        })
    )
}

export async function POST(request) {

    const data = await request.formData()

    const file = data.get('file')

    const bytes = await file.arrayBuffer()

    const buffer = Buffer.from(bytes)

    console.log(process.cwd());

    const filePath = path.join(process.cwd(), 'public', file.name)

    writeFile(filePath, buffer)

    console.log('File created in', filePath);

    return new Response(
        JSON.stringify({
            message: 'File uploaded successfully'
        })
    )
}
