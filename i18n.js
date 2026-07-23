/**
 * EN + Cantonese (HK Traditional Chinese) strings.
 * HYROX terms kept in English: station names, Open/Pro/Doubles/Relay, Roxzone, Sub 60, etc.
 */
const I18N = {
  en: {
    pageTitle: "HYROX Race Time Calculator",
    topbarTitle: "Race Time Calculator",
    eyebrow: "General calculator",
    heroTitle: "Plan your finish",
    tagline: "Personal pace planner & data-backed target splits for any HYROX race.",
    tabCalc: "My Calculator",
    tabTargets: "Target Times",
    tabsAria: "Calculator views",

    runningPace: "Running pace",
    runningPaceHint: "Your target average pace for each 1 km run segment (×8 = 8 km total).",
    paceLabel: "Pace (min:sec / km)",
    paceMinAria: "Pace minutes",
    paceSecAria: "Pace seconds",
    run1km: "1 km run time",
    runs8total: "8 × runs total",
    stationSyncNote:
      "Station defaults update to match one run segment when pace changes. Fine-tune any station below.",

    workoutStations: "Workout stations",
    stationsHint: "Defaults = one run segment. Edit any station to fine-tune.",
    resetToPace: "Reset to pace",
    resetToPaceTitle: "Reset all stations to current run segment time",
    stationsSubtotal: "Stations subtotal",

    roxzoneTitle: "Roxzone",
    transitions: "transitions",
    roxzoneHint:
      "The Roxzone is the corridor between the run track and each station. You pass through it <strong>twice per station</strong> (in after the run, out before the next run) — <strong>16 passes</strong> total. That time counts toward your official finish.",
    roxModeAria: "Roxzone input mode",
    perPassAvg: "Per pass average",
    totalRoxzone: "Total Roxzone",
    avgPerPass: "Average time per Roxzone pass",
    roxPerMinAria: "Roxzone minutes per pass",
    roxPerSecAria: "Roxzone seconds per pass",
    roxGuidePer:
      "<strong>Rough guide:</strong> Elite ~15–25s · Competitive ~25–40s · Recreational ~40–60s+ per pass. Walking, equipment setup, and recovery all add up here.",
    totalRoxzoneLabel: "Total Roxzone time (all transitions)",
    roxTotalMinAria: "Roxzone total minutes",
    roxTotalSecAria: "Roxzone total seconds",
    roxGuideTotal: "Use this if you already know your expected total transition time from a past race or plan.",
    roxzoneTotal: "Roxzone total",

    predictedFinish: "Predicted finish",
    bdRunning: "Running (8 × 1 km)",
    bdStations: "Stations (8)",
    bdRoxzone: "Roxzone (16 passes)",
    raceFlow: "Race flow split",
    thNum: "#",
    thSegment: "Segment",
    thTime: "Time",
    thCumulative: "Cumulative",

    chooseGoal: "Choose a finish goal",
    chooseGoalHint:
      "Station & run targets from published race-result analyses (primarily <strong>HyroxDataLab</strong> — 700k+ results; Sub 60 also cross-checked with <strong>Rox Lyfe</strong> elite Pro medians). These are typical balanced distributions, not guarantees.",
    goalAria: "Target finish time",
    applyToCalc: "Apply to calculator",
    applyToCalcTitle: "Load these splits into My Calculator",
    appliedFeedback: "{label} targets loaded into My Calculator.",

    running: "Running",
    stations: "Stations",
    avgPerKm: "avg {pace}/km",
    eightStations: "8 workout stations",
    perPassX16: "~{per} per pass × 16",

    perfIndex: "Performance index",
    topPct: "top %",
    perfHint:
      "Approximate <strong>within-division</strong> ranking if you hit this finish time. Not an official HYROX ranking — age group, venue, and season shift placements.",
    openVsPro:
      "<strong>Open vs Pro (important):</strong> The same clock time is <em>harder</em> in Pro because loads are heavier (men: sled push 152 kg → 202 kg, plus heavier pull / farmers / lunges / wall balls). Rank % only compares you to other people in <em>that</em> division — it does <em>not</em> mean Pro is easier than Open. Switching Open → Pro often costs roughly <strong>15–20%</strong> more time for the same athlete.",
    thDivision: "Division",
    thRank: "Rank in field",
    thLoad: "Load / format",
    thContext: "Context",
    perfFootnote:
      "<strong>Rank in field</strong> = rarity among finishers of that division. <strong>Pro</strong> rows always carry heavier weights than Open at the same time. Doubles: both run 8 km, stations split. Relay (×4): 2 stations + 2 km each.",

    targetStations: "Target station times",
    targetStationsHint: "Hit these under race fatigue (after each 1 km run).",
    thStation: "Station",
    thTarget: "Target",
    thPctStations: "% of stations",

    targetRuns: "Target run splits",
    targetRunsHint:
      "Real races slow later runs (fatigue). Average pace is what matters for planning; individual km targets show a realistic degradation curve from race data patterns.",
    targetAvgPace: "Target average pace",
    totalRunning8: "Total running (8 km)",
    thRun: "Run",
    thNotes: "Notes",

    howBuilt: "How this was built",
    footerTitle: "HYROX Calculator",
    footerFormula:
      "Formula: <code>8 × run pace + Σ stations + Roxzone</code>. Target splits from race-result research. Adjust for venue floor, Open vs Pro loads, and your strengths.",
    disclaimer:
      'Unofficial fan tool — not affiliated with or endorsed by HYROX World GmbH. Design language (black background, white type, yellow highlights) is inspired by <a href="https://hyrox.com/" target="_blank" rel="noopener noreferrer">hyrox.com</a>. Logo mark is a recreation for UI, not an official asset.',

    langEn: "EN",
    langYue: "港",
    langAria: "Language",

    // Dynamic / JS
    runN: "Run {n}",
    roxIn: "Rox-in → station",
    roxOut: "Rox-out → run",
    vsAvg: "≈ avg",
    vsAvgPlus: "+{t} vs avg",
    vsAvgMinus: "−{t} vs avg",
    hour: "{n} hour",
    hours: "{n} hours",
    minute: "{n} minute",
    minutes: "{n} minutes",
    second: "{n} second",
    seconds: "{n} seconds",

    bandWorld: "World-class",
    bandElite: "Elite",
    bandAdvanced: "Advanced",
    bandMid: "Mid-pack",
    bandRecreational: "Recreational",
    loadOpen: "Open weights",
    loadPro: "Pro weights · harder",
    loadTeam: "Team format",

    runNotes: [
      "Controlled start — don’t redline",
      "Find rhythm after SkiErg",
      "Post sled push — stay tall",
      "Post sled pull — settle",
      "Mid-race grind",
      "Post farmers — keep cadence",
      "Post lunges — short strides OK",
      "Last km — hold form",
    ],

    goals: {
      sub60: {
        level: "Elite · roughly top 1%",
        planLabel: "Plan total ≈ 59:45",
        notes:
          "World-class territory. Needs elite compromised running (~sub-17 5K fitness) plus strong stations. Rox Lyfe elite Pro men medians were even faster on runs (~30:46 total, ~3:51/km) with ~2:54 Roxzone — so 4:30 Roxzone here is a slightly safer planning budget.",
        sources: [
          { name: "HyroxDataLab — Sub-1:00 finish targets", detail: "Station + run + Roxzone distribution from large race-result analysis" },
          { name: "Rox Lyfe — Elite Pro men medians (n≈15)", detail: "Run total 30:46 · stations ~25:10 · Roxzone 2:54 · finish ~58:50" },
          {
            name: "Performance ranks (fact-checked)",
            detail:
              "Open sub-60 ≈ top 3–5% (HyroxVault). Pro sub-60 ≈ top ~1% of Pro (elite band); same clock is harder than Open due to heavier loads. Sub-58 Pro is extremely rare across all-time Pro starts.",
          },
        ],
        perfNotes: [
          "HyroxVault: roughly top 3–5% of Open men. Standard Open weights.",
          "Far faster than women Open elite band (<1:26 ≈ top 10%). Near world-class Open.",
          "Elite / ~top 1% of Pro men. HARDER than Open sub-60: heavier sled push/pull, farmers, lunges, wall balls. Not “easier” than Open.",
          "World-class Pro. Same clock as Open but with Pro loads — higher absolute difficulty.",
          "All-doubles: <~1:03 ≈ top 5%; men pairs elite often <1:05.",
          "Women pairs elite often <1:16; sub-60 is far sharper.",
          "Strong elite mixed team vs all-doubles distribution.",
          "Relay splits workload (2 stations + 2 km each). Men relay avg ~62; top 10% ~50.",
          "Women relay top 10% ~56; sub-60 near elite relay band.",
          "Mixed relay avg ~66, top 10% ~52; competitive team result.",
        ],
      },
      sub70: {
        level: "Advanced · roughly top 10%",
        planLabel: "Plan total ≈ 1:09:20",
        notes:
          "Strong advanced goal. Solid sub-19 5K running helps. Keep every station under control — one 6+ minute blow-up (especially wall balls or sled pull) sinks the target. Roxzone under 6 minutes is a common separator vs intermediate athletes.",
        sources: [
          { name: "HyroxDataLab — 1:10 advanced targets", detail: "Run ~35:50–36:00 · stations ~28:00 · Roxzone ~5:30–6:00" },
          { name: "Industry pacing guides", detail: "Sub-70 often framed as ~4:20–4:30/km race-run average with efficient stations" },
          {
            name: "Performance ranks (fact-checked)",
            detail:
              "Open men <1:15 ≈ top 10% (HDL). Pro men ~1:10 is strong competitive / near-elite Pro (field avg often ~1:22–1:31). Pro same clock still harder than Open.",
          },
        ],
        perfNotes: [
          "Under HDL elite Open threshold (<1:15 = top 10%). Strong age-group potential.",
          "Well inside women Open elite (<1:26 top 10%).",
          "Strong / near-elite Pro. Well above Pro men averages (~1:22–1:31). Harder than Open sub-70 (heavier loads).",
          "Elite Pro women band. Same clock, Pro loads = higher absolute difficulty than Open.",
          "All-doubles ~1:06–1:13 ≈ top 10–25%; men pairs advanced often 1:05–1:15.",
          "Women pairs elite often <1:16; sub-70 is top-tier.",
          "Highly competitive mixed pair.",
          "Around / slightly slower than men relay average (~62).",
          "Faster than women relay average (~72).",
          "Near mixed relay average (~66); good club team result.",
        ],
      },
      sub80: {
        level: "Competitive · roughly top 25%",
        planLabel: "Plan total ≈ 1:18:10",
        notes:
          "A very common competitive goal. Consistency beats one hero station: eliminate anything over ~5:15–5:30. Running ~5:00/km under fatigue is the backbone. Open-division floor & sled surface still swing sled times by 30–60s.",
        sources: [
          { name: "HyroxDataLab — 1:20 competitive targets", detail: "Run ~39:45 · stations ~31:50–33:15 · Roxzone ~6:30–7:00" },
          { name: "HYROX Open field context", detail: "Men Open averages often ~1:26–1:35; sub-80 is clearly above average" },
          {
            name: "Performance ranks (fact-checked)",
            detail:
              "Open advanced ~1:15–1:25 ≈ top 10–25%. Pro men avg ~1:22–1:31 so sub-80 is still faster than many Pros, but Pro loads make the same clock harder than Open.",
          },
        ],
        perfNotes: [
          "Advanced Open band; faster than typical Open averages (~1:26–1:35).",
          "Inside / near women Open elite (<1:26) and advanced bands.",
          "Better than many Pro finishers (avg often ~1:22–1:31). Same clock is still harder than Open sub-80 because of Pro weights.",
          "Solid competitive Pro women. Higher absolute difficulty than Open at the same time.",
          "All-doubles top 25% ≈ <1:13; sub-80 is strong but not elite.",
          "Women pairs advanced often ~1:16–1:27.",
          "Competitive mixed doubles (median all-doubles ~1:22).",
          "Slower than men relay average (~62).",
          "Near women relay mid-pack (avg ~72).",
          "Around / slightly slower than mixed relay median (~70).",
        ],
      },
      sub90: {
        level: "Intermediate · solid first goal",
        planLabel: "Plan total ≈ 1:28:40",
        notes:
          "Near the historical “average” band for many Pro/Open samples (~1:25–1:30). Rox Lyfe “Average” Pro men (~1:29) spent ~42:26 running and ~6:58 in Roxzone — so shaving Roxzone alone is free speed. Don’t redline Run 1; late runs naturally drift slower.",
        sources: [
          { name: "HyroxDataLab — 1:30 intermediate targets", detail: "Run ~44–45 min · stations ~36 min · Roxzone ~7:30–9:00" },
          { name: "Rox Lyfe — Average Pro men (~1:29 sample)", detail: "Run 42:26 · stations ~40:50 · Roxzone 6:58 (shows how much transitions cost mid-pack)" },
          {
            name: "Performance ranks (fact-checked)",
            detail:
              "Open intermediate 1:25–1:40 ≈ top 25–50%. Pro ~1:30 is around / slightly slower than many published Pro averages — but still harder work than Open 1:30 due to loads.",
          },
        ],
        perfNotes: [
          "Intermediate Open (1:25–1:40 band); solid trained finisher.",
          "Advanced / upper-intermediate women Open.",
          "Around mid Pro field (avg often ~1:22–1:31). Same clock harder than Open mid-pack because of Pro weights.",
          "Around mid Pro women. Higher absolute difficulty than Open at the same time.",
          "Near all-doubles median (~1:22) toward top 75% (~1:31).",
          "Women pairs intermediate often ~1:27–1:40.",
          "Typical recreational / club mixed doubles.",
          "Leisure men relay (slower quartile often ~78+).",
          "Around women relay mid-to-slower pack.",
          "Social / first-timer mixed relay territory.",
        ],
      },
    },
  },

  yue: {
    pageTitle: "HYROX 完賽時間計算機",
    topbarTitle: "完賽時間計算機",
    eyebrow: "通用計算機",
    heroTitle: "計劃你嘅完賽時間",
    tagline: "個人配速規劃 + 以賽果數據為本嘅目標分段，適用任何 HYROX 比賽。",
    tabCalc: "我嘅計算",
    tabTargets: "目標時間",
    tabsAria: "計算機頁面",

    runningPace: "跑步配速",
    runningPaceHint: "每一段 1 km run 嘅目標平均配速（共 8 段 = 8 km）。",
    paceLabel: "配速（分:秒 / km）",
    paceMinAria: "配速（分鐘）",
    paceSecAria: "配速（秒）",
    run1km: "1 km run 時間",
    runs8total: "8 × run 總時間",
    stationSyncNote: "改配速時，未手動改過嘅 station 會跟住一段 run 時間更新。下面可以逐個微調。",

    workoutStations: "Workout stations",
    stationsHint: "預設 = 一段 run 嘅時間。可以逐個 station 微調。",
    resetToPace: "重設跟配速",
    resetToPaceTitle: "將所有 station 重設為而家一段 run 嘅時間",
    stationsSubtotal: "Stations 小計",

    roxzoneTitle: "Roxzone",
    transitions: "transitions",
    roxzoneHint:
      "Roxzone 係跑道同每個 station 之間嘅過渡區。每個 station 會經過<strong>兩次</strong>（run 完入 station、做完出返跑道）— 全場共 <strong>16 次</strong>。呢段時間會計入正式完賽時間。",
    roxModeAria: "Roxzone 輸入方式",
    perPassAvg: "每次平均",
    totalRoxzone: "Roxzone 總時間",
    avgPerPass: "每次 Roxzone 平均時間",
    roxPerMinAria: "每次 Roxzone（分鐘）",
    roxPerSecAria: "每次 Roxzone（秒）",
    roxGuidePer:
      "<strong>參考：</strong>Elite 約 15–25 秒 · Competitive 約 25–40 秒 · Recreational 約 40–60 秒+／次。行路、執器材、休息都會加時間。",
    totalRoxzoneLabel: "Roxzone 總時間（全部 transitions）",
    roxTotalMinAria: "Roxzone 總分鐘",
    roxTotalSecAria: "Roxzone 總秒",
    roxGuideTotal: "如果你已經有過往比賽或計劃入面嘅 transition 總時間，用呢個最準。",
    roxzoneTotal: "Roxzone 總計",

    predictedFinish: "預計完賽時間",
    bdRunning: "Running（8 × 1 km）",
    bdStations: "Stations（8）",
    bdRoxzone: "Roxzone（16 次）",
    raceFlow: "比賽流程分段",
    thNum: "#",
    thSegment: "分段",
    thTime: "時間",
    thCumulative: "累計",

    chooseGoal: "揀完賽目標",
    chooseGoalHint:
      "Station 同 run 目標來自已公開嘅賽果分析（主要係 <strong>HyroxDataLab</strong> — 70 萬+ 結果；Sub 60 亦對過 <strong>Rox Lyfe</strong> elite Pro 中位數）。係典型均衡分配，唔保證一定做到。",
    goalAria: "目標完賽時間",
    applyToCalc: "套用到計算",
    applyToCalcTitle: "將呢啲分段載入「我嘅計算」",
    appliedFeedback: "已將 {label} 目標載入「我嘅計算」。",

    running: "Running",
    stations: "Stations",
    avgPerKm: "平均 {pace}/km",
    eightStations: "8 個 workout stations",
    perPassX16: "約 {per}／次 × 16",

    perfIndex: "表現指標",
    topPct: "top %",
    perfHint:
      "達到呢個完賽時間時，喺<strong>該 division 內</strong>大概排到邊。唔係官方 HYROX 排名 — 年齡組、場地同賽季都會影響。",
    openVsPro:
      "<strong>Open vs Pro（重要）：</strong>同一個鐘面時間，Pro <em>更難</em>，因為負重更重（男子 sled push 152 kg → 202 kg，另外 pull／farmers／lunges／wall balls 都更重）。排名 % 只係同<strong>同一個 division</strong> 嘅人比 — <em>唔代表</em> Pro 比 Open 易。由 Open 轉 Pro，同一人多數會慢大約 <strong>15–20%</strong>。",
    thDivision: "Division",
    thRank: "場內排名",
    thLoad: "負重／賽制",
    thContext: "說明",
    perfFootnote:
      "<strong>場內排名</strong> = 喺該 division 完賽者之中有幾少見。<strong>Pro</strong> 同一時間一定比 Open 重。Doubles：兩人各跑 8 km、分 station。Relay（×4）：每人 2 個 stations + 2 km。",

    targetStations: "目標 station 時間",
    targetStationsHint: "喺比賽疲勞下（每次 1 km run 之後）要打到嘅時間。",
    thStation: "Station",
    thTarget: "目標",
    thPctStations: "佔 stations %",

    targetRuns: "目標 run 分段",
    targetRunsHint:
      "真實比賽後期 run 會慢（疲勞）。規劃最重要係平均配速；每 km 目標反映賽果常見嘅減速曲線。",
    targetAvgPace: "目標平均配速",
    totalRunning8: "Running 總時間（8 km）",
    thRun: "Run",
    thNotes: "提示",

    howBuilt: "數據點樣嚟",
    footerTitle: "HYROX Calculator",
    footerFormula:
      "公式：<code>8 × run 配速 + Σ stations + Roxzone</code>。目標分段來自賽果研究。請按場地、Open vs Pro 負重同自己強弱調整。",
    disclaimer:
      '非官方粉絲工具 — 與 HYROX World GmbH 無關，亦未獲其認可。介面風格（黑底、白字、黃色重點）參考 <a href="https://hyrox.com/" target="_blank" rel="noopener noreferrer">hyrox.com</a>。Logo 為介面重繪，並非官方資產。',

    langEn: "EN",
    langYue: "港",
    langAria: "語言",

    runN: "Run {n}",
    roxIn: "Rox-in → station",
    roxOut: "Rox-out → run",
    vsAvg: "≈ 平均",
    vsAvgPlus: "比平均慢 {t}",
    vsAvgMinus: "比平均快 {t}",
    hour: "{n} 小時",
    hours: "{n} 小時",
    minute: "{n} 分鐘",
    minutes: "{n} 分鐘",
    second: "{n} 秒",
    seconds: "{n} 秒",

    bandWorld: "世界級",
    bandElite: "Elite",
    bandAdvanced: "Advanced",
    bandMid: "中游",
    bandRecreational: "休閒",
    loadOpen: "Open 負重",
    loadPro: "Pro 負重 · 更難",
    loadTeam: "團體賽制",

    runNotes: [
      "開波控速 — 唔好一開始爆燈",
      "SkiErg 之後搵節奏",
      "Sled push 之後企直跑",
      "Sled pull 之後穩住",
      "中段硬仗",
      "Farmers 之後保持步頻",
      "Lunges 之後短步都可以",
      "最後 1 km — 保持姿勢",
    ],

    goals: {
      sub60: {
        level: "Elite · 大約 top 1%",
        planLabel: "計劃總時間 ≈ 59:45",
        notes:
          "世界級水平。要有 elite 嘅 compromised running（約 sub-17 5K 實力）同強 station。Rox Lyfe elite Pro 男中位數 run 仲快啲（約 30:46 總、~3:51/km）、Roxzone ~2:54 — 所以呢度 4:30 Roxzone 係稍為保守嘅規劃預算。",
        sources: [
          { name: "HyroxDataLab — Sub-1:00 完賽目標", detail: "大型賽果分析入面 station + run + Roxzone 分配" },
          { name: "Rox Lyfe — Elite Pro 男中位數（約 15 人）", detail: "Run 總 30:46 · stations ~25:10 · Roxzone 2:54 · 完賽 ~58:50" },
          {
            name: "表現排名（已核對）",
            detail:
              "Open sub-60 ≈ top 3–5%（HyroxVault）。Pro sub-60 ≈ Pro 場 top ~1%（elite）；同一鐘面因負重比 Open 更難。Sub-58 Pro 喺歷年 Pro 起步入面極少。",
          },
        ],
        perfNotes: [
          "HyroxVault：大約 Open 男 top 3–5%。標準 Open 負重。",
          "遠快過女 Open elite 帶（<1:26 ≈ top 10%）。接近世界級 Open。",
          "Elite／Pro 男約 top 1%。比 Open sub-60 更難：sled push/pull、farmers、lunges、wall balls 更重。唔係「比 Open 易」。",
          "世界級 Pro。鐘面同 Open 一樣但 Pro 負重 — 絕對難度更高。",
          "全部 Doubles：<~1:03 ≈ top 5%；男 pairs elite 多數 <1:05。",
          "女 pairs elite 多數 <1:16；sub-60 明顯更高。",
          "相對全部 Doubles 分佈，係強 elite mixed 隊伍。",
          "Relay 分擔工作量（每人 2 stations + 2 km）。男 relay 平均 ~62；top 10% ~50。",
          "女 relay top 10% ~56；sub-60 接近 elite relay 帶。",
          "Mixed relay 平均 ~66，top 10% ~52；具競爭力嘅隊伍成績。",
        ],
      },
      sub70: {
        level: "Advanced · 大約 top 10%",
        planLabel: "計劃總時間 ≈ 1:09:20",
        notes:
          "強 advanced 目標。有穩陣 sub-19 5K 跑步會好幫手。每個 station 都要受控 — 一個 6 分鐘+ 爆煲（尤其 wall balls 或 sled pull）就容易飛。Roxzone 6 分鐘內往往係同 intermediate 拉開距離嘅關鍵。",
        sources: [
          { name: "HyroxDataLab — 1:10 advanced 目標", detail: "Run ~35:50–36:00 · stations ~28:00 · Roxzone ~5:30–6:00" },
          { name: "業界配速指南", detail: "Sub-70 多數係約 4:20–4:30/km 比賽 run 平均 + 有效率 stations" },
          {
            name: "表現排名（已核對）",
            detail:
              "Open 男 <1:15 ≈ top 10%（HDL）。Pro 男 ~1:10 係強 competitive／接近 elite Pro（場均多數 ~1:22–1:31）。Pro 同一鐘面仍然比 Open 難。",
          },
        ],
        perfNotes: [
          "低於 HDL elite Open 門檻（<1:15 = top 10%）。年齡組有競爭力。",
          "穩企女 Open elite（<1:26 top 10%）之內。",
          "強／接近 elite Pro。明顯高過 Pro 男平均（~1:22–1:31）。比 Open sub-70 難（負重更重）。",
          "Elite Pro 女帶。同一鐘面、Pro 負重 = 絕對難度高過 Open。",
          "全部 Doubles ~1:06–1:13 ≈ top 10–25%；男 pairs advanced 多數 1:05–1:15。",
          "女 pairs elite 多數 <1:16；sub-70 屬頂級。",
          "極具競爭力嘅 mixed pair。",
          "大約／略慢過男 relay 平均（~62）。",
          "快過女 relay 平均（~72）。",
          "接近 mixed relay 平均（~66）；好嘅會所隊伍成績。",
        ],
      },
      sub80: {
        level: "Competitive · 大約 top 25%",
        planLabel: "計劃總時間 ≈ 1:18:10",
        notes:
          "好常見嘅 competitive 目標。穩定贏過單一 hero station：避免任何一段超過約 5:15–5:30。疲勞下 ~5:00/km run 係骨架。Open 場地同 sled 地面仍然可以令 sled 差 30–60 秒。",
        sources: [
          { name: "HyroxDataLab — 1:20 competitive 目標", detail: "Run ~39:45 · stations ~31:50–33:15 · Roxzone ~6:30–7:00" },
          { name: "HYROX Open 場地背景", detail: "Men Open 平均多數 ~1:26–1:35；sub-80 明顯高於平均" },
          {
            name: "表現排名（已核對）",
            detail:
              "Open advanced ~1:15–1:25 ≈ top 10–25%。Pro 男平均 ~1:22–1:31，所以 sub-80 仍然快過好多 Pro，但 Pro 負重令同一鐘面比 Open 難。",
          },
        ],
        perfNotes: [
          "Advanced Open 帶；快過典型 Open 平均（~1:26–1:35）。",
          "接近／進入女 Open elite（<1:26）同 advanced 帶。",
          "好過好多 Pro 完賽者（平均多數 ~1:22–1:31）。同一鐘面仍然比 Open sub-80 難（Pro 負重）。",
          "穩陣 competitive Pro 女。同一時間絕對難度高過 Open。",
          "全部 Doubles top 25% ≈ <1:13；sub-80 強但未到 elite。",
          "女 pairs advanced 多數 ~1:16–1:27。",
          "具競爭力 mixed doubles（全部 Doubles 中位 ~1:22）。",
          "慢過男 relay 平均（~62）。",
          "接近女 relay 中游（平均 ~72）。",
          "大約／略慢過 mixed relay 中位（~70）。",
        ],
      },
      sub90: {
        level: "Intermediate · 穩陣首個目標",
        planLabel: "計劃總時間 ≈ 1:28:40",
        notes:
          "接近好多 Pro/Open 樣本嘅「平均」帶（~1:25–1:30）。Rox Lyfe「平均」Pro 男（~1:29）run 用咗 ~42:26、Roxzone ~6:58 — 單係縮 Roxzone 已經係免費加速。Run 1 唔好爆；後期 run 自然會慢。",
        sources: [
          { name: "HyroxDataLab — 1:30 intermediate 目標", detail: "Run ~44–45 分 · stations ~36 分 · Roxzone ~7:30–9:00" },
          { name: "Rox Lyfe — 平均 Pro 男（~1:29 樣本）", detail: "Run 42:26 · stations ~40:50 · Roxzone 6:58（可見中游 transition 有幾食時間）" },
          {
            name: "表現排名（已核對）",
            detail:
              "Open intermediate 1:25–1:40 ≈ top 25–50%。Pro ~1:30 大約／略慢過好多公開 Pro 平均 — 但因為負重仍然比 Open 1:30 更辛苦。",
          },
        ],
        perfNotes: [
          "Intermediate Open（1:25–1:40 帶）；穩陣有練過嘅完賽。",
          "Advanced／偏上 intermediate 女 Open。",
          "大約 Pro 中游（平均多數 ~1:22–1:31）。同一鐘面比 Open 中游更難（Pro 負重）。",
          "大約 Pro 女中游。同一時間絕對難度高過 Open。",
          "接近全部 Doubles 中位（~1:22）至 top 75%（~1:31）。",
          "女 pairs intermediate 多數 ~1:27–1:40。",
          "典型休閒／會所 mixed doubles。",
          "休閒男 relay（較慢四分位多數 ~78+）。",
          "女 relay 中至偏慢一截。",
          "社交／首次 mixed relay 範圍。",
        ],
      },
    },
  },
};

