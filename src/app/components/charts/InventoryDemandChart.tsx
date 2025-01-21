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
  { date: 'Понидельник', Burgers: 120, Buns: 140, Patties: 130 },
  { date: 'Вторник', Burgers: 132, Buns: 145, Patties: 135 },
  { date: 'Среда', Burgers: 145, Buns: 155, Patties: 140 },
  { date: 'Четверг', Burgers: 155, Buns: 160, Patties: 150 },
  { date: 'Пятница', Burgers: 165, Buns: 165, Patties: 160 },
  { date: 'Суббота', Burgers: 180, Buns: 175, Patties: 170 },
  { date: 'Воскресенье', Burgers: 190, Buns: 180, Patties: 175 },
]

export default function InventoryDemandChart() {
  return (
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Прогноз спроса на товарные запасы</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4 border-[#F2CB0A] bg-[#F2CB0A]/10">
          <TrendingUp className="h-4 w-4 text-[#F2CB0A]" />
          <AlertTitle className="text-[#F2CB0A]">
            Предупреждение о спросе
          </AlertTitle>
          <AlertDescription className="text-black/80">
            Спрос на бургеры увеличился на 25 %. Закажите дополнительные булочки
            и котлеты.
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
              name="Бургеры"
              type="monotone"
              dataKey="Burgers"
              stroke="#F2CB0A"
              strokeWidth={2}
              dot={{ fill: '#F2CB0A' }}
            />
            <Line
              name="Булочки"
              type="monotone"
              dataKey="Buns"
              stroke="#4CAF50"
              strokeWidth={2}
              dot={{ fill: '#4CAF50' }}
            />
            <Line
              name="Котлеты"
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
