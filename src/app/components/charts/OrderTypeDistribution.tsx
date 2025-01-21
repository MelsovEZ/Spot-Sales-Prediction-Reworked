'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'

interface OrderTypeDistributionProps {
  data: Array<{
    Type_of_Order: string
    Predicted_Orders: number
  }>
}

export default function OrderTypeDistribution({
  data,
}: OrderTypeDistributionProps) {
  const orderTypes = data.reduce(
    (acc, item) => {
      acc[item.Type_of_Order] =
        (acc[item.Type_of_Order] || 0) + item.Predicted_Orders
      return acc
    },
    {} as Record<string, number>
  )

  const chartData = Object.entries(orderTypes).map(([name, value]) => ({
    name,
    value,
  }))

  const COLORS = ['#F2CB0A', '#4CAF50']

  return (
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm h-full">
      <CardHeader>
        <CardTitle>Order Type Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="rgba(255,255,255,0.1)"
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(110,110,126,0.8)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
              }}
            />
            <Legend formatter={(value) => <span>{value}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
