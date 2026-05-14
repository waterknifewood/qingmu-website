export interface Track {
  number: number;
  title: string;
}

export interface AlbumLinks {
  netease?: string;
  qq?: string;
}

export interface Album {
  id: string;
  title: string;
  year?: number;
  status: "released" | "upcoming";
  description: string;
  coverImage: string;
  tracks: Track[];
  links?: AlbumLinks;
  credits?: {
    composer: string;
    lyricist: string;
    arranger: string;
    copyright: string;
  };
}

export const albums: Album[] = [
  {
    id: "why-fly-here",
    title: "为何飞来",
    year: 2026,
    status: "released",
    coverImage: "/images/album-cover.jpg",
    description:
      "「高树多悲风，海水扬其波。明明如月，何时可掇？忧从中来，不可断绝。」\n\n首张全长专辑。以潮水、季鹰、青雀为意象，写迷惘、写沉默、写孤独，也写呼救。从古琴铺陈的序章《潮起》，到民谣叙事的《老伯》，到躁动不羁的《愚公击山》——过程本身已足够。",
    tracks: [
      { number: 1, title: "序：潮起" },
      { number: 2, title: "听潮" },
      { number: 3, title: "愚公击山" },
      { number: 4, title: "老伯" },
      { number: 5, title: "季鹰" },
      { number: 6, title: "孤鸣" },
      { number: 7, title: "青雀冢" },
      { number: 8, title: "木头" },
      { number: 9, title: "钟" },
      { number: 10, title: "晨雾" },
    ],
    links: {
      netease: "https://music.163.com/#/album?id=366824411",
      qq: "https://y.qq.com/n/ryqq_v2/albumDetail/003KX0z62hJS5J",
    },
    credits: {
      composer: "梁辰华（1-10）、肖忠培（9）",
      lyricist: "梁辰华（1-10）、肖忠培（9）、施耐庵（2）",
      arranger: "青木乐队",
      copyright: "青木乐队",
    },
  },
  {
    id: "hong-fu-flees-at-night",
    title: "红拂夜奔",
    status: "upcoming",
    coverImage: "/images/hong-fu-cover.jpg",
    description:
      "第二张全长专辑，创作中。以唐代传奇「红拂夜奔」为引，写当代语境下的逃离与追寻。更重器乐编排，在噪音与寂静之间寻找新的表达。\n\n九支曲目，从《幻楼》的迷幻开场到《空山》的寂静尾声，李靖与红拂的对照贯穿始终——一个入世，一个出逃；一个筑起天罗地网，一个奔向无垠旷野。",
    tracks: [
      { number: 1, title: "幻楼" },
      { number: 2, title: "天罗地网" },
      { number: 3, title: "红拂夜奔" },
      { number: 4, title: "公无渡河" },
      { number: 5, title: "南下列车" },
      { number: 6, title: "风信" },
      { number: 7, title: "甲申祭" },
      { number: 8, title: "白虹贯日" },
      { number: 9, title: "空山" },
    ],
  },
];
