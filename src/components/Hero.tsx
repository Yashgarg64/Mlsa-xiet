
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const splitText = () => {
      if (!headingRef.current) return;
      
      const text = headingRef.current.innerText;
      const words = text.split(' ');
      
      headingRef.current.innerHTML = words
        .map((word) => `<span class="inline-block"><span class="inline-block overflow-hidden"><span class="inline-block animate-slide-in opacity-0" style="animation-delay: ${Math.random() * 0.5}s">${word}</span></span></span>`)
        .join(' ');
      
      setTimeout(() => {
        const spans = headingRef.current?.querySelectorAll('.animate-slide-in');
        spans?.forEach(span => {
          span.classList.remove('opacity-0');
        });
      }, 100);
    };
    
    splitText();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary dark:bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 pt-32 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="logo.png" 
                alt="MLSAXIET Logo" 
                className="h-12 w-auto"
              />
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-sm uppercase tracking-widest font-medium">Technical Excellence</span>
            </div>
            
            <h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight mb-6"
            >
              The Activity Zone</h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md animate-fade-in opacity-0" style={{animationDelay: "0.8s", animationFillMode: "forwards"}}>
              We specialize in creating robust technical solutions through software development, documentation, and systems integration to drive your business forward.
            </p>
            
            <div className="pt-4 animate-fade-in opacity-0" style={{animationDelay: "1.2s", animationFillMode: "forwards"}}>
              <a 
                href="#portfolio" 
                className="inline-flex items-center py-3 px-6 bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                January 01-March31
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center py-3 px-6 ml-8 border border-primary/20 rounded-full transition-all duration-300 hover:border-primary/40"
              >
                Get in touch
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-2xl animate-float" style={{animationDelay: "2s"}}></div>
            
            <div className="relative bg-white  p-4 rounded-2xl shadow-2xl shadow-primary/5 animate-zoom-in opacity-0" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary rounded-full"></div>
              
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="logo.png" 
                  alt="MLSAXIET Logo" 
                  className="w-full h-full object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="w-10 h-10 flex items-center justify-center rounded-full glass">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 15L3.5 8.5L4.5 7.5L10 13L15.5 7.5L16.5 8.5L10 15Z" 
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
