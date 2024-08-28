import { NextResponse } from "next/server";
import { parse } from "node-html-parser";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const html = await response.text();
    const root = parse(html);

    const ogImage = root
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content");
    const title = root.querySelector("title")?.text || "";
    const description =
      root.querySelector('meta[name="description"]')?.getAttribute("content") ||
      "";

    return NextResponse.json({ ogImage, title, description });
  } catch (error) {
    console.error("Error fetching OG metadata:", error);
    return NextResponse.json(
      { error: "Failed to fetch OG metadata" },
      { status: 500 },
    );
  }
}
