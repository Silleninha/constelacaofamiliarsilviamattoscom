const steps = [
  { num: 1, title: "Tema e intenção", desc: "O que você quer destravar agora" },
  { num: 2, title: "Mapa do padrão", desc: "O ciclo que se repete: no amor, na família, na vida" },
  { num: 3, title: "Dinâmicas sistêmicas", desc: "Dinâmicas familiares em grupo (com representantes)" },
  { num: 4, title: "Reposicionamento", desc: "O \"lugar\" que devolve força, limite e paz" },
  { num: 5, title: "Integração prática", desc: "Visão clara do que fazer depois para sustentar a mudança" },
];

export default function WorkshopSection() {
  return (
    <section id="workshop" className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 gold-text">
          O que é este workshop
        </h2>

        <div className="fade-up max-w-3xl mx-auto card-dark mb-12">
          <p className="font-body text-lg text-foreground/90 leading-relaxed">
            Um encontro presencial, em grupo, para revelar e liberar padrões invisíveis que sustentam culpa, invisibilidade, repetição nos relacionamentos e travas de merecimento — usando <strong className="gold-text">Constelação Familiar aplicada à vida real</strong>.
          </p>
        </div>

        <div className="fade-up max-w-3xl mx-auto space-y-6 mb-12">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center shrink-0 font-body font-bold text-foreground">
                {s.num}
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-foreground">{s.title}</p>
                <p className="font-body text-foreground/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up max-w-3xl mx-auto card-dark border-l-4 border-terracotta">
          <p className="font-body text-foreground/90 leading-relaxed">
            <strong className="gold-text">Importante:</strong> você pode participar de forma segura, inclusive como representante. Nem todo mundo é Constelado no mesmo dia, e ainda assim, sai mexido "no ponto certo".
          </p>
        </div>
      </div>
    </section>
  );
}
