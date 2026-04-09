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
  blue: '#0B4A92',
  yellow: '#F2A900',
  grayLight: '#F3F5F7',
  grayMedium: '#D9DEE5',
  black: '#1E1E1E',
};

const LOGO_URL = "https://i.imgur.com/GwSYj0Y.png";
const HERO_SMALL_IMG = "https://i.imgur.com/ylFs2SK.png";
const STRUCTURE_IMG = "https://i.imgur.com/XfRNTcu.jpeg";
const DIFFERENTIAL_IMG = "https://i.imgur.com/YnNIwp9.jpeg";

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
  { name: "Eletrobras", logo: "https://i.imgur.com/dUSx2jK.png" },
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
  <div className={`bg-brand-gray-light flex flex-col items-center justify-center text-brand-blue/30 font-bold uppercase tracking-widest text-[10px] p-4 border border-brand-gray-medium/30 ${className}`}>
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
    { name: t.nav.teamNav, href: '#equipe' },
    { name: t.nav.commercial, href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar - Now White */}
      <div className="bg-white text-brand-blue py-3 px-4 md:px-12 flex justify-between items-center text-[10px] md:text-xs font-medium uppercase tracking-widest border-b border-brand-gray-medium">
        <div className="flex items-center gap-4">
          <a href={LOGO_URL} target="_blank" rel="noreferrer">
            <img src={LOGO_URL} alt="Logo" className="h-12 md:h-20" referrerPolicy="no-referrer" />
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#contato" className="hover:text-brand-yellow transition-colors font-bold">{t.nav.contact}</a>
          <div className="flex gap-3 border-l border-brand-gray-medium pl-6">
            <button 
              onClick={() => setLang('pt')}
              className={`hover:text-brand-yellow transition-colors ${lang === 'pt' ? 'font-bold' : 'opacity-50'}`}
            >
              {t.nav.langPt}
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`hover:text-brand-yellow transition-colors ${lang === 'en' ? 'font-bold' : 'opacity-50'}`}
            >
              {t.nav.langEn}
            </button>
          </div>
        </div>
      </div>

      {/* Main Menu - Now Blue */}
      <nav className={`bg-brand-blue text-white transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white font-bold text-sm hover:text-brand-yellow transition-colors tracking-tighter"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex w-full justify-between items-center">
             <span className="font-display font-black text-white text-xl">PLAN</span>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="fixed inset-0 bg-brand-blue z-[60] flex flex-col items-center justify-center gap-8 text-white"
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

      <main className="flex-grow pt-[100px]">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={HERO_SMALL_IMG} 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply"></div>
          </div>
          
          <div className="w-full px-4 md:px-12 relative z-10">
            <div className="max-w-xl lg:max-w-2xl">
              <ScrollReveal className="bg-brand-blue/85 backdrop-blur-sm text-white p-8 md:p-14 shadow-2xl relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-yellow"></div>
                <h1 className="text-4xl md:text-6xl mb-6 leading-none">
                  {t.hero.title} <span className="text-brand-yellow">Plan</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-normal normal-case mb-8 opacity-90">
                  {t.hero.subtitle}
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a 
                    href="https://wa.me/5547999911880" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-brand-yellow text-brand-blue font-bold px-8 py-4 flex items-center justify-center gap-2 hover:bg-white transition-all group"
                  >
                    {t.hero.whatsapp} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#sobre" 
                    className="border border-white/30 text-white font-bold px-8 py-4 flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    {t.hero.discover}
                  </a>
                </div>

                <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                  <div className="bg-brand-yellow/20 p-3 rounded-full">
                    <Phone className="text-brand-yellow" size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60">{t.hero.talkTeam}</p>
                    <p className="text-xl font-bold">(47) 99991-1880</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* --- SOBRE A EMPRESA --- */}
        <section id="sobre" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <ScrollReveal>
                  <span className="text-brand-blue font-bold tracking-[0.3em] text-sm mb-4 block">{t.about.tag}</span>
                  <h2 className="text-4xl md:text-5xl mb-8 text-brand-blue">{t.about.title}</h2>
                  <div className="w-20 h-1.5 bg-brand-yellow mb-8"></div>
                </ScrollReveal>
              </div>
              <div className="md:col-span-7">
                <ScrollReveal delay={0.2}>
                  <p className="text-2xl font-light text-brand-blue mb-8 leading-relaxed">
                    {t.about.highlight}
                  </p>
                  <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                    <p>{t.about.p3}</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* --- ESTRUTURA DA EMPRESA --- */}
        <section id="estrutura" className="py-24 bg-brand-blue text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
          
          <div className="container mx-auto px-4 md:px-12 relative z-10">
            <ScrollReveal className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl mb-4">{t.structure.title}</h2>
              <p className="text-brand-yellow font-medium tracking-widest uppercase">{t.structure.subtitle}</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal className="relative group">
                <div className="absolute -inset-4 border border-white/20 group-hover:border-brand-yellow/50 transition-colors duration-500"></div>
                <img 
                  src={STRUCTURE_IMG} 
                  alt="Estrutura" 
                  className="w-full h-auto transition-all duration-700 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 bg-brand-yellow text-brand-blue p-6 font-bold text-xl">
                  {t.structure.badge}
                </div>
              </ScrollReveal>

              <div className="space-y-10">
                {t.structure.members.map((member: any, idx: number) => (
                  <ScrollReveal key={member.name} delay={idx * 0.1} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold text-2xl">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl text-brand-yellow mb-1">{member.name}</h3>
                      <p className="text-sm font-bold uppercase tracking-widest mb-3 opacity-70">{member.role}</p>
                      <p className="text-gray-300 leading-relaxed">{member.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
                
                <ScrollReveal delay={0.4} className="pt-6 border-t border-white/10">
                  <p className="text-xl font-medium italic text-brand-yellow">
                    {t.structure.footer}
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIÊNCIA / AUTORIDADE --- */}
        <section className="py-24 bg-brand-gray-light">
          <div className="container mx-auto px-4 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <h2 className="text-4xl mb-4 text-brand-blue">{t.authority.title}</h2>
                <p className="text-gray-600 text-lg">
                  {t.authority.desc}
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Neoenergia", logo: "https://i.imgur.com/8r9N9am.png", color: "#00a341" },
                { name: "Eletrobras", logo: "https://i.imgur.com/dUSx2jK.png", color: "#005a9c" }
              ].map((brand, idx) => (
                <ScrollReveal key={brand.name} delay={idx * 0.2} className="bg-white p-12 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-brand-yellow group">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-20 md:h-28 object-contain mb-8 group-hover:scale-110 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-brand-blue font-bold tracking-widest uppercase text-sm opacity-50">{brand.name}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- SERVIÇOS --- */}
        <section id="servicos" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <ScrollReveal className="mb-16">
              <span className="text-brand-blue font-bold tracking-[0.3em] text-sm mb-4 block">{t.services.tag}</span>
              <h2 className="text-4xl md:text-5xl mb-4 text-brand-blue">{t.services.title}</h2>
              <p className="text-gray-600 text-xl max-w-2xl">{t.services.desc}</p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.items.map((service: any, idx: number) => (
                <ScrollReveal key={service.title} delay={idx * 0.05} className="group bg-brand-gray-light p-8 border border-brand-gray-medium hover:bg-brand-blue hover:border-brand-blue transition-all duration-500">
                  <div className="w-full aspect-square bg-brand-gray-medium mb-6 flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors overflow-hidden relative">
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                       <ImagePlaceholder className="w-full h-full" text={t.differentials.placeholder} />
                    </div>
                    <Construction className="text-brand-blue group-hover:text-brand-yellow transition-colors relative z-10" size={48} />
                  </div>
                  <h3 className="text-xl mb-3 text-brand-blue group-hover:text-brand-yellow transition-colors">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">{service.desc}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="mt-16 p-8 bg-brand-blue text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-xl font-medium">{t.services.footer}</p>
              <a href="#contato" className="bg-brand-yellow text-brand-blue font-bold px-8 py-4 hover:bg-white transition-colors whitespace-nowrap">{t.services.cta}</a>
            </ScrollReveal>
          </div>
        </section>

        {/* --- DIFERENCIAL --- */}
        <section className="py-24 bg-brand-blue text-white relative">
          <div className="container mx-auto px-4 md:px-12 grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl mb-8">{t.differentials.title}</h2>
              <p className="text-brand-yellow text-xl mb-12 font-medium">{t.differentials.subtitle}</p>
              
              <ul className="space-y-6">
                {t.differentials.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-brand-yellow rounded-full p-1">
                      <CheckCircle2 size={18} className="text-brand-blue" />
                    </div>
                    <span className="text-lg text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-16">
                <p className="text-3xl font-display font-black text-brand-yellow italic">{t.differentials.quote}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 bg-brand-yellow/10 rounded-sm overflow-hidden">
                    <img 
                      src={DIFFERENTIAL_IMG} 
                      alt="Diferencial" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="h-40 bg-brand-yellow rounded-sm flex items-center justify-center p-6">
                     <ShieldCheck size={64} className="text-brand-blue" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-40 bg-white/10 rounded-sm flex items-center justify-center p-6">
                     <Award size={64} className="text-brand-yellow" />
                  </div>
                  <div className="h-64 bg-brand-yellow/10 rounded-sm overflow-hidden">
                    <ImagePlaceholder className="w-full h-full" icon={Award} text={t.differentials.placeholder} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* --- CLIENTES --- */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12 mb-16 text-center">
            <ScrollReveal>
              <h2 className="text-4xl mb-4 text-brand-blue">{t.clients.title}</h2>
              <p className="text-gray-600 text-lg">{t.clients.desc}</p>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="flex animate-infinite-scroll w-fit">
              {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <div key={idx} className="flex-shrink-0 w-48 md:w-64 px-4">
                  <div className="bg-brand-gray-light h-32 md:h-40 flex items-center justify-center p-6 transition-all duration-500 border border-transparent hover:border-brand-yellow/30">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-full max-w-full object-contain" 
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
            <p className="text-brand-blue font-bold tracking-widest uppercase text-sm opacity-40">{t.authority.partners}</p>
          </div>
        </section>

        {/* --- EQUIPE EM AÇÃO --- */}
        <section id="equipe" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12 mb-16 text-center">
            <ScrollReveal>
              <h2 className="text-4xl mb-4 text-brand-blue">{t.team.title}</h2>
              <p className="text-gray-600 text-lg">{t.team.desc}</p>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            {/* Row 1: Moving Left */}
            <div className="relative">
              <div className="flex animate-infinite-scroll w-fit">
                {[...TEAM_IMAGES_ROW1, ...TEAM_IMAGES_ROW1].map((img, idx) => (
                  <div key={`left-${idx}`} className="flex-shrink-0 w-72 md:w-96 px-4">
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
                  <div key={`right-${idx}`} className="flex-shrink-0 w-72 md:w-96 px-4">
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
        <section id="contato" className="py-24 bg-brand-gray-light">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl mb-6 text-brand-blue">{t.contact.title}</h2>
                <p className="text-2xl text-brand-blue font-light mb-12">{t.contact.desc}</p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-brand-blue text-brand-yellow flex items-center justify-center rounded-full group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{t.contact.phone}</p>
                      <p className="text-xl font-bold text-brand-blue">(47) 99991-1880</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-brand-blue text-brand-yellow flex items-center justify-center rounded-full group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{t.contact.email}</p>
                      <p className="text-xl font-bold text-brand-blue">terraplanagemplan@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-brand-blue text-brand-yellow flex items-center justify-center rounded-full group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{t.contact.location}</p>
                      <p className="text-xl font-bold text-brand-blue">{t.contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white border-l-8 border-brand-yellow shadow-xl">
                  <p className="text-lg text-gray-600 mb-6">{t.contact.ctaBox}</p>
                  <a 
                    href="https://wa.me/5547999911880" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white font-black px-10 py-5 rounded-sm hover:scale-105 transition-transform shadow-lg"
                  >
                    {t.contact.whatsapp}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} className="h-full min-h-[400px] bg-brand-gray-medium relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-brand-blue/10 z-10 pointer-events-none"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.8456789!2d-49.27!3d-26.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ5JzEyLjAiUyA0OcKwMTYnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
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
      <footer className="bg-brand-blue text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="bg-white p-4 shadow-lg">
                <img src={LOGO_URL} alt="Logo" className="h-16 md:h-20 object-contain" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm opacity-60 max-w-xs text-center md:text-left">
                {t.footer.desc}
              </p>
            </div>
            
            <div className="flex gap-8 text-sm font-bold tracking-widest">
              <a href="#sobre" className="hover:text-brand-yellow transition-colors">{t.footer.about}</a>
              <a href="#servicos" className="hover:text-brand-yellow transition-colors">{t.footer.services}</a>
              <a href="#contato" className="hover:text-brand-yellow transition-colors">{t.footer.contact}</a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs opacity-40 uppercase tracking-widest mb-2">{t.footer.rights}</p>
              <p className="text-xs opacity-40 uppercase tracking-widest">{t.footer.allRights}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
