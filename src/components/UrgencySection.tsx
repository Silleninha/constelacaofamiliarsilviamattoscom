const ifNothing = [
  "repetindo o mesmo tipo de relação",
  "engolindo a própria vida para manter a paz dos outros",
  "travando na hora de crescer e receber",
  "se culpando por querer leveza",
  "vivendo funcional... e sem alma",
  "sentindo os mesmos sintomas físicos",
];

const ifYouAct = [
  "você se escolhe com calma",
  "você volta a se enxergar (e a ser vista)",
  "você ocupa espaço sem pedir desculpa por existir",
  "você decide sem medo de desabar",
];

export default function UrgencySection() {
  return (
    <section className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14">
          Se você não fizer nada, vai continuar...
        </h2>

        <div className="fade-up space-y-3 mb-14">
          {ifNothing.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-2">
              <span className="opacity-40 text-lg">—</span>
              <p className="font-body text-lg opacity-60">{item}</p>
            </div>
          ))}
        </div>

        <div className="fade-up">
          <p className="font-serif text-2xl font-bold mb-8 terracotta-text">
            Mas se você der esse passo agora, pode ser o começo de uma fase onde:
          </p>
          <div className="space-y-3">
            {ifYouAct.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-2">
                <span className="terracotta-text text-lg">●</span>
                <p className="font-body text-lg font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
