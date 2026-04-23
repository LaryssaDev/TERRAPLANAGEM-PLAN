import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Mail,
  MapPin,
  Construction
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface HomeProps {
  t: any;
  HERO_SMALL_IMG: string;
  STRUCTURE_IMG: string;
  GOVERNANCE_IMG: string;
  DIFFERENTIAL_IMG: string;
  DIFFERENTIAL_IMG_2: string;
  TEAM_IMAGES_ROW1: string[];
  TEAM_IMAGES_ROW2: string[];
  HOW_WE_WORK_ROW1: string[];
  HOW_WE_WORK_ROW2: string[];
  CLIENTS: { name: string; logo: string }[];
}

export default function Home({ 
  t, 
  HERO_SMALL_IMG, 
  STRUCTURE_IMG, 
  GOVERNANCE_IMG,
  DIFFERENTIAL_IMG, 
  DIFFERENTIAL_IMG_2,
  TEAM_IMAGES_ROW1,
  TEAM_IMAGES_ROW2,
  HOW_WE_WORK_ROW1,
  HOW_WE_WORK_ROW2,
  CLIENTS 
}: HomeProps) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
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
                <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                  {t.about.paragraphs.map((p: string, idx: number) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <ScrollReveal delay={0.4}>
                  <Link to="/institucional" className="inline-flex items-center gap-2 text-brand-black font-black uppercase tracking-tighter hover:text-brand-yellow transition-colors group">
                    {t.nav.mvv} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </ScrollReveal>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- ESTRUTURA DA EMPRESA --- */}
      <section id="estrutura" className="py-16 md:py-24 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow/5 skew-x-12 transform translate-x-20"></div>
        
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <ScrollReveal className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl mb-4 text-white font-black uppercase tracking-tighter">{t.structure.title}</h2>
            <p className="text-brand-yellow font-bold tracking-[0.4em] uppercase text-xs md:text-sm">{t.structure.subtitle}</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="relative group">
              <div className="absolute -inset-4 border border-brand-yellow/20 group-hover:border-brand-yellow/50 transition-colors duration-500"></div>
              <img 
                src={STRUCTURE_IMG} 
                alt="Estrutura" 
                className="w-full h-auto transition-all duration-700 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 bg-brand-yellow text-brand-black p-4 md:p-6 font-bold text-lg md:text-xl shadow-xl">
                {t.structure.badge}
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              {t.structure.members.map((member: any, idx: number) => (
                <ScrollReveal key={member.name} delay={idx * 0.1} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow flex items-center justify-center text-brand-black font-black text-2xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl text-brand-yellow mb-1 font-black uppercase tracking-tight">{member.name}</h3>
                    {member.role && (
                      <p className="text-xs font-bold uppercase tracking-widest mb-3 text-white/60">{member.role}</p>
                    )}
                    <p className="text-gray-300 leading-relaxed font-medium">{member.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
              
              <ScrollReveal delay={0.4} className="pt-6 border-t border-brand-yellow/10">
                <p className="text-xl font-medium italic text-brand-yellow flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>{t.structure.footer}</span>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- GOVERNANÇA --- */}
      <section id="governanca" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 text-brand-black">{t.governance.title}</h2>
            <p className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6">{t.governance.subtitle}</p>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t.governance.desc}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex justify-center">
            <div className="relative w-full max-w-5xl shadow-2xl rounded-sm overflow-hidden border border-brand-gray-medium">
              <img 
                src={GOVERNANCE_IMG} 
                alt="Mapa Mental de Governança" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- COMO TRABALHAMOS --- */}
      <section id="trabalho" className="py-16 md:py-24 bg-brand-gray-light overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <ScrollReveal className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl mb-4 text-brand-black">{t.howWeWork.title}</h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">{t.howWeWork.desc}</p>
          </ScrollReveal>

          {/* Scrolling Work Photos */}
          <div className="space-y-8">
            {/* Row 1: Moving Right */}
            <div className="relative">
              <div className="flex animate-infinite-scroll w-fit">
                {[...HOW_WE_WORK_ROW1, ...HOW_WE_WORK_ROW1].map((img, idx) => (
                  <div key={`work-right-${idx}`} className="flex-shrink-0 w-60 md:w-96 px-3 md:px-4">
                    <div className="bg-white rounded-sm overflow-hidden shadow-md border border-brand-gray-medium/30">
                      <img 
                        src={img} 
                        alt={`Work Before/After ${idx}`} 
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Moving Left */}
            <div className="relative">
              <div className="flex animate-infinite-scroll-reverse w-fit">
                {[...HOW_WE_WORK_ROW2, ...HOW_WE_WORK_ROW2].map((img, idx) => (
                  <div key={`work-left-${idx}`} className="flex-shrink-0 w-60 md:w-96 px-3 md:px-4">
                    <div className="bg-white rounded-sm overflow-hidden shadow-md border border-brand-gray-medium/30">
                      <img 
                        src={img} 
                        alt={`Work Before/After ${idx}`} 
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIÊNCIA / AUTORIDADE --- */}
      <section className="py-16 md:py-24 bg-white">
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
      <section id="clientes" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 mb-12 md:mb-16 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl mb-4 text-brand-black">{t.clients.title}</h2>
            <p className="text-gray-600 text-base md:text-lg">{t.clients.desc}</p>
          </ScrollReveal>
        </div>

        {/* Scrolling Logotypes */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-infinite-scroll flex items-center justify-around gap-12 py-12 whitespace-nowrap min-w-full">
            {CLIENTS.map((client) => (
              <div key={client.name} className="flex-shrink-0 flex items-center justify-center h-20 md:h-28 w-40 md:w-56 px-4">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain transition-all" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="animate-infinite-scroll flex items-center justify-around gap-12 py-12 whitespace-nowrap min-w-full" aria-hidden="true">
            {CLIENTS.map((client) => (
              <div key={`${client.name}-duplicate`} className="flex-shrink-0 flex items-center justify-center h-20 md:h-28 w-40 md:w-56 px-4">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain transition-all" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" className="py-16 md:py-24 bg-brand-gray-light">
        <div className="container mx-auto px-4 md:px-12">
          <ScrollReveal className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 text-brand-black">{t.team.title}</h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">{t.team.desc}</p>
          </ScrollReveal>

          {/* Scrolling Team Photos */}
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
  );
}
