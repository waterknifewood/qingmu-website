export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "相册", href: "/gallery" },
  { label: "音乐", href: "/music" },
  { label: "视频", href: "/videos" },
  { label: "记录", href: "/records" },
  { label: "关于", href: "/about" },
];
