import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { translations } from './translations';
import Home from './pages/Home';
import Institucional from './pages/Institucional';
import ScrollToTop from './components/ScrollToTop';

// --- Constants ---
const LOGO_URL = "https://i.imgur.com/GwSYj0Y.png";
const HERO_SMALL_IMG = "https://i.imgur.com/ylFs2SK.png";
const STRUCTURE_IMG = "https://i.imgur.com/XfRNTcu.jpeg";
const GOVERNANCE_IMG = "https://i.imgur.com/l1t8Piv.png";
const DIFFERENTIAL_IMG = "https://i.imgur.com/YnNIwp9.jpeg";
const DIFFERENTIAL_IMG_2 = "https://i.imgur.com/psy7xua.jpeg";

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

const HOW_WE_WORK_ROW1 = [
  "https://i.imgur.com/Dp87YpR.jpeg",
  "https://i.imgur.com/NgG1mmK.jpeg",
  "https://i.imgur.com/EDdyzfY.jpeg",
  "https://i.imgur.com/nuF42LU.jpeg",
  "https://i.imgur.com/uHiRdPq.jpeg",
  "https://i.imgur.com/R6dXc6S.jpeg",
  "https://i.imgur.com/eUBbNLr.jpeg",
  "https://i.imgur.com/QTVVlgs.jpeg",
  "https://i.imgur.com/8Gy6xpf.jpeg",
  "https://i.imgur.com/sNzUMjN.jpeg",
];

const HOW_WE_WORK_ROW2 = [
  "https://i.imgur.com/wTwQz95.jpeg",
  "https://i.imgur.com/xs1rXv8.jpeg",
  "https://i.imgur.com/YHwZKb4.jpeg",
  "https://i.imgur.com/NDiGmtt.jpeg",
  "https://i.imgur.com/CBq8cUS.jpeg",
  "https://i.imgur.com/C3iep6q.jpeg",
  "https://i.imgur.com/Nq3KD3B.jpeg",
  "https://i.imgur.com/DgJMmi7.jpeg",
  "https://i.imgur.com/qe1erV9.jpeg",
  "https://i.imgur.com/vnykCMD.jpeg",
];

