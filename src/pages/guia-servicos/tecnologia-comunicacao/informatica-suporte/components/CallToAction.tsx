import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CallToActionProps {
    onNavigateToServices: () => void;
}

export default function CallToAction({ onNavigateToServices }: CallToActionProps) {
    return (
        <div className="px-4 mb-8">
            <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/30 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                        <i className="ri-store-3-line text-3xl text-cyan-400" />
                    </div>

                    <h3 className="text-white font-bold text-xl mb-2">
                        Possui uma empresa de TI?
                    </h3>
                    <p className="text-cyan-100/80 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                        Cadastre sua assistência técnica ou loja gratuitamente e seja encontrado por mais clientes.
                    </p>

                    <div className="flex flex-col gap-3">
                        <a
                            href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar minha empresa de informática no Portal Urubici."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
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
