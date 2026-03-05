export default function ScienceSection() {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 gold-text max-w-4xl mx-auto">
          Tá, mas constelação funciona mesmo ou é misticismo?
        </h2>

        <div className="fade-up max-w-3xl mx-auto space-y-6">
          <div className="card-dark">
            <p className="font-body text-lg text-foreground/90 leading-relaxed">
              Constelação Familiar é uma <strong className="gold-text">abordagem fenomenológica/sistêmica</strong>: ao organizar elementos do seu sistema (família/relacionamentos), ela ajuda a tornar visíveis padrões que você não enxerga apenas "pensando".
            </p>
          </div>

          <div className="card-dark border border-gold/30">
            <p className="font-serif text-xl font-bold gold-text leading-relaxed">
              Você não precisa acreditar em nada. Você precisa estar disponível para observar e testar na vida real com integração.
            </p>
          </div>
        </div>

        {/* Rational arguments */}
        <h3 className="fade-up font-serif text-2xl md:text-3xl font-bold text-center mt-20 mb-10 text-foreground">
          Argumentos racionais <span className="text-foreground/50">(para a parte cética do seu cérebro)</span>
        </h3>

        <div className="fade-up grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Padrões repetidos raramente mudam só com \"força de vontade\" porque são sustentados por lealdades emocionais e aprendizados familiares.",
            "Quando você muda o seu lugar interno (limite, prioridade, merecimento), o sistema reage, e você precisa de estrutura para sustentar a mudança sem culpa.",
            "Em grupo, você aprende com o campo do outro: muitas vezes você vê o seu padrão refletido e isso acelera insights e integração.",
          ].map((text, i) => (
            <div key={i} className="card-dark card-hover">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center mb-4">
                <span className="gold-text font-serif font-bold text-lg">{i + 1}</span>
              </div>
              <p className="font-body text-foreground/90 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
