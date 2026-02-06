// import './index.css'; 
// import React, { useState, useEffect } from "react";
// import { Heart, Sparkles, Star, ArrowRight } from "lucide-react";

// const themes = [
//   {
//     bg: "from-rose-500 via-pink-600 to-purple-700",
//     text: "I'm sorry for the times I hurt you, but my love for you never faded.",
//     particles: "💖",
//     accent: "rose"
//   },
//   {
//     bg: "from-violet-500 via-purple-600 to-fuchsia-700",
//     text: "Even after all this time, you're still the one I dream about.",
//     particles: "✨",
//     accent: "violet"
//   },
//   {
//     bg: "from-orange-500 via-rose-600 to-pink-700",
//     text: "I wish I could turn back time, but all I can do now is love you deeply.",
//     particles: "💫",
//     accent: "orange"
//   },
//   {
//     bg: "from-teal-500 via-cyan-600 to-blue-700",
//     text: "You're not just someone I loved — you're the heart I still carry.",
//     particles: "🌸",
//     accent: "teal"
//   }
// ];

// const finalMessages = [
//   { 
//     text: "Happy Valentine's Day", 
//     subtext: "to the most special person in my life",
//     emoji: "❤️", 
//     message: "Please forgive me and I hope we can write a new chapter together" 
//   }
// ];

// const FloatingParticle = ({ particle, delay }) => (
//   <div 
//     className="absolute text-2xl md:text-3xl opacity-50 pointer-events-none animate-float"
//     style={{
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       animationDelay: `${delay}s`,
//       animationDuration: `${4 + Math.random() * 3}s`
//     }}
//   >
//     {particle}
//   </div>
// );

// const HeartFloat = ({ delay }) => (
//   <div 
//     className="absolute text-white/20 pointer-events-none animate-float-slow"
//     style={{
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       animationDelay: `${delay}s`
//     }}
//   >
//     <Heart size={20 + Math.random() * 20} fill="currentColor" />
//   </div>
// );

// export default function App() {
//   const [step, setStep] = useState(0);
//   const [finished, setFinished] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [showContent, setShowContent] = useState(false);
//   const [selectedMessage] = useState(() => 
//     finalMessages[Math.floor(Math.random() * finalMessages.length)]
//   );

//   useEffect(() => {
//     const timer = setTimeout(() => setShowContent(true), 100);
//     return () => clearTimeout(timer);
//   }, [step, finished]);

//   const next = () => {
//     setIsAnimating(true);
//     setShowContent(false);
    
//     setTimeout(() => {
//       if (step < themes.length - 1) {
//         setStep(step + 1);
//       } else {
//         setFinished(true);
//       }
//       setIsAnimating(false);
//     }, 400);
//   };

//   const reset = () => {
//     setIsAnimating(true);
//     setShowContent(false);
    
//     setTimeout(() => {
//       setStep(0);
//       setFinished(false);
//       setIsAnimating(false);
//     }, 400);
//   };

//   const currentTheme = themes[step];

//   return (
//     <>
//       <style>{`
//         @keyframes float {
//           0%, 100% { 
//             transform: translateY(0px) translateX(0px) rotate(0deg); 
//             opacity: 0.3;
//           }
//           25% { 
//             transform: translateY(-25px) translateX(10px) rotate(5deg); 
//             opacity: 0.5;
//           }
//           50% { 
//             transform: translateY(-15px) translateX(-10px) rotate(-5deg); 
//             opacity: 0.4;
//           }
//           75% { 
//             transform: translateY(-20px) translateX(5px) rotate(3deg); 
//             opacity: 0.6;
//           }
//         }
        
//         @keyframes float-slow {
//           0%, 100% { 
//             transform: translateY(0px) scale(1); 
//           }
//           50% { 
//             transform: translateY(-30px) scale(1.1); 
//           }
//         }
        
//         @keyframes heartbeat {
//           0%, 100% { transform: scale(1); }
//           10%, 30% { transform: scale(1.1); }
//           20% { transform: scale(0.95); }
//         }
        
//         @keyframes pulse-glow {
//           0%, 100% { 
//             box-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
//                         0 0 40px rgba(255, 255, 255, 0.05);
//           }
//           50% { 
//             box-shadow: 0 0 30px rgba(255, 255, 255, 0.2),
//                         0 0 60px rgba(255, 255, 255, 0.1),
//                         0 0 80px rgba(255, 255, 255, 0.05);
//           }
//         }
        
//         @keyframes fade-in-up {
//           from { 
//             opacity: 0; 
//             transform: translateY(40px) scale(0.95); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateY(0) scale(1); 
//           }
//         }
        
//         @keyframes shimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animate-float-slow {
//           animation: float-slow 8s ease-in-out infinite;
//         }
        
