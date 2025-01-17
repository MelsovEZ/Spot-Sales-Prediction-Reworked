import { NextResponse } from 'next/server'
import api from '@/lib/axios'

export async function GET() {
  try {
    const response = await api.get('/areas')
    const areas = response.data

    return NextResponse.json(areas)
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch areas', error: error },
      { status: 500 }
    )
  }
}