const Navbar = ({ lang, setLang, t }: { lang: 'pt' | 'en', setLang: (l: 'pt' | 'en') => void, t: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: t.nav.about, 
      hasDropdown: true,
      dropdownItems: [
        { 
          name: t.nav.aboutUs, 
          hasSubmenu: true,
          submenuItems: [
            { name: t.nav.company, to: '/#sobre', type: 'anchor' },
            { name: t.nav.society, to: '/#estrutura', type: 'anchor' },
            { name: t.nav.governance, to: '/#governanca', type: 'anchor' },
          ]
        },
        { name: t.nav.mvv, to: '/institucional', type: 'route' },
      ]
    },
    { name: t.nav.teamInAction, to: '/#equipe', type: 'anchor' },
    { name: t.nav.contact.toUpperCase(), to: '/#contato', type: 'anchor' },
  ];

  const handleLinkClick = (link: any) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
    if (link.type === 'anchor') {
        const path = link.to.split('#')[0];
        const id = link.to.split('#')[1];
        
        if (location.pathname === '/' || location.pathname === path || (location.pathname === '' && path === '/')) {
          const element = document.getElementById(id);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="bg-white text-brand-black py-2 md:py-3 px-4 md:px-12 flex justify-between items-center text-[9px] md:text-xs font-medium uppercase tracking-widest border-b border-brand-gray-medium">
        <div className="flex items-center gap-4">
          <Link to="/" className="block">
            <img src={LOGO_URL} alt="Logo" className="h-10 md:h-20" referrerPolicy="no-referrer" />
          </Link>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <Link to="/#contato" onClick={() => handleLinkClick({ type: 'anchor', to: '/#contato' })} className="hover:text-brand-yellow transition-colors font-bold hidden sm:block">{t.nav.contact}</Link>
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

      <nav className={`bg-brand-yellow text-brand-black transition-all duration-300 ${isScrolled ? 'py-1 md:py-3' : 'py-2 md:py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
          <div className="hidden md:flex gap-10 h-full">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubmenu(null);
                }}
              >
                {link.hasDropdown ? (
                  <div className={`flex items-center gap-1 cursor-pointer text-brand-black font-bold text-sm tracking-tighter transition-all py-2 border-b-2 ${activeDropdown === link.name ? 'border-brand-black' : 'border-transparent'}`}>
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link 
                    to={(link as any).to || '#'} 
                    onClick={() => handleLinkClick(link)}
                    className="text-brand-black font-bold text-sm hover:underline transition-all tracking-tighter py-2 block border-b-2 border-transparent"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu Desktop */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 bg-white shadow-xl py-0 min-w-[260px] border-t-4 border-brand-black z-50 mt-[0px]"
                    >
                      {link.dropdownItems?.map((item: any) => (
                        <div 
                          key={item.name}
                          className="relative"
                          onMouseEnter={() => item.hasSubmenu && setActiveSubmenu(item.name)}
                          onMouseLeave={() => item.hasSubmenu && setActiveSubmenu(null)}
                        >
                          {item.hasSubmenu ? (
                            <div className={`flex justify-between items-center px-6 py-4 text-[11px] font-bold text-brand-black hover:bg-brand-yellow/20 cursor-pointer border-b border-gray-100 last:border-0 transition-colors uppercase tracking-wider ${activeSubmenu === item.name ? 'bg-brand-yellow/20' : ''}`}>
                              {item.name}
                              <ChevronRight size={14} />
                            </div>
                          ) : (
                            <Link
                              to={item.to}
                              onClick={() => handleLinkClick(item)}
                              className="block px-6 py-4 text-[11px] font-bold text-brand-black hover:bg-brand-yellow/20 border-b border-gray-100 last:border-0 transition-colors uppercase tracking-wider"
                            >
                              {item.name}
                            </Link>
                          )}

                          {/* Submenu Desktop (Opens to the right) */}
                          <AnimatePresence>
                            {item.hasSubmenu && activeSubmenu === item.name && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute top-0 left-full bg-white shadow-xl py-0 min-w-[200px] border-l-4 border-brand-black z-50"
                              >
                                {item.submenuItems?.map((sub: any) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.to}
                                    onClick={() => handleLinkClick(sub)}
                                    className="block px-6 py-4 text-[10px] font-bold text-brand-black hover:bg-brand-yellow/20 border-b border-gray-100 last:border-0 transition-colors uppercase tracking-widest whitespace-nowrap"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-brand-yellow z-[60] flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-display font-black text-brand-black text-2xl tracking-tighter">PLAN</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-black">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  {link.hasDropdown ? (
                    <>
                      <div className="text-xl font-black text-brand-black opacity-30 uppercase tracking-widest text-[10px] mb-2">{link.name}</div>
                      {link.dropdownItems?.map((item: any) => (
                        <div key={item.name} className="flex flex-col gap-2 pl-4">
                          {item.hasSubmenu ? (
                            <div className="flex flex-col gap-2">
                              <div className="text-brand-black font-bold text-lg uppercase tracking-tight opacity-40">{item.name}</div>
                              <div className="flex flex-col gap-3 pl-4 border-l-2 border-brand-black/20 my-2">
                                {item.submenuItems?.map((sub: any) => (
                                  <Link 
                                    key={sub.name} 
                                    to={sub.to} 
                                    onClick={() => handleLinkClick(sub)}
                                    className="text-brand-black font-bold text-base uppercase tracking-tighter"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link 
                              to={item.to} 
                              onClick={() => handleLinkClick(item)}
                              className="text-brand-black font-bold text-xl uppercase tracking-tighter"
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </>
                  ) : (
                    <Link 
                      to={(link as any).to || '#'} 
                      onClick={() => handleLinkClick(link)}
                      className="text-2xl font-black text-brand-black uppercase tracking-tighter"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link 
                to="/#contato" 
                onClick={() => handleLinkClick({ type: 'anchor', to: '/#contato' })}
                className="mt-8 bg-brand-black text-brand-yellow font-black py-4 px-6 text-center shadow-lg uppercase tracking-widest text-sm"
              >
                {t.nav.contact}
              </Link>
            </div>
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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar lang={lang} setLang={setLang} t={t} />

        <Routes>
          <Route path="/" element={
            <Home 
              t={t} 
              HERO_SMALL_IMG={HERO_SMALL_IMG}
              STRUCTURE_IMG={STRUCTURE_IMG}
              GOVERNANCE_IMG={GOVERNANCE_IMG}
              DIFFERENTIAL_IMG={DIFFERENTIAL_IMG}
              DIFFERENTIAL_IMG_2={DIFFERENTIAL_IMG_2}
              TEAM_IMAGES_ROW1={TEAM_IMAGES_ROW1}
              TEAM_IMAGES_ROW2={TEAM_IMAGES_ROW2}
              HOW_WE_WORK_ROW1={HOW_WE_WORK_ROW1}
              HOW_WE_WORK_ROW2={HOW_WE_WORK_ROW2}
              CLIENTS={CLIENTS}
            />
          } />
          <Route path="/institucional" element={<Institucional t={t} />} />
        </Routes>

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
                <Link to="/#sobre" className="hover:text-brand-yellow transition-colors border-b-2 border-transparent hover:border-brand-yellow pb-1">{t.footer.about}</Link>
                <Link to="/#servicos" className="hover:text-brand-yellow transition-colors border-b-2 border-transparent hover:border-brand-yellow pb-1">{t.footer.services}</Link>
                <Link to="/#contato" className="hover:text-brand-yellow transition-colors border-b-2 border-transparent hover:border-brand-yellow pb-1">{t.footer.contact}</Link>
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
    </Router>
  );
}
