interface CallToActionProps {
  onNavigateToServices: () => void;
}

export default function CallToAction({ onNavigateToServices }: CallToActionProps) {
  return (
    <div className="px-4 mb-8">
      <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="ri-plant-line text-teal-400 text-3xl" />
          </div>
          <h3 className="text-white font-bold text-xl mb-2">
            Tem uma Agropecuária ou Clínica Veterinária em Urubici?
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Cadastre seu estabelecimento gratuitamente e alcance mais clientes na Serra Catarinense
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer">
            Cadastrar Meu Estabelecimento
          </button>

          <button
            onClick={onNavigateToServices}
            className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-white/20 cursor-pointer"
          >
            Voltar ao Guia de Serviços
          </button>
        </div>
      </div>
    </div>
  );
}
