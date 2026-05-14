export interface Performance {
  date: string;
  venue: string;
  city: string;
}

export interface Member {
  name: string;
  role: string;
  instruments: string;
}

export const bandBio = {
  name: "青木乐队",
  nameEn: "Qingmu Band",
  formed: 2024,
  origin: "中国",
  tagline: "一颗扎在土里的木头，没有树叶的木头，做梦着向往着更高的宇宙",
  description: `青木乐队成立于2024年，五人编制，风格为独立/另类摇滚。
作品以中文创作，歌词深受古典文学影响，在意象与叙事之间寻求平衡。
音乐上以吉他为主导，融汇古琴、民谣、后摇等多元元素——
"如潮水拍岸、愚公击山、季鹰孤鸣、青雀绝啼，过程本身已足够。"

首张全长专辑《为何飞来》于2026年发布，
词曲由主创梁辰华创作，编曲为乐队集体完成，录制与后期由梁辰华担任制作。
乐队纪录片由 KK & Cici 团队拍摄中。`,
  members: [
    { name: "梁辰华", role: "主唱 / 吉他 / 古琴", instruments: "人声、电吉他、木吉他、古琴、钢琴、管弦乐编写" },
    { name: "肖忠培", role: "吉他", instruments: "电吉他" },
    { name: "邓钧愉", role: "鼓", instruments: "鼓" },
    { name: "陈昕蕾", role: "贝斯", instruments: "贝斯" },
    { name: "卫天一", role: "打击乐 / 吉他", instruments: "打击乐、吉他" },
  ] satisfies Member[],
  performances: [
    { date: "2025-07-24", venue: "育音堂 YYT", city: "上海" },
    { date: "2025-10-06", venue: "玩家", city: "上海" },
    { date: "2025-10-19", venue: "复旦大学", city: "上海" },
    { date: "2025-12-30", venue: "中国科学技术大学", city: "合肥" },
    { date: "2025-12-31", venue: "沸腾新声", city: "上海" },
  ] satisfies Performance[],
  documentary: "乐队纪录片由 KK & Cici 团队拍摄中。",
};
