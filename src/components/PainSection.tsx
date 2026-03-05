const bullets = [
  "Culpa por dizer não (e se sente má só por se priorizar)",
  "Invisibilidade (\"eu faço tudo e ninguém me vê\")",
  "Repetição de padrões no amor (indisponibilidade, frieza, controle, abandono)",
  "Um cansaço que não passa, mesmo dormindo",
  "Sintomas recorrentes sem causa aparente",
  "Trava de merecimento (\"quando começa a dar certo, algo em mim freia\")",
];

export default function PainSection() {
  return (
    <section className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 max-w-4xl mx-auto leading-tight">
          Você pode estar vivendo uma vida "organizada" por fora...{" "}
          <span className="terracotta-text">mas por dentro sente:</span>
        </h2>

        <div className="fade-up grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3 p-4">
              <span className="w-3 h-3 rounded-full bg-terracotta mt-1.5 shrink-0" />
              <p className="font-body text-lg leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        <div className="fade-up max-w-3xl mx-auto card-cream border-l-4 border-terracotta mb-12">
          <p className="font-serif text-xl md:text-2xl font-bold mb-3">Isso não é drama.</p>
          <p className="font-body text-lg leading-relaxed">
            Muitas vezes é <strong>lealdade invisível</strong>: você carregando o que não é seu, ocupando um lugar que não te cabe, tentando pertencer do jeito antigo.
          </p>
        </div>

        <div className="fade-up text-center">
          <a href="#preco" className="cta-button inline-block">QUERO GARANTIR MINHA VAGA</a>
        </div>
      </div>
    </section>
  );
}
