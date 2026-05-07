import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Governanca({ t, GOVERNANCE_IMG }: { t: any, GOVERNANCE_IMG: string }) {
  return (
    <div className="min-h-screen bg-white pt-[100px]">
      <section className="py-24 md:py-32 relative overflow-hidden">
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
            <div className="relative w-full max-w-5xl shadow-2xl rounded-sm overflow-hidden border border-brand-gray-medium">
              <img 
                src={GOVERNANCE_IMG} 
                alt="Mapa Mental de Governança" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </ScrollReveal>

          <div className="mt-24 grid md:grid-cols-3 gap-12 text-center">
            <ScrollReveal delay={0.3} className="space-y-4">
              <div className="w-16 h-16 bg-brand-yellow flex items-center justify-center mx-auto text-brand-black font-black text-2xl">01</div>
              <h3 className="text-xl font-black uppercase tracking-tight text-brand-black">Planejamento</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Definição clara de objetivos e metas para cada projeto, garantindo viabilidade e eficiência.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="space-y-4">
              <div className="w-16 h-16 bg-brand-yellow flex items-center justify-center mx-auto text-brand-black font-black text-2xl">02</div>
              <h3 className="text-xl font-black uppercase tracking-tight text-brand-black">Execução</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Acompanhamento contínuo das etapas operacionais com foco em qualidade e segurança.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.5} className="space-y-4">
              <div className="w-16 h-16 bg-brand-yellow flex items-center justify-center mx-auto text-brand-black font-black text-2xl">03</div>
              <h3 className="text-xl font-black uppercase tracking-tight text-brand-black">Controle</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Auditoria e análise de resultados para melhoria contínua dos processos internos.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
