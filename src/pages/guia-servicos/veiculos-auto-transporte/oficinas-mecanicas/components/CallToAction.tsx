interface CallToActionProps {
  onNavigateToServices: () => void;
}

export default function CallToAction({ onNavigateToServices }: CallToActionProps) {
  return (
    <div className="px-4 mb-8">
      <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 shadow-lg text-center">
        <i className="ri-tools-line text-orange-400 text-4xl mb-3" />
        <h3 className="text-white font-bold text-lg mb-2">
          Explore Mais Serviços
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mb-4">
          Descubra outros serviços automotivos e muito mais no Guia de Serviços de Urubici
        </p>
        <button
          onClick={onNavigateToServices}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
        >
          <i className="ri-compass-line text-base" />
          <span>Ver Guia de Serviços</span>
        </button>
      </div>
    </div>
  );
}
