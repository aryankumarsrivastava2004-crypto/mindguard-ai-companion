import { useState } from "react";
import { Activity, Moon, MessageSquare, Keyboard, Shield, Zap, Music, BellOff, Monitor, Heart, Wind, Footprints, Brain, Smile, TreePine } from "lucide-react";

const DashboardSection = () => {
  const [stressed, setStressed] = useState(false);

  const burnout = stressed ? 85 : 20;
  const burnoutColor = stressed ? "bg-neon-orange" : "bg-neon-green";
  const burnoutGlow = stressed ? "shadow-[0_0_20px_hsl(25_95%_53%/0.4)]" : "shadow-[0_0_20px_hsl(142_71%_45%/0.3)]";

  const metrics = stressed
    ? [
        { icon: Keyboard, label: "Typing Errors", value: "Increased by 40%", alert: true },
        { icon: Moon, label: "Sleep Pattern", value: "Late-night activity detected", alert: true },
        { icon: MessageSquare, label: "Social Interaction", value: "Reduced significantly", alert: true },
        { icon: Activity, label: "App Usage", value: "Doom-scrolling detected", alert: true },
      ]
    : [
        { icon: Keyboard, label: "Typing Speed", value: "Normal", alert: false },
        { icon: Moon, label: "Sleep", value: "7.5 hrs", alert: false },
        { icon: MessageSquare, label: "Social App Usage", value: "Stable", alert: false },
        { icon: Activity, label: "Activity Level", value: "Healthy", alert: false },
      ];

  return (
    <section id="dashboard" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-mono text-primary uppercase tracking-widest">Interactive Demo</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">Live Dashboard</h2>
          <p className="text-muted-foreground mt-4">See MindGuard's AI engine in action. Click to simulate a stress pattern.</p>
        </div>

        {/* Dashboard container */}
        <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-foreground">MindGuard Console</span>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono ${stressed ? "bg-neon-orange/10 text-neon-orange" : "bg-neon-green/10 text-neon-green"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${stressed ? "bg-neon-orange animate-pulse" : "bg-neon-green"}`} />
                {stressed ? "Alert" : "Monitoring"}
              </span>
            </div>
            <button
              onClick={() => setStressed(!stressed)}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                stressed
                  ? "bg-neon-green/10 text-neon-green border border-neon-green/30 hover:bg-neon-green/20"
                  : "bg-neon-orange/10 text-neon-orange border border-neon-orange/30 hover:bg-neon-orange/20"
              }`}
            >
              {stressed ? "Reset to Normal" : "⚡ Simulate Stress Pattern"}
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Burnout Score */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">Burnout Risk Score</span>
                <span className={`text-3xl font-bold font-mono transition-all duration-700 ${stressed ? "text-neon-orange" : "text-neon-green"}`}>
                  {burnout}%
                </span>
              </div>
              <div className="h-4 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full rounded-full ${burnoutColor} ${burnoutGlow} transition-all duration-1000 ease-out`}
                  style={{ width: `${burnout}%` }}
                />
              </div>
              <p className={`text-sm mt-2 font-mono ${stressed ? "text-neon-orange" : "text-neon-green"}`}>
                {stressed ? "⚠ Elevated stress pattern detected" : "✓ User is healthy"}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className={`rounded-xl border p-4 transition-all duration-500 ${
                    m.alert ? "border-neon-orange/30 bg-neon-orange/5" : "border-border bg-secondary/30"
                  }`}
                >
                  <m.icon className={`w-5 h-5 mb-2 ${m.alert ? "text-neon-orange" : "text-primary"}`} />
                  <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                  <p className={`text-sm font-semibold ${m.alert ? "text-neon-orange" : "text-foreground"}`}>{m.value}</p>
                </div>
              ))}
            </div>

            {/* Intervention Alert */}
            {stressed && (
              <div className="animate-pop-in rounded-xl border border-primary/30 bg-primary/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Intervention Triggered</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: Monitor, text: "Phone UI switched to Dark Mode" },
                    { icon: BellOff, text: "Non-essential notifications muted" },
                    { icon: Music, text: "Calming playlist queued" },
                  ].map((a) => (
                    <div key={a.text} className="flex items-start gap-3 rounded-lg bg-card/50 p-3 border border-border">
                      <a.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{a.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wellness Suggestions — shown when score > 50% */}
            {stressed && (
              <div className="animate-pop-in rounded-xl border border-accent/30 bg-accent/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-accent">Suggested Wellness Activities</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Wind, title: "Box Breathing", desc: "4s inhale → 4s hold → 4s exhale → 4s hold. Repeat 4 cycles." },
                    { icon: Footprints, title: "5-Min Walk", desc: "A short walk outside can reduce cortisol by up to 25%." },
                    { icon: Brain, title: "Body Scan", desc: "Progressive muscle relaxation from toes to head, 3 minutes." },
                    { icon: Smile, title: "Gratitude Pause", desc: "Write down 3 things you're grateful for right now." },
                    { icon: TreePine, title: "Nature Break", desc: "Step outside and focus on natural sounds for 2 minutes." },
                    { icon: Activity, title: "Desk Stretches", desc: "Neck rolls, shoulder shrugs, and wrist circles for relief." },
                  ].map((s) => (
                    <div key={s.title} className="flex items-start gap-3 rounded-lg bg-card/50 p-4 border border-border hover:border-accent/40 transition-colors">
                      <s.icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{s.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
