/**
 * HYROX Race Time Calculator
 *
 * Tab 1 — My Calculator: personal pace / stations / Roxzone → predicted finish
 * Tab 2 — Target Times: data-backed splits for Sub 60 / 70 / 80 / 90
 *
 * Target data primarily from HyroxDataLab analyses of large race-result samples,
 * with Sub 60 cross-checked against Rox Lyfe elite Pro medians (15 athletes).
 */

const STATIONS = [
  { id: "ski", name: "SkiErg", distance: "1000 m" },
  { id: "sled-push", name: "Sled Push", distance: "50 m" },
  { id: "sled-pull", name: "Sled Pull", distance: "50 m" },
  { id: "burpee", name: "Burpee Broad Jump", distance: "80 m" },
  { id: "row", name: "Rowing", distance: "1000 m" },
  { id: "farmers", name: "Farmers Carry", distance: "200 m" },
  { id: "lunges", name: "Sandbag Lunges", distance: "100 m" },
  { id: "wallballs", name: "Wall Balls", distance: "100 reps" },
];

const ROX_PASSES = 16;

/**
 * Target profiles (seconds).
 * Station order matches STATIONS[].
 * runSplits: 8 × 1km times under race fatigue.
 *
 * Sources:
 * - HyroxDataLab "Target Split Times by Finish Goal" (claims 700k+ race results)
 * - Rox Lyfe "From Average to Elite" (median of 15 elite Pro men / average Pro ~90 min)
 */
/**
 * Performance ranks = approximate WITHIN-DIVISION top-% (where you place among people racing that category).
 *
 * Critical distinction (fact-checked):
 * - Absolute difficulty: same clock in Pro is HARDER than Open (heavier sleds, farmers, lunges, wall balls).
 *   Typical Open→Pro slowdown for the same athlete is often cited ~15–20%.
 * - Within-division rank: % among that division’s finishers only — not a claim that Pro is “easier”.
 *
 * Sources used for ranks:
 * - HyroxDataLab Open levels (700k+): men elite <1:15 ≈ top 10%; advanced 1:15–1:25 ≈ top 10–25%; intermediate 1:25–1:40 ≈ top 25–50%
 * - HyroxVault: Men Open sub-60 ≈ top 3–5% of Open
 * - Pro community / result stats: Men Pro sub-60 ≈ elite / ~top 1% of Pro; sub-58 Pro is extremely rare
 *   (e.g. public claim ~50 men ever sub-58 Pro vs tens of thousands of Pro attempts)
 * - Pro men field average often ~1:22–1:31 (RoxHype / other); Open men ~1:26–1:35+
 * - HyroxDataLab Doubles (425k+): <1:02:41 top 5%, <1:06 top 10%, <1:13 top 25%, median ~1:22
 * - Relay benchmarks: Men avg ~62 / top 10% ~50; Mixed avg ~66 / top 10% ~52; Women avg ~72 / top 10% ~56
 *
 * Age group, venue, and season shift ranks — guide only, not official HYROX ranking.
 */
