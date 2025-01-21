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

const data = [
  { shift: 'Morning', efficiency: 94, sales: 2100, labor: 420 },
  { shift: 'Afternoon', efficiency: 87, sales: 1800, labor: 450 },
  { shift: 'Evening', efficiency: 92, sales: 2400, labor: 480 },
  { shift: 'Night', efficiency: 78, sales: 1200, labor: 360 },
]

export default function StaffEfficiencyChart() {
  return (
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Staff Efficiency by Shift</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis
              dataKey="shift"
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
            <Bar dataKey="efficiency" fill="#F2CB0A" name="Efficiency %" />
            <Bar dataKey="sales" fill="#4CAF50" name="Sales ($)" />
            <Bar dataKey="labor" fill="#AD3205" name="Labor Cost ($)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
