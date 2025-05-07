import { URL } from "url";

export async function GET(req: Request, res: Response) {
  const url = new URL(req.url).searchParams.get("url");

  if (!url) {
    return new Response("Invalid URL", { status: 400 });
  }

  try {
    const decodedUrl = decodeURIComponent(url);
    const imageRes = await fetch(decodedUrl, {
      headers: { "User-Agent": "Next.js Image Proxy" },
    });

    if (
      !imageRes.ok ||
      !imageRes.headers.get("content-type")?.startsWith("image/")
    ) {
      return new Response("Invalid image", { status: 400 });
    }

    return new Response(imageRes.body, {
      headers: {
        "Content-Type": imageRes.headers.get("content-type")!,
        "Cache-Control": "public, max-age=86400",
      },
      status: imageRes.status,
    });
  } catch (err) {
    console.error(err);
    return new Response("Fetch failed", { status: 500 });
  }
}
