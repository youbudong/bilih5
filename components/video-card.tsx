import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Video } from "@/app/actions/video-actions";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link
      href={`https://m.bilibili.com/video/${video.bvid}`}
      target="_blank"
      className="block"
    >
      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
        <div className="relative aspect-video w-full">
          {video.pic ? (
            <Image
              src={`/api/proxy?url=${video.pic}` || "/placeholder.svg"}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
              <span className="text-slate-400">无封面</span>
            </div>
          )}
        </div>
        <CardContent className="p-3">
          <h3 className="font-medium line-clamp-2 text-sm mb-1">
            {video.title}
          </h3>
          <div className="flex justify-between text-xs text-slate-500">
            <span>{video.uploader}</span>
            <span>{video.views}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
