import { Brain, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 mb-8 animate-slide-up">
          <Brain className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono text-primary">Neural Engine v2.4 Active</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">MindGuard</span>
          <br />
          <span className="text-primary text-glow-blue">AI-Powered Silent</span>
          <br />
          <span className="text-foreground">Mental Health Companion</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up font-light" style={{ animationDelay: "0.2s" }}>
          We don't wait for people to ask for help.{" "}
          <span className="text-foreground font-medium">MindGuard understands when they can't.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <button
            onClick={scrollToDemo}
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-blue hover:brightness-110 transition-all duration-300 hover:scale-105"
          >
            View Live Demo
          </button>
          <button className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-16 animate-float">
          <ChevronDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
