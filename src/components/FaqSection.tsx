import { useState } from "react";

const mainFaqs = [
  { q: "Workshop em grupo vai me expor?", a: "Não. O espaço é seguro e acolhedor. Você participa no seu ritmo e não precisa compartilhar nada que não queira. A Silvia conduz com cuidado e firmeza para que cada pessoa se sinta respeitada." },
  { q: "E se eu chorar, travar ou passar vergonha?", a: "Chorar é natural e faz parte do processo de liberação. Travar também é normal — o corpo processa no seu tempo. Não há vergonha: todas estão ali pelo mesmo motivo. O grupo sustenta." },
  { q: "Preciso falar da minha história?", a: "Não necessariamente. A Constelação trabalha com o campo sistêmico, então muitas vezes o padrão se revela sem que você precise contar detalhes da sua vida." },
  { q: "Se eu for Constelada, meu casamento piora?", a: "A constelação não piora relações — ela revela o que já está ali. A partir dessa clareza, você pode fazer escolhas mais conscientes e saudáveis." },
  { q: "De quantas constelações eu preciso?", a: "Cada constelação é única. Muitas mulheres têm transformações profundas em uma única sessão. Outras sentem necessidade de aprofundar em encontros futuros. Não há regra fixa." },
  { q: "O que devo fazer depois de ser Constelada?", a: "Não é necessário agir imediatamente após sua Constelação; permita que as percepções do trabalho reverberem naturalmente. Os efeitos variam para cada indivíduo, pois tanto a mente consciente quanto a Alma processam o que foi revelado. Ambas se mobilizam para acolher as transformações e iluminar os próximos passos práticos em direção à solução." },
];

const practicalFaqs = [
  { q: "Posso ir sem nunca ter feito constelação?", a: "Sim, só precisa estar disposta a participar." },
  { q: "Tem contraindicação?", a: "Se estiver em crise psicológica aguda, o ideal é cuidado clínico especializado antes." },
  { q: "O que levar?", a: "Roupa confortável e disponibilidade para se observar." },
  { q: "Posso ir com amiga/irmã?", a: "Pode (desde que cada uma respeite seu processo)." },
  { q: "Posso levar cônjuge?", a: "SIM se você não for Constelada; NÃO se for." },
  { q: "Idade importa?", a: "Mínimo 16 anos acompanhado dos pais." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-body font-bold text-lg text-foreground pr-4">{q}</span>
        <span className="gold-text text-2xl shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-5 animate-fade-in-up">
          <p className="font-body text-foreground/80 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 gold-text">
          Dúvidas Frequentes
        </h2>

        <div className="fade-up mb-14">
          {mainFaqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
        </div>

        <h3 className="fade-up font-serif text-2xl font-bold mb-8 gold-text text-center">Perguntas Práticas</h3>
        <div className="fade-up grid md:grid-cols-2 gap-4 mb-10">
          {practicalFaqs.map((faq, i) => (
            <div key={i} className="card-dark rounded-xl p-5">
              <p className="font-body font-bold text-foreground mb-1">{faq.q}</p>
              <p className="font-body text-foreground/70">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="fade-up card-dark border border-gold/30">
          <p className="font-body text-foreground/80">
            <strong className="gold-text">Após a inscrição</strong>, você receberá orientações pelo WhatsApp da Comunidade.
          </p>
        </div>
      </div>
    </section>
  );
}
