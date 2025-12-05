import { EstablishmentGroup } from '../utils/classification';

interface QuickShortcutsProps {
  groups: EstablishmentGroup[];
  onGroupClick: (groupId: string) => void;
}

const GROUP_CONFIG: Record<EstablishmentGroup, { icon: string; color: string }> = {
  'Oficinas Mecânicas': { icon: 'ri-tools-line', color: 'orange' },
  'Oficinas Elétricas': { icon: 'ri-flashlight-line', color: 'yellow' },
  'Funilaria e Pintura': { icon: 'ri-brush-line', color: 'blue' }
};

export default function QuickShortcuts({ groups, onGroupClick }: QuickShortcutsProps) {
  if (groups.length === 0) return null;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg mb-6">
      <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
        <i className="ri-compass-line text-orange-400" />
        Atalhos Rápidos
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {groups.map((group) => {
          const config = GROUP_CONFIG[group];
          return (
            <button
              key={group}
              onClick={() => onGroupClick(group)}
              className="flex items-center gap-2 px-3 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 border border-white/20 group"
            >
              <i className={`${config.icon} text-${config.color}-400 text-lg flex-shrink-0`} />
              <span className="text-white text-xs font-medium text-left leading-tight flex-1">
                {group}
              </span>
              <i className="ri-arrow-right-s-line text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
