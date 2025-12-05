import EstablishmentCard from './EstablishmentCard';
import type { Establishment, EstablishmentGroup } from '../utils/classification';

interface EstablishmentGroupSectionProps {
  groupName: EstablishmentGroup;
  establishments: Establishment[];
}

export default function EstablishmentGroupSection({ groupName, establishments }: EstablishmentGroupSectionProps) {
  return (
    <div id={`group-${groupName}`}>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <i className={`${groupName.icon} text-teal-600 flex-shrink-0`}></i>
          <span className="text-sm font-semibold max-w-[220px] truncate whitespace-nowrap overflow-hidden text-ellipsis inline-block">
            {groupName.label}
          </span>
          <span className="text-xs text-gray-500">({establishments.length})</span>
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
