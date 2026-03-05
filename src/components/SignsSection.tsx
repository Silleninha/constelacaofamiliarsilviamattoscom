const signs = [
  { check: "Se sente responsável por todo mundo", insight: "Isso é amor... mas amor confundido com peso." },
  { check: "Trava para cobrar/crescer", insight: "Talvez crescer pareça desleal com alguém da família." },
  { check: "Culpa ao descansar", insight: "Você aprendeu que só merece quando sofre." },
  { check: "Precisa se provar para ser amada", insight: "Você tenta comprar pertencimento." },
  { check: "Medo de dar certo", insight: "O sucesso parece um rompimento com o clã." },
  { check: "Freia quando se destaca", insight: "Uma parte quer brilhar; outra quer pertencer." },
  { check: "Conflito com pais/filhos", insight: "Quando a ordem se rompe, o amor vira luta." },
];

export default function SignsSection() {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 gold-text max-w-4xl mx-auto">
          Demonstração rápida: como você percebe que está no lugar errado
        </h2>

        <div className="fade-up max-w-3xl mx-auto card-dark">
          <p className="font-body text-lg mb-8 text-foreground/80">
            Se você se identifica com <strong className="gold-text">2 ou mais itens</strong> abaixo, o sistema está te puxando:
          </p>

          <div className="space-y-5">
            {signs.map((s, i) => (
              <div key={i}>
                <p className="font-body font-bold text-foreground">✓ {s.check}</p>
                <p className="font-body italic text-foreground/60 ml-6">"{s.insight}"</p>
              </div>
            ))}
          </div>

          <p className="font-body text-foreground/70 mt-8 pt-6 border-t border-border">
            Durante uma Constelação Familiar, o padrão mostra onde está se apoiando e ali mostra-se uma saída.
          </p>
        </div>
      </div>
    </section>
  );
}
