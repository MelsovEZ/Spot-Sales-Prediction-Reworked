'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const stockLevels = [
  { item: 'Burger Buns', current: 140, required: 200, urgent: true },
  { item: 'Beef Patties', current: 155, required: 200, urgent: true },
  { item: 'Lettuce', current: 45, required: 50, urgent: false },
  { item: 'Cheese Slices', current: 180, required: 200, urgent: false },
]

export default function StockLevelWarning() {
  return (
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm h-full">
      <CardHeader>
        <CardTitle>Stock Level Warnings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stockLevels.map((item) => (
            <div key={item.item} className="space-y-2">
              <div className="flex justify-between">
                <span>{item.item}</span>
                <span
                  className={`${
                    item.urgent ? 'text-[#F2CB0A]' : 'text-black/60'
                  }`}
                >
                  {item.current}/{item.required}
                </span>
              </div>
              <Progress
                value={(item.current / item.required) * 100}
                className={`h-2 bg-white/10 ${item.urgent ? 'bg-[#F2CB0A]' : 'bg-[#4CAF50]'}`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
