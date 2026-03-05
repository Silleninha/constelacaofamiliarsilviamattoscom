export default function EventDetailsSection() {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 gold-text">
          Detalhes do evento
        </h2>

        <div className="fade-up max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {[
            { icon: "📅", label: "Data", value: "21/03/2026" },
            { icon: "🕐", label: "Horário", value: "13h às 18h (5 horas)" },
            { icon: "📍", label: "Local", value: "Perdizes/SP (endereço completo após confirmação)" },
            { icon: "💛", label: "Formato", value: "Presencial em Grupo com condução e estrutura de segurança emocional" },
          ].map((d, i) => (
            <div key={i} className="card-dark card-hover flex items-start gap-4">
              <span className="text-3xl">{d.icon}</span>
              <div>
                <p className="font-body text-sm gold-text uppercase tracking-wider">{d.label}</p>
                <p className="font-body text-lg text-foreground">{d.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center">
          <a href="#preco" className="cta-button inline-block">QUERO MINHA VAGA PARA 21/03</a>
        </div>
      </div>
    </section>
  );
}
