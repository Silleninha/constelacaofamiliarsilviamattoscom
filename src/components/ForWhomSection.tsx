const forYou = [
  "Você quer se escolher sem culpa",
  "Se sente invisível na família, no casamento, no trabalho",
  "Está cansada de repetir relacionamento com indisponibilidade, frieza, controle, abandono ou traição",
  "Vive forte por fora e quebrada por dentro, e não quer mais \"aguentar\"",
  "Sente travas de merecimento: medo de crescer, cobrar, receber, prosperar",
  "Está no climatério/menopausa, ninho vazio, recomeços e sente \"quem sou eu agora?\"",
  "Está pronta para olhar com lucidez e dar um passo real",
];

const notForYou = [
  "Você quer \"uma solução mágica\" ou vem para provar que não funciona",
];

export default function ForWhomSection() {
  return (
    <section className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 max-w-3xl mx-auto">
          Para quem é este Workshop
        </h2>
        <p className="fade-up font-body text-lg text-center mb-14 opacity-70">
          Este encontro foi pensado para mulheres que estão prontas para uma transformação real
        </p>

        <div className="fade-up grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For you */}
          <div className="card-cream border-2 border-forest/30 rounded-2xl">
            <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: "hsl(150, 38%, 15%)" }}>
              Este workshop É para você se:
            </h3>
            <div className="space-y-4">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="gold-text text-lg shrink-0">✅</span>
                  <p className="font-body">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not for you */}
          <div className="card-cream border-2 border-destructive/30 rounded-2xl">
            <h3 className="font-serif text-2xl font-bold mb-6 terracotta-text">
              NÃO é para você se:
            </h3>
            <div className="space-y-4">
              {notForYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="terracotta-text text-lg shrink-0">❌</span>
                  <p className="font-body">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
