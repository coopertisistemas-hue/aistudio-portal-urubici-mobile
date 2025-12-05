import EstablishmentCard from './EstablishmentCard';
import type { Establishment, EstablishmentGroup } from '../utils/classification';

interface EstablishmentGroupSectionProps {
  groupName: EstablishmentGroup;
  establishments: Establishment[];
}

export default function EstablishmentGroupSection({ groupName, establishments }: EstablishmentGroupSectionProps) {
  return (
    <div id={`group-${groupName}`}>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
          <i className={`${group.icon} text-white text-lg`}></i>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            <span className="text-sm font-semibold max-w-[220px] truncate whitespace-nowrap overflow-hidden text-ellipsis inline-block">
              {group.label}
            </span>
          </h3>
          <p className="text-sm text-gray-600 mt-1">{group.establishments.length} estabelecimentos</p>
        </div>
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
  );
}
