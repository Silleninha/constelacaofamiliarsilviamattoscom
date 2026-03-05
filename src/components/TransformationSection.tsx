const changes = [
  "A culpa deixa de ser um chicote e vira sinal (você acessa a verdadeira causa do problema)",
  "Você volta a se enxergar e a ser vista, sem precisar brigar por atenção",
  "Você sente uma calma firme: \"eu posso me escolher e seguir em paz\"",
  "Você para de negociar sua dignidade para manter pertencimento",
  "Você volta a assumir o seu lugar de direito dentro do sistema",
  "Você se liberta das travas que te impedem de \"merecer\" sucesso e prosperidade",
  "Você integra a \"força\" da sua ancestralidade para fazer a vida fluir",
  "Você descobre e acessa a causa mais profunda por trás de seus sintomas",
];

export default function TransformationSection() {
  return (
    <section className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 max-w-3xl mx-auto">
          O que muda por dentro
        </h2>
        <p className="fade-up font-body text-lg text-center mb-14 opacity-70">
          Você não sai "perfeita". Você sai mais inteira.
        </p>

        <div className="fade-up grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {changes.map((c, i) => (
            <div key={i} className="card-cream border border-terracotta/15 card-hover flex items-start gap-3">
              <span className="gold-text text-xl shrink-0">✦</span>
              <p className="font-body text-lg leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
