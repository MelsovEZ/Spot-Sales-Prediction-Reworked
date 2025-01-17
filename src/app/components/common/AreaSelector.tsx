'use client'

import { useState, useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface AreaSelectorProps {
  onAreaChange: (area: string) => void
}

export default function AreaSelector({ onAreaChange }: AreaSelectorProps) {
  const [areas, setAreas] = useState<string[]>([])
  const [selectedArea, setSelectedArea] = useState<string>('')

  useEffect(() => {
    fetch('/api/areas')
      .then((response) => response.json())
      .then((data) => setAreas(data.areas))
      .catch((error) => console.error('Error fetching areas:', error))
  }, [])

  useEffect(() => {
    if (areas.length > 0) {
      setSelectedArea(areas[0])
      onAreaChange(areas[0])
    }
  }, [areas])

  const handleAreaChange = (value: string) => {
    setSelectedArea(value)
    onAreaChange(value)
  }

  return (
    <Select value={selectedArea} onValueChange={handleAreaChange}>
      <SelectTrigger className="sm:w-[160px] bg-gray-50 text-black font-medium hover:bg-gray-300 transition-colors">
        <SelectValue placeholder="Area Name" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {areas.map((area) => (
          <SelectItem key={area} value={area}>
            {area}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
