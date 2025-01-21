'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import DateRangeSelector from './DateRangeSelector'
import OrderHeader from './OrderHeader'
import CategoryAnalysis from '../charts/CategoryAnalysis'
import DailyOrdersChart from '../charts/DailyOrdersChart'
import HourlyDistribution from '../charts/HourlyDistribution'
import InventoryDemandChart from '../charts/InventoryDemandChart'
import LaborCostAnalysis from '../charts/LaborCostAnalysis'
import OrderTypeDistribution from '../charts/OrderTypeDistribution'
import StaffEfficiencyChart from '../charts/StaffEfficiencyChart'
import StockLevelWarning from '../charts/StockLevelWarning'
import TopItemsPrediction from '../charts/TopItemsPrediction'
import QuickStats from '../charts/QuickStats'

interface PredictionDashboardProps {
  selectedArea: string
}

export default function PredictionDashboard({
  selectedArea,
}: PredictionDashboardProps) {
  const [dateRange, setDateRange] = useState<string>('1d')
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [predictions, setPredictions] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const hourlyData = [
    { hour: '6AM', orders: 12 },
    { hour: '7AM', orders: 15 },
    { hour: '8AM', orders: 25 },
    { hour: '9AM', orders: 35 },
    { hour: '10AM', orders: 42 },
    { hour: '11AM', orders: 55 },
    { hour: '12PM', orders: 70 },
    { hour: '1PM', orders: 65 },
    { hour: '2PM', orders: 45 },
    { hour: '3PM', orders: 35 },
    { hour: '4PM', orders: 30 },
    { hour: '5PM', orders: 45 },
    { hour: '6PM', orders: 55 },
    { hour: '7PM', orders: 65 },
    { hour: '8PM', orders: 60 },
    { hour: '9PM', orders: 45 },
    { hour: '10PM', orders: 30 },
    { hour: '11PM', orders: 20 },
  ]

  const dailyOrders = [
    { date: '18 January', amount: '3717287 ₸' },
    { date: '19 January', amount: '4152093 ₸', isSelected: true },
    { date: '20 January', amount: '5034716 ₸' },
    { date: '21 January', amount: '6707382 ₸' },
    { date: '22 January', amount: '703000 ₸' },
    { date: '23 January', amount: '3717287 ₸' },
    { date: '24 January', amount: '4152093 ₸' },
    { date: '25 January', amount: '5034716 ₸' },
    { date: '26 January', amount: '6707382 ₸' },
    { date: '27 January', amount: '703000 ₸' },
    { date: '28 January', amount: '3717287 ₸' },
    { date: '29 January', amount: '4152093 ₸' },
    { date: '30 January', amount: '5034716 ₸' },
    { date: '31 January', amount: '6707382 ₸' },
    { date: '1 February', amount: '703000 ₸' },
    { date: '2 February', amount: '3717287 ₸' },
    { date: '3 February', amount: '4152093 ₸' },
    { date: '4 February', amount: '5034716 ₸' },
  ]

  const fetchPredictions = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ area: selectedArea, range: dateRange }),
      })
      const data = await response.json()
      setPredictions(data)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Error fetching predictions:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto p-4">
          <div className="flex flex-col space-y-4">
            {/* Top Controls */}
            <div className="flex items-center gap-4 md:justify-start">
              <DateRangeSelector value={dateRange} onChange={setDateRange} />
              <Button
                onClick={fetchPredictions}
                disabled={loading}
                className="bg-[#4CAF50] hover:bg-[#45a049]"
              >
                {loading ? 'Loading' : 'Refresh'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {predictions && (
        <>
          {/* Quick Stats */}
          <QuickStats />

          {/* Main Content */}
          <div className="container mx-auto p-4">
            {lastUpdated && (
              <p className="mb-4 text-sm text-gray-600">
                Last updated: {lastUpdated.toLocaleString()}
              </p>
            )}

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 mb-6">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="inventory"
                  className="data-[state=active]:bg-[#F2CB0A] data-[state=active]:text-white"
                >
                  Inventory
                </TabsTrigger>
                <TabsTrigger
                  value="staff"
                  className="data-[state=active]:bg-[#AD3205] data-[state=active]:text-white"
                >
                  Staff
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 ">
                    <OrderHeader
                      currentDate="18 January"
                      orderType="Top Item: Big Mac"
                      orderDetails="27270208"
                      dineInCode="T058Y050"
                      dailyOrders={dailyOrders}
                    />
                  </div>
                  <div className="col-span-12">
                    <HourlyDistribution data={hourlyData} />
                  </div>
                  <div className="col-span-12 lg:col-span-8">
                    <DailyOrdersChart data={predictions?.daily_totals ?? {}} />
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <OrderTypeDistribution
                      data={predictions?.predictions ?? []}
                    />
                  </div>
                  <div className="col-span-12">
                    <TopItemsPrediction data={predictions?.predictions ?? []} />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="inventory">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 lg:col-span-8">
                    <InventoryDemandChart />
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <StockLevelWarning />
                  </div>
                  <div className="col-span-12">
                    <CategoryAnalysis data={predictions?.predictions ?? []} />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="staff">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 lg:col-span-6">
                    <StaffEfficiencyChart />
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <LaborCostAnalysis />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </div>
  )
}

