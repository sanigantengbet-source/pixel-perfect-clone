import { createFileRoute } from "@tanstack/react-router";
import { TerminalHeading } from "@/components/terminal-heading";
import { skillGroups, designPreferences } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — SANNDEC5TY" },
      {
        name: "description",
        content:
          "Stack teknis SANNDEC5TY: TypeScript, Next.js, React, TanStack Start, Tailwind, FastAPI, Firebase, Supabase, Vercel.",
      },
      { property: "og:title", content: "Skills — SANNDEC5TY" },
      {
        property: "og:description",
        content: "Frontend, backend, database, cloud, performa, keamanan, dan design system.",
      },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <div className="space-y-6">
      <TerminalHeading cmd="skills" title="TECHNICAL SKILLS" />

      <div className="space-y-6">
        {skillGroups.map((g) => (
          <section key={g.title} className="border-l-2 border-border pl-4">
            <h2 className="text-base font-bold">{g.title}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="chip">
                  {i}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="border-l-2 border-border pl-4">
          <h2 className="text-base font-bold">Design Preferences</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {designPreferences.map((d) => (
              <li key={d} className="chip">
                {d}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
