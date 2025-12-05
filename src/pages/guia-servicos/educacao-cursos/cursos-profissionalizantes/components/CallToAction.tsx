import { useNavigate } from 'react-router-dom';

interface CallToActionProps {
  onNavigateToServices: () => void;
}

export default function CallToAction({ onNavigateToServices }: CallToActionProps) {
  return (
    <div className="px-4 mb-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
        <div className="mb-4">
          <i className="ri-add-circle-line text-purple-400 text-4xl mb-3" />
          <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Curso Profissionalizante</h3>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Você oferece cursos profissionalizantes em Urubici? Cadastre-se gratuitamente em nossa plataforma e alcance mais alunos!
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <a
            href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar meu curso no Portal Urubici"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap min-h-[44px] shadow-md"
          >
            <i className="ri-add-circle-line text-lg" />
            <span>Cadastrar Curso</span>
          </a>
          <button
            onClick={onNavigateToServices}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap min-h-[44px] shadow-md"
          >
            <i className="ri-arrow-left-line text-lg" />
            <span>Voltar ao Guia de Serviços</span>
          </button>
        </div>
      </div>
    </div>
  );
}
