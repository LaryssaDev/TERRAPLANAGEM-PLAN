import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  HardHat,
  Truck,
  Construction,
  Trees,
  Droplets,
  Zap,
  ShieldCheck,
  Award
} from 'lucide-react';
import { ScrollReveal } from './components/ScrollReveal';
import { translations } from './translations';

// --- Constants ---
const COLORS = {
  yellow: '#f9bc06',
  black: '#1E1E1E',
  grayLight: '#F3F5F7',
  grayMedium: '#D9DEE5',
};

const LOGO_URL = "https://i.imgur.com/GwSYj0Y.png";
const HERO_SMALL_IMG = "https://i.imgur.com/ylFs2SK.png";
const STRUCTURE_IMG = "https://i.imgur.com/XfRNTcu.jpeg";
const DIFFERENTIAL_IMG = "https://i.imgur.com/YnNIwp9.jpeg";
const DIFFERENTIAL_IMG_2 = "https://i.imgur.com/B9IPo9Q.jpeg";

const TEAM_IMAGES_ROW1 = [
  "https://i.imgur.com/oUr6Um3.jpeg",
  "https://i.imgur.com/rXwqvST.jpeg",
  "https://i.imgur.com/UWdzugQ.jpeg",
  "https://i.imgur.com/dIxAP4t.jpeg",
  "https://i.imgur.com/RttwgsH.jpeg",
  "https://i.imgur.com/5now9QI.jpeg",
  "https://i.imgur.com/fyUNTUd.jpeg",
];

const TEAM_IMAGES_ROW2 = [
  "https://i.imgur.com/aK4wTrg.jpeg",
  "https://i.imgur.com/glQxuoz.jpeg",
  "https://i.imgur.com/nG9hBWs.jpeg",
  "https://i.imgur.com/Qwuu99n.jpeg",
  "https://i.imgur.com/RufIfMb.jpeg",
  "https://i.imgur.com/BXW0IME.jpeg",
  "https://i.imgur.com/UZ5IOlp.jpeg",
];

const CLIENTS = [
  { name: "Neoenergia", logo: "https://i.imgur.com/8r9N9am.png" },
  { name: "Eletrosul", logo: "https://i.imgur.com/lozRXOs.jpeg" },
  { name: "Unifique", logo: "https://i.imgur.com/6rm2TYe.png" },
  { name: "Frigorífico Gessner", logo: "https://i.imgur.com/Tqaa9I7.png" },
  { name: "Cooper Timbó", logo: "https://i.imgur.com/X0b458C.png" },
  { name: "Cedro Ambiental", logo: "https://i.imgur.com/4BmUiqF.png" },
  { name: "Prefeitura de Timbó", logo: "https://i.imgur.com/s7M57Tq.png" },
  { name: "Germer Isoladores", logo: "https://i.imgur.com/E2M9wJY.png" },
  { name: "Raimondi Empreendimentos", logo: "https://i.imgur.com/3kWmJdl.png" },
  { name: "Uller Marmoraria", logo: "https://i.imgur.com/uutN5po.png" },
  { name: "Massas Rosane", logo: "https://i.imgur.com/W0ymk6C.png" },
  { name: "Giordani Construtora", logo: "https://i.imgur.com/rvFaPKn.png" },
  { name: "Paternolli", logo: "https://i.imgur.com/1pl1D2I.png" },
];

// --- Components ---

const ImagePlaceholder = ({ className = "", text = "Imagem em breve", icon: Icon = Construction }) => (
  <div className={`bg-brand-gray-light flex flex-col items-center justify-center text-brand-black/30 font-bold uppercase tracking-widest text-[10px] p-4 border border-brand-gray-medium/30 ${className}`}>
    <Icon size={32} className="mb-3 opacity-20" />
    <span className="text-center">{text}</span>
  </div>
);

