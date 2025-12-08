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
                <h4 className="text-white font-bold text-lg flex items-center gap-2">
                    <i className="ri-shopping-basket-line text-emerald-400 flex-shrink-0" />
                    <span className="max-w-[220px] truncate whitespace-nowrap overflow-hidden text-ellipsis">
                        {groupName}
                    </span>
                </h4>
                <p className="text-white/60 text-xs mt-1">
                    {establishments.length} {establishments.length === 1 ? 'estabelecimento' : 'estabelecimentos'}
                </p>
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
