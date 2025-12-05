interface Ad {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  isAd: boolean;
}

interface FeaturedAdsCarouselProps {
  ads: Ad[];
}

export default function FeaturedAdsCarousel({ ads }: FeaturedAdsCarouselProps) {
  return (
    <div className="px-4 mb-6">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
          {ads.map((ad, index) => (
            <a
              key={index}
              href={ad.link}
              className="flex-shrink-0 w-[85%] snap-start group"
            >
              <div className="relative h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  alt={ad.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  src={ad.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-base mb-1 leading-tight">
                        {ad.title}
                      </h4>
                      <p className="text-white/80 text-xs leading-relaxed">
                        {ad.subtitle}
                      </p>
                    </div>
                    {ad.isAd && (
                      <span className="ml-2 px-2 py-1 bg-orange-500/80 text-white text-xs font-medium rounded-full whitespace-nowrap">
                        Anúncio
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
