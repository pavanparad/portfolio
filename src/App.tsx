import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collaborations } from './components/Collaborations';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundElements } from './components/BackgroundElements';

export const App: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    return localStorage.getItem('mpc_sound') === 'true';
  });

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem('mpc_sound', String(next));
  };

  // Web Audio subtle click synthesizer
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // AudioContext policy handled gracefully
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#DCCBFA] selection:text-[#17151D] text-[#17151D] font-sans antialiased overflow-x-hidden">
      {/* 1. Custom Pixel / Editorial Reticle Cursor */}
      <CustomCursor />

      {/* 2. Ambient Lavender & Grid Background Elements */}
      <BackgroundElements />

      {/* 3. Floating Navbar */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        playClickSound={playClickSound}
      />

      {/* 4. Main Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Section 01: Hero / Introduction */}
        <Hero playClickSound={playClickSound} />

        {/* Section 02: Brands & Collaborations */}
        <Collaborations playClickSound={playClickSound} />

        {/* Section 03: Selected Work — The Main Portfolio */}
        <Projects playClickSound={playClickSound} />

        {/* Section 04: About Me — Behind the Frame */}
        <About playClickSound={playClickSound} />

        {/* Section 05: Experience & Creative Journey */}
        <Experience playClickSound={playClickSound} />

        {/* Section 06: Software & Creative Skills */}
        <Skills playClickSound={playClickSound} />

        {/* Section 07: Contact */}
        <Contact playClickSound={playClickSound} />
      </main>

      {/* 5. Footer */}
      <Footer playClickSound={playClickSound} />
    </div>
  );
};

export default App;
