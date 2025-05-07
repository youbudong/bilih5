"use server";

export interface Video {
  id: string;
  title: string;
  pic: string;
  uploader: string;
  views: string;
  bvid: string;
  aid: number;
}

export async function getVideos(): Promise<Video[]> {
  try {
    const response = await fetch(`http://localhost:3000/api/videos`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch videos: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data.videos[0]);
    // return [data.videos[0]];
    return data.videos || [];
  } catch (error) {
    console.error("Error in getVideos action:", error);
    return [];
  }
}

export async function getVideoById(id: string): Promise<Video | null> {
  try {
    const videos = await getVideos();
    return videos.find((video) => video.id === id) || null;
  } catch (error) {
    console.error("Error in getVideoById action:", error);
    return null;
  }
}
