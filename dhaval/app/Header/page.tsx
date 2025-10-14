"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Hero from "../../public/myPHoto.jpg";
import { CountUp } from "countup.js";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const countRefs = useRef([]);

  const statsData = [
    { value: 3, label: "Years of\nExperience", suffix: "+" },
    { value: 5, label: "Projects\nCompleted", suffix: "+" },
    { value: 5, label: "Technologies\nMastered", suffix: "+" },
    { value: 4, label: "Certificates", suffix: "+" },
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);

    // Initialize countup animations
    countRefs.current.forEach((el, index) => {
      if (el) {
        const countUp = new CountUp(el, statsData[index].value, {
          duration: 3,
          separator: ",",
          suffix: statsData[index].suffix,
          enableScrollOnce: true,
        });
        if (!countUp.error) countUp.start();
      }
    });
  }, [statsData]); // Added statsData to dependency array

  return (
    <header className="relative bg-[#0d0d0d] text-white overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient circles with animation */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full 
                    bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] 
                    blur-[100px] z-0 animate-pulse-slow" />
        
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full 
                    bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] 
                    blur-[120px] z-0 animate-float" />
        
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full 
                    bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] 
                    blur-[120px] z-0 animate-pulse-slow delay-1000" />

        {/* Additional floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--primary-color)] rounded-full animate-float delay-700" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[var(--primary-color)] rounded-full animate-float delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-float delay-1200" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between
                  px-6 sm:px-12 lg:px-[8%] py-16 lg:py-24 flex-1">
        {/* Left Content with Staggered Animations */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8">
          {/* Animated Title */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-unbounded font-bold leading-tight">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)] animate-gradient">
                Dhaval Rathod
              </span>
            </h1>
          </div>

          {/* Animated Description */}
          <div className={`transform transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-sora py-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A passionate <span className="text-[var(--primary-color)] font-semibold">Full-Stack & React Native Developer</span> who loves crafting 
              exceptional web apps, mobile experiences, and AI-powered tools that make a real difference. 
              From sleek React/Next.js dashboards to cross-platform React Native apps, I build products 
              that are fast, beautiful, and user-friendly.
            </p>
          </div>

          {/* Animated Buttons & Social Links */}
          <div className={`flex flex-wrap gap-4 sm:gap-6 items-center justify-center lg:justify-start mt-8 transform transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Download CV Button */}
            <a
              href="/Dhaval_Rathod_Resume.pdf"
              download="Dhaval_Rathod_Resume.pdf"
              className="group relative bg-transparent border-2 border-[var(--primary-color)] font-bold px-6 sm:px-8 py-3 sm:py-4 text-[var(--primary-color)]
                       rounded-xl hover:bg-[var(--primary-color)] hover:text-white transition-all duration-500 flex items-center gap-3 
                       hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <i className="bi bi-download text-lg" /> 
                Download CV
              </span>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-[var(--primary-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-5 text-2xl sm:text-3xl">
              {[
                { icon: "bi bi-github", href: "https://github.com/Dhaval523" },
                { icon: "bi bi-linkedin", href: "https://www.linkedin.com/in/dhaval-rathod-0406282b3" },
                { icon: "bi bi-instagram", href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative p-3 rounded-full bg-white/5 hover:bg-[var(--primary-color)]/20 
                           transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--primary-color)]/20"
                >
                  <i className={`${social.icon} group-hover:text-[var(--primary-color)] transition-colors duration-300`} />
                  
                  {/* Pulse effect on hover */}
                  <span className="absolute inset-0 rounded-full bg-[var(--primary-color)] animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image with Enhanced Animation */}
        <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center relative">
          <div className={`relative w-72 sm:w-80 md:w-96 lg:w-[28rem] h-72 sm:h-80 md:h-96 lg:h-[28rem] 
                      rounded-full bg-gradient-to-tr from-[var(--hero-image-from)] to-[var(--hero-image-to)] 
                      p-2 shadow-[0_0_35px_rgba(252,65,0,0.4)] overflow-hidden transform transition-all duration-1000 ease-out delay-300 ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                      }`}>
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--primary-color)] to-[var(--primary-light-2)] animate-spin-slow opacity-75 -z-10" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0d0d0d] p-1">
              <Image
                src={Hero}
                alt="Dhaval Rathod - Full Stack Developer"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                priority
                quality={95}
              />
            </div>

            {/* Floating elements around image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--primary-color)] rounded-full animate-bounce delay-1000" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-[var(--primary-color)] rounded-full animate-ping" />
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-[8%] py-12 lg:py-16 bg-gradient-to-t from-black/50 to-transparent">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={`group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
                        hover:border-[var(--primary-color)]/30 hover:bg-white/10  
                        hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/10 transform transition-all duration-500 ease-out delay-${index * 200} ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
            >
              <h1
                ref={(el) => (countRefs.current[index] = el)}
                className="text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2"
              >
                0
              </h1>
              <p className="text-sm sm:text-base text-gray-300 font-medium whitespace-pre-line leading-relaxed group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}