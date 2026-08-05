import { createFileRoute } from "@tanstack/react-router";
import { TerminalHeading } from "@/components/terminal-heading";
import { aboutParagraphs, highlights, profile } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SANNDEC5TY" },
      {
        name: "description",
        content:
          "Cerita SANNDEC5TY: lulusan 2026 jurusan IPS, developer otodidak, dan founder SANN404 FORUM.",
      },
      { property: "og:title", content: "About — SANNDEC5TY" },
      {
        property: "og:description",
        content: "Lulusan 2026, developer otodidak, dan founder SANN404 FORUM.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="space-y-6">
      <TerminalHeading cmd="about" title="ABOUT ME" />

      <p className="text-lg">
        Hey, I&apos;m <strong className="font-bold">{profile.name}</strong>.
      </p>

      {aboutParagraphs.map((p) => (
        <p key={p.slice(0, 24)} className="text-sm leading-7 text-foreground/90">
          {p}
        </p>
      ))}

      <ul className="space-y-2 pt-2">
        {highlights.map((h) => (
          <li key={h} className="chip w-full">
            <span className="mr-2 text-muted-foreground">&gt;</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
