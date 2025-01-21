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
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Labor Cost Analysis</CardTitle>
        <Badge variant="outline" className="border-[#F2CB0A] text-[#F2CB0A]">
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
              dataKey="actual"
              stroke="#F2CB0A"
              strokeWidth={2}
              dot={{ fill: '#F2CB0A' }}
              name="Actual Staff"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#4CAF50"
              strokeWidth={2}
              dot={{ fill: '#4CAF50' }}
              name="Predicted Need"
            />
            <Line
              type="monotone"
              dataKey="optimal"
              stroke="#AD3205"
              strokeWidth={2}
              dot={{ fill: '#AD3205' }}
              name="Optimal Staff"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
