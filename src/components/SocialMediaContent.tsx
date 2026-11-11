import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_CATEGORY_TABS, SOCIAL_MEDIA_ITEMS } from '../data/socialMediaContent';
import { SocialCategoryKey, SocialMediaContentItem, ProjectReel } from '../types';
import { ReelCard } from './ReelCard';
import { VeloxxVideoPlayer } from './VeloxxVideoPlayer';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Check } from 'lucide-react';

interface SocialMediaContentProps {
  playClickSound?: () => void;
}

export const SocialMediaContent: React.FC<SocialMediaContentProps> = ({ playClickSound }) => {
  // Temporarily hide categories that do not yet have uploaded videos;
  // underlying category definitions & placeholder entries remain intact in data for future restoration.
  const visibleTabs = useMemo(
    () =>
      SOCIAL_CATEGORY_TABS.map((tab) => {
        const uploadedCount = SOCIAL_MEDIA_ITEMS.filter(
          (item) => item.category === tab.id && Boolean(item.videoUrl?.trim())
        ).length;
        return { ...tab, uploadedCount };
      }).filter((tab) => tab.uploadedCount > 0),
    []
  );

  const [activeCategory, setActiveCategory] = useState<SocialCategoryKey>(
    () => visibleTabs[0]?.id ?? 'creator-content'
  );
  const [selectedReel, setSelectedReel] = useState<ProjectReel | null>(null);
  const [selectedItem, setSelectedItem] = useState<SocialMediaContentItem | null>(null);

  const resolvedActiveCategory = visibleTabs.some((t) => t.id === activeCategory)
    ? activeCategory
    : (visibleTabs[0]?.id ?? 'creator-content');

  const filteredItems = SOCIAL_MEDIA_ITEMS.filter(
    (item) => item.category === resolvedActiveCategory && Boolean(item.videoUrl?.trim())
  );
  const activeTabMeta = visibleTabs.find((t) => t.id === resolvedActiveCategory);

  const handleCategoryChange = (cat: SocialCategoryKey) => {
    playClickSound?.();
    setActiveCategory(cat);
  };

  const handleSelectContent = (item: SocialMediaContentItem) => {
    playClickSound?.();
    setSelectedReel({
      id: item.id,
      title: item.title,
      label: item.categoryLabel,
      duration: item.duration,
      aspectRatio: '9:16',
      thumbnailUrl: item.thumbnailUrl,
      videoUrl: item.videoUrl,
      viewsPlaceholder: item.statusPlaceholder,
    });
    setSelectedItem(item);
  };

  return (
    <section id="social" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#F5F0FA] via-[#F6F1E9]/40 to-[#EFE7F9]/70 border-b border-[#DCCCF5]/60">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#6C41CE]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#C9A45C]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#DCCCF5]/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-widest font-semibold mb-4 border border-[#DCCCF5]">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              SOCIAL MEDIA CONTENT / 05
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#17151B] tracking-tight leading-[1.02]">
              CONTENT THAT <br />
              <span className="font-serif italic font-normal text-[#6C41CE] selection:bg-[#DCCCF5]">
                CONNECTS.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#17151B] text-[#C9A45C] text-[10px] font-mono tracking-widest font-bold">
              <span>✦</span>
              <span>BEYOND EVENT COVERAGE</span>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#575360] leading-relaxed">
              Demonstrating versatility across promotional films, high-retention talking heads, viral shorts, and boundary-pushing creative editing experiments.
            </p>
          </div>
        </div>

        {/* Category Filters Bar (shows only categories with uploaded video content) */}
        <div
          className={`mb-8 sm:mb-10 ${
            visibleTabs.length === 1
              ? 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'
              : ''
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {visibleTabs.map((tab) => {
              const isActive = resolvedActiveCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#17151B] text-[#C9A45C] shadow-lg border border-[#17151B]'
                      : 'bg-white/80 hover:bg-white text-[#575360] hover:text-[#17151B] border border-[#DCCCF5] shadow-xs'
                  }`}
                >
                  {isActive && <Check className="w-3.5 h-3.5 text-[#C9A45C]" />}
                  <span className="font-bold">{tab.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                      isActive ? 'bg-[#C9A45C] text-[#17151B] font-black' : 'bg-[#EFE7F9] text-[#6C41CE]'
                    }`}
                  >
                    {tab.uploadedCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description Banner */}
          {activeTabMeta && (
            <div
              key={resolvedActiveCategory}
              className={`${
                visibleTabs.length === 1 ? '' : 'mt-4'
              } px-4 py-2.5 rounded-2xl bg-white/80 border border-[#DCCCF5] inline-flex items-center gap-2.5 text-xs font-mono text-[#17151B] shadow-xs self-start sm:self-auto`}
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A45C] shrink-0" />
              <span className="font-bold tracking-wider uppercase">{activeTabMeta.description}</span>
            </div>
          )}
        </div>

        {/* Category Items Vertical 9:16 Video Gallery */}
        <AnimatePresence initial={false} mode="wait">
          {resolvedActiveCategory === 'creator-content' ? (
            <motion.div
              key="creator-content"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#17151B] border border-[#DCCCF5]/80 hover:border-[#C9A45C] transition-all duration-300 shadow-xl flex flex-col justify-between group/card"
                >
                  {/* 9:16 Native Video Player */}
                  <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black">
                    <VeloxxVideoPlayer
                      src={item.videoUrl || ''}
                      fallbackSrc={item.fallbackVideoUrl}
                      aspectRatio="9:16"
                      title={item.title}
                      subtitle="CREATOR CONTENT"
                      playClickSound={playClickSound}
                      className="w-full"
                    />
                  </div>

                  {/* Minimal Caption Label */}
                  <div className="pt-3 px-1 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] shrink-0" />
                      <h4 className="font-display font-black text-xs sm:text-sm text-white tracking-wider truncate">
                        {item.title}
                      </h4>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 rounded bg-[#2A2438] text-[#C9A45C] text-[10px] font-mono font-bold tracking-wider border border-[#C9A45C]/30">
                      9:16
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={resolvedActiveCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-3xl bg-white/90 backdrop-blur-md border border-[#DCCCF5] hover:border-[#C9A45C] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between"
                >
                  {/* 9:16 Reel Player Card */}
                  <div className="mb-4">
                    <ReelCard
                      reel={{
                        id: item.id,
                        title: item.title,
                        label: item.categoryLabel,
                        duration: item.duration,
                        aspectRatio: '9:16',
                        thumbnailUrl: item.thumbnailUrl,
                        videoUrl: item.videoUrl,
                        viewsPlaceholder: item.statusPlaceholder,
                      }}
                      accentColor="#8964DE"
                      onSelectReel={() => handleSelectContent(item)}
                      playClickSound={playClickSound}
                    />
                  </div>

                  {/* Description & Tags */}
                  <div className="space-y-3 pt-2">
                    <p className="font-sans text-xs text-[#575360] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EFE7F9] text-[#6C41CE] border border-[#DCCCF5]/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Reel Modal Preview */}
      {selectedReel && selectedItem && (
        <ProjectModal
          isOpen={Boolean(selectedReel)}
          onClose={() => {
            setSelectedReel(null);
            setSelectedItem(null);
          }}
          modalData={{
            title: selectedItem.title,
            category: selectedItem.categoryLabel,
            number: '05',
            year: '2026',
            client: 'MR. PAVAN CREATION',
            role: 'Video Editor & Motion Designer',
            duration: selectedItem.duration,
            aspectRatio: selectedItem.aspectRatio,
            thumbnailUrl: selectedItem.thumbnailUrl,
            videoUrl: selectedItem.videoUrl,
            description: selectedItem.description,
            highlights: selectedItem.tags.map((t) => `Engineered around ${t}`),
            tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
            viewsInfo: selectedItem.statusPlaceholder,
            socialUrl: 'https://instagram.com/pavanarts',
          }}
          playClickSound={playClickSound}
        />
      )}

    </section>
  );
};
