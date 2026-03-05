const benefits = [
  "Clareza para enxergar onde você se colocou sem perceber (e por quê)",
  "Um \"destravamento\" interno para ocupar seu espaço (sem medo de incomodar)",
  "Mais paz para decidir: fico, mudo, vou embora, recomeço — sem caos emocional",
  "Um novo jeito de se relacionar: menos \"mãe/salvadora/gerente emocional\", mais mulher presente",
  "Reconstrução das relações familiares com restabelecimento do fluxo de amor",
  "Força e lucidez para sustentar a mudança depois do encontro",
];

export default function BenefitsSection() {
  return (
    <section className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 max-w-4xl mx-auto leading-tight">
          O que você vai levar desse encontro <span className="terracotta-text">(na prática)</span>
        </h2>

        <div className="fade-up grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="card-cream border border-terracotta/20 card-hover">
              <span className="gold-text text-2xl block mb-3">✅</span>
              <p className="font-body text-lg leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        <div className="fade-up text-center">
          <a href="#preco" className="cta-button inline-block">QUERO GARANTIR MINHA VAGA PARA 21/03</a>
          <p className="font-body text-sm mt-3 opacity-70">Vagas limitadas por ser presencial e em grupo</p>
        </div>
      </div>
    </section>
  );
}
