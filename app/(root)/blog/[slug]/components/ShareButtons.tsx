"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LucideFacebook, LucideTwitter, LucideLinkedin } from "lucide-react";

export function ShareButtons({ title }: { title: string }) {
  const pathname = usePathname();
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);

  const encodedURL = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-2">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
      >
        <LucideFacebook className="h-5 w-5" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
      >
        <LucideTwitter className="h-5 w-5" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
      >
        <LucideLinkedin className="h-5 w-5" />
      </a>
    </div>
  );
}
