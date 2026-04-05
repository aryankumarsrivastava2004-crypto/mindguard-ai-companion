import { useState } from "react";
import { Brain, Send } from "lucide-react";

const techStack = ["React", "Node.js", "TensorFlow Lite", "Polygon Blockchain"];

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-foreground">MindGuard</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              AI-powered silent mental health companion. Protecting minds without intrusion.
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-mono text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">Get notified when MindGuard launches.</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm glow-blue hover:brightness-110 transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
            {submitted && (
              <p className="text-neon-green text-sm mt-2 animate-pop-in">✓ You're on the list!</p>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-xs">© 2026 MindGuard. All rights reserved. Built with conviction.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
