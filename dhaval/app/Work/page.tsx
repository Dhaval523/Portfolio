"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative, Pagination } from "swiper/modules";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiAppwrite, SiFastapi, SiPostgresql, SiDotnet,
} from "react-icons/si";
import {
  FaJsSquare, FaReact, FaNodeJs, FaPython, FaGithub, FaExternalLinkAlt,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import AiResume from "@/public/resume.png"
import restate from "@/public/restate.jpg"
import assignmate from "@/public/assignmate.png"
import agastya from "@/public/chatbot.jpg"
import critiq from "@/public/critiq.jpg"

export default function WorkPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  // ✅ Updated Real Projects
  const projects = [
    {
      id: "01",
      title: "AI Resume Analyzer",
      desc: "An AI-powered resume screening platform that analyzes resumes against job descriptions using Gemini AI, improving match accuracy by 50%.",
      tech: ["Next.js", "Tailwind CSS", "Gemini AI"],
      img: AiResume,
      liveLink: "https://ai-resume-alaylizer.vercel.app/",
      githubLink: "https://github.com/Dhaval523/AI-Resume-Analyzer",
      category: "Full Stack",
      features: ["AI Resume Scoring", "PDF Upload & Parsing", "Job Match Insights", "Gemini AI Integration"]
    },
    {
      id: "02",
      title: "CritiQ – Movie Review Platform",
      desc: "A full-stack web app for movie reviews and ratings, built with React and Node.js, handling 100+ user reviews with real-time CRUD APIs.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      img: critiq,
      liveLink: "https://critiq-2.onrender.com/",
      githubLink: "https://github.com/Dhaval523/critiQ-frontend",
      category: "Web App",
      features: ["User Reviews", "CRUD Operations", "Responsive UI", "Authentication System"]
    },
    {
      id: "03",
      title: "Restate – Real Estate Mobile App",
      desc: "A real estate mobile application built with React Native and Appwrite, allowing users to browse, list, and favorite properties with modern UI.",
      tech: ["React Native", "Tailwind CSS", "Appwrite"],
      img: restate,
      liveLink: "",
      githubLink: "",
      category: "Mobile App",
      features: ["Property Listings", "Appwrite Integration", "Modern UI", "Cross-Platform Support"]
    },
    {
      id: "04",
      title: "AssignMate – Assignment Submission System",
      desc: "A full-stack assignment submission portal built for colleges using React and ASP.NET, streamlining submissions and grading.",
      tech: ["React.js", "ASP.NET", "PostgreSQL"],
      img: assignmate,
      liveLink: "https://assign-mate-azure.vercel.app/",
      githubLink: "https://github.com/Dhaval523/Assingmate",
      category: "Web App",
      features: ["Assignment Management", "Secure Login", "Real-Time Grading", "Teacher Dashboard"]
    },
    {
      id: "05",
      title: "Agastya – Hostel Chatbot",
      desc: "A Telegram-based chatbot built using SAP Conversational AI to automate hostel queries like mess schedules, maintenance, and announcements.",
      tech: ["SAP Conversational AI", "Telegram"],
      img: agastya,
      liveLink: "https://t.me/agatsya01_bot",
      githubLink: "",
      category: "AI Bot",
      features: ["Automated Queries", "24/7 Support", "Natural Language Understanding", "Student Assistance"]
    },
  ];

  // 🔧 Tech Icon Helper
  const getTechIcon = (tech) => {
    const techIcons = {
      "Next.js": SiNextdotjs,
      "React.js": FaReact,
      "React Native": FaReact,
      "Node.js": FaNodeJs,
      "Python": FaPython,
      "FastAPI": SiFastapi,
      "MongoDB": SiMongodb,
      "Tailwind CSS": SiTailwindcss,
      "Appwrite": SiAppwrite,
      "PostgreSQL": SiPostgresql,
      "ASP.NET": SiDotnet,
      "JavaScript": FaJsSquare,
    };
    return techIcons[tech] || FaJsSquare;
  };

  // 👀 Fade-In Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-white bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[var(--primary-color)]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-[var(--primary-color)]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Header */}
      <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-unbounded font-bold mb-4 sm:mb-6">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)]">Projects</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-sora px-4">
          A showcase of my most impactful real-world projects, combining full-stack engineering with AI and design innovation.
        </p>
      </div>

      {/* Mobile Project Cards (for small screens) */}
      <div className="block lg:hidden space-y-8">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-500 hover:border-[var(--primary-color)]/30"
          >
            {/* Project Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl font-bold stroke-text text-gray-400/30">{project.id}</span>
              <span className="px-3 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-xs font-semibold border border-[var(--primary-color)]/20">
                {project.category}
              </span>
            </div>

            {/* Project Image */}
            <div className="relative rounded-xl overflow-hidden mb-4 shadow-lg">
              <Image 
                src={project.img} 
                alt={project.title} 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Project Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-unbounded">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
                    <span className="text-xs font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => {
                    const Icon = getTechIcon(t);
                    return (
                      <div key={i} className="flex items-center gap-1 px-3 py-2 bg-gray-500/5 border border-gray-700 rounded-lg">
                        <Icon className="text-lg text-[var(--primary-color)]" />
                        <span className="text-xs font-medium text-gray-300">{t}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-700">
                {project.liveLink && (
                  <Link 
                    href={project.liveLink} 
                    target="_blank" 
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[var(--primary-color)] text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </Link>
                )}
                {project.githubLink && (
                  <Link 
                    href={project.githubLink} 
                    target="_blank" 
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-500/5 border border-gray-700 text-gray-300 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:border-[var(--primary-color)]"
                  >
                    <FaGithub className="text-base" /> Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Swiper Section */}
      <div className="hidden lg:block relative z-10">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, EffectCreative, Pagination]}
          loop={true}
          speed={800}
          effect="creative"
          creativeEffect={{
            prev: { 
              shadow: true, 
              translate: ["-120%", 0, -500],
              opacity: 0.8
            },
            next: { 
              shadow: true, 
              translate: ["120%", 0, -500],
              opacity: 0.8
            },
          }}
          navigation={{ 
            prevEl: ".custom-prev", 
            nextEl: ".custom-next" 
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) => 
              `<span class="${className} w-3 h-3 bg-gray-600 rounded-full transition-all duration-300"></span>`,
          }}
          spaceBetween={40}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="project-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div className={`grid lg:grid-cols-2 gap-8 xl:gap-12 items-center transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${index * 200}ms` }}>
                
                {/* Text Section */}
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-6xl xl:text-7xl font-bold stroke-text text-gray-400/30">{project.id}</span>
                    <span className="px-4 py-2 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-sm font-semibold border border-[var(--primary-color)]/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl xl:text-4xl font-unbounded font-semibold">{project.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-sora">{project.desc}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></div>
                        <span className="text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t, i) => {
                        const Icon = getTechIcon(t);
                        return (
                          <div key={i} className="group flex items-center gap-2 px-4 py-3 bg-gray-500/5 border border-gray-700 rounded-xl hover:border-[var(--primary-color)]/50 hover:bg-[var(--primary-color)]/10 transition-all duration-300 cursor-pointer">
                            <Icon className="text-2xl text-[var(--primary-color)] group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white">{t}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-gray-700">
                    {project.liveLink && (
                      <Link 
                        href={project.liveLink} 
                        target="_blank" 
                        className="group relative flex items-center gap-3 px-6 py-4 bg-[var(--primary-color)] text-white rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/30"
                      >
                        <FaExternalLinkAlt className="text-lg" /> Live Demo
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link 
                        href={project.githubLink} 
                        target="_blank" 
                        className="group flex items-center gap-3 px-6 py-4 bg-gray-500/5 border border-gray-700 text-gray-300 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:border-[var(--primary-color)] hover:text-white hover:bg-[var(--primary-color)]/10"
                      >
                        <FaGithub className="text-xl" /> Source Code
                      </Link>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="relative order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      width={600} 
                      height={400} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation + Pagination */}
          <div className="flex items-center justify-between mt-12 xl:mt-16">
            <div className="custom-pagination flex gap-3"></div>
            <div className="flex gap-3">
              <button className="custom-prev group w-12 h-12 flex items-center justify-center bg-gray-500/5 border border-gray-700 text-gray-400 rounded-xl hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition-all duration-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="custom-next group w-12 h-12 flex items-center justify-center bg-gray-500/5 border border-gray-700 text-gray-400 rounded-xl hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition-all duration-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Swiper>
      </div>

      {/* Progress Indicator - Desktop Only */}
      <div className="hidden lg:flex justify-center mt-12">
        <div className="flex items-center gap-4 text-gray-400">
          <span className="text-lg font-semibold">0{activeIndex + 1}</span>
          <div className="w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)] transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-lg font-semibold">0{projects.length}</span>
        </div>
      </div>
    </section>
  );
}