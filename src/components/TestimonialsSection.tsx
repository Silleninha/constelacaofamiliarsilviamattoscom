const testimonials = [
  { text: "Fui Constelar meu vício. Descobri que ele começou há muito tempo com meus ancestrais e que eu seguia o mesmo caminho para poder pertencer. Foi um lindo trabalho de liberação. Sou muito grata ao trabalho da Silvia.", name: "Maria Luiza L.", age: "55 anos" },
  { text: "Eu saí mais leve da Constelação porque vi que eu tava carregando o peso da minha mãe... como se eu tivesse que 'pagar' por ela. Quando eu soltei isso, meu corpo até respirou diferente e a dor no meu ombro sumiu.", name: "Sandra B.", age: "43 anos" },
  { text: "Eu destravei porque entendi que eu me sabotava quando as coisas iam dar certo, pra não 'ultrapassar' o meu pai que não conseguiu ter sucesso na vida. Por isso eu não me permitia ir mais longe.", name: "Érica F.", age: "45 anos" },
  { text: "Eu vivia cansada e vi durante minha Constelação que eu estava no lugar de 'salvar' todo mundo. Quando eu saí desse papel, a vida ficou mais simples e bem mais leve.", name: "Hedilene S.", age: "52 anos" },
  { text: "Eu parei de brigar tanto em casa porque vi que eu tava repetindo a mesma guerra que eu cresci vendo. Não era 'meu jeito', era padrão antigo herdado da minha avó e mãe.", name: "Denise T.", age: "51 anos" },
  { text: "A Constelação foi uma virada de chave na minha vida porque entendi de onde vinha meu medo de ficar sozinha: eu tava presa numa história de abandono da família. Quando eu vi isso, eu parei de aceitar migalha.", name: "Renata C.", age: "48 anos" },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 gold-text">
          Depoimentos
        </h2>

        <div className="fade-up grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="card-cream rounded-2xl card-hover">
              <p className="font-body text-base leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="font-body font-bold terracotta-text">— {t.name}, {t.age}</p>
            </div>
          ))}
        </div>

        <div className="fade-up text-center">
          <a href="#preco" className="cta-button inline-block">QUERO SER A PRÓXIMA</a>
        </div>
      </div>
    </section>
  );
}
