import heroBg from "@/assets/hero-bg.jpg";

const words = "CULPA • PADRÃO • ANCESTRAL • LIBERAÇÃO • SISTEMA • LINHAGEM • PERTENCIMENTO • RAIZ • ";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-forest-deep/60" />

      {/* Scrolling words */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden opacity-[0.27] pointer-events-none">
        <div className="scroll-words text-6xl md:text-8xl font-serif font-bold gold-text">
          {words.repeat(4)}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-24 pb-16">
        <div className="fade-up inline-block mb-8 border border-gold/40 rounded-lg px-6 py-3 bg-forest-deep/60 backdrop-blur-sm">
          <p className="text-sm tracking-[0.2em] uppercase gold-text font-body">Workshop de</p>
          <p className="font-serif text-2xl md:text-3xl font-bold gold-text">Constelação Familiar</p>
          <p className="text-sm tracking-[0.15em] uppercase gold-text font-body">Silvia Mattos</p>
        </div>

        <h1 className="fade-up font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
          <span className="text-foreground">Você não precisa aguentar mais:</span>
          <br />
          <span className="gold-text">Você precisa soltar o que te pesa</span>
          <br />
          <span className="text-foreground">e que nem é seu.</span>
        </h1>

        <p className="fade-up text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-body leading-relaxed">
          Um encontro presencial e profundo para liberar culpa crônica, repetição no amor, conflitos familiares e a trava do merecimento.
        </p>

        <div className="fade-up flex flex-wrap justify-center gap-3 mb-10">
          <span className="pill-info">📅 21/03/2026 – Sábado</span>
          <span className="pill-info">🕐 13h às 18h</span>
          <span className="pill-info">📍 Perdizes/SP</span>
        </div>

        <div className="fade-up">
          <a href="#preco" className="cta-button inline-block text-lg">
            SIM, QUERO SOLTAR ESSE PESO
          </a>
        </div>
      </div>
    </section>
  );
}
