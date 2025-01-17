'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { TrendingUp } from 'lucide-react'

const data = [
  { date: 'Mon', burgers: 120, buns: 140, patties: 130 },
  { date: 'Tue', burgers: 132, buns: 145, patties: 135 },
  { date: 'Wed', burgers: 145, buns: 155, patties: 140 },
  { date: 'Thu', burgers: 155, buns: 160, patties: 150 },
  { date: 'Fri', burgers: 165, buns: 165, patties: 160 },
  { date: 'Sat', burgers: 180, buns: 175, patties: 170 },
  { date: 'Sun', burgers: 190, buns: 180, patties: 175 },
]

export default function InventoryDemandChart() {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Inventory Demand Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4 border-[#A855F7] bg-[#A855F7]/10">
          <TrendingUp className="h-4 w-4 text-[#A855F7]" />
          <AlertTitle className="text-[#A855F7]">Demand Alert</AlertTitle>
          <AlertDescription className="text-white/80">
            Burger demand has increased by 25%. Order additional buns and
            patties.
          </AlertDescription>
        </Alert>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis
              dataKey="date"
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.5)' }}
            />
            <YAxis
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.5)' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(30,30,46,0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
              }}
            />
            <Legend
              formatter={(value) => (
                <span style={{ color: 'white' }}>{value}</span>
              )}
            />
            <Line
              type="monotone"
              dataKey="burgers"
              stroke="#A855F7"
              strokeWidth={2}
              dot={{ fill: '#A855F7' }}
            />
            <Line
              type="monotone"
              dataKey="buns"
              stroke="#2DD4BF"
              strokeWidth={2}
              dot={{ fill: '#2DD4BF' }}
            />
            <Line
              type="monotone"
              dataKey="patties"
              stroke="#4B4BF5"
              strokeWidth={2}
              dot={{ fill: '#4B4BF5' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
