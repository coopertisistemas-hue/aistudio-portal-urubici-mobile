import EstablishmentCard from './EstablishmentCard';
import { EstablishmentGroup } from '../utils/classification';

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

interface EstablishmentGroupSectionProps {
  groupName: EstablishmentGroup;
  establishments: Establishment[];
}

const GROUP_CONFIG: Record<EstablishmentGroup, { icon: string; color: string }> = {
  'Oficinas Mecânicas': { icon: 'ri-tools-line', color: 'orange' },
  'Oficinas Elétricas': { icon: 'ri-flashlight-line', color: 'yellow' },
  'Funilaria e Pintura': { icon: 'ri-brush-line', color: 'blue' }
};

export default function EstablishmentGroupSection({ groupName, establishments }: EstablishmentGroupSectionProps) {
  if (establishments.length === 0) return null;

  const config = GROUP_CONFIG[groupName];

  return (
    <div id={`group-${groupName}`} className="scroll-mt-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg mb-4">
        <div className="flex items-center gap-2 mb-4">
          <i className={`${config.icon} text-${config.color}-400 text-xl flex-shrink-0`} />
          <h3 className="text-white font-bold text-base inline-block max-w-[220px] truncate whitespace-nowrap overflow-hidden text-ellipsis">
            {groupName}
          </h3>
          <span className="ml-auto text-white/60 text-xs font-medium bg-white/10 px-2 py-1 rounded-full">
            {establishments.length} {establishments.length === 1 ? 'estabelecimento' : 'estabelecimentos'}
          </span>
        </div>

        <div className="space-y-4">
          {establishments.map((establishment) => (
            <EstablishmentCard
              key={establishment.id}
              establishment={establishment}
              groupName={groupName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
