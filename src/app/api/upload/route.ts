import { NextRequest, NextResponse } from 'next/server'
import api from '@/lib/axios'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const apiFormData = new FormData()
    apiFormData.append('file', file)

    // Send the file to the backend API
    const response = await api.post('/upload', apiFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to upload file', error: error },
      { status: 500 }
    )
  }
}
