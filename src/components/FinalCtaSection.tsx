export default function FinalCtaSection() {
  return (
    <section className="section-dark py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="scroll-words text-8xl font-serif font-bold gold-text absolute bottom-10">
          {"CULPA • PADRÃO • ANCESTRAL • LIBERAÇÃO • SISTEMA • LINHAGEM • PERTENCIMENTO • RAIZ • ".repeat(3)}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="fade-up font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed max-w-3xl mx-auto mb-10">
          Você chegou até aqui porque algo em você sabe que é hora. Não de mais uma teoria.{" "}
          <span className="gold-text">De um movimento real.</span>
        </p>

        <div className="fade-up flex flex-wrap justify-center gap-3 mb-8">
          <span className="pill-info">📅 21/03/2026</span>
          <span className="pill-info">📍 Perdizes/SP</span>
          <span className="pill-info">🕐 13h-18h</span>
          <span className="pill-info">☕ Coffee Break</span>
          <span className="pill-info">🎧 Áudios</span>
          <span className="pill-info">👥 Comunidade</span>
        </div>

        <p className="fade-up font-serif text-3xl md:text-4xl font-bold gold-text mb-2">R$ 507,00 à vista</p>
        <p className="fade-up font-body text-lg text-foreground/70 mb-10">ou 12x de R$ 54,16</p>

        <div className="fade-up">
          <a href="#preco" className="cta-button inline-block text-lg md:text-xl px-12 py-5">
            SIM, QUERO SOLTAR ESSE PESO — GARANTIR MINHA VAGA
          </a>
          <p className="font-body text-sm mt-4 text-foreground/50">Vagas limitadas</p>
        </div>
      </div>
    </section>
  );
}