const TARGET_GOALS = [
  {
    id: "sub60",
    label: "Sub 60",
    shortLabel: "< 60",
    minutes: 60,
    // HyroxDataLab Sub-1:00 targets — copy via tGoal()
    runSplits: [210, 230, 240, 240, 240, 240, 245, 260], // 31:45
    stations: [240, 100, 170, 180, 240, 90, 170, 220], // 23:30
    roxzone: 270, // 4:30
    performance: [
      {
        division: "Men Open",
        rank: "Top ~1–5%",
        band: "elite",
        load: "open",
        note: "HyroxVault: roughly top 3–5% of Open men. Standard Open weights.",
      },
      {
        division: "Women Open",
        rank: "Top ~0.5–2%",
        band: "world",
        load: "open",
        note: "Far faster than women Open elite band (<1:26 ≈ top 10%). Near world-class Open.",
      },
      {
        division: "Men Pro",
        rank: "Top ~1–3%",
        band: "world",
        load: "pro",
        note: "Elite / ~top 1% of Pro men. HARDER than Open sub-60: heavier sled push/pull, farmers, lunges, wall balls. Not “easier” than Open.",
      },
      {
        division: "Women Pro",
        rank: "Top ~0.5–2%",
        band: "world",
        load: "pro",
        note: "World-class Pro. Same clock as Open but with Pro loads — higher absolute difficulty.",
      },
      {
        division: "Men Doubles",
        rank: "Top ~3–8%",
        band: "elite",
        load: "team",
        note: "All-doubles: <~1:03 ≈ top 5%; men pairs elite often <1:05.",
      },
      {
        division: "Women Doubles",
        rank: "Top ~1–5%",
        band: "world",
        load: "team",
        note: "Women pairs elite often <1:16; sub-60 is far sharper.",
      },
      {
        division: "Mixed Doubles",
        rank: "Top ~3–8%",
        band: "elite",
        load: "team",
        note: "Strong elite mixed team vs all-doubles distribution.",
      },
      {
        division: "Men Relay (×4)",
        rank: "Top ~15–25%",
        band: "advanced",
        load: "team",
        note: "Relay splits workload (2 stations + 2 km each). Men relay avg ~62; top 10% ~50.",
      },
      {
        division: "Women Relay (×4)",
        rank: "Top ~8–15%",
        band: "elite",
        load: "team",
        note: "Women relay top 10% ~56; sub-60 near elite relay band.",
      },
      {
        division: "Mixed Relay (×4)",
        rank: "Top ~10–20%",
        band: "advanced",
        load: "team",
        note: "Mixed relay avg ~66, top 10% ~52; competitive team result.",
      },
    ],
  },
  {
    id: "sub70",
    label: "Sub 70",
    shortLabel: "< 70",
    minutes: 70,
    runSplits: [230, 260, 270, 270, 275, 275, 280, 295], // 35:55
    stations: [260, 130, 220, 220, 260, 110, 210, 270], // 28:00
    roxzone: 330, // 5:30
    performance: [
      {
        division: "Men Open",
        rank: "Top ~5–10%",
        band: "elite",
        load: "open",
        note: "Under HDL elite Open threshold (<1:15 = top 10%). Strong age-group potential.",
      },
      {
        division: "Women Open",
        rank: "Top ~2–5%",
        band: "elite",
        load: "open",
        note: "Well inside women Open elite (<1:26 top 10%).",
      },
      {
        division: "Men Pro",
        rank: "Top ~5–12%",
        band: "elite",
        load: "pro",
        note: "Strong / near-elite Pro. Well above Pro men averages (~1:22–1:31). Harder than Open sub-70 (heavier loads).",
      },
      {
        division: "Women Pro",
        rank: "Top ~3–8%",
        band: "elite",
        load: "pro",
        note: "Elite Pro women band. Same clock, Pro loads = higher absolute difficulty than Open.",
      },
      {
        division: "Men Doubles",
        rank: "Top ~10–20%",
        band: "advanced",
        load: "team",
        note: "All-doubles ~1:06–1:13 ≈ top 10–25%; men pairs advanced often 1:05–1:15.",
      },
      {
        division: "Women Doubles",
        rank: "Top ~5–12%",
        band: "elite",
        load: "team",
        note: "Women pairs elite often <1:16; sub-70 is top-tier.",
      },
      {
        division: "Mixed Doubles",
        rank: "Top ~8–18%",
        band: "elite",
        load: "team",
        note: "Highly competitive mixed pair.",
      },
      {
        division: "Men Relay (×4)",
        rank: "Top ~30–45%",
        band: "mid",
        load: "team",
        note: "Around / slightly slower than men relay average (~62).",
      },
      {
        division: "Women Relay (×4)",
        rank: "Top ~15–25%",
        band: "advanced",
        load: "team",
        note: "Faster than women relay average (~72).",
      },
      {
        division: "Mixed Relay (×4)",
        rank: "Top ~25–40%",
        band: "mid",
        load: "team",
        note: "Near mixed relay average (~66); good club team result.",
      },
    ],
  },
  {
    id: "sub80",
    label: "Sub 80",
    shortLabel: "< 80",
    minutes: 80,
    runSplits: [255, 290, 300, 300, 305, 305, 315, 320], // 39:50
    stations: [280, 160, 250, 255, 280, 130, 240, 315], // 31:50
    roxzone: 390, // 6:30
    performance: [
      {
        division: "Men Open",
        rank: "Top ~15–25%",
        band: "advanced",
        load: "open",
        note: "Advanced Open band; faster than typical Open averages (~1:26–1:35).",
      },
      {
        division: "Women Open",
        rank: "Top ~8–15%",
        band: "elite",
        load: "open",
        note: "Inside / near women Open elite (<1:26) and advanced bands.",
      },
      {
        division: "Men Pro",
        rank: "Top ~25–40%",
        band: "advanced",
        load: "pro",
        note: "Better than many Pro finishers (avg often ~1:22–1:31). Same clock is still harder than Open sub-80 because of Pro weights.",
      },
      {
        division: "Women Pro",
        rank: "Top ~15–30%",
        band: "advanced",
        load: "pro",
        note: "Solid competitive Pro women. Higher absolute difficulty than Open at the same time.",
      },
      {
        division: "Men Doubles",
        rank: "Top ~25–40%",
        band: "advanced",
        load: "team",
        note: "All-doubles top 25% ≈ <1:13; sub-80 is strong but not elite.",
      },
      {
        division: "Women Doubles",
        rank: "Top ~12–25%",
        band: "advanced",
        load: "team",
        note: "Women pairs advanced often ~1:16–1:27.",
      },
      {
        division: "Mixed Doubles",
        rank: "Top ~20–35%",
        band: "advanced",
        load: "team",
        note: "Competitive mixed doubles (median all-doubles ~1:22).",
      },
      {
        division: "Men Relay (×4)",
        rank: "Top ~55–70%",
        band: "mid",
        load: "team",
        note: "Slower than men relay average (~62).",
      },
      {
        division: "Women Relay (×4)",
        rank: "Top ~35–50%",
        band: "mid",
        load: "team",
        note: "Near women relay mid-pack (avg ~72).",
      },
      {
        division: "Mixed Relay (×4)",
        rank: "Top ~45–60%",
        band: "mid",
        load: "team",
        note: "Around / slightly slower than mixed relay median (~70).",
      },
    ],
  },
  {
    id: "sub90",
    label: "Sub 90",
    shortLabel: "< 90",
    minutes: 90,
    runSplits: [240, 320, 340, 340, 345, 345, 350, 360], // 44:00
    stations: [300, 190, 290, 300, 300, 150, 280, 360], // 36:10
    roxzone: 450, // 7:30
    performance: [
      {
        division: "Men Open",
        rank: "Top ~30–45%",
        band: "mid",
        load: "open",
        note: "Intermediate Open (1:25–1:40 band); solid trained finisher.",
      },
      {
        division: "Women Open",
        rank: "Top ~15–30%",
        band: "advanced",
        load: "open",
        note: "Advanced / upper-intermediate women Open.",
      },
      {
        division: "Men Pro",
        rank: "Top ~45–60%",
        band: "mid",
        load: "pro",
        note: "Around mid Pro field (avg often ~1:22–1:31). Same clock harder than Open mid-pack because of Pro weights.",
      },
      {
        division: "Women Pro",
        rank: "Top ~35–50%",
        band: "mid",
        load: "pro",
        note: "Around mid Pro women. Higher absolute difficulty than Open at the same time.",
      },
      {
        division: "Men Doubles",
        rank: "Top ~45–60%",
        band: "mid",
        load: "team",
        note: "Near all-doubles median (~1:22) toward top 75% (~1:31).",
      },
      {
        division: "Women Doubles",
        rank: "Top ~30–50%",
        band: "mid",
        load: "team",
        note: "Women pairs intermediate often ~1:27–1:40.",
      },
      {
        division: "Mixed Doubles",
        rank: "Top ~40–55%",
        band: "mid",
        load: "team",
        note: "Typical recreational / club mixed doubles.",
      },
      {
        division: "Men Relay (×4)",
        rank: "Top ~70–85%",
        band: "recreational",
        load: "team",
        note: "Leisure men relay (slower quartile often ~78+).",
      },
      {
        division: "Women Relay (×4)",
        rank: "Top ~55–70%",
        band: "mid",
        load: "team",
        note: "Around women relay mid-to-slower pack.",
      },
      {
        division: "Mixed Relay (×4)",
        rank: "Top ~60–75%",
        band: "recreational",
        load: "team",
        note: "Social / first-timer mixed relay territory.",
      },
    ],
  },
];

