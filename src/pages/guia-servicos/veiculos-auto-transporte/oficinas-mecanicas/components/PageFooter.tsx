export default function PageFooter() {
  return (
    <footer className="px-4 py-8 mt-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden mx-auto mb-3">
              <img
                alt="Portal Urubici"
                className="w-full h-full object-cover"
                src="https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/0dc4552e6498e91f6e54e953ce168af6.jfif"
              />
            </div>
            <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Pacifico, serif' }}>
              Portal Urubici
            </h3>
            <p className="text-white/70 text-sm">
              Seu guia completo de Urubici
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-6">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              title="Facebook"
            >
              <i className="ri-facebook-fill text-white text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              title="Instagram"
            >
              <i className="ri-instagram-line text-white text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              title="WhatsApp"
            >
              <i className="ri-whatsapp-line text-white text-lg" />
            </a>
          </div>

          <div className="border-t border-white/20 pt-4">
            <p className="text-white/60 text-xs text-center">
              © 2025 Portal Urubici. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
