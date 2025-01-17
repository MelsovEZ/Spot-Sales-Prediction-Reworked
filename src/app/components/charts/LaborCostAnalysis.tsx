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
import { Badge } from '@/components/ui/badge'

const data = [
  { hour: '6AM', actual: 3, predicted: 2, optimal: 2 },
  { hour: '8AM', actual: 4, predicted: 4, optimal: 4 },
  { hour: '10AM', actual: 6, predicted: 5, optimal: 5 },
  { hour: '12PM', actual: 8, predicted: 7, optimal: 7 },
  { hour: '2PM', actual: 6, predicted: 6, optimal: 5 },
  { hour: '4PM', actual: 5, predicted: 5, optimal: 4 },
  { hour: '6PM', actual: 7, predicted: 7, optimal: 7 },
  { hour: '8PM', actual: 5, predicted: 4, optimal: 4 },
  { hour: '10PM', actual: 3, predicted: 3, optimal: 2 },
]

export default function LaborCostAnalysis() {
  const currentOverstaffing = data.reduce(
    (acc, curr) => acc + (curr.actual - curr.optimal),
    0
  )

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Labor Cost Analysis</CardTitle>
        <Badge variant="outline" className="border-[#A855F7] text-[#A855F7]">
          {currentOverstaffing > 0
            ? `${currentOverstaffing} Extra Staff`
            : 'Optimal Staffing'}
        </Badge>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis
              dataKey="hour"
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
              dataKey="actual"
              stroke="#A855F7"
              strokeWidth={2}
              dot={{ fill: '#A855F7' }}
              name="Actual Staff"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#2DD4BF"
              strokeWidth={2}
              dot={{ fill: '#2DD4BF' }}
              name="Predicted Need"
            />
            <Line
              type="monotone"
              dataKey="optimal"
              stroke="#4B4BF5"
              strokeWidth={2}
              dot={{ fill: '#4B4BF5' }}
              name="Optimal Staff"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
