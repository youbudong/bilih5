import { getVideos } from "./actions/video-actions"
import { VideoList } from "@/components/video-list"

export default async function HomePage() {
  const videos = await getVideos()

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">哔哩哔哩热门视频</h1>
      <VideoList videos={videos} />
    </main>
  )
}
