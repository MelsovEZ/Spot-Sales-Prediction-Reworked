'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { ArrowDownUp } from 'lucide-react'

interface TopItemsPredictionProps {
  data: Array<{
    Item: string
    Category: string
    Predicted_Orders: number
    Type_of_Order: string
  }>
}

export default function TopItemsPrediction({ data }: TopItemsPredictionProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filteredData = data.filter(
    (item) => item.Item.toLowerCase().includes(searchTerm.toLowerCase())
    // Hide Category column, so exclude it from search if desired:
    // || item.Category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedData = sortColumn
    ? [...filteredData].sort((a, b) => {
        if (a[sortColumn as keyof typeof a] < b[sortColumn as keyof typeof b])
          return sortDirection === 'asc' ? -1 : 1
        if (a[sortColumn as keyof typeof a] > b[sortColumn as keyof typeof b])
          return sortDirection === 'asc' ? 1 : -1
        return 0
      })
    : filteredData

  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const currentData = sortedData.slice(firstIndex, lastIndex)

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, sortColumn, sortDirection])

  return (
    <Card className="bg-white/5 border-gray-200 backdrop-blur-sm min-h-[400px]">
      <CardHeader>
        <CardTitle>Прогнозирование по позициям</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Поиск..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 bg-white/10 border-gray-200 placeholder:text-black/60"
        />
        <div className="rounded-md border border-gray-200">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-white/5 ">
                <TableHead
                  className="text-black/60 cursor-pointer"
                  onClick={() => handleSort('Item')}
                >
                  <div className="flex items-center gap-2">
                    Название
                    <ArrowDownUp size={15} />
                  </div>
                </TableHead>
                {/* Category column hidden
                <TableHead
                  className="text-black/60 cursor-pointer"
                  onClick={() => handleSort('Category')}
                >
                  <div className="flex items-center gap-2">
                    Category
                    <ArrowDownUp size={15} />
                  </div>
                </TableHead> */}
                <TableHead
                  className="text-black/60 cursor-pointer"
                  onClick={() => handleSort('Predicted_Orders')}
                >
                  <div className="flex items-center gap-2">
                    Прогноз
                    <ArrowDownUp size={15} />
                  </div>
                </TableHead>
                <TableHead
                  className="text-black/60 cursor-pointer"
                  onClick={() => handleSort('Type_of_Order')}
                >
                  <div className="flex items-center gap-2">
                    Тип заказа
                    <ArrowDownUp size={15} />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((item, index) => (
                <TableRow key={index} className="hover:bg-white/5">
                  <TableCell>{item.Item}</TableCell>
                  {/* Category column hidden
                  <TableCell>{item.Category}</TableCell> */}
                  <TableCell>{item.Predicted_Orders}</TableCell>
                  <TableCell>
                    {item.Type_of_Order === 'Dining' ? 'В зале' : 'На вынос'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex items-center justify-between text-black/80">
          <button
            className="px-3 py-1 border border-white/20 rounded hover:bg-white/10"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Предыдущая
          </button>
          <span>
            Страница {currentPage} из {totalPages}
          </span>
          <button
            className="px-3 py-1 border border-white/20 rounded hover:bg-white/10"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Следующая
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
