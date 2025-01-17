import { NextRequest, NextResponse } from 'next/server'
import api from '@/lib/axios'

export async function POST(request: NextRequest) {
  try {
    const { area, range } = await request.json()
    const response = await api.post('/predict', { area, range })
    const predictions = response.data

    return NextResponse.json(predictions)
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch predictions', error: error },
      { status: 500 }
    )
  }
}
