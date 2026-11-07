import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Instagram, Linkedin, Send, Copy, Check, Sparkles, ArrowUpRight, MessageSquare, Clock, MapPin } from 'lucide-react';
import { DashedBoundingBox } from './DashedBoundingBox';

interface ContactProps {
  playClickSound?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ playClickSound }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Event Film',
    timeline: 'Within 2-4 weeks',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'mr.pavancreation@gmail.com';
  const instagramUrl = 'https://www.instagram.com/mr.pavancreation';
  const linkedinUrl = 'https://www.linkedin.com/in/pavan-creation';

  const handleCopyEmail = () => {
    playClickSound?.();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    // Confetti burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#A88BEA', '#DCCBFA', '#6C41CE', '#FFFFFF'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share a brief description of your project (min 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound?.();

    if (!validate()) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#6C41CE', '#A88BEA', '#DCCBFA', '#17151D'],
    });

    setSubmitted(true);

    // Construct pre-filled mailto link so user's message is immediately deliverable
    const subject = encodeURIComponent(`Project Enquiry: ${formData.projectType} — from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Pavan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nEstimated Timeline: ${formData.timeline}\n\nProject Details:\n${formData.message}\n\nSent via mr-pavan-creation portfolio inquiry form.`
    );
    
    // Open mailto link
    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#DCCBFA]/70 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-wider font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              START A CONVERSATION
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-7xl text-[#17151D] tracking-tight leading-[1.02]">
              HAVE A STORY? <br />
              <span className="font-serif italic font-normal text-[#6C41CE]">Let's Create It.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#77717F] max-w-md leading-relaxed">
            Have a project, collaboration or creative idea in mind? Let's bring it to life with precision editing, cinematic grading, and viral retention.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Links & Fast Connect */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Fast Email Card with 1-Click Copy */}
            <div className="rounded-2xl glass-panel p-6 sm:p-7 border border-[#DCCBFA] bg-white/80 space-y-4 shadow-xs">
              <span className="text-[11px] font-mono tracking-widest text-[#77717F] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                DIRECT INBOX
              </span>

              <div className="space-y-1">
                <div className="font-mono text-sm sm:text-base font-bold text-[#17151D] break-all">
                  {emailAddress}
                </div>
                <div className="text-xs text-[#77717F]">
                  Typical response time: within 24 hours
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {/* 1-Click Copy Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EAE0FF] hover:bg-[#DCCBFA] text-[#6C41CE] text-xs font-mono font-semibold transition-colors"
                  data-cursor="COPY"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                {/* Mailto Launch */}
                <a
                  href={`mailto:${emailAddress}`}
                  onClick={playClickSound}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#17151D] text-[#F5F0FA] hover:bg-[#6C41CE] text-xs font-mono font-semibold transition-colors shadow-xs"
                  data-cursor="EMAIL"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>SEND AN EMAIL</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Channels Buttons */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-[#77717F] uppercase block px-1">
                CREATIVE NETWORKS
              </span>

              {/* Instagram Button */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="w-full flex items-center justify-between p-4 rounded-xl glass-panel border border-[#DCCBFA] hover:border-[#6C41CE] bg-white/70 hover:bg-[#F5F0FA] transition-all group shadow-2xs"
                data-cursor="INSTAGRAM"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAE0FF] flex items-center justify-center text-[#6C41CE] group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-xs font-bold text-[#17151D]">
                      INSTAGRAM
                    </span>
                    <span className="text-xs text-[#77717F]">@mr.pavancreation</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#77717F] group-hover:text-[#6C41CE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn Button */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="w-full flex items-center justify-between p-4 rounded-xl glass-panel border border-[#DCCBFA] hover:border-[#6C41CE] bg-white/70 hover:bg-[#F5F0FA] transition-all group shadow-2xs"
                data-cursor="LINKEDIN"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAE0FF] flex items-center justify-center text-[#6C41CE] group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-xs font-bold text-[#17151D]">
                      LINKEDIN
                    </span>
                    <span className="text-xs text-[#77717F]">Professional Network Profile</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#77717F] group-hover:text-[#6C41CE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Location & Availability Note */}
            <div className="p-4 rounded-xl bg-[#EAE0FF]/50 border border-[#DCCBFA] text-xs font-mono text-[#77717F] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#6C41CE]" />
                <span>PUNE, MAHARASHTRA, INDIA</span>
              </div>
              <span className="text-[#6C41CE] font-bold">OPEN TO TRAVEL</span>
            </div>

          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <DashedBoundingBox
              dimensions="PROJECT INQUIRY FORM"
              label="DISPATCH TIMELINE"
              className="w-full"
            >
              <div className="rounded-2xl glass-panel p-6 sm:p-9 border border-[#DCCBFA] bg-white/90 shadow-md">
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#EAE0FF] text-[#6C41CE] flex items-center justify-center mx-auto shadow-sm">
                      <Sparkles className="w-8 h-8 animate-pulse" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-[#17151D]">
                      INQUIRY READY & PRE-POPULATED
                    </h3>
                    <p className="text-sm text-[#77717F] font-sans max-w-md mx-auto leading-relaxed">
                      Your inquiry has been compiled and opened in your email client addressed to <strong className="text-[#6C41CE]">{emailAddress}</strong>. If your email client did not open automatically, click below to send directly.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <a
                        href={`mailto:${emailAddress}`}
                        className="px-6 py-3 rounded-full bg-[#17151D] text-[#F5F0FA] text-xs font-mono font-semibold tracking-wider hover:bg-[#6C41CE] transition-colors"
                      >
                        OPEN EMAIL CLIENT AGAIN
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', projectType: 'Event Film', timeline: 'Within 2-4 weeks', message: '' });
                        }}
                        className="px-6 py-3 rounded-full bg-white border border-[#DCCBFA] text-[#17151D] text-xs font-mono font-semibold tracking-wider hover:bg-[#EAE0FF] transition-colors"
                      >
                        RESET FORM
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-[#17151D] tracking-wider uppercase">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Turner"
                          className="w-full px-4 py-3 rounded-xl bg-[#F5F0FA] border border-[#DCCBFA] text-sm font-sans text-[#17151D] placeholder-[#77717F]/60 focus:outline-none focus:border-[#6C41CE] focus:ring-1 focus:ring-[#6C41CE] transition-all"
                        />
                        {errors.name && (
                          <span className="text-[11px] font-mono text-rose-600 block">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-[#17151D] tracking-wider uppercase">
                          YOUR EMAIL *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@studio.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#F5F0FA] border border-[#DCCBFA] text-sm font-sans text-[#17151D] placeholder-[#77717F]/60 focus:outline-none focus:border-[#6C41CE] focus:ring-1 focus:ring-[#6C41CE] transition-all"
                        />
                        {errors.email && (
                          <span className="text-[11px] font-mono text-rose-600 block">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Type & Timeline Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-[#17151D] tracking-wider uppercase">
                          PROJECT CATEGORY
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F5F0FA] border border-[#DCCBFA] text-sm font-sans text-[#17151D] focus:outline-none focus:border-[#6C41CE] focus:ring-1 focus:ring-[#6C41CE] transition-all cursor-pointer"
                        >
                          <option value="Event Film">01 — Event Film / Aftermovie</option>
                          <option value="Cinematic Reel">02 — Cinematic Reel (9:16)</option>
                          <option value="Promotional Video">03 — Promotional Video</option>
                          <option value="Social Media Series">04 — Social Media Series</option>
                          <option value="Motion Graphics">05 — Motion Graphics</option>
                          <option value="Other Creative Collab">06 — Other Creative Collab</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono font-semibold text-[#17151D] tracking-wider uppercase">
                          EXPECTED TIMELINE
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F5F0FA] border border-[#DCCBFA] text-sm font-sans text-[#17151D] focus:outline-none focus:border-[#6C41CE] focus:ring-1 focus:ring-[#6C41CE] transition-all cursor-pointer"
                        >
                          <option value="Immediate (Within 7 days)">Immediate (Within 7 days)</option>
                          <option value="Within 2-4 weeks">Within 2–4 weeks</option>
                          <option value="Next 1-2 months">Next 1–2 months</option>
                          <option value="Flexible / Exploring">Flexible / Exploring</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-semibold text-[#17151D] tracking-wider uppercase">
                        PROJECT BRIEF & VISION *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your footage, goals, deadlines, visual inspirations, or sound references..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F0FA] border border-[#DCCBFA] text-sm font-sans text-[#17151D] placeholder-[#77717F]/60 focus:outline-none focus:border-[#6C41CE] focus:ring-1 focus:ring-[#6C41CE] transition-all resize-none"
                      />
                      {errors.message && (
                        <span className="text-[11px] font-mono text-rose-600 block">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#17151D] text-[#F5F0FA] font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#6C41CE] transition-all duration-300 flex items-center justify-center gap-2 group shadow-md"
                      data-cursor="DISPATCH"
                    >
                      <span>TRANSMIT PROJECT ENQUIRY</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="text-center text-[11px] font-mono text-[#77717F]">
                      NO SPAM GUARANTEE • DIRECT ROUTE TO PAVAN'S INBOX
                    </div>

                  </form>
                )}

              </div>
            </DashedBoundingBox>
          </div>

        </div>

      </div>
    </section>
  );
};
