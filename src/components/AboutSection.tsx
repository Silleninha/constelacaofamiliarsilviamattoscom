import silviaPhoto from "@/assets/silvia-mattos.jpg";

export default function AboutSection() {
  return (
    <section id="sobre" className="section-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="fade-up font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14">
          Quem conduz o Workshop de Constelação Familiar?
        </h2>

        <div className="fade-up flex flex-col md:flex-row gap-10 max-w-5xl mx-auto items-center">
          <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shrink-0 shadow-2xl">
            <img src={silviaPhoto} alt="Silvia Mattos - Facilitadora de Constelação Familiar" className="w-full h-full object-cover object-top" />
          </div>

          <div>
            <h3 className="font-serif text-3xl font-bold mb-2">Silvia Mattos</h3>
            <p className="font-body terracotta-text font-bold mb-6">Facilitadora de Constelação Familiar</p>

            <div className="space-y-4 font-body text-lg leading-relaxed">
              <p>Mentora sistêmica e terapeuta integrativa com mais de <strong>20 anos de experiência</strong> em ajudar mulheres a saírem do ciclo de culpa, invisibilidade e repetição emocional que sabota relacionamentos, autoestima e prosperidade.</p>
              <p>Com um olhar afiado e afetuoso, Silvia vai direto à raiz dos padrões familiares inconscientes que mantêm a mulher madura fora do seu lugar. Sua abordagem une ciência e espiritualidade com firmeza prática; sem misticismo raso, sem floreio vazio.</p>
              <p><strong>Pós-Graduada em Constelação Familiar Original Hellinger®</strong>, com repertório internacional em terapias integrativas, Silvia cria um espaço seguro e potente para que você volte a se enxergar, libere o que não é seu, e finalmente ocupe seu lugar com presença, coragem e leveza.</p>
              <p className="italic gold-text font-serif text-xl">Sua marca registrada? Acolhimento firme, bom-humor, clareza emocional e transformação real, da vida pra vida.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
