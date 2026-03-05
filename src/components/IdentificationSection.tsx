const items = [
  "\"Eu cansei de carregar todo mundo.\"",
  "\"Eu me escolho... e a culpa vem junto.\"",
  "\"Eu já fiz terapias, li livros... e o padrão continua.\"",
  "\"Quando tudo está bem, eu arrumo um problema — parece que eu não sei relaxar.\"",
  "\"Eu sou forte demais... e isso me condena a nunca ser cuidada.\"",
];

export default function IdentificationSection() {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 max-w-4xl mx-auto leading-tight">
          Leia isso com calma: <span className="gold-text">o padrão não começa em você...</span> mas pode terminar em você.
        </h2>

        <div className="fade-up max-w-2xl mx-auto card-dark">
          <p className="gold-text font-body text-lg mb-6 font-bold">Se você tem a sensação de que:</p>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-terracotta text-xl mt-0.5">♥</span>
                <p className="font-body text-lg text-foreground/90 italic">{item}</p>
              </div>
            ))}
          </div>
          <p className="font-serif text-xl font-bold gold-text mt-8">...então este workshop foi desenhado para você.</p>
        </div>
      </div>
    </section>
  );
}
