import { TrendingUpIcon, ArrowUpIcon, UsersIcon } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
      <Card className="bg-white/5 border-white/10">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-white/60">Today's Orders</p>
            <p className="text-xl md:text-2xl font-bold text-white">
              27270208 ₸
            </p>
            <p className="text-sm text-[#A855F7]">+15% vs yesterday</p>
          </div>
          <div className="rounded-full bg-[#A855F7]/20 p-2 md:p-3">
            <TrendingUpIcon className="h-5 w-5 md:h-6 md:w-6 text-[#A855F7]" />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white/5 border-white/10">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-white/60">Top Item</p>
            <p className="text-xl md:text-2xl font-bold text-white">Burger</p>
            <p className="text-sm text-[#2DD4BF]">T058Y050</p>
          </div>
          <div className="rounded-full bg-[#2DD4BF]/20 p-2 md:p-3">
            <ArrowUpIcon className="h-5 w-5 md:h-6 md:w-6 text-[#2DD4BF]" />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white/5 border-white/10">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-white/60">Current Staff</p>
            <p className="text-xl md:text-2xl font-bold text-white">12/15</p>
            <p className="text-sm text-[#4B4BF5]">3 positions open</p>
          </div>
          <div className="rounded-full bg-[#4B4BF5]/20 p-2 md:p-3">
            <UsersIcon className="h-5 w-5 md:h-6 md:w-6 text-[#4B4BF5]" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
