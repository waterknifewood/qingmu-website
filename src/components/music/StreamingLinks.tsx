import type { AlbumLinks } from "@/data/albums";

export function StreamingLinks({ links }: { links: AlbumLinks }) {
  return (
    <div className="flex gap-3">
      {links.netease && (
        <a
          href={links.netease}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs bg-[#c62f2f]/20 hover:bg-[#c62f2f]/30 text-[#c62f2f] hover:text-red-400 px-3 py-1.5 rounded-full transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6.5v-5l5 2.5-5 2.5z"/>
          </svg>
          网易云音乐
        </a>
      )}
      {links.qq && (
        <a
          href={links.qq}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs bg-[#31c27c]/20 hover:bg-[#31c27c]/30 text-[#31c27c] hover:text-green-300 px-3 py-1.5 rounded-full transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6.5v-5l5 2.5-5 2.5z"/>
          </svg>
          QQ 音乐
        </a>
      )}
    </div>
  );
}
