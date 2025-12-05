interface Partner {
  name: string;
  description: string;
  image: string;
}

interface PartnersCarouselProps {
  partners: Partner[];
}

export default function PartnersCarousel({ partners }: PartnersCarouselProps) {
  return (
    <div className="px-4 mb-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
        <h3 className="text-white font-bold text-lg mb-4 text-center">
          <i className="ri-star-line text-orange-400 mr-2" />
          Parceiros em Destaque
        </h3>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/20 flex-shrink-0">
                    <img
                      alt={partner.name}
                      className="w-full h-full object-cover"
                      src={partner.image}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm leading-tight">
                      {partner.name}
                    </h4>
                  </div>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
