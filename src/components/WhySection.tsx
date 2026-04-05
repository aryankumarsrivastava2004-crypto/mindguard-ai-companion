import { AlertTriangle, Eye, ShieldOff, GraduationCap, Laptop, UserX } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Requires Active Input", desc: "Current apps need users to log moods — the people who need help most won't do it." },
  { icon: Eye, title: "Stigma & Visibility", desc: "Visible mental health apps on phones create shame and discourage consistent use." },
  { icon: ShieldOff, title: "Intrusive & Annoying", desc: "Pop-up reminders and surveys feel clinical, not human. Users uninstall within a week." },
];

const audiences = [
  { icon: GraduationCap, title: "Students", desc: "Academic pressure, isolation, and reluctance to seek campus counseling." },
  { icon: Laptop, title: "Remote Workers", desc: "Blurred boundaries, burnout, and lack of social cues from colleagues." },
  { icon: UserX, title: "Isolated Individuals", desc: "Elderly, displaced, or socially withdrawn — those with no one watching out for them." },
];

const WhySection = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-sm font-mono text-primary uppercase tracking-widest">The Problem</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">Why MindGuard?</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Current mental health apps are fundamentally broken. Here's why.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {problems.map((p) => (
          <div key={p.title} className="group rounded-xl border border-border bg-card p-6 hover:border-neon-red/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-neon-red/10 flex items-center justify-center mb-4">
              <p.icon className="w-6 h-6 text-neon-red" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <span className="text-sm font-mono text-accent uppercase tracking-widest">Target Audience</span>
        <h2 className="text-3xl font-bold mt-3 text-foreground">Who Needs MindGuard</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {audiences.map((a) => (
          <div key={a.title} className="group rounded-xl border border-border bg-card p-6 hover:border-glow-blue transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <a.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
