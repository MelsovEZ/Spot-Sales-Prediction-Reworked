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
  { hour: '06:00', actual: 3, predicted: 2, optimal: 2 },
  { hour: '08:00', actual: 4, predicted: 4, optimal: 4 },
  { hour: '10:00', actual: 6, predicted: 5, optimal: 5 },
  { hour: '12:00', actual: 8, predicted: 7, optimal: 7 },
  { hour: '14:00', actual: 6, predicted: 6, optimal: 5 },
  { hour: '16:00', actual: 5, predicted: 5, optimal: 4 },
  { hour: '18:00', actual: 7, predicted: 7, optimal: 7 },
  { hour: '20:00', actual: 5, predicted: 4, optimal: 4 },
  { hour: '22:00', actual: 3, predicted: 3, optimal: 2 },
]

export default function LaborCostAnalysis() {
  const currentOverstaffing = data.reduce(
    (acc, curr) => acc + (curr.actual - curr.optimal),
    0
  )

  return (
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Анализ стоимости рабочей силы</CardTitle>
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
              name="Фактическая численность"
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#4CAF50"
              strokeWidth={2}
              dot={{ fill: '#4CAF50' }}
              name="Прогнозируемая потребность"
            />
            <Line
              type="monotone"
              dataKey="optimal"
              stroke="#AD3205"
              strokeWidth={2}
              dot={{ fill: '#AD3205' }}
              name="Оптимальный персонал"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
