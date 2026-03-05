const inclusions = [
  "Acesso ao Workshop Presencial (21/03 — 13h às 18h)",
  "Coffee Break",
  "Exercícios Sistêmicos individuais e/ou em grupos guiados",
  "Áudios de Ativação e Integração pré-encontro",
  "Participação na Comunidade de Workshops de Constelações Familiares da Silvia Mattos com acesso a promoções exclusivas",
  "ENTRADA GRATUITA para quem vai somente PARTICIPAR e não ser Constelada",
];

export default function InclusionsSection() {
  return (
    <section className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 max-w-3xl mx-auto">
          O que está incluso na sua inscrição
        </h2>

        <div className="fade-up grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {inclusions.map((item, i) => (
            <div key={i} className="card-cream border border-terracotta/15 card-hover">
              <span className="gold-text text-2xl block mb-3">✅</span>
              <p className="font-body text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
