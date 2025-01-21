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

const categoryMap: Record<string, string> = {
  Drinks: 'Напитки',
  Sides: 'Закуски',
  Desserts: 'Десерты',
  Burgers: 'Бургеры',
}

export default function CategoryAnalysis({ data }: CategoryAnalysisProps) {
  const categoryData = data.reduce(
    (acc, item) => {
      const localizedCategory = categoryMap[item.Category] || item.Category
      if (!acc[localizedCategory]) {
        acc[localizedCategory] = {
          Category: localizedCategory,
          Takeaway: 0,
          Dining: 0,
        }
      }
      const orderType = item.Type_of_Order
      acc[localizedCategory][orderType] += item.Predicted_Orders
      return acc
    },
    {} as Record<string, { Category: string; Takeaway: number; Dining: number }>
  )

  const chartData = Object.values(categoryData)

  return (
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm h-full">
      <CardHeader>
        <CardTitle>Анализ по категориям</CardTitle>
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
            <Bar name="На вынос" dataKey="Takeaway" fill="#F2CB0A" />
            <Bar name="В зале" dataKey="Dining" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
