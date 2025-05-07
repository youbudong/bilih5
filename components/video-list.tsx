import type { Video } from "@/app/actions/video-actions";
import { VideoCard } from "./video-card";

interface VideoListProps {
  videos: Video[];
}

export function VideoList({ videos }: VideoListProps) {
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-slate-500">暂无视频</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.bvid} video={video} />
      ))}
    </div>
  );
}
