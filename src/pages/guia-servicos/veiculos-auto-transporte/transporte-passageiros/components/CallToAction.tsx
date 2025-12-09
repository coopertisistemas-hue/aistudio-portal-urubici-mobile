import React from 'react';

interface CallToActionProps {
    onNavigateToServices: () => void;
}

export default function CallToAction({ onNavigateToServices }: CallToActionProps) {
    return (
        <div className="px-4 mb-8">
            <div className="bg-gradient-to-br from-amber-900/40 to-amber-800/40 backdrop-blur-md rounded-2xl p-6 border border-amber-500/30 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all duration-500" />

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-amber-400/30">
                        <i className="ri-car-line text-3xl text-amber-400" />
                    </div>

                    <h3 className="text-white font-bold text-xl mb-2">
                        Você trabalha com transporte?
                    </h3>
                    <p className="text-amber-100/80 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                        Cadastre seu táxi, van ou serviço de transfer gratuitamente e seja encontrado por turistas.
                    </p>

                    <div className="flex flex-col gap-3">
                        <a
                            href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar meu serviço de transporte no Portal Urubici."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2"
                        >
                            <i className="ri-add-circle-line text-lg" />
                            <span>Quero Cadastrar Grátis</span>
                        </a>

                        <button
                            onClick={onNavigateToServices}
                            className="w-full bg-white/5 hover:bg-white/10 text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center gap-2"
                        >
                            <i className="ri-arrow-left-line" />
                            <span>Voltar para Serviços</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
