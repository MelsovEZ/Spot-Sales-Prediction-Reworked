import AreaSelector from './AreaSelector'
import FileUpload from './FileUpload'
import Image from 'next/image'

interface HeaderProps {
  onAreaChange: (area: string) => void
}

export default function Header({ onAreaChange }: HeaderProps) {
  return (
    <header className="backdrop-blur-sm">
      <div className="container mx-auto flex h-auto min-h-[4rem] flex-col items-center justify-center gap-4 px-4 py-3 sm:h-16 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <h1 className="text-black bg-clip-text text-xl sm:text-2xl font-bold text-center">
            I'm Order Management System
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-2 space-y-2">
          <AreaSelector onAreaChange={onAreaChange} />
          <FileUpload />
        </div>
      </div>
    </header>
  )
}
