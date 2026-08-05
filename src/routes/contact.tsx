import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Send, MessageCircle, ShoppingBag, Music2, Gift } from "lucide-react";
import { TerminalHeading } from "@/components/terminal-heading";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SANNDEC5TY" },
      {
        name: "description",
        content:
          "Hubungi SANNDEC5TY lewat email, Telegram, saluran WhatsApp, GitHub, TikTok, atau ambil source code premium & gratis.",
      },
      { property: "og:title", content: "Contact — SANNDEC5TY" },
      {
        property: "og:description",
        content: "Email, Telegram, saluran WhatsApp, GitHub, TikTok, premium & free code.",
      },
    ],
  }),
  component: Contact,
});

const rows = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: "GitHub", value: "github.com/sannnproject", href: profile.links.github },
  { icon: MessageCircle, label: "Saluran WA", value: "SANN404 FORUM GROUP", href: profile.links.whatsapp },
  { icon: Send, label: "Telegram", value: "t.me/sannnforums", href: profile.links.telegram },
  { icon: Music2, label: "TikTok", value: "@sannforums", href: profile.links.tiktok },
  { icon: ShoppingBag, label: "Premium Code", value: "lynk.id/sannnx", href: profile.links.premium },
  { icon: Gift, label: "Free Code", value: "tempel.in/view/u2aQkq", href: profile.links.free },
];


function Contact() {
  return (
    <div className="space-y-6">
      <TerminalHeading cmd="contact" title="CONTACT" />

      <p className="text-lg">Want to work together? Let&apos;s connect.</p>

      <ul className="space-y-3">
        {rows.map(({ icon: Icon, label, value, href }) => {
          const inner = (
            <>
              <Icon className="size-5 shrink-0 text-muted-foreground" />
              <span className="w-24 shrink-0 text-sm text-muted-foreground">{label}</span>
              <span className="text-sm break-all">{value}</span>
            </>
          );
          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="panel flex items-center gap-3 p-4 transition-colors hover:border-muted-foreground"
                >
                  {inner}
                </a>
              ) : (
                <div className="panel flex items-center gap-3 p-4">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
