export default function CallToAction() {
  return (
    <section className="max-w-md mx-auto px-4 py-6">
      <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-6 text-center">
        <div className="w-16 h-16 bg-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-file-text-line text-3xl text-amber-400"></i>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Seu Negócio Aqui!
        </h3>
        <p className="text-white/90 mb-6 leading-relaxed">
          Cadastre seu escritório de contabilidade ou advocacia e alcance mais clientes em Urubici.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg whitespace-nowrap">
          Cadastrar Meu Negócio
        </button>
      </div>
    </section>
  );
}
