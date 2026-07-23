# HYROX Race Time Calculator

Two tabs:

1. **My Calculator** — build a personal prediction from pace, station times, and Roxzone  
2. **Target Times** — data-backed split targets for Sub 60 / 70 / 80 / 90 (from race-result research)

## Open the app

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Languages

- **港 (Cantonese / 香港繁體)** — default when browser language is Chinese  
- **EN (English)** — full UI  

Toggle in the top-right. Preference is saved in `localStorage`.  
HYROX terms stay in English (e.g. SkiErg, Men Open, Roxzone, Sub 60).

## Visual style

General HYROX calculator UI, inspired by [hyrox.com](https://hyrox.com/) design language:

| Token | Value |
|-------|--------|
| Background | Black `#000000` |
| Text | White `#FFFFFF` |
| Highlight / buttons | Yellow `#FFE600` |
| Display type | Barlow Condensed |
| Body type | Inter |
| Logo | `assets/hyrox-logo.svg` + `hyrox-mark.svg` |

## Formula (My Calculator)

```
Total finish ≈ (8 × run pace) + Σ station times + Roxzone
```

### Stations (official order)

| # | Station            | Work        |
|---|--------------------|-------------|
| 1 | SkiErg             | 1000 m      |
| 2 | Sled Push          | 50 m        |
| 3 | Sled Pull          | 50 m        |
| 4 | Burpee Broad Jump  | 80 m        |
| 5 | Rowing             | 1000 m      |
| 6 | Farmers Carry      | 200 m       |
| 7 | Sandbag Lunges     | 100 m       |
| 8 | Wall Balls         | 100 reps    |

### Roxzone (rox-in / rox-out)

16 passes (in + out × 8 stations). Modes: **per-pass average × 16** or **total Roxzone**.

## Target Times tab (research-based)

Targets are **not invented proportions**. They follow published split distributions from race analyses:

| Goal | Plan total | Run total | Avg pace | Stations | Roxzone | Level (approx.) |
|------|------------|-----------|----------|----------|---------|-----------------|
| **Sub 60** | ~59:45 | 31:45 | ~3:58/km | 23:30 | 4:30 | Elite / top ~1% |
| **Sub 70** | ~1:09:20 | 35:55 | ~4:29/km | 28:00 | 5:30 | Advanced / top ~10% |
| **Sub 80** | ~1:18:10 | 39:50 | ~4:59/km | 31:50 | 6:30 | Competitive / top ~25% |
| **Sub 90** | ~1:28:40 | 44:00 | ~5:30/km | 36:10 | 7:30 | Intermediate / solid goal |

**Primary source:** [HyroxDataLab — Target Split Times by Finish Goal](https://hyroxdatalab.com/articles/hyrox-target-split-times-by-goal) (analysis of large HYROX result samples).

**Cross-check (Sub 60 / mid-pack):** [Rox Lyfe — From Average to Elite](https://roxlyfe.com/hyrox-from-average-to-elite/) — medians of elite Pro men (~58:50: run 30:46, Roxzone 2:54) vs average Pro (~1:29: run 42:26, Roxzone 6:58).

**Use “Apply to calculator”** to load average pace, all 8 station times, and Roxzone into the personal calculator for fine-tuning.

### Performance index (top %)

Each goal also shows an approximate **performance rank by division**:

| Division family | What the rank means |
|-----------------|---------------------|
| Men / Women **Open** | Standard weights; largest fields |
| Men / Women **Pro** | Heavier loads; faster self-selected field |
| Men / Women / Mixed **Doubles** | Both run 8 km; stations split |
| Men / Women / Mixed **Relay (×4)** | 4 athletes; 2 stations + 2 km each |

Example mapping (approximate within-division rank — see UI for full notes):

| Goal | Men Open | Women Open | Men Pro | Mixed Doubles | Mixed Relay |
|------|----------|------------|---------|---------------|-------------|
| Sub 60 | Top ~1–5% | Top ~0.5–2% | **Top ~1–3%** | Top ~3–8% | Top ~10–20% |
| Sub 70 | Top ~5–10% | Top ~2–5% | **Top ~5–12%** | Top ~8–18% | Top ~25–40% |
| Sub 80 | Top ~15–25% | Top ~8–15% | **Top ~25–40%** | Top ~20–35% | Top ~45–60% |
| Sub 90 | Top ~30–45% | Top ~15–30% | **Top ~45–60%** | Top ~40–55% | Top ~60–75% |

**Open vs Pro:** same clock is *harder* in Pro (heavier loads). Rank % is only among that division’s field — Pro is not “easier”. Open→Pro often costs ~15–20% more time for the same athlete.

Sources: HyroxDataLab singles/doubles bands, HyroxVault Open sub-60 (~top 3–5%), Pro elite stats (sub-60 ~top 1% of Pro; sub-58 extremely rare), public Pro averages (~1:22–1:31), relay benchmarks.

### Caveats

- Open vs Pro weights and venue floor change sled times a lot (±30–60s).  
- Plans assume a **balanced** athlete; runners may go faster on runs / slower on stations (and vice versa).  
- Late runs are intentionally slower than early ones (fatigue curve from real races).  
- **Percentiles are approximate** and shift by age group, season, and event size.

## Stack

Static HTML + CSS + vanilla JS — no build step.