const state = {
  stationOverrides: Object.fromEntries(STATIONS.map((s) => [s.id, null])),
  roxMode: "per",
  activeTab: "targets",
  activeGoalId: "sub70",
};

// --- Time helpers -----------------------------------------------------------

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function readMinSec(minEl, secEl) {
  const min = clamp(parseInt(minEl.value, 10) || 0, 0, 999);
  let sec = parseInt(secEl.value, 10);
  if (Number.isNaN(sec)) sec = 0;
  sec = clamp(sec, 0, 59);
  return min * 60 + sec;
}

function formatTime(totalSeconds) {
  totalSeconds = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatDurationWords(totalSeconds) {
  totalSeconds = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const parts = [];
  if (h > 0) parts.push(t(h === 1 ? "hour" : "hours", { n: h }));
  if (m > 0) parts.push(t(m === 1 ? "minute" : "minutes", { n: m }));
  if (s > 0 || parts.length === 0) parts.push(t(s === 1 ? "second" : "seconds", { n: s }));
  return parts.join(" ");
}

function splitMinSec(seconds) {
  seconds = Math.max(0, Math.round(seconds));
  return {
    min: Math.floor(seconds / 60),
    sec: seconds % 60,
  };
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function getGoal(id) {
  return TARGET_GOALS.find((g) => g.id === id) || TARGET_GOALS[1];
}

function goalTotals(goal) {
  const runTotal = sum(goal.runSplits);
  const stTotal = sum(goal.stations);
  const rox = goal.roxzone;
  const finish = runTotal + stTotal + rox;
  const avgPace = Math.round(runTotal / 8);
  return { runTotal, stTotal, rox, finish, avgPace };
}

// --- DOM refs ---------------------------------------------------------------

const els = {
  paceMin: document.getElementById("pace-min"),
  paceSec: document.getElementById("pace-sec"),
  runSegment: document.getElementById("run-segment-display"),
  runTotal: document.getElementById("run-total-display"),
  stationsList: document.getElementById("stations-list"),
  stationsTotal: document.getElementById("stations-total"),
  resetStations: document.getElementById("reset-stations"),
  roxModeBtns: document.querySelectorAll(".rox-mode-btn"),
  roxPerPanel: document.getElementById("rox-per-panel"),
  roxTotalPanel: document.getElementById("rox-total-panel"),
  roxPerMin: document.getElementById("rox-per-min"),
  roxPerSec: document.getElementById("rox-per-sec"),
  roxTotalMin: document.getElementById("rox-total-min"),
  roxTotalSec: document.getElementById("rox-total-sec"),
  roxzoneTotal: document.getElementById("roxzone-total"),
  finishTime: document.getElementById("finish-time"),
  finishSub: document.getElementById("finish-sub"),
  bdRun: document.getElementById("bd-run"),
  bdStations: document.getElementById("bd-stations"),
  bdRox: document.getElementById("bd-rox"),
  bdRunPct: document.getElementById("bd-run-pct"),
  bdStationsPct: document.getElementById("bd-stations-pct"),
  bdRoxPct: document.getElementById("bd-rox-pct"),
  barRun: document.getElementById("bar-run"),
  barStations: document.getElementById("bar-stations"),
  barRox: document.getElementById("bar-rox"),
  splitBody: document.getElementById("split-body"),
  // tabs
  tabs: document.querySelectorAll(".tab"),
  panelCalc: document.getElementById("panel-calc"),
  panelTargets: document.getElementById("panel-targets"),
  // targets
  goalGrid: document.getElementById("goal-grid"),
  tgtLabel: document.getElementById("tgt-label"),
  tgtFinish: document.getElementById("tgt-finish"),
  tgtLevel: document.getElementById("tgt-level"),
  tgtRunTotal: document.getElementById("tgt-run-total"),
  tgtStTotal: document.getElementById("tgt-st-total"),
  tgtRoxTotal: document.getElementById("tgt-rox-total"),
  tgtRunPct: document.getElementById("tgt-run-pct"),
  tgtStPct: document.getElementById("tgt-st-pct"),
  tgtRoxPct: document.getElementById("tgt-rox-pct"),
  tgtBarRun: document.getElementById("tgt-bar-run"),
  tgtBarSt: document.getElementById("tgt-bar-st"),
  tgtBarRox: document.getElementById("tgt-bar-rox"),
  tgtPace: document.getElementById("tgt-pace"),
  tgtPaceBig: document.getElementById("tgt-pace-big"),
  tgtRunBig: document.getElementById("tgt-run-big"),
  tgtRoxPer: document.getElementById("tgt-rox-per"),
  tgtStationsBody: document.getElementById("tgt-stations-body"),
  tgtRunsBody: document.getElementById("tgt-runs-body"),
  tgtSources: document.getElementById("tgt-sources"),
  tgtNotes: document.getElementById("tgt-notes"),
  tgtPerfBody: document.getElementById("tgt-perf-body"),
  tgtAvgMeta: document.getElementById("tgt-avg-meta"),
  tgtRoxMeta: document.getElementById("tgt-rox-meta"),
  applyTargets: document.getElementById("apply-targets"),
  applyFeedback: document.getElementById("apply-feedback"),
};

// --- Tabs -------------------------------------------------------------------

function setTab(tabId) {
  state.activeTab = tabId;
  els.tabs.forEach((tab) => {
    const active = tab.dataset.tab === tabId;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
  const isTargets = tabId === "targets";
  els.panelTargets.classList.toggle("hidden", !isTargets);
  els.panelTargets.hidden = !isTargets;
  els.panelCalc.classList.toggle("hidden", isTargets);
  els.panelCalc.hidden = isTargets;
}

// --- Stations UI (calculator) -----------------------------------------------

function getPaceSeconds() {
  return readMinSec(els.paceMin, els.paceSec);
}

function getStationSeconds(stationId) {
  const override = state.stationOverrides[stationId];
  if (override !== null && override !== undefined) return override;
  return getPaceSeconds();
}

function buildStations() {
  els.stationsList.innerHTML = "";
  STATIONS.forEach((station, i) => {
    const row = document.createElement("div");
    row.className = "station-row";
    row.dataset.id = station.id;

    const secs = getStationSeconds(station.id);
    const { min, sec } = splitMinSec(secs);

    row.innerHTML = `
      <span class="station-num">${i + 1}</span>
      <div class="station-meta">
        <div class="station-name">${station.name}</div>
        <div class="station-dist">${station.distance}</div>
      </div>
      <div class="time-input-group">
        <input type="number" class="st-min" min="0" max="99" value="${min}" inputmode="numeric" aria-label="${station.name} minutes" />
        <span class="sep">:</span>
        <input type="number" class="st-sec" min="0" max="59" value="${String(sec).padStart(2, "0")}" inputmode="numeric" aria-label="${station.name} seconds" />
      </div>
    `;

    const minIn = row.querySelector(".st-min");
    const secIn = row.querySelector(".st-sec");

    const onStationChange = () => {
      state.stationOverrides[station.id] = readMinSec(minIn, secIn);
      recalculate();
    };

    minIn.addEventListener("input", onStationChange);
    secIn.addEventListener("input", onStationChange);
    minIn.addEventListener("change", () => {
      minIn.value = clamp(parseInt(minIn.value, 10) || 0, 0, 99);
      onStationChange();
    });
    secIn.addEventListener("change", () => {
      let s = parseInt(secIn.value, 10);
      if (Number.isNaN(s)) s = 0;
      secIn.value = String(clamp(s, 0, 59)).padStart(2, "0");
      onStationChange();
    });

    els.stationsList.appendChild(row);
  });
}

function syncStationInputsFromState() {
  STATIONS.forEach((station) => {
    const row = els.stationsList.querySelector(`[data-id="${station.id}"]`);
    if (!row) return;
    const secs = getStationSeconds(station.id);
    const { min, sec } = splitMinSec(secs);
    row.querySelector(".st-min").value = min;
    row.querySelector(".st-sec").value = String(sec).padStart(2, "0");
  });
}

function resetStationsToPace() {
  STATIONS.forEach((s) => {
    state.stationOverrides[s.id] = null;
  });
  syncStationInputsFromState();
  recalculate();
}

// --- Roxzone (calculator) ---------------------------------------------------

function getRoxzoneSeconds() {
  if (state.roxMode === "per") {
    return readMinSec(els.roxPerMin, els.roxPerSec) * ROX_PASSES;
  }
  return readMinSec(els.roxTotalMin, els.roxTotalSec);
}

function setRoxMode(mode) {
  state.roxMode = mode;
  els.roxModeBtns.forEach((btn) => {
    const active = btn.dataset.mode === mode;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
  els.roxPerPanel.classList.toggle("hidden", mode !== "per");
  els.roxTotalPanel.classList.toggle("hidden", mode !== "total");

  if (mode === "total") {
    const total = readMinSec(els.roxPerMin, els.roxPerSec) * ROX_PASSES;
    const { min, sec } = splitMinSec(total);
    els.roxTotalMin.value = min;
    els.roxTotalSec.value = String(sec).padStart(2, "0");
  } else {
    const total = readMinSec(els.roxTotalMin, els.roxTotalSec);
    const per = Math.round(total / ROX_PASSES);
    const { min, sec } = splitMinSec(per);
    els.roxPerMin.value = min;
    els.roxPerSec.value = String(sec).padStart(2, "0");
  }
  recalculate();
}

// --- Calculator recalculate -------------------------------------------------

function recalculate() {
  const pace = getPaceSeconds();
  const runTotal = pace * 8;

  let stationsTotal = 0;
  const stationTimes = STATIONS.map((s) => {
    const secs = getStationSeconds(s.id);
    stationsTotal += secs;
    return secs;
  });

  const roxTotal = getRoxzoneSeconds();
  const finish = runTotal + stationsTotal + roxTotal;

  els.runSegment.textContent = formatTime(pace);
  els.runTotal.textContent = formatTime(runTotal);
  els.stationsTotal.textContent = formatTime(stationsTotal);
  els.roxzoneTotal.textContent = formatTime(roxTotal);

  els.finishTime.textContent = formatTime(finish);
  els.finishSub.textContent = formatDurationWords(finish);

  const safe = finish > 0 ? finish : 1;
  const runPct = Math.round((runTotal / safe) * 100);
  const stPct = Math.round((stationsTotal / safe) * 100);
  const roxPct = Math.max(0, 100 - runPct - stPct);

  els.bdRun.textContent = formatTime(runTotal);
  els.bdStations.textContent = formatTime(stationsTotal);
  els.bdRox.textContent = formatTime(roxTotal);
  els.bdRunPct.textContent = `${runPct}%`;
  els.bdStationsPct.textContent = `${stPct}%`;
  els.bdRoxPct.textContent = `${roxPct}%`;
  els.barRun.style.width = `${runPct}%`;
  els.barStations.style.width = `${stPct}%`;
  els.barRox.style.width = `${roxPct}%`;

  const roxPer = roxTotal / ROX_PASSES;
  let cum = 0;
  const rows = [];

  STATIONS.forEach((station, i) => {
    cum += pace;
    rows.push({ n: i + 1, name: t("runN", { n: i + 1 }), time: pace, cum, kind: "run" });
    cum += roxPer;
    rows.push({ n: "", name: t("roxIn"), time: roxPer, cum, kind: "rox" });
    cum += stationTimes[i];
    rows.push({ n: "", name: station.name, time: stationTimes[i], cum, kind: "station" });
    cum += roxPer;
    rows.push({ n: "", name: t("roxOut"), time: roxPer, cum, kind: "rox" });
  });

  els.splitBody.innerHTML = rows
    .map(
      (r) => `
    <tr>
      <td>${r.n}</td>
      <td class="seg-${r.kind}">${r.name}</td>
      <td class="mono">${formatTime(r.time)}</td>
      <td class="mono">${formatTime(r.cum)}</td>
    </tr>`
    )
    .join("");
}

// --- Target Times tab -------------------------------------------------------

function buildGoalGrid() {
  els.goalGrid.innerHTML = TARGET_GOALS.map((g) => {
    const { finish, avgPace } = goalTotals(g);
    const active = g.id === state.activeGoalId ? " active" : "";
    return `
      <button type="button" class="goal-chip${active}" data-goal="${g.id}" aria-pressed="${g.id === state.activeGoalId}">
        <span class="goal-chip-label">${g.label}</span>
        <span class="goal-chip-time mono">${formatTime(finish)}</span>
        <span class="goal-chip-pace mono">${formatTime(avgPace)}/km</span>
      </button>
    `;
  }).join("");

  els.goalGrid.querySelectorAll(".goal-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeGoalId = btn.dataset.goal;
      buildGoalGrid();
      renderTargetGoal();
    });
  });
}

function renderTargetGoal() {
  const goal = getGoal(state.activeGoalId);
  const gText = tGoal(goal.id);
  const { runTotal, stTotal, rox, finish, avgPace } = goalTotals(goal);
  const safe = finish || 1;
  const runPct = Math.round((runTotal / safe) * 100);
  const stPct = Math.round((stTotal / safe) * 100);
  const roxPct = Math.max(0, 100 - runPct - stPct);
  const roxPer = Math.round(rox / ROX_PASSES);
  const runNotes = tRunNotes();

  els.tgtLabel.textContent = goal.label;
  els.tgtFinish.textContent = formatTime(finish);
  els.tgtLevel.textContent = `${gText.level} · ${gText.planLabel}`;

  els.tgtRunTotal.textContent = formatTime(runTotal);
  els.tgtStTotal.textContent = formatTime(stTotal);
  els.tgtRoxTotal.textContent = formatTime(rox);
  els.tgtRunPct.textContent = `${runPct}%`;
  els.tgtStPct.textContent = `${stPct}%`;
  els.tgtRoxPct.textContent = `${roxPct}%`;
  els.tgtBarRun.style.width = `${runPct}%`;
  els.tgtBarSt.style.width = `${stPct}%`;
  els.tgtBarRox.style.width = `${roxPct}%`;
  els.tgtPaceBig.innerHTML = `${formatTime(avgPace)}<span class="unit">/km</span>`;
  els.tgtRunBig.textContent = formatTime(runTotal);

  if (els.tgtAvgMeta) {
    els.tgtAvgMeta.innerHTML = t("avgPerKm", {
      pace: `<span class="mono">${formatTime(avgPace)}</span>`,
    });
  }
  if (els.tgtRoxMeta) {
    els.tgtRoxMeta.innerHTML = t("perPassX16", {
      per: `<span class="mono">${formatTime(roxPer)}</span>`,
    });
  }

  els.tgtStationsBody.innerHTML = STATIONS.map((st, i) => {
    const secs = goal.stations[i];
    const pct = stTotal > 0 ? Math.round((secs / stTotal) * 100) : 0;
    return `
      <tr>
        <td>${i + 1}</td>
        <td>
          <span class="seg-station">${st.name}</span>
          <span class="station-dist-inline">${st.distance}</span>
        </td>
        <td class="mono">${formatTime(secs)}</td>
        <td class="mono muted">${pct}%</td>
      </tr>
    `;
  }).join("");

  els.tgtRunsBody.innerHTML = goal.runSplits
    .map((secs, i) => {
      const delta = secs - avgPace;
      let deltaStr = t("vsAvg");
      if (delta > 0) deltaStr = t("vsAvgPlus", { t: formatTime(delta) });
      else if (delta < 0) deltaStr = t("vsAvgMinus", { t: formatTime(Math.abs(delta)) });
      return `
      <tr>
        <td class="seg-run">${t("runN", { n: i + 1 })}</td>
        <td class="mono">${formatTime(secs)}</td>
        <td class="muted">${runNotes[i]} · ${deltaStr}</td>
      </tr>
    `;
    })
    .join("");

  els.tgtSources.innerHTML = (gText.sources || [])
    .map(
      (s) => `
    <div class="source-item">
      <strong>${s.name}</strong>
      <span>${s.detail}</span>
    </div>`
    )
    .join("");

  els.tgtNotes.textContent = gText.notes || "";

  const bandLabel = {
    world: t("bandWorld"),
    elite: t("bandElite"),
    advanced: t("bandAdvanced"),
    mid: t("bandMid"),
    recreational: t("bandRecreational"),
  };

  const loadLabel = {
    open: t("loadOpen"),
    pro: t("loadPro"),
    team: t("loadTeam"),
  };

  const perfNotes = gText.perfNotes || [];

  els.tgtPerfBody.innerHTML = (goal.performance || [])
    .map(
      (p, idx) => `
    <tr class="${p.load === "pro" ? "row-pro" : ""}">
      <td class="perf-division">${p.division}</td>
      <td>
        <span class="perf-rank band-${p.band}">${p.rank}</span>
        <span class="perf-band-tag">${bandLabel[p.band] || p.band}</span>
      </td>
      <td>
        <span class="load-tag load-${p.load || "team"}">${loadLabel[p.load] || "—"}</span>
      </td>
      <td class="muted">${perfNotes[idx] || p.note || ""}</td>
    </tr>`
    )
    .join("");

  els.applyFeedback.classList.add("hidden");
}

function applyTargetsToCalculator() {
  const goal = getGoal(state.activeGoalId);
  const { avgPace, rox } = goalTotals(goal);

  const pace = splitMinSec(avgPace);
  els.paceMin.value = pace.min;
  els.paceSec.value = String(pace.sec).padStart(2, "0");

  STATIONS.forEach((st, i) => {
    state.stationOverrides[st.id] = goal.stations[i];
  });
  syncStationInputsFromState();

  // Prefer total Roxzone for exact plan load
  state.roxMode = "total";
  els.roxModeBtns.forEach((btn) => {
    const active = btn.dataset.mode === "total";
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });
  els.roxPerPanel.classList.add("hidden");
  els.roxTotalPanel.classList.remove("hidden");

  const r = splitMinSec(rox);
  els.roxTotalMin.value = r.min;
  els.roxTotalSec.value = String(r.sec).padStart(2, "0");
  const per = splitMinSec(Math.round(rox / ROX_PASSES));
  els.roxPerMin.value = per.min;
  els.roxPerSec.value = String(per.sec).padStart(2, "0");

  recalculate();
  setTab("calc");

  els.applyFeedback.textContent = t("appliedFeedback", { label: goal.label });
  els.applyFeedback.classList.remove("hidden");
}

// --- Events -----------------------------------------------------------------

function onPaceInput() {
  syncStationInputsFromState();
  recalculate();
}

function bindPace() {
  const normalize = () => {
    els.paceMin.value = clamp(parseInt(els.paceMin.value, 10) || 0, 0, 30);
    let s = parseInt(els.paceSec.value, 10);
    if (Number.isNaN(s)) s = 0;
    els.paceSec.value = String(clamp(s, 0, 59)).padStart(2, "0");
    onPaceInput();
  };

  els.paceMin.addEventListener("input", onPaceInput);
  els.paceSec.addEventListener("input", onPaceInput);
  els.paceMin.addEventListener("change", normalize);
  els.paceSec.addEventListener("change", normalize);
}

function bindRox() {
  const re = () => recalculate();
  [els.roxPerMin, els.roxPerSec, els.roxTotalMin, els.roxTotalSec].forEach((el) => {
    el.addEventListener("input", re);
    el.addEventListener("change", () => {
      if (el === els.roxPerSec || el === els.roxTotalSec) {
        let s = parseInt(el.value, 10);
        if (Number.isNaN(s)) s = 0;
        el.value = String(clamp(s, 0, 59)).padStart(2, "0");
      } else {
        el.value = clamp(parseInt(el.value, 10) || 0, 0, 99);
      }
      re();
    });
  });

  els.roxModeBtns.forEach((btn) => {
    btn.addEventListener("click", () => setRoxMode(btn.dataset.mode));
  });
}

// --- Init -------------------------------------------------------------------

function refreshAllUi() {
  buildStations();
  recalculate();
  buildGoalGrid();
  renderTargetGoal();
}

window.onLanguageChange = refreshAllUi;

function init() {
  initI18n();
  buildStations();
  bindPace();
  bindRox();
  els.resetStations.addEventListener("click", resetStationsToPace);

  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => setTab(tab.dataset.tab));
  });

  buildGoalGrid();
  renderTargetGoal();
  els.applyTargets.addEventListener("click", applyTargetsToCalculator);

  els.paceSec.value = String(clamp(parseInt(els.paceSec.value, 10) || 0, 0, 59)).padStart(2, "0");
  els.roxPerSec.value = String(clamp(parseInt(els.roxPerSec.value, 10) || 0, 0, 59)).padStart(2, "0");
  els.roxTotalSec.value = String(clamp(parseInt(els.roxTotalSec.value, 10) || 0, 0, 59)).padStart(2, "0");

  recalculate();
}

init();
