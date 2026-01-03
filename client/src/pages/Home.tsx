import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, Send } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * $ARREST - Diplomatic Immunity Revoked
 * 
 * Design System: Retro Wanted Poster + Neon Cyberpunk Fusion
 * - Black background with neon yellow, orange, cyan, and red accents
 * - Monospace typography with bold display fonts
 * - Glitch effects, neon glows, and chaotic energy
 * - Asymmetric layout with diagonal cuts and floating elements
 * - Mugshot frames, WANTED stamps, caution tape dividers
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-yellow-300 overflow-x-hidden">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black border-b-2 border-yellow-300 shadow-lg shadow-yellow-300/50"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border-2 border-yellow-300 flex items-center justify-center">
              <span className="text-xs font-bold text-yellow-300">$ARREST</span>
            </div>
          </div>
          <div className="hidden md:flex gap-6">
            <a
              href="#about"
              className="text-yellow-300 hover:text-orange-500 transition-colors font-mono text-sm uppercase tracking-widest"
            >
              About
            </a>
            <a
              href="#community"
              className="text-yellow-300 hover:text-orange-500 transition-colors font-mono text-sm uppercase tracking-widest"
            >
              Community
            </a>
            <a
              href="#disclaimer"
              className="text-yellow-300 hover:text-orange-500 transition-colors font-mono text-sm uppercase tracking-widest"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background with mugshot aesthetic */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/hero-mugshot-bg.png')",
          }}
        />

        {/* Diagonal cut effect */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-600/20 to-transparent"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 30% 0)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Logo/Mugshot Frame */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Mugshot frame */}
                <div className="border-4 border-yellow-300 p-4 bg-black/80 shadow-2xl shadow-yellow-300/50">
                  <img
                    src="/images/arrest-logo.png"
                    alt="$ARREST Logo"
                    className="w-full h-auto max-w-xs"
                  />
                  {/* Measurement grid overlay */}
                  <div className="absolute inset-0 border-2 border-yellow-300/20 pointer-events-none">
                    <div className="grid grid-cols-3 grid-rows-3 h-full">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="border border-yellow-300/10"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* WANTED stamp */}
                <div className="absolute -top-8 -right-8 stamp-rotate">
                  <div className="border-4 border-red-600 px-4 py-2 bg-red-600 text-yellow-300 font-bold text-2xl rotate-12 shadow-lg shadow-red-600/50">
                    WANTED
                  </div>
                </div>

                {/* Chains decoration */}
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-orange-500 text-3xl opacity-60">
                  ⛓️
                </div>
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-orange-500 text-3xl opacity-60">
                  ⛓️
                </div>
              </div>
            </div>

            {/* Right: Headline and CTA */}
            <div className="space-y-6">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="display-xl neon-glow-yellow">
                  DIPLOMATIC<br />
                  IMMUNITY:<br />
                  REVOKED.
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl font-mono text-cyan-300 leading-relaxed">
                  Elon said "Arrest him". The internet did the rest.
                </p>

                {/* Token Ticker */}
                <div className="border-2 border-yellow-300 p-4 bg-black/50 inline-block">
                  <p className="text-xs text-orange-500 uppercase tracking-widest mb-1">
                    Token Ticker
                  </p>
                  <p className="text-3xl font-bold text-yellow-300 neon-glow-yellow">
                    $ARREST
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  className="border-3 border-yellow-300 bg-yellow-300 text-black px-8 py-4 font-bold text-lg uppercase tracking-widest hover:bg-black hover:text-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-300/50 hover:shadow-yellow-300/80"
                  onClick={() => {
                    document.getElementById("community")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  JOIN THE MANHUNT
                </button>

                <button
                  className="border-3 border-orange-500 bg-transparent text-orange-500 px-8 py-4 font-bold text-lg uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-lg shadow-orange-500/50"
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  GET ARRESTED
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-yellow-300 text-2xl">↓</div>
        </div>
      </section>

      {/* Caution Tape Divider */}
      <div className="h-16 bg-repeat-x opacity-60" style={{
        backgroundImage: "url('/images/neon-glitch-divider.png')",
        backgroundSize: "auto 100%",
      }} />

      {/* About Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255, 255, 0, 0.1) 35px,
              rgba(255, 255, 0, 0.1) 70px
            )`,
          }} />
        </div>

        <div className="relative z-10 container max-w-4xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="display-lg neon-glow-orange mb-4">
              THE MEME NARRATIVE
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-yellow-300 to-orange-500" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-300 pl-6 py-4">
                <h3 className="headline text-yellow-300 mb-2">Early 2026</h3>
                <p className="body-text text-gray-300">
                  Internet chaos reaches peak levels. The digital realm trembles with meme energy.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 py-4">
                <h3 className="headline text-orange-500 mb-2">A Single Reply</h3>
                <p className="body-text text-gray-300">
                  One man. One post. Two words: "Arrest him." The internet collectively lost its mind.
                </p>
              </div>

              <div className="border-l-4 border-cyan-300 pl-6 py-4">
                <h3 className="headline text-cyan-300 mb-2">Moment of Chaos</h3>
                <p className="body-text text-gray-300">
                  So unhinged, so perfect, so inevitable—it had to become a meme coin.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Satire Notice */}
              <div className="border-2 border-red-600 bg-red-600/10 p-6">
                <div className="flex gap-3 mb-3">
                  <span className="text-red-600 text-2xl">⚠️</span>
                  <h4 className="headline text-red-600">SATIRE & MEME CULTURE</h4>
                </div>
                <p className="body-text text-gray-300">
                  This is pure satire and meme culture. Not a political movement. Just internet chaos distilled into a token.
                </p>
              </div>

              {/* Quote */}
              <div className="border-2 border-yellow-300 bg-yellow-300/5 p-6">
                <p className="text-xl font-bold text-yellow-300 mb-2">
                  "When diplomatic immunity ends, memes begin."
                </p>
                <p className="body-text text-gray-400 text-sm">
                  — The $ARREST Manifesto
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-orange-500 p-4 text-center">
                  <p className="text-3xl font-bold text-orange-500 neon-glow-orange">∞</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Chaos Energy</p>
                </div>
                <div className="border-2 border-cyan-300 p-4 text-center">
                  <p className="text-3xl font-bold text-cyan-300 neon-glow-cyan">100%</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Degen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caution Tape Divider */}
      <div className="h-16 bg-repeat-x opacity-60" style={{
        backgroundImage: "url('/images/neon-glitch-divider.png')",
        backgroundSize: "auto 100%",
      }} />

      {/* Tweet Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Diagonal background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-transparent"
          style={{
            clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
          }}
        />

        <div className="relative z-10 container max-w-4xl mx-auto px-4">
          <h2 className="display-lg neon-glow-yellow mb-12">
            THE ORIGINAL ARTIFACT
          </h2>

          {/* Tweet Embed Container */}
          <div className="border-4 border-yellow-300 bg-black/80 p-8 shadow-2xl shadow-yellow-300/50">
            <div className="mb-4">
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
                The tweet that started the arrest era
              </p>
            </div>

            {/* Tweet Embed */}
            <div className="bg-black/50 border-2 border-yellow-300/30 p-6 rounded-none">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 border-2 border-yellow-300 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-bold text-yellow-300">Elon Musk</p>
                    <span className="text-gray-500">@elonmusk</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Arrest him
                  </p>
                  <div className="flex gap-4 text-gray-500 text-sm">
                    <span>💬 Reply</span>
                    <span>🔄 Repost</span>
                    <span>❤️ Like</span>
                    <span>📤 Share</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Link to Tweet */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://x.com/elonmusk/status/2007130009602019784"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-yellow-300 transition-colors font-mono text-sm uppercase tracking-widest border-b-2 border-cyan-300 hover:border-yellow-300"
              >
                View Original Tweet
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Caution Tape Divider */}
      <div className="h-16 bg-repeat-x opacity-60" style={{
        backgroundImage: "url('/images/neon-glitch-divider.png')",
        backgroundSize: "auto 100%",
      }} />

      {/* Community Section */}
      <section id="community" className="relative py-20 overflow-hidden">
        <div className="relative z-10 container max-w-4xl mx-auto px-4">
          <h2 className="display-lg neon-glow-cyan mb-12">
            THE JAIL IS OPEN
          </h2>

          {/* Community Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Telegram */}
            <a
              href="https://t.me/arrest_meme"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-3 border-cyan-300 bg-black/50 p-8 hover:bg-cyan-300/10 transition-all duration-300 shadow-lg shadow-cyan-300/50 hover:shadow-cyan-300/80"
            >
              <div className="flex items-center gap-4 mb-4">
                <Send size={32} className="text-cyan-300 group-hover:text-yellow-300 transition-colors" />
                <h3 className="headline text-cyan-300 group-hover:text-yellow-300 transition-colors">
                  TELEGRAM
                </h3>
              </div>
              <p className="body-text text-gray-300 mb-4">
                Join the global cell. Connect with fellow inmates.
              </p>
              <p className="text-sm text-cyan-300 uppercase tracking-widest">
                t.me/arrest_meme →
              </p>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/arrest_meme"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-3 border-orange-500 bg-black/50 p-8 hover:bg-orange-500/10 transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/80"
            >
              <div className="flex items-center gap-4 mb-4">
                <Twitter size={32} className="text-orange-500 group-hover:text-yellow-300 transition-colors" />
                <h3 className="headline text-orange-500 group-hover:text-yellow-300 transition-colors">
                  X (TWITTER)
                </h3>
              </div>
              <p className="body-text text-gray-300 mb-4">
                Spread the chaos. Meme responsibly.
              </p>
              <p className="text-sm text-orange-500 uppercase tracking-widest">
                x.com/arrest_meme →
              </p>
            </a>
          </div>

          {/* Community Tagline */}
          <div className="border-4 border-yellow-300 bg-black/80 p-8 text-center">
            <p className="display-md neon-glow-yellow mb-4">
              THE CELL IS GLOBAL
            </p>
            <p className="body-text text-gray-300 text-lg">
              Join the inmates. No bail. No escape. Only arrest energy.
            </p>
          </div>
        </div>
      </section>

      {/* Caution Tape Divider */}
      <div className="h-16 bg-repeat-x opacity-60" style={{
        backgroundImage: "url('/images/neon-glitch-divider.png')",
        backgroundSize: "auto 100%",
      }} />

      {/* Disclaimer Section */}
      <section id="disclaimer" className="relative py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 35px,
              rgba(255, 0, 0, 0.1) 35px,
              rgba(255, 0, 0, 0.1) 70px
            )`,
          }} />
        </div>

        <div className="relative z-10 container max-w-4xl mx-auto px-4">
          <div className="border-4 border-red-600 bg-red-600/5 p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">⚠️</span>
              <h2 className="display-md text-red-600">DISCLAIMER</h2>
            </div>

            <div className="space-y-4 body-text text-gray-300">
              <p>
                <span className="text-yellow-300 font-bold">This is a meme coin.</span> No utility. No roadmap. Only arrest energy.
              </p>

              <p>
                <span className="text-yellow-300 font-bold">If you're here for fundamentals, you're already under arrest.</span> This is pure satire and internet culture. Not financial advice. Not a serious project.
              </p>

              <p>
                <span className="text-yellow-300 font-bold">Crypto is risky.</span> You can lose everything. Don't invest more than you can afford to lose. This is entertainment, not investment.
              </p>

              <p className="text-xs text-gray-500 uppercase tracking-widest pt-4 border-t border-red-600/30">
                $ARREST is a meme token inspired by internet culture. It is not affiliated with any real person or organization. Use at your own risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t-2 border-yellow-300/30">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <p className="body-text text-gray-400 mb-4">
            $ARREST — Diplomatic Immunity Revoked
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Made by degens, for degens. 2026.
          </p>
        </div>
      </footer>

      {/* Floating glitch elements */}
      <div className="fixed bottom-8 right-8 text-4xl opacity-20 animate-pulse pointer-events-none">
        ⛓️
      </div>
      <div className="fixed top-1/3 left-8 text-4xl opacity-20 animate-pulse pointer-events-none">
        🔒
      </div>
    </div>
  );
}
