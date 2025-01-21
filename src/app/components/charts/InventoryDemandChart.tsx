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
  { date: 'Mon', Burgers: 120, Buns: 140, Patties: 130 },
  { date: 'Tue', Burgers: 132, Buns: 145, Patties: 135 },
  { date: 'Wed', Burgers: 145, Buns: 155, Patties: 140 },
  { date: 'Thu', Burgers: 155, Buns: 160, Patties: 150 },
  { date: 'Fri', Burgers: 165, Buns: 165, Patties: 160 },
  { date: 'Sat', Burgers: 180, Buns: 175, Patties: 170 },
  { date: 'Sun', Burgers: 190, Buns: 180, Patties: 175 },
]

export default function InventoryDemandChart() {
  return (
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Inventory Demand Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4 border-[#F2CB0A] bg-[#F2CB0A]/10">
          <TrendingUp className="h-4 w-4 text-[#F2CB0A]" />
          <AlertTitle className="text-[#F2CB0A]">Demand Alert</AlertTitle>
          <AlertDescription className="text-black/80">
            Burger demand has increased by 25%. Order additional Buns and
            Patties.
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
              stroke="rgba(0,0,0,1)"
              tick={{ fill: 'rgba(0,0,0,1)' }}
            />
            <YAxis stroke="rgba(0,0,0,1)" tick={{ fill: 'rgba(0,0,0,1)' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(30,30,46,0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
              }}
            />
            <Legend formatter={(value) => <span>{value}</span>} />
            <Line
              type="monotone"
              dataKey="Burgers"
              stroke="#F2CB0A"
              strokeWidth={2}
              dot={{ fill: '#F2CB0A' }}
            />
            <Line
              type="monotone"
              dataKey="Buns"
              stroke="#4CAF50"
              strokeWidth={2}
              dot={{ fill: '#4CAF50' }}
            />
            <Line
              type="monotone"
              dataKey="Patties"
              stroke="#AD3205"
              strokeWidth={2}
              dot={{ fill: '#AD3205' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
