import AreaSelector from './AreaSelector'
import FileUpload from './FileUpload'

interface HeaderProps {
  onAreaChange: (area: string) => void
}

export default function Header({ onAreaChange }: HeaderProps) {
  return (
    <header className="border-b border-white/10 bg-[#1E1E2E]/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-auto min-h-[4rem] flex-col items-center justify-center gap-4 px-4 py-3 sm:h-16 sm:flex-row sm:justify-between">
        <h1 className="bg-gradient-to-r from-[#A855F7] via-[#2DD4BF] to-[#4B4BF5] bg-clip-text text-xl sm:text-2xl font-bold text-transparent text-center">
          Order Prediction Dashboard
        </h1>
        <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-2 space-y-2">
          <AreaSelector onAreaChange={onAreaChange} />
          <FileUpload />
        </div>
      </div>
    </header>
  )
}
