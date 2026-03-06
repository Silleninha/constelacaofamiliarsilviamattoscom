export default function PricingSection() {
  return (
    <section id="preco" className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Price Card */}
          <div className="fade-up card-cream border-2 border-gold/30 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-terracotta py-2 text-center">
              <span className="font-body font-bold text-sm uppercase tracking-wider" style={{ color: "white" }}>LOTE 1</span>
            </div>

            <div className="pt-14">
              <div className="bg-gold/10 rounded-lg p-4 mb-6 border border-gold/20">
                <p className="font-body text-sm font-bold">⚡ APROVEITE O DESCONTO! Preço promocional por tempo limitado</p>
              </div>

              <p className="font-body text-lg line-through opacity-50">De: R$ 597,00</p>
              <p className="font-serif text-5xl md:text-6xl font-bold gold-text my-3">R$ 507,00</p>
              <p className="font-body text-lg opacity-80">à vista</p>
              <p className="font-body text-base mt-2">ou <strong>12x de R$ 54,16</strong> no cartão</p>

              <div className="bg-gold/20 rounded-lg p-5 mt-6 border-2 border-gold/50 shadow-[0_0_20px_hsl(37,72%,47%,0.2)]">
                <p className="font-body font-bold text-lg gold-text">⭐ GRATUITO PARA PARTICIPANTES QUE NÃO VÃO SER CONSTELADOS</p>
              </div>

              <p className="font-body text-sm mt-4 opacity-60">Economia de R$ 90,00 | Lote 1 válido apenas até 13/03/2026</p>

              <a href="#preco" className="cta-button inline-block w-full text-center mt-8">
                SIM, QUERO GARANTIR MINHA VAGA
              </a>

              <p className="font-body text-xs mt-4 text-center opacity-50">
                Vagas limitadas para garantir qualidade do processo em grupo
              </p>
            </div>
          </div>

          {/* Commitment Card */}
          <div className="fade-up card-dark rounded-2xl">
            <h3 className="font-serif text-2xl font-bold gold-text mb-6">COMPROMISSO DE INTEGRIDADE</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              Por ser um workshop presencial, com vagas limitadas e preparação de estrutura/energia do grupo, não trabalhamos com garantia de reembolso após a compra. Mas eu não quero que você entre se sentindo "presa". Se acontecer algum imprevisto, você pode:
            </p>

            <div className="space-y-3 mb-8">
              <p className="font-body text-foreground">✅ Transferir sua vaga para uma próxima data</p>
              <p className="font-body text-foreground">✅ Indicar outra pessoa para usar sua vaga (até 2 dias antes)</p>
            </div>

            <div className="card-dark border border-gold/30 rounded-xl">
              <p className="font-body text-foreground/80 leading-relaxed">
                <strong className="gold-text">Importante:</strong> se você tem dúvida se esse encontro é para você, me chama no WhatsApp antes de comprar. A ideia não é "comprar no impulso". É entrar com presença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
