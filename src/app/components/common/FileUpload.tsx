'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) return
    setIsLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: 'Upload Successful',
          description: `${data.rows_processed} rows processed`,
        })
      } else {
        throw new Error(data.message || 'Upload failed')
      }
    } catch (error) {
      toast({
        title: 'Upload Failed',
        description:
          error instanceof Error ? error.message : 'An error occurred',
        variant: 'destructive',
      })
    } finally {
      setFile(null)
      setIsLoading(false)
    }
  }

  return (
    <>
      <Input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="flex items-center space-x-2">
        <Button
          variant="secondary"
          onClick={() =>
            (
              document.querySelector('input[type="file"]') as HTMLInputElement
            )?.click()
          }
          disabled={isLoading}
          className="w-[160px] truncate text-white"
        >
          {file ? file.name : 'Choose File'}
        </Button>
        <Button onClick={handleUpload} disabled={!file || isLoading}>
          {isLoading ? 'Uploading...' : 'Upload'}
        </Button>
      </div>
    </>
  )
}
