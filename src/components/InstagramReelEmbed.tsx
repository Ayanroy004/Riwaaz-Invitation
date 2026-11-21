import React, { useMemo } from "react";

interface InstagramReelEmbedProps {
  permalink: string;
  title?: string;
}

function extractInstagramReelShortcode(url: string): string | null {
  try {
    const parsed = new URL(url);
    const match = parsed.pathname.match(
      /\/(?:reel|reels|p)\/([A-Za-z0-9_-]+)/i,
    );
    return match ? match[1] : null;
  } catch {
    const fallbackMatch = url.match(/\/(?:reel|reels|p)\/([A-Za-z0-9_-]+)/i);
    return fallbackMatch ? fallbackMatch[1] : null;
  }
}

export const InstagramReelEmbed: React.FC<InstagramReelEmbedProps> = ({
  permalink,
  title = "Instagram Reel",
}) => {
  const shortcode = useMemo(
    () => extractInstagramReelShortcode(permalink),
    [permalink],
  );

  if (!shortcode) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0B332E] text-[#F8F5EE] text-xs p-4 text-center">
        Invalid Instagram Reel link
      </div>
    );
  }

  const embedUrl = `https://www.instagram.com/reel/${shortcode}/embed/`;

  return (
    <div className="relative w-full h-full bg-[#0B332E] overflow-hidden select-none">
      {/* Shifts the /embed frame slightly upward so outer header/caption chrome sits above the viewport */}
      <iframe
        src={embedUrl}
        title={title}
        scrolling="no"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-[calc(100%+112px)] -mt-14 border-0 block"
      />

      {/* Subtle top & bottom editorial edge vignettes to blend with the card frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-[#0B332E]/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-7 bg-gradient-to-t from-[#0B332E]/65 to-transparent"
      />
    </div>
  );
};
