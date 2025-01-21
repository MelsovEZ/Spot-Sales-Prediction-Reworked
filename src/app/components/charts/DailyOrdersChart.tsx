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
  Area,
  AreaChart,
} from 'recharts'
import { Badge } from '@/components/ui/badge'

interface DailyOrdersChartProps {
  data: Record<string, number>
}

export default function DailyOrdersChart({ data }: DailyOrdersChartProps) {
  const chartData = Object.entries(data).map(([date, orders]) => ({
    date,
    orders,
  }))

  const currentTrend =
    chartData.length > 1
      ? (
          ((chartData[chartData.length - 1].orders - chartData[0].orders) /
            chartData[0].orders) *
          100
        ).toFixed(1)
      : 0

  return (
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Daily Orders Timeline</CardTitle>
          <p className="mt-2 text-sm text-white/60">
            Overview of order volume trends
          </p>
        </div>
        <Badge
          variant="outline"
          className={`${
            Number(currentTrend) >= 0
              ? 'border-[#4CAF50] text-[#4CAF50]'
              : 'border-[#F2CB0A] text-[#F2CB0A]'
          }`}
        >
          {Number(currentTrend) >= 0 ? '+' : ''}
          {currentTrend}% trend
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="orderGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F2CB0A" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#F2CB0A" stopOpacity={0} />
                </linearGradient>
              </defs>
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
              <Area
                type="monotone"
                dataKey="orders"
                stroke="#F2CB0A"
                fill="url(#orderGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
