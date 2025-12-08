import { useState } from 'react';

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
}

interface EstablishmentCardProps {
    establishment: Establishment;
    groupName: string;
}

// Função para verificar se está aberto agora
function isOpenNow(businessHours: any): boolean | null {
    if (!businessHours || typeof businessHours !== 'object') {
        return null;
    }

    if (typeof businessHours.open_now === 'boolean') {
        return businessHours.open_now;
    }

    return null;
}

export default function EstablishmentCard({ establishment, groupName }: EstablishmentCardProps) {
    const displayRating = establishment.google_rating || establishment.rating;
    const reviewCount = establishment.google_reviews_count;
    const openStatus = isOpenNow(establishment.business_hours);

    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
            <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                    {establishment.image_url ? (
                        <img
                            alt={establishment.name}
                            className="w-full h-full object-cover"
                            src={establishment.image_url}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-rose-500/10">
                            <i className="ri-shirt-line text-3xl text-rose-400" />
                        </div>
                    )}
                </div>

                <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                            <h5 className="text-white font-bold text-sm leading-tight mb-1">
                                {establishment.name}
                            </h5>

                            {/* Rating */}
                            {displayRating && displayRating > 0 ? (
                                <div className="flex items-center gap-1.5 mb-2">
                                    <div className="flex items-center gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <i
                                                key={star}
                                                className={`${star <= Math.floor(displayRating)
                                                    ? 'ri-star-fill text-yellow-400'
                                                    : star - 0.5 <= displayRating
                                                        ? 'ri-star-half-fill text-yellow-400'
                                                        : 'ri-star-line text-yellow-400/40'
                                                    } text-xs`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-yellow-400 text-xs font-medium">
                                        {displayRating.toFixed(1)}
                                    </span>
                                    {reviewCount && reviewCount > 0 && (
                                        <span className="text-white/50 text-xs">
                                            ({reviewCount} {reviewCount === 1 ? 'avaliação' : 'avaliações'})
                                        </span>
                                    )}
                                </div>
                            ) : (
                                <p className="text-white/50 text-xs mb-2 italic">
                                    Avaliação em breve
                                </p>
                            )}

                            {/* Address */}
                            {establishment.address && (
                                <p className="text-white/70 text-xs mb-2 w-full break-words overflow-hidden line-clamp-2">
                                    <i className="ri-map-pin-line text-rose-400 mr-1" />
                                    {establishment.address}
                                    {establishment.neighborhood && `, ${establishment.neighborhood}`}
                                    {' — Urubici, SC'}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5 items-end ml-2">
                            {/* Chip de tipo */}
                            <div className="bg-rose-500/20 text-rose-200 border-rose-400/30 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                                {groupName}
                            </div>

                            {/* Status de funcionamento */}
                            {openStatus === true && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                    <i className="ri-time-line" />
                                    Aberto agora
                                </span>
                            )}
                            {openStatus === false && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                                    <i className="ri-time-line" />
                                    Fechado no momento
                                </span>
                            )}
                            {openStatus === null && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                    <i className="ri-time-line" />
                                    Ausente
                                </span>
                            )}
                        </div>
                    </div>

                    {establishment.description && (
                        <p className="text-white/80 text-xs leading-relaxed mb-3 w-full break-words overflow-hidden line-clamp-3">
                            {establishment.description}
                        </p>
                    )}

                    {/* Services Tags */}
                    {establishment.services_offered && establishment.services_offered.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                            {establishment.services_offered.slice(0, 3).map((service, idx) => (
                                <div
                                    key={idx}
                                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border bg-rose-500/20 text-rose-200 border-rose-400/30"
                                >
                                    <i className="ri-check-line text-xs" />
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                        <a
                            href={establishment.whatsapp || establishment.phone ? `https://wa.me/${(establishment.whatsapp || establishment.phone)?.replace(/\D/g, '')}?text=Olá! Gostaria de informações sobre ${establishment.name}` : '#'}
                            target={establishment.whatsapp || establishment.phone ? "_blank" : undefined}
                            rel={establishment.whatsapp || establishment.phone ? "noopener noreferrer" : undefined}
                            onClick={!(establishment.whatsapp || establishment.phone) ? (e) => e.preventDefault() : undefined}
                            className={`inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-white text-xs font-medium transition-all duration-200 whitespace-nowrap min-h-[44px] ${establishment.whatsapp || establishment.phone
                                ? 'bg-green-600 hover:bg-green-700 hover:scale-105 cursor-pointer'
                                : 'bg-gray-500/50 cursor-not-allowed opacity-50'
                                }`}
                            title={establishment.whatsapp || establishment.phone ? 'Enviar mensagem no WhatsApp' : 'WhatsApp não disponível'}
                        >
                            <i className="ri-whatsapp-line text-base" />
                            <span>WhatsApp</span>
                        </a>

                        <button
                            disabled
                            className="inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-purple-500/50 cursor-not-allowed rounded-lg text-white text-xs font-medium opacity-50 whitespace-nowrap min-h-[44px]"
                            title="Em breve"
                        >
                            <i className="ri-file-list-line text-base" />
                            <span>Ver Página</span>
                        </button>

                        <button
                            disabled
                            className="col-span-2 inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-rose-600/50 cursor-not-allowed rounded-lg text-white text-xs font-medium opacity-50 whitespace-nowrap min-h-[44px]"
                            title="Em breve"
                        >
                            <i className="ri-calendar-line text-base" />
                            <span>Agendar Horário</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
