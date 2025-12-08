interface PageHeaderProps {
    onGoHome: () => void;
    onGoBack: () => void;
}

export default function PageHeader({ onGoHome, onGoBack }: PageHeaderProps) {
    return (
        <header className="w-full py-6 px-4 relative">
            <div className="max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            alt="Portal Urubici"
                            className="w-full h-full object-cover"
                            src="https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/0dc4552e6498e91f6e54e953ce168af6.jfif"
                        />
                    </div>
                    <div className="text-white">
                        <h1 className="font-bold text-lg leading-none text-blue-400" style={{ fontFamily: 'Pacifico, serif' }}>
                            Portal Urubici
                        </h1>
                        <p className="text-xs text-white/80 leading-tight">
                            Notícias, Onde Ir, Onde Ficar,<br />Onde Comer, tudo sobre a cidade
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 absolute top-6 right-4">
                    <button
                        onClick={onGoHome}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                        title="Voltar à homepage"
                    >
                        <i className="ri-home-line text-white text-lg" />
                    </button>
                    <button
                        onClick={onGoBack}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                        title="Voltar à página anterior"
                    >
                        <i className="ri-arrow-left-line text-white text-lg" />
                    </button>
                </div>
            </div>
        </header>
    );
}
