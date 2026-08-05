import { Github, Mail, Send, MessageCircle, Music2, ShoppingBag } from "lucide-react";
import { profile } from "@/data/portfolio";
import profileAsset from "@/assets/profile.jpg.asset.json";
import sfgAsset from "@/assets/sfg-logo.jpg.asset.json";

export function SiteHeader() {
  const actions = [
    { icon: Github, label: "GitHub", href: profile.links.github },
    { icon: Send, label: "Telegram", href: profile.links.telegram },
    { icon: MessageCircle, label: "WhatsApp Channel", href: profile.links.whatsapp },
    { icon: Music2, label: "TikTok", href: profile.links.tiktok },
    { icon: ShoppingBag, label: "Premium Code", href: profile.links.premium },
    { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={profileAsset.url}
            alt="Foto profil SANNDEC5TY"
            loading="eager"
            className="size-11 shrink-0 rounded-full border border-border object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight">{profile.name}</div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <img
                src={sfgAsset.url}
                alt="Logo SANN404 FORUM GROUP"
                loading="lazy"
                className="size-4 rounded-sm bg-foreground/90 object-contain"
              />
              <span>{profile.role}</span>
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-1.5">
          {actions.slice(0, 4).map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-muted-foreground hover:text-foreground"
            >
              <Icon className="size-[17px]" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
