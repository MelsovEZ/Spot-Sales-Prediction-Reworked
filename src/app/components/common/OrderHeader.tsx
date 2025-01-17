'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Utensils } from 'lucide-react'

interface DailyOrder {
  date: string
  amount: string
  isSelected?: boolean
}

interface OrderHeaderProps {
  currentDate: string
  orderType: string
  orderDetails: string
  dineInCode: string
  dailyOrders: DailyOrder[]
}

export default function OrderHeader({
  currentDate = '19 January',
  orderType = 'TOP: Burgers',
  orderDetails = '27270208',
  dineInCode = 'T058Y050',
  dailyOrders = [
    { date: '23 декабря', amount: '37,170₸' },
    { date: '24 декабря', amount: '41,520₸' },
    { date: '25 декабря', amount: '50,340₸' },
    { date: '26 декабря', amount: '67,070₸' },
    { date: '27 декабря', amount: '73,450₸' },
  ],
}: OrderHeaderProps) {
  return (
    <div className="space-y-6 mb-6">
      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-xl shadow-lg">
                <Utensils className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-white truncate">
                  {currentDate}
                </h2>
                <span className="ml-2 inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-xs text-white/80">
                  18 Mnd
                </span>
              </div>
              <div className="mt-3 space-y-1">
                <p className="text-sm text-white/60">{orderType}</p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-xs text-white/40">
                    Order count: #{orderDetails}
                  </span>
                </div>
                <p className="text-xs text-white/40">{dineInCode}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/5 backdrop-blur-sm border-white/10">
        <CardContent className="p-0">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex p-4">
              {dailyOrders.map((order, i) => (
                <div
                  key={i}
                  className={`
                                        flex-none first:ml-0 ml-1 rounded-lg px-4 py-2.5
                                        ${
                                          order.isSelected
                                            ? 'bg-white/10'
                                            : 'hover:bg-white/5 transition-colors'
                                        }
                                    `}
                >
                  <p className="text-xs font-medium text-white/40">
                    {order.date}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {order.amount}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="bg-white/5" />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
