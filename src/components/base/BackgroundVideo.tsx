interface BackgroundVideoProps {
  className?: string;
}

export default function BackgroundVideo({ className = '' }: BackgroundVideoProps) {
  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        poster="https://readdy.ai/api/search-image?query=Beautiful%20waterfall%20Cachoeira%20Rio%20dos%20Bugres%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20cascading%20water%20over%20rocks%2C%20pristine%20natural%20environment%2C%20lush%20green%20vegetation%2C%20crystal%20clear%20mountain%20stream&width=1920&height=1080&seq=videobg-cachoeira&orientation=landscape"
      >
        <source
          src="https://www.dropbox.com/scl/fi/dtb3orj4932wbs5pj00ve/Cachoeira-Rio-dos-Bugres.mp4?rlkey=y86ivtx9abb5bgs5gj5migzou&st=9fh0b11x&dl=1"
          type="video/mp4"
        />
        Seu navegador não suporta vídeos HTML5.
      </video>
      
      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}
