import { useEffect, useState } from 'react';

interface MobileGuardProps {
    children: React.ReactNode;
}

export default function MobileGuard({ children }: MobileGuardProps) {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkDevice = () => {
            // Using 768px as standard breakpoint for tablet/desktop
            const isMobileWidth = window.innerWidth < 768;
            setIsMobile(isMobileWidth);

            if (!isMobileWidth) {
                // Get redirect URL from env or use fallback
                const redirectUrl = import.meta.env.VITE_DESKTOP_REDIRECT_URL || 'https://www.portalurubici.com.br';

                // Prevent redirection loop if already on target (basic check)
                if (window.location.href !== redirectUrl) {
                    console.log('Redirecting to desktop site (DISABLED for now):', redirectUrl);
                    // window.location.href = redirectUrl;
                }
            }
        };

        // Initial check
        checkDevice();

        // Listen for resize
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // While checking or if redirecting, we can show nothing or a loader
    // If it's desktop, we essentially hide the app until redirect happens
    /* 
    if (!isMobile) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4 text-center">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Versão Mobile Apenas</h1>
                    <p className="mb-4">Redirecionando para versão Desktop...</p>
                    <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto" />
                </div>
            </div>
        );
    }
    */

    // Wrap in a max-width container to enforce mobile formatting even if logic allows render
    return (
        <div className="max-w-md mx-auto min-h-screen bg-gray-50 shadow-2xl overflow-hidden relative">
            {children}
        </div>
    );
}
