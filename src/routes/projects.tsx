import { createFileRoute } from "@tanstack/react-router";
import { TerminalHeading } from "@/components/terminal-heading";
import { projects, products } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — SANNDEC5TY" },
      {
        name: "description",
        content:
          "Kumpulan proyek dan source code: platform streaming, Sanexus AI Search, MEDIA-DOWNLOADER, SHARELOK, WishlistKU, dan lainnya.",
      },
      { property: "og:title", content: "Projects — SANNDEC5TY" },
      {
        property: "og:description",
        content: "Platform streaming, AI search, downloader, tools developer, dan produk digital.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="space-y-6">
      <TerminalHeading cmd="projects" title="FEATURED PROJECTS" />

      <div className="space-y-4">
        {projects.map((p) => (
          <article key={p.no} className="panel panel-hover space-y-3 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">{p.no}</span>
              <h2 className="text-lg font-bold">{p.name}</h2>
            </div>
            <p className="text-sm text-muted-foreground">{p.tagline}</p>
            <p className="text-sm leading-7 text-foreground/90">{p.desc}</p>
            <ul className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="chip text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-bold">
          <span className="text-muted-foreground">{"> "}</span>Source Code Terjual
        </h2>
        <ul className="flex flex-wrap gap-2">
          {products.map((p) => (
            <li key={p} className="chip">
              {p}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
