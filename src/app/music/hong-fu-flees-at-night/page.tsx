import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackList } from "@/components/music/TrackList";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "红拂夜奔",
  description: "青木乐队第二张全长专辑《红拂夜奔》— 创作笔记与歌词",
};

export default function HongFuDetailPage() {
  const album = albums.find((a) => a.id === "hong-fu-flees-at-night")!;

  return (
    <Container className="py-24">
      {/* Album header */}
      <div className="bg-surface rounded-lg border border-surface overflow-hidden mb-16">
        <div className="grid md:grid-cols-[300px_1fr] gap-0">
          <div className="aspect-[1/1] bg-background flex items-center justify-center">
            <span className="text-6xl font-serif text-accent-dim">
              {album.title[0]}
            </span>
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  {album.title}
                </h2>
                <p className="text-xs text-muted mt-1 uppercase tracking-widest">
                  全长专辑 · 制作中
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest bg-accent-dim/20 text-accent px-3 py-1 rounded-full shrink-0 ml-4">
                制作中
              </span>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-4 whitespace-pre-line">
              {album.description}
            </p>

            <TrackList tracks={album.tracks} />

            <Link
              href="/records"
              className="mt-6 text-xs text-accent hover:text-accent-dim transition-colors inline-flex items-center gap-1"
            >
              创作笔记 & 歌词记录 &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Creative Notes */}
      <div className="max-w-2xl mx-auto">
        <SectionHeading>创作笔记与歌词</SectionHeading>
        <p className="text-sm text-muted mb-12 -mt-4">
          以下记录来自主创梁辰华的手机备忘录，保留了原始时间戳与创作思绪。从幻楼到空山，九首歌的雏形在此定格。
        </p>

        {/* 幻楼 */}
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xs text-accent font-mono">01</span>
            <h3 className="text-xl font-serif font-bold text-accent">幻楼</h3>
            <span className="text-[10px] text-muted">2025年3月12日</span>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface space-y-3">
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">编曲构思：</span>
              作为全专的第一首，开头需抓耳。左右声道交替的双音疾速氛围感音效，渐强，持续短时间后，象征跋涉。霹雳一般的电吉他、鼓与贝斯齐鸣——跋涉后抬头见到庞然大物的震撼感，填住第一拍。之后再进主乐段，咬合住的乐器再进唱。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">结构衔接：</span>
              上接空山，接续空山的浮生虚妄。道此生艰险。下接天罗地网。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">编曲细节：</span>
              至少有一段军鼓打得像进行曲一样列阵，如"集土成山"那一段。
            </p>
            <div className="border-t border-surface pt-3 mt-3">
              <p className="text-xs text-accent-dim mb-2 uppercase tracking-widest">歌词片段</p>
              <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {"蜿蜒的道路在眼前\n沉重的行囊在双肩\n头顶的太阳在高悬\n分不清昨天还是今天\n\n不听不听\n不敢不敢\n不情也不愿\n\n不呼不呼\n不喊不喊\n不埋也不怨\n\n不想不念 不想不念\n一层层 将土砌上天\n嘿！\n集土成山 工蚁筑巢\n蜉蝣妄想上云霄\n黑猪入圈 老牛耕田\n骏马口中含勒衔\n\n蜿蜒的道路在眼前\n沉重的行囊在双肩\n头顶的太阳在高悬\n分不清昨天还是今天\n\n不听不听\n不敢不敢\n不情也不愿\n\n不呼不呼\n不喊不喊\n不埋也不怨\n\n不想不念 不想不念\n一层层 将土砌上天\n集土成山 雨水灌巢\n蜉蝣安能上云霄\n沐猴成仙 鸡犬登天\n狡狐策马急扬鞭\n一桩桩功绩刻在石上\n一座座泥塑立在庙堂\n一个个先生坐在大殿\n一尊尊神像矗在云巅"}
              </p>
            </div>
          </div>
        </div>

        {/* 天罗地网 */}
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xs text-accent font-mono">02</span>
            <h3 className="text-xl font-serif font-bold text-accent">天罗地网</h3>
            <span className="text-[10px] text-muted">2025年12月3日</span>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface space-y-3">
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">核心构思：</span>
              上接幻楼。反思科技的进步——超出认知的逻辑如同天罗地网，紧密压在人们头上。情感为冰冷绝望感。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">Intro 设计：</span>
              快节奏的低音接入一段旋律，两把贝斯声部交织。重复若干遍后高音的鼓噪声加入，噪声镲片与贝斯节奏紧密咬合。电吉他引入琶音，一直保持在未解决的冲突感状态——根音与七音的半音紧张感。重复后电吉他尖锐推弦，结束在强力主和弦上。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">音色设计：</span>
              强烈的多普勒效应从左声道掠过右声道，像车流和电流一样闪过；机器人呓语般的音色点缀其间；电流与数据碎片从四面八方坠入脑海。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">人声编排：</span>
              低音贝斯两个声部分列左右，两把电吉他分列左右，一句一句呼应，当作同一乐句的不同变奏。节奏愈加密密层层推进，人声唱到最激烈时网亦同时织成。戛然而止——停在五音，悬而未决，准备进入红拂夜奔。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">情感内核：</span>
              越现代，越怀念从前。
            </p>
          </div>
        </div>

        {/* 红拂夜奔 */}
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xs text-accent font-mono">03</span>
            <h3 className="text-xl font-serif font-bold text-accent">红拂夜奔</h3>
            <span className="text-[10px] text-muted">2025年4月1日</span>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface space-y-3">
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">专辑定位：</span>
              主打歌曲，整张专辑的思绪起点。上接天罗地网——各个声部紧密咬合近乎窒息后，松出豁口，开始可以呼吸，出逃，夜奔。
            </p>
            <div className="border-t border-surface pt-3">
              <p className="text-xs text-accent-dim mb-2 uppercase tracking-widest">副歌歌词</p>
              <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {"奔向何方？\n就奔向那苍莽\n趁夜色仍未凉\n身披粉蓝霞光\n像红拂扬起衣裳\n让风灌满我胸膛\n\n夜风不算清爽\n天气渐渐微凉"}
              </p>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">听觉意象：</span>
              空旷的平原，云被染成粉蓝色，太阳将落未落之际，沐浴晚风奔驰。月亮从云间慢慢明亮，炽热变成微凉。极度奔放的乐句和音色——畅快淋漓，开阔且有节奏感。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">故事内核：</span>
              年轻的时候费心拼命想要逃出一座城，老了却心甘情愿自己设计了一座城把自己困住。年轻时的李靖聪明又浪漫，即使逃难到满是粪味的菜园也要把小屋漆得透亮漂白为红拂作画；老了却装睁一只眼闭一只眼，满口口水混日子等死。所以红拂才是夜奔的主人公——深爱着李靖，愿意和他逃出一座城，也在李靖死后努力抗争着逃出了李靖的黄土长安。红拂没有变过。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">低音riff：</span>
              <code className="text-xs bg-background px-2 py-0.5 rounded ml-1">E - A - B - C#</code>
            </p>
          </div>
        </div>

        {/* 公无渡河 */}
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xs text-accent font-mono">04</span>
            <h3 className="text-xl font-serif font-bold text-accent">公无渡河</h3>
            <span className="text-[10px] text-muted">2026年1月3日</span>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface">
            <p className="text-xs text-muted leading-relaxed">
              上接红拂夜奔。以旁人的视角讲述出逃，或理想主义者的壮烈献身。情感豪迈慷慨而更显悲壮。
            </p>
          </div>
        </div>

        {/* 南下列车 */}
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xs text-accent font-mono">05</span>
            <h3 className="text-xl font-serif font-bold text-accent">南下列车</h3>
            <span className="text-[10px] text-muted">2025年5月8日</span>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface space-y-3">
            <div className="border-t border-surface pt-3">
              <p className="text-xs text-accent-dim mb-2 uppercase tracking-widest">歌词</p>
              <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {"春末的绿皮火车驶向南方\n女孩向窗外张望 摇摇晃晃\n男孩蹲在地上 攥紧行囊\n他们的眼神里面 迷茫又伴着希望\n\n列车员在身旁 声嘶力竭叫嚷\n小孩哭得疯狂 香烟空中飘荡\n\n颠簸的路\n多漫长\n南下的路\n嘿 多漫长\n\n云雾追逐 飞鸟鸣响\n山川起伏 江水流淌\n列车滚滚 咣咣当当\n列车长长 驶过村庄\n列车沉沉 告别家乡\n列车远远 开往理想"}
              </p>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">意象构思：</span>
              两段不同时空下的列车——一辆在九十年代南下打拼，一辆是现代逃离城市的列车。君自故乡来，应知故乡事。吉他以流动solo贯穿全曲，如车窗外的风景。
            </p>
          </div>
        </div>

        {/* 风信 */}
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xs text-accent font-mono">06</span>
            <h3 className="text-xl font-serif font-bold text-accent">风信</h3>
            <span className="text-[10px] text-muted">2025年5月16日</span>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface">
            <div className="border-t border-surface pt-3">
              <p className="text-xs text-accent-dim mb-2 uppercase tracking-widest">歌词片段</p>
              <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {"天阴阴\n窗外飘落阵阵雨\n缓缓流\n何时汇成你身影\n光影闪过\n人群灌入我双眼\n向城市边缘\n挥别昨天\n\n水流斜 车窗远\n线隔断田野\n雾遮去大雁\n水流斜 思念远\n星黯淡长夜\n泪划过心尖\n\n想到这宇宙亿万斯年\n孕育两片飘摇树叶\n\n我多想穿越时间\n穿越时间\n多想穿越时间\n穿越时间\n\n哦\n穿越时间 跨越旷野 飘在风中的思念\n穿越时间 跨越旷野 能否唤我去遥远"}
              </p>
            </div>
          </div>
        </div>

        {/* 甲申祭 */}
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xs text-accent font-mono">07</span>
            <h3 className="text-xl font-serif font-bold text-accent">甲申祭</h3>
            <span className="text-[10px] text-muted">2026年4月14日</span>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface space-y-3">
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">编曲结构（按事件历程划分段落）：</span>
            </p>
            <p className="text-xs text-muted leading-relaxed">
              第一段：地上天国——营造优美而辉煌的感觉。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              第二段：转折——渐起靡靡之音象征内部垮塌，代表北方外敌的乐句慢慢渐起。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              第三段：外敌入关——使用5/4节拍及不对称乐句，营造追赶、迷幻、破碎之感，多用半音。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              第四段：地陷东南，天下覆灭——悲剧性的乐句，波涛汹涌的痛苦。<br />
              <span className="text-accent-dim mt-1 inline-block">歌词：</span>白骨如山忘姓氏，反认他乡是故乡。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              第五段：接入古曲《水东游》部分乐句，天下覆灭无以为家，直至白虹贯日壮士再起。<br />
              <span className="text-accent-dim mt-1 inline-block">歌词：</span>莫失莫忘，仙寿恒昌。
            </p>
          </div>
        </div>

        {/* 白虹贯日 */}
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xs text-accent font-mono">08</span>
            <h3 className="text-xl font-serif font-bold text-accent">白虹贯日</h3>
            <span className="text-[10px] text-muted">2026年3月26日</span>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface">
            <p className="text-xs text-muted leading-relaxed mb-3">
              <span className="text-accent-dim">灵感来源：</span>
              古曲《广陵散》，感聂政刺韩傀而作。壮士踏风而歌，当用箫声。
            </p>
            <div className="border-t border-surface pt-3">
              <p className="text-xs text-accent-dim mb-2 uppercase tracking-widest">词句</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                今此去，渡关山，越崇岭，踏乘长风不复还。
              </p>
            </div>
          </div>
        </div>

        {/* 空山 */}
        <div className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-xs text-accent font-mono">09</span>
            <h3 className="text-xl font-serif font-bold text-accent">空山</h3>
            <span className="text-[10px] text-muted">2025年4月1日</span>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-surface space-y-3">
            <p className="text-xs text-muted leading-relaxed">
              <span className="text-accent-dim">镜头编排：</span>
            </p>
            <p className="text-xs text-muted leading-relaxed">
              第一段：身在空山之中，静如流水过山涧，春风拂绿叶。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              第二段：念人世私情纷纷扰扰，叹世道莫测，万物虚无。间奏变换节奏与和弦。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              第三段：高潮涌起，百川终归海，或奔腾或涓流，两条旋律线交织，最后合于一处。
            </p>
            <p className="text-xs text-muted leading-relaxed">
              第四段：回到主旋律。叹古来万事付流水，怆然涕下。
            </p>
            <div className="border-t border-surface pt-3">
              <p className="text-xs text-accent-dim mb-2 uppercase tracking-widest">歌词</p>
              <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {"空山群鸟不得归\n迷途忘返误徘徊\n喜怒哀乐能几时\n古来万事东流水\n\n空山群鸟不得归\n迷途忘返误徘徊\n荣华富贵能几时\n古来万事付流水\n\n涉水 听风\n渡越关山\n方见始终\n\n追雨 对松\n踏破云烟\n回首寻踪\n\n而明月\n不再入我梦\n\n叹明月\n不曾入我梦"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-surface pt-8 text-center">
          <Link
            href="/music"
            className="text-xs text-accent hover:text-accent-dim transition-colors"
          >
            &larr; 返回音乐
          </Link>
        </div>
      </div>
    </Container>
  );
}
