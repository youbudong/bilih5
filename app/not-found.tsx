import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <FileQuestion className="h-12 w-12 text-slate-400 mb-4" />
      <h2 className="text-2xl font-bold mb-2">页面未找到</h2>
      <p className="text-slate-600 mb-6">您访问的页面不存在或已被移除</p>
    </div>
  );
}
