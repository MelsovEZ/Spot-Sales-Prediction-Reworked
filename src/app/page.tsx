'use client'
import Header from './components/common/Header'
import PredictionDashboard from './components/common/PredictionDashboard'
import { Toaster } from './components/ui/toaster'
import { useState } from 'react'

export default function Home() {
  const [selectedArea, setSelectedArea] = useState<string>('')

  return (
    <main className="min-h-screen">
      <Header onAreaChange={setSelectedArea} />
      <PredictionDashboard selectedArea={selectedArea} />
      <Toaster />
    </main>
  )
}
