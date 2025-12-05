interface QuickShortcutsProps {
  groups: string[];
  onGroupClick: (groupId: string) => void;
}

export default function QuickShortcuts({ groups, onGroupClick }: QuickShortcutsProps) {
  if (groups.length === 0) return null;

  return (
    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl mb-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <i className="ri-flashlight-fill text-yellow-400 text-lg drop-shadow-sm" />
        <h4 className="text-white font-medium text-sm uppercase tracking-wide drop-shadow-sm">
          Atalhos Rápidos
        </h4>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => onGroupClick(group)}
            className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20 whitespace-nowrap cursor-pointer"
          >
            {group}
          </button>
        ))}
      </div>
    </div>
  );
}
