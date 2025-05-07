"use server";

export interface Video {
  id: string;
  stat: {
    view: number;
  };
  author: {
    name: string;
  };
  title: string;
  pic: string;
  bvid: string;
  aid: number;
}

export async function getVideos(): Promise<Video[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/videos`,
      {
        cache: "no-store",
      }
    );

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
