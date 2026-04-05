import { Brain, EyeOff, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Behavioral AI Engine",
    desc: "Passively tracks typing speed, app usage patterns, and sleep cycles to build a real-time emotional profile — no surveys, no input needed.",
    color: "primary",
    glow: "glow-blue",
  },
  {
    icon: EyeOff,
    title: "Invisible Intervention System",
    desc: "Instead of annoying alerts, MindGuard subtly adjusts your phone: dark mode, muted notifications, curated calming playlists. You won't even notice — but you'll feel it.",
    color: "accent",
    glow: "glow-purple",
  },
  {
    icon: Lock,
    title: "Privacy-First AI Vault",
    desc: "On-device Edge AI processes everything locally. Zero cloud uploads. Zero data leaks.",
    color: "neon-green",
    glow: "glow-green",
    quote: "Your mental health data is yours — not even we can see it.",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30" },
  "neon-green": { bg: "bg-neon-green/10", text: "text-neon-green", border: "border-neon-green/30" },
};

const FeaturesSection = () => (
  <section className="py-24 px-6 relative">
    <div className="absolute inset-0 bg-grid opacity-50" />
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-sm font-mono text-primary uppercase tracking-widest">Core Technology</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">3 Judge-Wow Features</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => {
          const c = colorMap[f.color];
          return (
            <div key={f.title} className={`rounded-xl border border-border bg-card p-8 hover:${c.border} transition-all duration-300 hover:-translate-y-2 group`}>
              <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mb-6 group-hover:${f.glow} transition-shadow duration-300`}>
                <f.icon className={`w-7 h-7 ${c.text}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{f.desc}</p>
              {f.quote && (
                <blockquote className={`border-l-2 ${c.border} pl-4 italic text-sm ${c.text}`}>
                  "{f.quote}"
                </blockquote>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
