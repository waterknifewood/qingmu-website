import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "青木乐队 Qingmu Band",
    template: "%s — 青木乐队",
  },
  description:
    "一颗扎在土里的木头，没有树叶的木头，做梦着向往着更高的宇宙。青木乐队官方网站。",
  openGraph: {
    title: "青木乐队 Qingmu Band",
    description: "青木乐队官方网站 — 独立摇滚，诗意中文创作",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
