import { useState, useEffect } from "react";

const scrollToPrice = () => {
  document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest-deep/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <span className="font-serif text-2xl font-bold gold-text cursor-pointer" onClick={() => scrollTo("hero")}>
          Silvia Mattos
        </span>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("sobre")} className="text-foreground/80 hover:text-foreground transition-colors font-body text-sm tracking-wide">
            Sobre
          </button>
          <button onClick={() => scrollTo("workshop")} className="text-foreground/80 hover:text-foreground transition-colors font-body text-sm tracking-wide">
            Workshop
          </button>
          <button onClick={() => scrollTo("depoimentos")} className="text-foreground/80 hover:text-foreground transition-colors font-body text-sm tracking-wide">
            Depoimentos
          </button>
          <button onClick={scrollToPrice} className="cta-button !py-2 !px-6 !text-sm">
            INSCREVER
          </button>
        </div>
        <button onClick={scrollToPrice} className="md:hidden cta-button !py-2 !px-5 !text-xs">
          INSCREVER
        </button>
      </div>
    </nav>
  );
}
