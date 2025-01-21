import { TrendingUpIcon, ArrowUpIcon, UsersIcon } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
      <Card className="bg-white border-[#4CAF50] border-t-4">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-gray-600">Заказов сегодня</p>
            <p className="text-2xl font-bold text-[#4CAF50]">27270208 ₸</p>
            <p className="text-sm text-[#4CAF50]">
              +15% в отличии от вчерашнего дня
            </p>
          </div>
          <div className="rounded-full bg-[#4CAF50]/10 p-3">
            <TrendingUpIcon className="h-6 w-6 text-[#4CAF50]" />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white border-[#F2CB0A] border-t-4">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-gray-600">Топ позиция</p>
            <p className="text-2xl font-bold text-[#F2CB0A]">
              Combo Big Burger
            </p>
            <p className="text-sm text-[#F2CB0A]">T058Y050</p>
          </div>
          <div className="rounded-full bg-[#F2CB0A]/10 p-3">
            <ArrowUpIcon className="h-6 w-6 text-[#F2CB0A]" />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white border-[#AD3205] border-t-4">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-gray-600">Текущий персонал</p>
            <p className="text-2xl font-bold text-[#AD3205]">12/15</p>
            <p className="text-sm text-[#AD3205]">3 открытых позиции</p>
          </div>
          <div className="rounded-full bg-[#AD3205]/10 p-3">
            <UsersIcon className="h-6 w-6 text-[#AD3205]" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
