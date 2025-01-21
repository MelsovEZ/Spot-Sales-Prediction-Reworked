import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface DateRangeSelectorProps {
  value: string
  onChange: (value: string) => void
}

export default function DateRangeSelector({
  value,
  onChange,
}: DateRangeSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="bg-gray-50 md:max-w-[315px] text-black font-medium hover:bg-gray-300 transition-colors">
        <SelectValue placeholder="Select date range" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1d">1 День</SelectItem>
        <SelectItem value="1w">1 неделя</SelectItem>
        <SelectItem value="2w">2 Недели</SelectItem>
        <SelectItem value="1m">1 Месяц</SelectItem>
      </SelectContent>
    </Select>
  )
}
