import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, MessageSquare, AlertTriangle, Network, CheckCircle2, XCircle, Info, Mail, Phone } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Governanca({ t, GOVERNANCE_IMG }: { t: any, GOVERNANCE_IMG: string }) {
  const STRUCTURE_IMG = "https://i.imgur.com/AvHqbLt.jpeg";

  return (
    <div className="min-h-screen bg-white pt-[100px]">
      {/* --- HERO SECTION --- */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-brand-gray-light">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <ScrollReveal className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-brand-black/50 hover:text-brand-yellow font-bold uppercase tracking-widest text-xs transition-colors">
               <ArrowLeft size={16} /> Voltar
            </Link>
          </ScrollReveal>

          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="text-brand-yellow font-black tracking-[0.4em] text-xs md:text-sm mb-4 block uppercase leading-none">Gestão e Transparência</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-brand-black leading-none">{t.governance.title}</h2>
            <div className="w-24 h-2 bg-brand-yellow mx-auto mt-8 mb-8"></div>
            <p className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6">{t.governance.subtitle}</p>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t.governance.desc}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex justify-center">
            <div className="relative w-full max-w-5xl shadow-2xl rounded-sm overflow-hidden border border-brand-gray-medium bg-white">
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

      {/* --- CÓDIGO DE CONDUTA --- */}
      <section id="conduta" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <ScrollReveal className="text-center mb-16">
            <ShieldCheck className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-black mb-6">{t.governance.ethics.title}</h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">{t.governance.ethics.text}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} className="bg-brand-gray-light p-8 rounded-sm">
              <h3 className="text-xl font-black uppercase tracking-tight text-brand-black mb-6 border-l-4 border-brand-yellow pl-4">
                {t.governance.ethics.principles.title}
              </h3>
              <ul className="space-y-4">
                {t.governance.ethics.principles.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={18} className="text-brand-yellow shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="bg-brand-gray-light p-8 rounded-sm">
              <h3 className="text-xl font-black uppercase tracking-tight text-brand-black mb-6 border-l-4 border-brand-yellow pl-4">
                {t.governance.ethics.rules.title}
              </h3>
              <ul className="space-y-4">
                {t.governance.ethics.rules.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={18} className="text-brand-yellow shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="bg-brand-gray-light p-8 rounded-sm">
              <h3 className="text-xl font-black uppercase tracking-tight text-brand-black mb-6 border-l-4 border-brand-yellow pl-4">
                {t.governance.ethics.forbidden.title}
              </h3>
              <ul className="space-y-4">
                {t.governance.ethics.forbidden.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                    <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} className="mt-16 text-center">
            <div className="inline-block bg-brand-black text-white px-8 py-6 rounded-sm italic font-medium text-lg md:text-xl border-l-8 border-brand-yellow">
              {t.governance.ethics.quote}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- CANAL DE DENÚNCIA --- */}
      <section id="denuncia" className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <MessageSquare className="w-12 h-12 text-brand-yellow mb-6" />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-black mb-6">{t.governance.compliance.title}</h2>
              <p className="text-gray-600 text-lg mb-8">{t.governance.compliance.text}</p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-brand-black mb-4 flex items-center gap-2">
                    <Info size={20} className="text-brand-yellow" />
                    {t.governance.compliance.purpose.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {t.governance.compliance.purpose.items.map((item: string, i: number) => (
                      <span key={i} className="bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-black border border-brand-gray-medium rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {t.governance.compliance.contact.email && (
                    <div className="bg-white p-6 rounded-sm border border-brand-gray-medium flex items-center gap-4">
                      <Mail className="text-brand-yellow shrink-0" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-yellow leading-none mb-1">E-MAIL</p>
                        <p className="text-sm font-bold text-brand-black">{t.governance.compliance.contact.email.replace("E-mail: ", "").replace("Email: ", "")}</p>
                      </div>
                    </div>
                  )}
                  {t.governance.compliance.contact.whatsapp && (
                    <div className="bg-white p-6 rounded-sm border border-brand-gray-medium flex items-center gap-4">
                      <Phone className="text-brand-yellow shrink-0" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-yellow leading-none mb-1">WHATSAPP</p>
                        <p className="text-sm font-bold text-brand-black">{t.governance.compliance.contact.whatsapp.replace("WhatsApp: ", "")}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-8">
              <div className="bg-brand-black text-white p-10 rounded-sm">
                <h3 className="text-2xl font-black uppercase tracking-tight text-brand-yellow mb-6">
                  {t.governance.compliance.reportable.title}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {t.governance.compliance.reportable.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-brand-gray-light">
                      <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-yellow p-10 rounded-sm text-brand-black">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6">
                  {t.governance.compliance.guarantees.title}
                </h3>
                <ul className="space-y-3">
                  {t.governance.compliance.guarantees.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-sm">
                      <CheckCircle2 size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- COMBATE À CORRUPÇÃO --- */}
      <section id="corrupcao" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <ScrollReveal className="text-center mb-16">
            <AlertTriangle className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-black mb-6">{t.governance.antiCorruption.title}</h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">{t.governance.antiCorruption.text}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            <ScrollReveal delay={0.1} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-100 flex items-center justify-center rounded-sm">
                  <XCircle className="text-red-600" size={20} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-brand-black">{t.governance.antiCorruption.prohibited.title}</h3>
              </div>
              <ul className="space-y-4">
                {t.governance.antiCorruption.prohibited.items.map((item: string, i: number) => (
                  <li key={i} className="text-gray-600 border-b border-brand-gray-light pb-2 text-sm">{item}</li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-brand-gray-light flex items-center justify-center rounded-sm">
                  <CheckCircle2 className="text-brand-yellow" size={20} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-brand-black">{t.governance.antiCorruption.commitments.title}</h3>
              </div>
              <ul className="space-y-4">
                {t.governance.antiCorruption.commitments.items.map((item: string, i: number) => (
                  <li key={i} className="text-gray-600 border-b border-brand-gray-light pb-2 text-sm">{item}</li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-brand-black flex items-center justify-center rounded-sm">
                  <ShieldCheck className="text-brand-yellow" size={20} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-brand-black">{t.governance.antiCorruption.penalties.title}</h3>
              </div>
              <ul className="space-y-4">
                {t.governance.antiCorruption.penalties.items.map((item: string, i: number) => (
                  <li key={i} className="text-red-700 font-medium text-sm border-b border-red-50 pb-2">{item}</li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- ESTRUTURA DA EMPRESA --- */}
      <section className="py-24 bg-brand-gray-light border-t border-brand-gray-medium">
        <div className="container mx-auto px-4 md:px-12">
          <ScrollReveal className="text-center mb-16">
            <Network className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-black mb-6">{t.governance.orgStructure.title}</h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">{t.governance.orgStructure.text}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex justify-center">
            <div className="relative w-full max-w-5xl shadow-2xl rounded-sm overflow-hidden border border-brand-gray-medium bg-white p-4 md:p-8">
              <img 
                src={STRUCTURE_IMG} 
                alt="Estrutura Organizacional Direx" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