const Navbar = ({ lang, setLang, t }: { lang: 'pt' | 'en', setLang: (l: 'pt' | 'en') => void, t: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#sobre' },
    { name: t.nav.technical, href: '#servicos' },
    { name: t.nav.commercial, href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar - Now White */}
      <div className="bg-white text-brand-black py-2 md:py-3 px-4 md:px-12 flex justify-between items-center text-[9px] md:text-xs font-medium uppercase tracking-widest border-b border-brand-gray-medium">
        <div className="flex items-center gap-4">
          <a href="/" className="block">
            <img src={LOGO_URL} alt="Logo" className="h-10 md:h-20" referrerPolicy="no-referrer" />
          </a>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <a href="#contato" className="hover:text-brand-yellow transition-colors font-bold hidden sm:block">{t.nav.contact}</a>
          <div className="flex gap-2 md:gap-3 sm:border-l border-brand-gray-medium sm:pl-4 md:pl-6">
            <button 
              onClick={() => setLang('pt')}
              className={`hover:text-brand-yellow transition-colors ${lang === 'pt' ? 'font-bold underline underline-offset-4 decoration-brand-yellow' : 'opacity-50'}`}
            >
              PT
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`hover:text-brand-yellow transition-colors ${lang === 'en' ? 'font-bold underline underline-offset-4 decoration-brand-yellow' : 'opacity-50'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Menu - Yellow */}
      <nav className={`bg-brand-yellow text-brand-black transition-all duration-300 ${isScrolled ? 'py-1 md:py-3' : 'py-2 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-brand-black font-bold text-sm hover:underline transition-all tracking-tighter"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex w-full justify-between items-center">
             <span className="font-display font-black text-brand-black text-base">PLAN</span>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-black">
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-brand-yellow z-[60] flex flex-col items-center justify-center gap-8 text-brand-black"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8">
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tighter"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} t={t} />

      <main className="flex-grow pt-[80px] md:pt-[100px]">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={HERO_SMALL_IMG} 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-black/30 mix-blend-multiply"></div>
          </div>
          
          <div className="w-full px-4 md:px-12 relative z-10">
            <div className="max-w-xl lg:max-w-2xl">
              <ScrollReveal className="bg-white/50 backdrop-blur-md text-brand-black p-6 md:p-14 shadow-2xl relative border border-white/20">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-yellow"></div>
                <h1 className="text-3xl md:text-6xl mb-6 leading-tight">
                  {t.hero.title} <span className="text-brand-yellow">Plan</span>
                </h1>
                <h2 className="text-lg md:text-2xl font-normal normal-case mb-8 opacity-90">
                  {t.hero.subtitle}
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a 
                    href="https://wa.me/5547999911880" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-brand-yellow text-white font-bold px-8 py-4 flex items-center justify-center gap-2 hover:bg-brand-black hover:text-white transition-all group"
                  >
                    {t.hero.whatsapp} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#sobre" 
                    className="border border-brand-black/30 text-brand-black font-bold px-8 py-4 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all"
                  >
                    {t.hero.discover}
                  </a>
                </div>

                <div className="flex items-center gap-4 border-t border-brand-black/10 pt-8">
                  <div className="bg-brand-black/10 p-3 rounded-full">
                    <Phone className="text-brand-black" size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60">{t.hero.talkTeam}</p>
                    <p className="text-xl font-bold text-brand-black">(47) 99991-1880</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* --- SOBRE A EMPRESA --- */}
        <section id="sobre" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <ScrollReveal>
                  <span className="text-brand-black font-bold tracking-[0.3em] text-sm mb-4 block">{t.about.tag}</span>
                  <h2 className="text-3xl md:text-5xl mb-8 text-brand-black">{t.about.title}</h2>
                  <div className="w-20 h-1.5 bg-brand-yellow mb-8"></div>
                </ScrollReveal>
              </div>
              <div className="md:col-span-7">
                <ScrollReveal delay={0.2}>
                  <p className="text-xl md:text-2xl font-light text-brand-black mb-8 leading-relaxed">
                    {t.about.highlight}
                  </p>
                  <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                    {t.about.paragraphs.map((p: string, idx: number) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* --- ESTRUTURA DA EMPRESA --- */}
        <section id="estrutura" className="py-16 md:py-24 bg-brand-yellow text-brand-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
          
          <div className="container mx-auto px-4 md:px-12 relative z-10">
            <ScrollReveal className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl mb-4 text-brand-black">{t.structure.title}</h2>
              <p className="text-brand-black/60 font-bold tracking-widest uppercase text-sm md:text-base">{t.structure.subtitle}</p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal className="relative group">
                <div className="absolute -inset-4 border border-brand-black/20 group-hover:border-brand-black/50 transition-colors duration-500"></div>
                <img 
                  src={STRUCTURE_IMG} 
                  alt="Estrutura" 
                  className="w-full h-auto transition-all duration-700 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 bg-brand-black text-white p-4 md:p-6 font-bold text-lg md:text-xl shadow-xl">
                  {t.structure.badge}
                </div>
              </ScrollReveal>

              <div className="space-y-10">
                {t.structure.members.map((member: any, idx: number) => (
                  <ScrollReveal key={member.name} delay={idx * 0.1} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/50 flex items-center justify-center text-brand-black font-bold text-2xl border border-brand-black/30">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl text-brand-black mb-1 font-black">{member.name}</h3>
                      {member.role && (
                        <p className="text-sm font-bold uppercase tracking-widest mb-3 text-white drop-shadow-sm">{member.role}</p>
                      )}
                      <p className="text-brand-black/80 leading-relaxed font-medium">{member.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
                
                <ScrollReveal delay={0.4} className="pt-6 border-t border-brand-black/10">
                  <p className="text-xl font-medium italic text-brand-black/80 flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>{t.structure.footer}</span>
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIÊNCIA / AUTORIDADE --- */}
        <section className="py-16 md:py-24 bg-brand-gray-light">
          <div className="container mx-auto px-4 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl mb-4 text-brand-black">{t.authority.title}</h2>
                <p className="text-gray-600 text-lg">
                  {t.authority.desc}
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Neoenergia", logo: "https://i.imgur.com/8r9N9am.png", color: "#00a341" },
                { name: "Eletrosul", logo: "https://i.imgur.com/lozRXOs.jpeg", color: "#005a9c" }
              ].map((brand, idx) => (
                <ScrollReveal key={brand.name} delay={idx * 0.2} className="bg-white p-12 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-brand-yellow group">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-20 md:h-28 object-contain mb-8 group-hover:scale-110 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-brand-black/50 font-bold tracking-widest uppercase text-sm">{brand.name}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- SERVIÇOS --- */}
        <section id="servicos" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <ScrollReveal className="mb-12 md:mb-16">
              <p className="text-brand-black/70 font-bold tracking-[0.3em] text-sm mb-4 block">{t.services.tag}</p>
              <h2 className="text-3xl md:text-5xl mb-4 text-brand-black">{t.services.title}</h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-3xl whitespace-pre-line leading-relaxed">{t.services.desc}</p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.items.map((service: any, idx: number) => (
                <ScrollReveal key={idx} delay={idx * 0.05} className="group bg-brand-gray-light p-6 md:p-8 border border-brand-gray-medium hover:bg-brand-yellow hover:border-brand-yellow transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-brand-black"></div>
                    <h3 className="text-xl text-brand-black group-hover:text-brand-black transition-colors">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-brand-black/70 transition-colors text-sm leading-relaxed">{service.desc}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="mt-16 p-8 bg-brand-yellow text-brand-black flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-8 h-8 flex-shrink-0 mt-0.5" />
                <p className="text-xl font-bold uppercase tracking-tight leading-tight">{t.services.footer}</p>
              </div>
              <a 
                href="https://wa.me/5547999911880" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-black text-white font-bold px-8 py-4 hover:bg-white hover:text-brand-black transition-colors whitespace-nowrap"
              >
                {t.services.cta}
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* --- DIFERENCIAL --- */}
        <section className="py-16 md:py-24 bg-brand-yellow text-brand-black relative">
          <div className="container mx-auto px-4 md:px-12 grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl mb-8 text-brand-black">{t.differentials.title}</h2>
              <p className="text-brand-black font-black text-lg md:text-xl mb-12 uppercase tracking-wider opacity-70">{t.differentials.subtitle}</p>
              
              <ul className="space-y-6">
                {t.differentials.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-brand-black rounded-full p-1 flex-shrink-0 shadow-sm">
                      <CheckCircle2 size={16} className="text-brand-yellow" />
                    </div>
                    <span className="text-base md:text-lg text-brand-black font-semibold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 md:mt-16">
                <p className="text-xl md:text-3xl font-display font-black text-brand-black italic drop-shadow-sm">{t.differentials.quote}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 bg-brand-black/10 rounded-sm overflow-hidden border border-brand-black/20">
                    <img 
                      src={DIFFERENTIAL_IMG} 
                      alt="Diferencial" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="h-40 bg-brand-black rounded-sm flex items-center justify-center p-6 shadow-xl">
                     <ShieldCheck size={64} className="text-brand-yellow" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-40 bg-white rounded-sm flex items-center justify-center p-6 shadow-xl">
                     <Award size={64} className="text-brand-yellow" />
                  </div>
                  <div className="h-64 bg-brand-black/10 rounded-sm overflow-hidden border border-brand-black/20">
                    <img 
                      src={DIFFERENTIAL_IMG_2} 
                      alt="Diferencial 2" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* --- CLIENTES --- */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12 mb-12 md:mb-16 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl mb-4 text-brand-black">{t.clients.title}</h2>
              <p className="text-gray-600 text-base md:text-lg">{t.clients.desc}</p>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="flex animate-infinite-scroll w-fit">
              {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <div key={idx} className="flex-shrink-0 w-32 md:w-64 px-2 md:px-4">
                  <div className="bg-brand-gray-light h-24 md:h-40 flex items-center justify-center p-4 md:p-6 transition-all duration-500 border border-transparent hover:border-brand-yellow/50 shadow-sm hover:shadow-md">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-full max-w-full object-contain transition-all" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-brand-black font-bold tracking-widest uppercase text-xs opacity-30">{t.authority.partners}</p>
          </div>
        </section>

        {/* --- EQUIPE EM AÇÃO --- */}
        <section id="equipe" className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12 mb-12 md:mb-16 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl mb-4 text-brand-black">{t.team.title}</h2>
              <p className="text-gray-600 text-base md:text-lg">{t.team.desc}</p>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            {/* Row 1: Moving Left */}
            <div className="relative">
              <div className="flex animate-infinite-scroll w-fit">
                {[...TEAM_IMAGES_ROW1, ...TEAM_IMAGES_ROW1].map((img, idx) => (
                  <div key={`left-${idx}`} className="flex-shrink-0 w-60 md:w-96 px-3 md:px-4">
                    <div className="bg-brand-gray-light rounded-sm overflow-hidden shadow-md border border-brand-gray-medium/30">
                      <img 
                        src={img} 
                        alt={`Team Action ${idx}`} 
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Moving Right */}
            <div className="relative">
              <div className="flex animate-infinite-scroll-reverse w-fit">
                {[...TEAM_IMAGES_ROW2, ...TEAM_IMAGES_ROW2].map((img, idx) => (
                  <div key={`right-${idx}`} className="flex-shrink-0 w-60 md:w-96 px-3 md:px-4">
                    <div className="bg-brand-gray-light rounded-sm overflow-hidden shadow-md border border-brand-gray-medium/30">
                      <img 
                        src={img} 
                        alt={`Team Action ${idx}`} 
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTATO --- */}
        <section id="contato" className="py-16 md:py-24 bg-brand-gray-light">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
              <ScrollReveal>
                <h2 className="text-3xl md:text-5xl mb-6 text-brand-black">{t.contact.title}</h2>
                <p className="text-lg md:text-2xl text-brand-black font-light mb-12 whitespace-pre-line leading-relaxed">{t.contact.desc}</p>
                
                <div className="space-y-6 md:space-y-8 mb-12">
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-black text-brand-yellow flex items-center justify-center rounded-full group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors flex-shrink-0">
                      <Phone size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">{t.contact.phone}</p>
                      <p className="text-lg md:text-xl font-bold text-brand-black">(47) 99991-1880</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-black text-brand-yellow flex items-center justify-center rounded-full group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors flex-shrink-0">
                      <Mail size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">{t.contact.email}</p>
                      <p className="text-lg md:text-xl font-bold text-brand-black break-all">contato@terraplanagemplan.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-black text-brand-yellow flex items-center justify-center rounded-full group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors flex-shrink-0">
                      <MapPin size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">{t.contact.location}</p>
                      <p className="text-lg md:text-xl font-bold text-brand-black">{t.contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 space-y-3">
                  {t.contact.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-brand-black font-bold">
                      <span className="text-xl">✔️</span>
                      <span className="text-base uppercase tracking-wider">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-12">
                  <p className="text-brand-black font-bold text-lg mb-4">{t.contact.requestPhrase}</p>
                  <a 
                    href="https://wa.me/5547999911880" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white font-black px-10 py-5 rounded-sm hover:scale-105 transition-transform shadow-lg group"
                  >
                    <Phone size={20} className="group-hover:animate-pulse" />
                    {t.contact.whatsapp}
                  </a>
                </div>

                <div className="pt-8 border-t border-brand-gray-medium opacity-60 hover:opacity-100 transition-opacity">
                  <p className="text-sm font-bold text-brand-black uppercase tracking-widest mb-2">{t.contact.report}</p>
                  <a href={`mailto:${t.contact.ethicsEmail}`} className="text-gray-600 hover:text-brand-black transition-colors">
                    {t.contact.ethicsEmail}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} className="aspect-square bg-brand-gray-medium relative overflow-hidden shadow-2xl lg:max-w-xl lg:self-start">
                <div className="absolute inset-0 bg-brand-black/5 z-10 pointer-events-none"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.385368945678!2d-49.268609!3d-26.8111258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94defba7258c5091%3A0x1559d5d3153f4edb!2sTerraplanagem%20PLAN!5e0!3m2!1spt-BR!2sbr!4v1713100000000!5m2!1spt-BR!2sbr" 
                  className="w-full h-full border-0"
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-black text-white py-16 border-t border-brand-yellow/30">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-8">
              <div className="bg-white p-6 shadow-2xl rounded-sm">
                <img src={LOGO_URL} alt="Logo" className="h-20 md:h-24 object-contain" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm opacity-70 max-w-xs text-center md:text-left leading-relaxed">
                {t.footer.desc}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm font-bold tracking-widest">
              <a href="#sobre" className="hover:text-brand-yellow transition-colors border-b-2 border-transparent hover:border-brand-yellow pb-1">{t.footer.about}</a>
              <a href="#servicos" className="hover:text-brand-yellow transition-colors border-b-2 border-transparent hover:border-brand-yellow pb-1">{t.footer.services}</a>
              <a href="#contato" className="hover:text-brand-yellow transition-colors border-b-2 border-transparent hover:border-brand-yellow pb-1">{t.footer.contact}</a>
            </div>

            <div className="text-center md:text-right space-y-2">
              <p className="text-[10px] opacity-50 uppercase tracking-[0.2em] mb-4">{t.footer.rights}</p>
              <div className="w-24 h-px bg-brand-yellow/30 ml-auto hidden md:block"></div>
              <p className="text-[10px] opacity-50 uppercase tracking-[0.2em]">{t.footer.allRights}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
