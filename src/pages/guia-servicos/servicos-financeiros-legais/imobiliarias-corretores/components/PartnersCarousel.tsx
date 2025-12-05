import { useState, useEffect } from 'react';

interface Partner {
  name: string;
  description: string;
  image: string;
}

interface PartnersCarouselProps {
  partners: Partner[];
}

export default function PartnersCarousel({ partners }: PartnersCarouselProps) {
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerSlide((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <div className="w-full mb-6">
      <div className="px-4 mb-4">
        <h3 className="text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2">
          <i className="ri-star-line text-yellow-400" />
          Parceiros em Destaque
          <i className="ri-star-line text-yellow-400" />
        </h3>
        <p className="text-white/70 text-xs text-center mt-1">
          Conheça nossos parceiros de confiança
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPartnerSlide * 280}px)` }}
        >
          {[...partners, ...partners.slice(0, 3)].map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-64 mx-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 flex items-center justify-center mb-3 flex-shrink-0">
                    <img
                      alt={partner.name}
                      className="w-full h-full object-cover"
                      src={partner.image}
                    />
                  </div>
                  <h4 className="text-white font-bold text-sm leading-tight mb-1">
                    {partner.name}
                  </h4>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-green-300 text-xs font-medium">
                      Parceiro Oficial
                    </span>
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-3 flex-grow">
                    {partner.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
                    <span>Clique para visitar</span>
                    <i className="ri-arrow-right-line text-xs" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {partners.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentPartnerSlide(dotIndex)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentPartnerSlide === dotIndex
                  ? 'bg-white w-6'
                  : 'bg-white/40 hover:bg-white/60 w-1.5'
              }`}
              aria-label={`Ir para parceiro ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