//         .animate-heartbeat {
//           animation: heartbeat 2s ease-in-out infinite;
//         }
        
//         .animate-pulse-glow {
//           animation: pulse-glow 3s ease-in-out infinite;
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
//         }
        
//         .animate-shimmer {
//           background-size: 200% auto;
//           animation: shimmer 3s linear infinite;
//         }
        
//         .glass-morphism {
//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.18);
//         }
        
//         .text-shadow-soft {
//           text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
//         }
//       `}</style>
      
//       <div className={`min-h-screen flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8 transition-all duration-1000 relative overflow-hidden bg-gradient-to-br ${finished ? "from-purple-900 via-pink-900 to-rose-900" : currentTheme.bg}`}>
        
//         {/* Ambient Background Effects */}
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
//         {/* Floating Hearts Background */}
//         {showContent && (
//           <>
//             {[...Array(15)].map((_, i) => (
//               <HeartFloat key={`heart-${step}-${finished}-${i}`} delay={i * 0.6} />
//             ))}
//           </>
//         )}
        
//         {/* Floating Particles */}
//         {!finished && showContent && (
//           <>
//             {[...Array(10)].map((_, i) => (
//               <FloatingParticle 
//                 key={`particle-${step}-${i}`} 
//                 particle={currentTheme.particles} 
//                 delay={i * 0.4} 
//               />
//             ))}
//           </>
//         )}
        
//         {/* Main Content Container */}
//         <div className={`max-w-2xl w-full relative z-10 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          
//           {!finished ? (
//             <div className={`glass-morphism rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl animate-pulse-glow ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
              
//               {/* Decorative Sparkles */}
//               <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 text-white/80 animate-float">
//                 <Sparkles size={28} />
//               </div>
//               <div className="absolute -top-2 -left-3 sm:-left-4 text-white/80 animate-float" style={{animationDelay: '1.5s'}}>
//                 <Star size={24} />
//               </div>
//               <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-3 text-white/60 animate-float" style={{animationDelay: '2.5s'}}>
//                 <Sparkles size={20} />
//               </div>
              
//               {/* Main Message */}
//               <div className="mb-8 sm:mb-10">
//                 <div className="text-6xl sm:text-7xl md:text-8xl mb-6 sm:mb-8 animate-heartbeat filter drop-shadow-lg">
//                   💕
//                 </div>
                
//                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-8 sm:mb-10 px-2 sm:px-4 text-shadow-soft animate-shimmer bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
//                   {currentTheme.text}
//                 </h1>
                
//                 {/* Progress Indicator */}
//                 <div className="flex justify-center items-center space-x-3 mb-8">
//                   {themes.map((_, index) => (
//                     <div key={index} className="flex flex-col items-center">
//                       <div
//                         className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
//                           index === step 
//                             ? 'bg-white scale-150 shadow-[0_0_15px_rgba(255,255,255,0.8)]' 
//                             : index < step 
//                               ? 'bg-white/70 scale-110' 
//                               : 'bg-white/30'
//                         }`}
//                       />
//                       {index < themes.length - 1 && (
//                         <div className={`w-8 sm:w-12 h-0.5 mt-1 transition-all duration-500 ${
//                           index < step ? 'bg-white/50' : 'bg-white/20'
//                         }`} style={{marginLeft: '-100%', marginRight: '-100%'}} />
//                       )}
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* Step Counter */}
//                 <p className="text-white/60 text-sm sm:text-base font-medium">
//                   {step + 1} of {themes.length}
//                 </p>
//               </div>
              
//               {/* Next Button */}
//               <button 
//                 onClick={next}
//                 className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-gray-900 font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center justify-center space-x-3">
//                   <span>{step === themes.length - 1 ? 'Reveal My Heart' : 'Continue'}</span>
//                   {step === themes.length - 1 ? (
//                     <Heart size={20} className="group-hover:scale-110 transition-transform" fill="currentColor" />
//                   ) : (
//                     <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                   )}
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>
//             </div>
//           ) : (
//             <div className={`glass-morphism rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl animate-pulse-glow ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
              
//               {/* Final Message */}
//               <div className="text-7xl sm:text-8xl md:text-9xl mb-6 sm:mb-8 animate-heartbeat filter drop-shadow-2xl">
//                 {selectedMessage.emoji}
//               </div>
              
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-pink-200 via-white to-pink-200 bg-clip-text text-transparent text-shadow-soft leading-tight">
//                 {selectedMessage.text}
//               </h1>
              
//               <p className="text-xl sm:text-2xl md:text-3xl text-pink-100/90 mb-6 sm:mb-8 font-light text-shadow-soft">
//                 {selectedMessage.subtext}
//               </p>
              
//               <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6 sm:mb-8 rounded-full" />
              