const LANG_KEY = "hyrox-calc-lang";

function detectDefaultLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "yue") return saved;
  } catch (_) {
    /* ignore */
  }
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("zh") || nav.startsWith("yue")) return "yue";
  return "en";
}

let currentLang = detectDefaultLang();

function t(key, params) {
  const pack = I18N[currentLang] || I18N.en;
  const fallback = I18N.en;
  let str = pack[key];
  if (str === undefined) str = fallback[key];
  if (str === undefined) return key;
  if (params) {
    Object.keys(params).forEach((k) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, "g"), params[k]);
    });
  }
  return str;
}

function tGoal(goalId) {
  const pack = I18N[currentLang] || I18N.en;
  const fallback = I18N.en;
  return (pack.goals && pack.goals[goalId]) || fallback.goals[goalId];
}

function tRunNotes() {
  const pack = I18N[currentLang] || I18N.en;
  return pack.runNotes || I18N.en.runNotes;
}

function setLang(lang) {
  if (lang !== "en" && lang !== "yue") return;
  currentLang = lang;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (_) {
    /* ignore */
  }
  document.documentElement.lang = lang === "yue" ? "zh-HK" : "en";
  applyStaticI18n();
  if (typeof window.onLanguageChange === "function") {
    window.onLanguageChange();
  }
}

function applyStaticI18n() {
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (!key) return;
    el.innerHTML = t(key);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (!key) return;
    el.setAttribute("title", t(key));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (!key) return;
    el.setAttribute("aria-label", t(key));
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function initI18n() {
  document.documentElement.lang = currentLang === "yue" ? "zh-HK" : "en";
  applyStaticI18n();
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}
