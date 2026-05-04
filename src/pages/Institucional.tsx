import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const MVVTabs = ({ t }: { t: any }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const tabs = [
    { id: 'mission', label: t.mvv.mission.title },
    { id: 'vision', label: t.mvv.vision.title },
    { id: 'values', label: t.mvv.values.title },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 text-xl md:text-4xl font-black uppercase tracking-tighter transition-all relative ${
              activeTab === tab.id ? 'text-brand-yellow scale-105' : 'text-white/30 hover:text-white/60'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTab" 
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-brand-yellow"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-md p-8 md:p-16 border border-white/10 shadow-2xl min-h-[400px] flex items-center justify-center text-center"
        >
          {activeTab === 'mission' && (
            <p className="text-xl md:text-3xl font-light leading-relaxed max-w-3xl italic text-white/90">
              "{t.mvv.mission.text}"
            </p>
          )}
          {activeTab === 'vision' && (
            <p className="text-xl md:text-3xl font-light leading-relaxed max-w-3xl italic text-white/90">
              "{t.mvv.vision.text}"
            </p>
          )}
          {activeTab === 'values' && (
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 text-left w-full h-full overflow-y-auto max-h-[600px] pr-4 custom-scrollbar">
              {t.mvv.values.items.map((val: any, idx: number) => (
                <div key={idx} className="space-y-2 border-l-2 border-brand-yellow/30 pl-6">
                  <h4 className="text-brand-yellow font-black uppercase text-base tracking-widest">{val.bold}</h4>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">{val.text}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Timeline = ({ t }: { t: any }) => {
  return (
    <div className="mb-32">
      <ScrollReveal className="text-center mb-16 md:mb-24">
        <span className="text-brand-yellow font-black tracking-[0.4em] text-xs md:text-sm mb-4 block uppercase leading-none">Nossa Evolução</span>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">{t.mvv.trajectory.title}</h2>
        <div className="w-24 h-2 bg-brand-yellow mx-auto mt-8"></div>
        <p className="mt-8 text-white/60 max-w-2xl mx-auto text-lg">{t.mvv.trajectory.subtitle}</p>
      </ScrollReveal>

      {/* Timeline Desktop */}
      <div className="relative pt-32 pb-12 hidden lg:block">
        {/* Main Line */}
        <div className="absolute top-[124px] left-0 w-full h-1 bg-white/20"></div>
        
        <div className="grid grid-cols-3 gap-8 px-4">
          {t.mvv.trajectory.items.map((item: any, idx: number) => (
            <ScrollReveal key={idx} delay={idx * 0.2}>
              <div className="relative">
                {/* Year and Marker */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <span className="text-2xl font-black text-brand-yellow mb-2">{item.year}</span>
                  <div className="w-6 h-6 rounded-full bg-brand-black border-4 border-brand-yellow z-10 box-content"></div>
                  {/* Subtle Pointer up to marker from card */}
                  <div className="h-48 w-px bg-brand-yellow/30 mt-2"></div>
                </div>
 
                {/* Card */}
                <div className="mt-64 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm shadow-xl transition-all hover:border-brand-yellow/50 group">
                  <div className="p-2">
                    <h3 className="text-brand-yellow font-black text-lg uppercase tracking-tight mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {item.text}
                    </p>
                    {item.footer && (
                      <p className="text-brand-yellow font-bold text-xs mt-6 pt-4 border-t border-white/10 uppercase tracking-widest text-center">
                        {item.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Timeline Mobile/Tablet */}
      <div className="flex flex-col gap-12 lg:hidden">
        {t.mvv.trajectory.items.map((item: any, idx: number) => (
          <ScrollReveal key={idx}>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-brand-yellow flex items-center justify-center font-black text-brand-yellow text-xs shrink-0">
                  {item.year.split(' ')[0]}
                </div>
                {idx !== t.mvv.trajectory.items.length - 1 && (
                  <div className="w-px h-full bg-brand-yellow/30 mt-2"></div>
                )}
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm flex-1">
                 <div className="">
                    <h3 className="text-brand-yellow font-black text-lg uppercase tracking-tight mb-2">
                       {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                       {item.text}
                    </p>
                    {item.footer && (
                      <p className="text-brand-yellow font-bold text-xs mt-4 pt-4 border-t border-white/10 uppercase tracking-widest leading-relaxed">
                        {item.footer}
                      </p>
                    )}
                 </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default function Institucional({ t }: { t: any }) {
  return (
    <div className="min-h-screen bg-brand-black pt-[100px]">
      <section className="py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#f0c33a_0%,transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <ScrollReveal className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-yellow font-bold uppercase tracking-widest text-xs transition-colors">
               <ArrowLeft size={16} /> {t.footer?.about || 'Voltar'}
            </Link>
          </ScrollReveal>

          {/* Timeline Section */}
          <Timeline t={t} />

          {/* MVV Section */}
          <ScrollReveal className="text-center mb-16 md:mb-24 pt-12 border-t border-white/5">
            <span className="text-brand-yellow font-black tracking-[0.4em] text-xs md:text-sm mb-4 block uppercase leading-none">Identidade</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">{t.mvv.title}</h2>
            <div className="w-24 h-2 bg-brand-yellow mx-auto mt-8"></div>
          </ScrollReveal>

          <MVVTabs t={t} />
        </div>
      </section>
    </div>
  );
}
