import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "视频",
  description: "青木乐队视频 — PV、纪录片与更多影像记录",
};

export default function VideosPage() {
  return (
    <Container className="py-24">
      <SectionHeading>视频</SectionHeading>
      <p className="text-sm text-muted mb-16 -mt-4 max-w-2xl">
        演出、宣传与日常影像记录。
      </p>

      <div className="max-w-3xl mx-auto space-y-20">
        {/* 万语千言 PV */}
        <div>
          <h3 className="text-lg font-serif font-bold text-accent mb-4">
            万语千言 终成决堤之声
          </h3>
          <p className="text-xs text-muted mb-4 uppercase tracking-widest">
            2026 · 潮起 PV · 排练混剪
          </p>
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-xl">
            多少个深夜的排练房，多少次反复的推敲与打磨，万语千言，终成决堤之声。
          </p>
          <div className="bg-surface rounded-lg overflow-hidden border border-surface">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://player.bilibili.com/player.html?bvid=BV1BLApzHEvk&page=1&high_quality=1"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title="万语千言 终成决堤之声"
              />
            </div>
          </div>
        </div>

        {/* PV video */}
        <div>
          <h3 className="text-lg font-serif font-bold text-accent mb-4">
            专辑发布前 PV
          </h3>
          <p className="text-xs text-muted mb-4 uppercase tracking-widest">
            2026 · 宣传视频
          </p>
          <div className="bg-surface rounded-lg overflow-hidden border border-surface">
            <video
              controls
              preload="metadata"
              className="w-full aspect-video"
              poster="/images/album-cover.jpg"
            >
              <source src="/videos/pv.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
          </div>
        </div>

        {/* Documentary */}
        <div>
          <h3 className="text-lg font-serif font-bold text-accent mb-4">
            业余之后 · 中期版
          </h3>
          <p className="text-xs text-muted mb-4 uppercase tracking-widest">
            纪录片 · KK & Cici 团队拍摄
          </p>
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-xl">
            从排练房到舞台，从深夜的混音到清晨的电动车。镜头记录了青木乐队从零开始的每一步——那些汗水、争吵、沉默与爆发，都在里面了。
          </p>
          <div className="bg-surface rounded-lg overflow-hidden border border-surface">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video"
            >
              <source src="/videos/documentary.mp4" type="video/mp4" />
              您的浏览器不支持此视频格式。
            </video>
          </div>
          <p className="text-xs text-muted mt-4 text-center">
            如无法播放，可<a href="/videos/documentary.mp4" download className="text-accent hover:text-accent-dim underline underline-offset-2 transition-colors">点击下载</a>后本地观看
          </p>
        </div>

        {/* 晨雾闪回 */}
        <div>
          <h3 className="text-lg font-serif font-bold text-accent mb-4">
            晨雾闪回
          </h3>
          <p className="text-xs text-muted mb-4 uppercase tracking-widest">
            2026 · 专辑发布纪念短视频
          </p>
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-xl">
            专辑发布时的纪念短片。一路走来的点滴画面闪过，最后定格在全员的合照里。
          </p>
          <div className="bg-surface rounded-lg overflow-hidden border border-surface">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video"
            >
              <source src="/videos/morning-mist-flashback.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
          </div>
        </div>

        {/* 育音堂 live */}
        <div>
          <h3 className="text-lg font-serif font-bold text-accent mb-4">
            为何飞来 | 青木乐队在育音堂
          </h3>
          <p className="text-xs text-muted mb-4 uppercase tracking-widest">
            2025.07.24 · YYT Channel · 上海育音堂
          </p>
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-xl">
            青木乐队首次正式登台。从排练房的汗水到舞台上的灯光，所有的紧张、激动与不安，都在第一声鼓点响起时化为力量。
          </p>
          <div className="bg-surface rounded-lg overflow-hidden border border-surface">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://player.bilibili.com/player.html?bvid=BV1QGtZzqEPr&page=1&high_quality=1"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title="为何飞来 | 青木乐队在育音堂-20250724"
              />
            </div>
          </div>
        </div>

        {/* 玩家艺术节 */}
        <div>
          <h3 className="text-lg font-serif font-bold text-accent mb-4">
            青木乐队 · 玩家艺术节
          </h3>
          <p className="text-xs text-muted mb-4 uppercase tracking-widest">
            2025.10.06 · 玩家艺术节
          </p>
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-xl">
            国庆假期的户外演出。场地的自带混响恰到好处，演奏状态放松了很多，也收获了不少好评。
          </p>
          <div className="bg-surface rounded-lg overflow-hidden border border-surface">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://player.bilibili.com/player.html?bvid=BV1DKymBfEMD&page=1&high_quality=1"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                title="青木乐队在玩家艺术节-20251006"
              />
            </div>
          </div>
        </div>

        {/* Placeholder for future videos */}
        <div className="border-t border-surface pt-16">
          <p className="text-sm text-muted text-center">
            更多视频即将上线。
          </p>
        </div>
      </div>
    </Container>
  );
}