//               <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed px-4">
//                 {selectedMessage.message}
//               </p>
              
//               {/* Celebration Hearts */}
//               <div className="flex justify-center space-x-3 sm:space-x-4 mb-10 sm:mb-12">
//                 {[...Array(5)].map((_, i) => (
//                   <Heart 
//                     key={i} 
//                     size={window.innerWidth < 640 ? 20 : 28}
//                     className="text-rose-400 animate-heartbeat filter drop-shadow-lg" 
//                     fill="currentColor"
//                     style={{animationDelay: `${i * 0.2}s`}}
//                   />
//                 ))}
//               </div>
              
//               {/* Restart Button */}
//               <button 
//                 onClick={reset}
//                 className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-white/40 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl backdrop-blur-sm"
//               >
//                 <span className="flex items-center justify-center space-x-3">
//                   <span>Experience Again</span>
//                   <Sparkles size={20} className="group-hover:rotate-180 transition-transform duration-500" />
//                 </span>
//               </button>
//             </div>
//           )}
//         </div>
        
//         {/* Bottom Decoration */}
//         <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 opacity-40">
//           {[...Array(3)].map((_, i) => (
//             <Heart 
//               key={i} 
//               size={window.innerWidth < 640 ? 14 : 18}
//               className="text-white animate-heartbeat" 
//               fill="currentColor"
//               style={{animationDelay: `${i * 0.5}s`}}
//             />
//           ))}
//         </div>
        
//         {/* Signature */}
//         <p className="absolute bottom-3 sm:bottom-4 text-white/30 text-xs sm:text-sm font-light">
//           Made with love ❤️
//         </p>
//       </div>
//     </>
//   );
// }

import './index.css'; 
import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Star, ArrowRight } from "lucide-react";

const themes = [
  {
    bg: "from-rose-500 via-pink-600 to-purple-700",
    text: "I'm sorry for the times I hurt you, but my love for you never faded.",
    particles: "💖",
    accent: "rose"
  },
  {
    bg: "from-violet-500 via-purple-600 to-fuchsia-700",
    text: "Even after all this time, you're still the one I dream about.",
    particles: "✨",
    accent: "violet"
  },
  {
    bg: "from-orange-500 via-rose-600 to-pink-700",
    text: "I wish I could turn back time, but all I can do now is love you deeply.",
    particles: "💫",
    accent: "orange"
  },
  {
    bg: "from-teal-500 via-cyan-600 to-blue-700",
    text: "You're not just someone I loved — you're the heart I still carry.",
    particles: "🌸",
    accent: "teal"
  }
];

const finalMessages = [
  { 
    text: "Happy Valentine's Day", 
    subtext: "to the most special person in my life",
    emoji: "❤️", 
    message: "Please forgive me and I hope we can write a new chapter together" 
  }
];

const FloatingParticle = ({ particle, delay }) => (
  <div 
    className="absolute text-2xl md:text-3xl opacity-50 pointer-events-none animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${4 + Math.random() * 3}s`
    }}
  >
    {particle}
  </div>
);

