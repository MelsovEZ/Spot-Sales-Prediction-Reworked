'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface CategoryAnalysisProps {
  data: Array<{
    Category: string
    Type_of_Order: 'Takeaway' | 'Dining'
    Predicted_Orders: number
  }>
}

export default function CategoryAnalysis({ data }: CategoryAnalysisProps) {
  const categoryData = data.reduce(
    (acc, item) => {
      if (!acc[item.Category]) {
        acc[item.Category] = { Category: item.Category, Takeaway: 0, Dining: 0 }
      }
      const orderType = item.Type_of_Order as 'Takeaway' | 'Dining'
      acc[item.Category][orderType] += item.Predicted_Orders
      return acc
    },
    {} as Record<string, { Category: string; Takeaway: number; Dining: number }>
  )

  const chartData = Object.values(categoryData)

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
      <CardHeader>
        <CardTitle className="text-white">Category-wise Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis
              dataKey="Category"
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
            <Bar dataKey="Takeaway" fill="#A855F7" />
            <Bar dataKey="Dining" fill="#2DD4BF" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
