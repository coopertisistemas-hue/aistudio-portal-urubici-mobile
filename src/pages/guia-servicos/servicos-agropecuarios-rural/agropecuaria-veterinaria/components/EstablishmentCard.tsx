interface Establishment {
  id: string;
  name: string;
  description: string | null;
  address: string | null;
  neighborhood: string | null;
  phone: string | null;
  whatsapp: string | null;
  services_offered: string[] | null;
  category?: string | null;
  subcategory?: string | null;
  type?: string | null;
  tags?: string[] | null;
  rating?: number | null;
  google_rating?: number | null;
  google_reviews_count?: number | null;
  business_hours?: any | null;
  map_url?: string | null;
  online_ordering_url?: string | null;
  image_url?: string | null;
}

interface EstablishmentCardProps {
  establishment: Establishment;
  groupName: string;
}

// Constantes
const MAX_SERVICES_DISPLAYED = 3;
const RATING_STARS = [1, 2, 3, 4, 5] as const;

// Utilitários
function isOpenNow(businessHours: any): boolean | null {
  if (!businessHours || typeof businessHours !== 'object') {
    return null;
  }

  if (typeof businessHours.open_now === 'boolean') {
    return businessHours.open_now;
  }

  return null;
}

function formatWhatsAppLink(establishment: Establishment): string {
  const phone = establishment.whatsapp || establishment.phone;
  if (!phone) return '#';

  const cleanPhone = phone.replace(/\D/g, '');
  const message = encodeURIComponent(`Olá! Gostaria de informações sobre ${establishment.name}`);
  return `https://wa.me/${cleanPhone}?text=${message}`;
}

// Componentes auxiliares
function RatingDisplay({ rating, reviewCount }: { rating: number; reviewCount?: number | null }) {
  return (
    <div className="flex items-center gap-1.5 mb-2 flex-wrap">
      <div className="flex items-center gap-0.5">
        {RATING_STARS.map((star) => (
          <i
            key={star}
            className={`${star <= Math.floor(rating)
                ? 'ri-star-fill text-yellow-400'
                : star - 0.5 <= rating
                  ? 'ri-star-half-fill text-yellow-400'
                  : 'ri-star-line text-yellow-400/40'
              } text-xs`}
          />
        ))}
      </div>
      <span className="text-yellow-400 text-xs font-medium">
        {rating.toFixed(1)}
      </span>
      {reviewCount && reviewCount > 0 && (
        <span className="text-white/50 text-xs">
          ({reviewCount} {reviewCount === 1 ? 'avaliação' : 'avaliações'})
        </span>
      )}
    </div>
  );
}

function OpenStatusBadge({ status }: { status: boolean | null }) {
  if (status === true) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium whitespace-nowrap">
        <i className="ri-time-line" />
        Aberto agora
      </span>
    );
  }

  if (status === false) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium whitespace-nowrap">
        <i className="ri-time-line" />
        Fechado no momento
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium whitespace-nowrap">
      <i className="ri-time-line" />
      Ausente
    </span>
  );
}

function ServicesTags({ services }: { services: string[] }) {
  return (
    <div className="flex flex-wrap gap-1 mb-3">
      {services.slice(0, MAX_SERVICES_DISPLAYED).map((service, idx) => (
        <div
          key={idx}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border bg-teal-500/20 text-teal-200 border-teal-400/30"
        >
          <i className="ri-check-line text-xs" />
          <span className="break-words">{service}</span>
        </div>
      ))}
    </div>
  );
}

function ActionButtons({ establishment }: { establishment: Establishment }) {
  const hasContact = !!(establishment.whatsapp || establishment.phone);
  const whatsappLink = formatWhatsAppLink(establishment);

  return (
    <div className="grid grid-cols-2 gap-2">
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target={hasContact ? "_blank" : undefined}
        rel={hasContact ? "noopener noreferrer" : undefined}
        onClick={!hasContact ? (e) => e.preventDefault() : undefined}
        className={`inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-white text-xs font-medium transition-all duration-200 whitespace-nowrap min-h-[44px] ${hasContact
            ? 'bg-green-600 hover:bg-green-700 hover:scale-105 cursor-pointer'
            : 'bg-gray-500/50 cursor-not-allowed opacity-50'
          }`}
        title={hasContact ? 'Enviar mensagem no WhatsApp' : 'WhatsApp não disponível'}
      >
        <i className="ri-whatsapp-line text-base" />
        <span>WhatsApp</span>
      </a>

      {/* Ver Página */}
      <button
        disabled
        className="inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-purple-500/50 cursor-not-allowed rounded-lg text-white text-xs font-medium opacity-50 whitespace-nowrap min-h-[44px]"
        title="Em breve"
      >
        <i className="ri-file-list-line text-base" />
        <span>Ver Página</span>
      </button>

      {/* Pedir Orçamento */}
      <button
        disabled
        className="col-span-2 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-teal-600/50 cursor-not-allowed rounded-lg text-white text-xs font-medium opacity-50 whitespace-nowrap min-h-[44px]"
        title="Em breve"
      >
        <i className="ri-shopping-cart-line text-base" />
        <span>Pedir Orçamento</span>
      </button>
    </div>
  );
}

// Componente principal
export default function EstablishmentCard({ establishment, groupName }: EstablishmentCardProps) {
  const displayRating = establishment.google_rating || establishment.rating;
  const reviewCount = establishment.google_reviews_count;
  const openStatus = isOpenNow(establishment.business_hours);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 overflow-hidden w-full">
      <div className="flex gap-4">
        {/* Imagem */}
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
          {establishment.image_url ? (
            <img
              alt={establishment.name}
              className="w-full h-full object-cover"
              src={establishment.image_url}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-teal-500/10">
              <i className="ri-plant-line text-3xl text-teal-400" />
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            {/* Informações principais */}
            <div className="flex-1 min-w-0">
              <h5 className="text-white font-bold text-sm leading-tight mb-1 break-words">
                {establishment.name}
              </h5>

              {/* Rating */}
              {displayRating && displayRating > 0 ? (
                <RatingDisplay rating={displayRating} reviewCount={reviewCount} />
              ) : (
                <p className="text-white/50 text-xs mb-2 italic">
                  Avaliação em breve
                </p>
              )}

              {/* Endereço */}
              {establishment.address && (
                <p className="text-white/70 text-xs mb-2">
                  <i className="ri-map-pin-line text-teal-400 mr-1" />
                  {establishment.address}
                  {establishment.neighborhood && `, ${establishment.neighborhood}`}
                  {' — Urubici, SC'}
                </p>
              )}
            </div>

            {/* Badges laterais */}
            <div className="flex flex-col gap-1.5 items-end ml-2 flex-shrink-0">
              <div className="bg-teal-500/20 text-teal-200 border-teal-400/30 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                {groupName.slice(0, -1)}
              </div>
              <OpenStatusBadge status={openStatus} />
            </div>
          </div>

          {/* Descrição */}
          {establishment.description && (
            <p className="text-white/80 text-xs leading-relaxed mb-3 break-words overflow-hidden">
              {establishment.description}
            </p>
          )}

          {/* Tags de serviços */}
          {establishment.services_offered && establishment.services_offered.length > 0 && (
            <ServicesTags services={establishment.services_offered} />
          )}

          {/* Botões de ação */}
          <ActionButtons establishment={establishment} />
        </div>
      </div>
    </div>
  );
}