const HeartFloat = ({ delay }) => (
  <div 
    className="absolute text-white/20 pointer-events-none animate-float-slow"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`
    }}
  >
    <Heart size={20 + Math.random() * 20} fill="currentColor" />
  </div>
);

export default function App() {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [selectedMessage] = useState(() => 
    finalMessages[Math.floor(Math.random() * finalMessages.length)]
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, [step, finished]);

  const next = () => {
    setIsAnimating(true);
    setShowContent(false);
    
    setTimeout(() => {
      if (step < themes.length - 1) {
        setStep(step + 1);
      } else {
        setFinished(true);
      }
      setIsAnimating(false);
    }, 400);
  };

  const reset = () => {
    setIsAnimating(true);
    setShowContent(false);
    
    setTimeout(() => {
      setStep(0);
      setFinished(false);
      setIsAnimating(false);
    }, 400);
  };

  const currentTheme = themes[step];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-25px) translateX(10px) rotate(5deg); 
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-15px) translateX(-10px) rotate(-5deg); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-20px) translateX(5px) rotate(3deg); 
            opacity: 0.6;
          }
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          50% { 
            transform: translateY(-30px) scale(1.1); 
          }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.1); }
          20% { transform: scale(0.95); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
                        0 0 40px rgba(255, 255, 255, 0.05);
          }
          50% { 
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.2),
                        0 0 60px rgba(255, 255, 255, 0.1),
                        0 0 80px rgba(255, 255, 255, 0.05);
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .text-shadow-soft {
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }
      `}</style>
      
      <div className={`min-h-screen flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8 transition-all duration-1000 relative overflow-hidden bg-gradient-to-br ${finished ? "from-purple-900 via-pink-900 to-rose-900" : currentTheme.bg}`}>
        
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        {/* Floating Hearts Background */}
        {showContent && (
          <>
            {[...Array(15)].map((_, i) => (
              <HeartFloat key={`heart-${step}-${finished}-${i}`} delay={i * 0.6} />
            ))}
          </>
        )}
        
        {/* Floating Particles */}
        {!finished && showContent && (
          <>
            {[...Array(10)].map((_, i) => (
              <FloatingParticle 
                key={`particle-${step}-${i}`} 
                particle={currentTheme.particles} 
                delay={i * 0.4} 
              />
            ))}
          </>
        )}
        
        {/* Main Content Container */}
        <div className={`max-w-2xl w-full relative z-10 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          
          {!finished ? (
            <div className={`glass-morphism rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl animate-pulse-glow ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
              
              {/* Decorative Sparkles */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 text-white/80 animate-float">
                <Sparkles size={28} />
              </div>
              <div className="absolute -top-2 -left-3 sm:-left-4 text-white/80 animate-float" style={{animationDelay: '1.5s'}}>
                <Star size={24} />
              </div>
              <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-3 text-white/60 animate-float" style={{animationDelay: '2.5s'}}>
                <Sparkles size={20} />
              </div>
              
              {/* Main Message */}
              <div className="mb-8 sm:mb-10">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-6 sm:mb-8 animate-heartbeat filter drop-shadow-lg">
                  💕
                </div>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-8 sm:mb-10 px-2 sm:px-4 text-shadow-soft animate-shimmer bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                  {currentTheme.text}
                </h1>
                
                {/* Progress Indicator */}
                <div className="flex justify-center items-center space-x-3 mb-8">
                  {themes.map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                          index === step 
                            ? 'bg-white scale-150 shadow-[0_0_15px_rgba(255,255,255,0.8)]' 
                            : index < step 
                              ? 'bg-white/70 scale-110' 
                              : 'bg-white/30'
                        }`}
                      />
                      {index < themes.length - 1 && (
                        <div className={`w-8 sm:w-12 h-0.5 mt-1 transition-all duration-500 ${
                          index < step ? 'bg-white/50' : 'bg-white/20'
                        }`} style={{marginLeft: '-100%', marginRight: '-100%'}} />
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Step Counter */}
                <p className="text-white/60 text-sm sm:text-base font-medium">
                  {step + 1} of {themes.length}
                </p>
              </div>
              
              {/* Next Button */}
              <button 
                onClick={next}
                className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-gray-900 font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span>{step === themes.length - 1 ? 'Reveal My Heart' : 'Continue'}</span>
                  {step === themes.length - 1 ? (
                    <Heart size={20} className="group-hover:scale-110 transition-transform" fill="currentColor" />
                  ) : (
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          ) : (
            <div className={`glass-morphism rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl animate-pulse-glow ${showContent ? 'animate-fade-in-up' : 'opacity-0'}`}>
              
              {/* Final Message */}
              <div className="text-7xl sm:text-8xl md:text-9xl mb-6 sm:mb-8 animate-heartbeat filter drop-shadow-2xl">
                {selectedMessage.emoji}
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-pink-200 via-white to-pink-200 bg-clip-text text-transparent text-shadow-soft leading-tight">
                {selectedMessage.text}
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-pink-100/90 mb-6 sm:mb-8 font-light text-shadow-soft">
                {selectedMessage.subtext}
              </p>
              
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6 sm:mb-8 rounded-full" />
              
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed px-4">
                {selectedMessage.message}
              </p>
              
              {/* Celebration Hearts */}
              <div className="flex justify-center space-x-3 sm:space-x-4 mb-10 sm:mb-12">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i} 
                    size={window.innerWidth < 640 ? 20 : 28}
                    className="text-rose-400 animate-heartbeat filter drop-shadow-lg" 
                    fill="currentColor"
                    style={{animationDelay: `${i * 0.2}s`}}
                  />
                ))}
              </div>
              
              {/* Restart Button */}
              <button 
                onClick={reset}
                className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-white/40 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>Experience Again</span>
                  <Sparkles size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </button>
            </div>
          )}
        </div>
        
        {/* Bottom Decoration */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 opacity-40">
          {[...Array(3)].map((_, i) => (
            <Heart 
              key={i} 
              size={window.innerWidth < 640 ? 14 : 18}
              className="text-white animate-heartbeat" 
              fill="currentColor"
              style={{animationDelay: `${i * 0.5}s`}}
            />
          ))}
        </div>
        
        {/* Signature */}
        <p className="absolute bottom-3 sm:bottom-4 text-white/30 text-xs sm:text-sm font-light">
          Made with love ❤️
        </p>
      </div>
    </>
  );
}