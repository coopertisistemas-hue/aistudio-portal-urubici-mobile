import { useState, useEffect } from 'react';

interface FeaturedAd {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  isAd: boolean;
}

interface FeaturedAdsCarouselProps {
  ads: FeaturedAd[];
}

export default function FeaturedAdsCarousel({ ads }: FeaturedAdsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % ads.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, ads.length]);

  return (
    <div className="px-4 mb-6">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {ads.map((ad, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 hover:scale-105">
                <a
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`${ad.title} — ${ad.subtitle}`}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <img
                      alt={ad.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      src={ad.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-teal-600/90 text-white">
                      Ótica & Joalheria
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                      {ad.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {ad.subtitle}
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white">
                      <span>Saiba Mais</span>
                      <i className="ri-arrow-right-line text-sm" />
                    </div>
                  </div>
                </a>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {ads.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentSlide(dotIndex)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === dotIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-2'
              }`}
              aria-label={`Ir para slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
