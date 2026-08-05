import { createFileRoute } from "@tanstack/react-router";
import { stats } from "@/data/portfolio";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Stats — SANNDEC5TY" },
      {
        name: "description",
        content:
          "Statistik komunitas dan produk digital SANNDEC5TY: pertumbuhan member, distribusi channel, dan produk terlaris.",
      },
      { property: "og:title", content: "Stats — SANNDEC5TY" },
      { property: "og:description", content: "Growth komunitas dan performa produk digital." },
    ],
  }),
  component: Stats,
});

function Donut() {
  const r = 60;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg viewBox="0 0 160 160" className="mx-auto size-44">
      {stats.distribution.map((d) => {
        const len = (d.pct / 100) * c;
        const el = (
          <circle
            key={d.name}
            cx="80"
            cy="80"
            r={r}
            fill="none"
            stroke={d.color}
            strokeWidth="16"
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-offset}
            transform="rotate(-90 80 80)"
          />
        );
        offset += len;
        return el;
      })}
      <text
        x="80"
        y="76"
        textAnchor="middle"
        className="fill-foreground text-[22px] font-bold"
      >
        3
      </text>
      <text
        x="80"
        y="94"
        textAnchor="middle"
        className="fill-muted-foreground text-[9px] tracking-[0.2em]"
      >
        CHANNELS
      </text>
    </svg>
  );
}

function Gauge() {
  const r = 46;
  const c = 2 * Math.PI * r;
  const pct = 0.82;
  return (
    <svg viewBox="0 0 120 120" className="mx-auto size-32">
      <circle cx="60" cy="60" r={r} fill="none" stroke="var(--border)" strokeWidth="8" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="var(--amber)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${c * pct} ${c}`}
        transform="rotate(-90 60 60)"
      />
      <text x="60" y="60" textAnchor="middle" className="fill-foreground text-[24px] font-bold">
        82
      </text>
      <text
        x="60"
        y="74"
        textAnchor="middle"
        className="fill-amber text-[8px] tracking-[0.2em]"
      >
        ACTIVE
      </text>
    </svg>
  );
}

function GrowthChart() {
  const data = stats.growth;
  const w = 320;
  const h = 140;
  const max = Math.max(...data.map((d) => d.v));
  const pts: [number, number][] = data.map((d, i) => [
    (i / (data.length - 1)) * (w - 24) + 12,
    h - 24 - (d.v / max) * (h - 48),
  ]);
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
  const last = pts[pts.length - 1]!;
  const first = pts[0]!;
  const area = `${line} L${last[0]},${h - 12} L${first[0]},${h - 12} Z`;

  return (
    <div className="panel panel-hover p-3">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
        <defs>
          <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--success)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--success)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="12"
            x2={w - 12}
            y1={20 + i * ((h - 44) / 3)}
            y2={20 + i * ((h - 44) / 3)}
            stroke="var(--border)"
            strokeWidth="1"
          />
        ))}
        <path d={area} fill="url(#growthFill)" />
        <path
          d={line}
          fill="none"
          stroke="var(--success)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: 0,
            animation: "growthDraw 1.4s cubic-bezier(0.22,1,0.36,1) both",
          }}
        />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="var(--success)" />
        ))}
        {data.map((d, i) => (
          <text
            key={d.m}
            x={pts[i]![0]}
            y={h - 2}
            textAnchor="middle"
            className="fill-muted-foreground text-[8px] tracking-[0.15em]"
          >
            {d.m}
          </text>
        ))}
      </svg>
      <style>{`@keyframes growthDraw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`}</style>
    </div>
  );
}

function ActivityBars() {
  return (
    <ul className="space-y-3">
      {stats.activity.map((a) => (
        <li key={a.label} className="space-y-1">
          <div className="flex items-center justify-between text-xs tracking-[0.12em] text-muted-foreground">
            <span>{a.label}</span>
            <span className="text-foreground">{a.pct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-amber transition-all duration-700"
              style={{ width: `${a.pct}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function Stats() {
  return (
    <div className="space-y-8 pt-6">
      <section className="space-y-4">
        <h2 className="text-xs tracking-[0.2em] text-muted-foreground">COMMUNITY</h2>
        <Gauge />
        <p className="text-center text-sm tracking-[0.2em] text-muted-foreground">ENGAGEMENT</p>
        <div className="grid grid-cols-2 gap-3">
          {stats.community.map((s) => (
            <div key={s.label} className="panel panel-hover p-4">
              <div className="text-xs tracking-[0.15em] text-muted-foreground">{s.label}</div>
              <div className="mt-1 text-3xl font-bold text-amber">
                {s.value}
                <span className="text-base">{s.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs tracking-[0.2em] text-muted-foreground">MEMBER GROWTH</h2>
        <GrowthChart />
      </section>

      <section className="space-y-3">
        <h2 className="text-xs tracking-[0.2em] text-muted-foreground">ACTIVITY</h2>
        <ActivityBars />
      </section>


      <section className="space-y-4">
        <h2 className="text-xs tracking-[0.2em] text-muted-foreground">PRODUCTS</h2>
        <div className="grid grid-cols-3 gap-3">
          {stats.products.map((p) => (
            <div key={p.label} className="panel p-3 text-center">
              <div className="text-[10px] tracking-[0.12em] text-muted-foreground">{p.label}</div>
              <div className="mt-1 text-xl font-bold text-success">{p.value}</div>
            </div>
          ))}
        </div>
        <Donut />
        <ul className="space-y-1">
          {stats.distribution.map((d) => (
            <li key={d.name} className="flex items-center justify-center gap-2 text-sm">
              <span className="size-2.5 rounded-full" style={{ background: d.color }} />
              <span className="text-muted-foreground">{d.name}</span>
              <strong className="font-bold">{d.pct}%</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xs tracking-[0.2em] text-muted-foreground">TOP PRODUCTS</h2>
        <ul>
          {stats.topProducts.map((p) => (
            <li
              key={p.name}
              className="flex items-center justify-between border-b border-border py-3 text-sm"
            >
              <span className="font-bold">{p.name}</span>
              <span className="flex items-center gap-4">
                <span className="text-muted-foreground">{p.share}</span>
                <span className="text-success">{p.delta}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
