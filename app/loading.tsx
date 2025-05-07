import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      <span className="ml-2 text-slate-500">加载中...</span>
    </div>
  )
}
