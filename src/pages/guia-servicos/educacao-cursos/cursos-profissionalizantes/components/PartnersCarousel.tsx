export default function PartnersCarousel() {
  const partners = [
    { id: 1, name: 'Parceiro 1', logo: 'https://readdy.ai/api/search-image?query=professional%20training%20institute%20logo%20modern%20educational%20brand%20simple%20clean%20design&width=200&height=100&seq=p1&orientation=landscape' },
    { id: 2, name: 'Parceiro 2', logo: 'https://readdy.ai/api/search-image?query=vocational%20school%20logo%20professional%20education%20brand%20minimalist%20design&width=200&height=100&seq=p2&orientation=landscape' },
    { id: 3, name: 'Parceiro 3', logo: 'https://readdy.ai/api/search-image?query=technical%20course%20center%20logo%20modern%20training%20brand%20clean%20simple%20design&width=200&height=100&seq=p3&orientation=landscape' }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Nossos Parceiros
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
