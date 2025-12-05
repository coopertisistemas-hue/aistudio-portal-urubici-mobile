import { useState, useEffect } from 'react';

interface Ad {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function FeaturedAdsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ads] = useState<Ad[]>([
    {
      id: '1',
      title: 'Anuncie Aqui',
      description: 'Destaque seu curso profissionalizante para milhares de pessoas',
      image: 'https://readdy.ai/api/search-image?query=professional%20training%20courses%20classroom%20with%20students%20learning%20technical%20skills%20modern%20educational%20environment%20bright%20and%20motivating%20atmosphere%20simple%20clean%20background&width=800&height=400&seq=ad1&orientation=landscape',
      link: '#'
    },
    {
      id: '2',
      title: 'Espaço Publicitário',
      description: 'Alcance novos alunos e faça seu negócio crescer',
      image: 'https://readdy.ai/api/search-image?query=vocational%20training%20center%20with%20professional%20equipment%20modern%20facilities%20students%20practicing%20hands-on%20skills%20bright%20educational%20space%20simple%20background&width=800&height=400&seq=ad2&orientation=landscape',
      link: '#'
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [ads.length]);

  return (
    <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-6">
      {ads.map((ad, index) => (
        <div
          key={ad.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href={ad.link} className="block w-full h-full relative">
            <img
              src={ad.image}
              alt={ad.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg mb-1">{ad.title}</h3>
              <p className="text-white/90 text-sm">{ad.description}</p>
            </div>
          </a>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Ir para anúncio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
