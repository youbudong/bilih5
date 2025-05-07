import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
  try {
    // 获取B站移动端首页HTML
    const response = await fetch("https://m.bilibili.com/", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const html = await response.text();
    // 使用cheerio解析HTML
    const $ = cheerio.load(html);

    // 提取视频数据
    // 注意：这里的选择器可能需要根据实际B站
    let videos: [] = [];
    $("script").each((_: number, el: any) => {
      const scriptContent = $(el).html();
      const match = scriptContent?.match(
        /window\.__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\})\s*;/
      );
      if (match) {
        const v = match[1].replace(`input: 'window.__INITIAL_STATE__=`, "");
        try {
          const jsonData = JSON.parse(v); // 解析 JSON
          videos = jsonData.home.hotList.extra.list;
        } catch (e) {
          console.error("JSON 解析失败", e);
        }
      }
    });
    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 }
    );
  }
}
