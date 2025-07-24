import './index.css'; 
import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

const themes = [
  {
    bg: "bg-gradient-to-br from-rose-400 via-pink-500 to-red-600",
    text: "You light up every room you walk into.",
    particles: "🌟",
    accent: "from-white to-pink-100"
  },
  {
    bg: "bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700",
    text: "Your smile is my favorite thing in the world.",
    particles: "✨",
    accent: "from-white to-purple-100"
  },
  {
    bg: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
    text: "Every moment with you is a beautiful memory.",
    particles: "💫",
    accent: "from-white to-amber-100"
  },
  {
    bg: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
    text: "You're not just special — you're my everything.",
    particles: "🌸",
    accent: "from-white to-emerald-100"
  }
];

const finalMessages = [
  { text: "Happy Birthday, my love!", emoji: "🎂", subtext: "Another year of loving you" },
//   { text: "Happy Anniversary to us!", emoji: "💍", subtext: "Forever and always" },
//   { text: "You mean the world to me.", emoji: "🌍", subtext: "My heart belongs to you" }
];

const FloatingParticle = ({ particle, delay }) => (
  <div 
    className="absolute text-2xl opacity-60 pointer-events-none animate-bounce"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }}
  >
    {particle}
  </div>
);

const HeartFloat = ({ delay }) => (
  <div 
    className="absolute text-red-300 opacity-40 pointer-events-none"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  >
    <Heart size={16 + Math.random() * 16} fill="currentColor" />
  </div>
);

export default function App() {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [selectedMessage] = useState(() => 
    finalMessages[Math.floor(Math.random() * finalMessages.length)]
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowHearts(true), 500);
    return () => clearTimeout(timer);
  }, [step, finished]);

  const next = () => {
    setIsAnimating(true);
    setShowHearts(false);
    
    setTimeout(() => {
      if (step < themes.length - 1) {
        setStep(step + 1);
      } else {
        setFinished(true);
      }
      setIsAnimating(false);
    }, 300);
  };

  const reset = () => {
    setIsAnimating(true);
    setShowHearts(false);
    
    setTimeout(() => {
      setStep(0);
      setFinished(false);
      setIsAnimating(false);
    }, 300);
  };

  const currentTheme = themes[step];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4); }
        }
        
        .heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
        .sparkle { animation: sparkle 2s ease-in-out infinite; }
        .slide-up { animation: slideUp 0.6s ease-out; }
        .glow { animation: glow 3s ease-in-out infinite; }
      `}</style>
      
      <div className={`min-h-screen flex flex-col items-center justify-center text-white text-center p-6 transition-all duration-700 relative overflow-hidden ${finished ? "bg-gradient-to-br from-purple-900 via-pink-900 to-red-900" : currentTheme.bg}`}>
        
        {/* Floating Hearts Background */}
        {showHearts && (
          <>
            {[...Array(12)].map((_, i) => (
              <HeartFloat key={`heart-${step}-${i}`} delay={i * 0.5} />
            ))}
          </>
        )}
        
        {/* Floating Particles */}
        {!finished && showHearts && (
          <>
            {[...Array(8)].map((_, i) => (
              <FloatingParticle 
                key={`particle-${step}-${i}`} 
                particle={currentTheme.particles} 
                delay={i * 0.3} 
              />
            ))}
          </>
        )}
        
        {/* Main Content Container */}
        <div className={`max-w-lg w-full relative transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          
          {!finished ? (
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 glow slide-up">
              
              {/* Sparkle Icons */}
              <div className="absolute -top-4 -right-4 sparkle">
                <Sparkles className="text-white" size={32} />
              </div>
              <div className="absolute -top-2 -left-4 sparkle" style={{animationDelay: '1s'}}>
                <Star className="text-white" size={24} />
              </div>
              
              {/* Main Message */}
              <div className="mb-8">
                <div className="text-6xl mb-4 heartbeat">💕</div>
                <h1 className="text-2xl md:text-3xl font-bold leading-relaxed bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent mb-6">
                  {currentTheme.text}
                </h1>
                
                {/* Progress Indicator */}
                <div className="flex justify-center space-x-2 mb-6">
                  {themes.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === step 
                          ? 'bg-white scale-125 shadow-lg' 
                          : index < step 
                            ? 'bg-white/60' 
                            : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Next Button */}
              <button 
                onClick={next}
                className="group relative px-8 py-4 bg-gradient-to-r from-white/90 to-white text-gray-800 font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{step === themes.length - 1 ? 'Reveal' : 'Next'}</span>
                  <Heart size={18} className="group-hover:scale-110 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          ) : (
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30 glow slide-up">
              
              {/* Final Message */}
              <div className="text-8xl mb-6 heartbeat">{selectedMessage.emoji}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-200 via-white to-pink-200 bg-clip-text text-transparent">
                {selectedMessage.text}
              </h1>
              <p className="text-xl text-pink-200 mb-8 opacity-90">
                {selectedMessage.subtext}
              </p>
              
              {/* Celebration Hearts */}
              <div className="flex justify-center space-x-4 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i} 
                    size={24} 
                    className="text-red-400 heartbeat" 
                    fill="currentColor"
                    style={{animationDelay: `${i * 0.2}s`}}
                  />
                ))}
              </div>
              
              {/* Restart Button */}
              <button 
                onClick={reset}
                className="group px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center space-x-2">
                  <span>Experience Again</span>
                  <Sparkles size={18} className="group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>
          )}
        </div>
        
        {/* Bottom Hearts */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-60">
          {[...Array(3)].map((_, i) => (
            <Heart 
              key={i} 
              size={16} 
              className="text-white heartbeat" 
              fill="currentColor"
              style={{animationDelay: `${i * 0.5}s`}}
            />
          ))}
        </div>
      </div>
    </>
  );
}