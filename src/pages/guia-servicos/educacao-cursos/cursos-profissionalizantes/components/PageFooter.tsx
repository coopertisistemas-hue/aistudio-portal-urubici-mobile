import { Link } from 'react-router-dom';

export default function PageFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Urubici</h3>
            <p className="text-gray-400 text-sm">
              Seu guia completo de serviços em Urubici
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/guia-servicos" className="text-gray-400 hover:text-white">
                  Guia de Serviços
                </Link>
              </li>
              <li>
                <Link to="/guia-servicos/educacao-cursos" className="text-gray-400 hover:text-white">
                  Educação e Cursos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Urubici - SC</li>
              <li>Brasil</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Urubici. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
