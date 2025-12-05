interface CallToActionProps {
  onNavigateToServices: () => void;
}

export default function CallToAction({ onNavigateToServices }: CallToActionProps) {
  return (
    <div className="px-4 mb-6">
      <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 border border-amber-400/30 shadow-xl">
        <div className="text-center mb-4">
          <i className="ri-store-3-line text-amber-400 text-4xl mb-3" />
          <h3 className="text-white font-bold text-lg mb-2">
            Tem uma Loja de Artesanato?
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Cadastre seu ateliê ou loja e alcance mais clientes em Urubici!
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <button
            disabled
            className="w-full bg-amber-600/50 cursor-not-allowed text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 opacity-50 flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px]"
            title="Em breve"
          >
            <i className="ri-add-circle-line text-lg" />
            <span>Cadastrar Estabelecimento</span>
          </button>
          
          <button
            onClick={onNavigateToServices}
            className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border border-white/20 hover:scale-105 whitespace-nowrap min-h-[44px] cursor-pointer"
          >
            <i className="ri-arrow-left-line text-lg" />
            <span>Voltar ao Guia de Serviços</span>
          </button>
        </div>
      </div>
    </div>
  );
}
