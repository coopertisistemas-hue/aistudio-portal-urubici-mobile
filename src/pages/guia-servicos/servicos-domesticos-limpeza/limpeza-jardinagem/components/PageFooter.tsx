export default function PageFooter() {
    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200 mt-8 py-6">
            <div className="px-4 text-center">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-blue-600 mb-2" style={{ fontFamily: 'Pacifico, serif' }}>
                        Urubici Connect
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        O guia completo local e de turismo<br />
                        da Serra Catarinense
                    </p>
                </div>

                <div className="mb-4 max-w-xs mx-auto">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        <a
                            href="https://wa.me/5551986859236"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-1 text-gray-600 hover:text-green-600 transition-colors"
                        >
                            <i className="ri-whatsapp-line text-lg w-5 h-5 flex items-center justify-center" />
                            <span className="text-sm">WhatsApp</span>
                        </a>
                        <a
                            href="https://instagram.com/portalurubici"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors"
                        >
                            <i className="ri-instagram-line text-lg w-5 h-5 flex items-center justify-center" />
                            <span className="text-sm">Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com.br/portalurubici"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <i className="ri-facebook-line text-lg w-5 h-5 flex items-center justify-center" />
                            <span className="text-sm">Facebook</span>
                        </a>
                        <a
                            href="mailto:portalurubici@gmail.com"
                            className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <i className="ri-mail-line text-lg w-5 h-5 flex items-center justify-center" />
                            <span className="text-sm">E-mail</span>
                        </a>
                    </div>
                </div>

                <div className="text-xs text-gray-500 border-t border-gray-200 pt-4">
                    © 2025 Desenvolvido por Urubici Connect<br />
                    <span className="text-gray-400">Versão 33</span>
                </div>
            </div>
        </footer>
    );
}
