"use client";

import { useState, useEffect, useRef } from "react";
import {
    FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaCuttlefish
} from "react-icons/fa";
import {
    SiHtml5, SiCss3, SiNextdotjs, SiTailwindcss,
    SiMongodb, SiPostgresql, SiFigma, SiDotnet,
    SiExpress, SiAppwrite
} from "react-icons/si";

export default function Page() {
    const [activeTab, setActiveTab] = useState("Experience");
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const tabs = ["Experience", "Education", "Skills", "About me"];
    
    const experiences = [
        { 
            Date: "2023 – 2025", 
            role: "Project Developer", 
            company: "Self-Initiated Projects",
            description: "AI Resume Analyzer, CritiQ, Restate, AssignMate - Full-stack applications with AI integration",
            technologies: ["React-Native", "React", "Node js", "Next js", "MongoDB", "Gemini AI"]
        },
        { 
            Date: "2023", 
            role: "AI Chatbot Developer", 
            company: "Code Unnati Foundation",
            description: "Developed Agastya Hostel Bot for student assistance and query resolution",
            technologies: ["SAP Conversational AI"]
        },
        { 
            Date: "2022 – 2023", 
            role: "Frontend Web Development Intern", 
            company: "1Stop Project-Based Internship",
            description: "Built responsive web applications and learned industry best practices",
            technologies: ["HTML/CSS", "JavaScript", "Bootstrap"]
        },
    ];

    const education = [
        { 
            year: "2022 – 2026", 
            degree: "B.E. – Computer Science & Engineering", 
            institute: "Faculty of Technology & Engineering, M.S. University",
            score: "CGPA: 8.5/10"
        },
        { 
            year: "2021 – 2022", 
            degree: "HSC (12th Grade)", 
            institute: "Bai Ava Bai High School, Valsad",
            score: "Percentage: 85%"
        },
        { 
            year: "2019 – 2020", 
            degree: "SSC (10th Grade)", 
            institute: "Bai Ava Bai High School, Valsad",
            score: "Percentage: 88%"
        },
    ];

    const skills = [
        { name: "HTML5", icon: <SiHtml5 />, level: 95, category: "Frontend" },
        { name: "CSS3", icon: <SiCss3 />, level: 90, category: "Frontend" },
        { name: "JavaScript", icon: <FaJs />, level: 88, category: "Frontend" },
        { name: "React.js", icon: <FaReact />, level: 85, category: "Frontend" },
        { name: "Next.js", icon: <SiNextdotjs />, level: 80, category: "Frontend" },
        { name: "React Native", icon: <FaReact />, level: 75, category: "Mobile" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, category: "Frontend" },
        { name: "Node.js", icon: <FaNodeJs />, level: 82, category: "Backend" },
        { name: "Express.js", icon: <SiExpress />, level: 80, category: "Backend" },
        { name: "Appwrite", icon: <SiAppwrite />, level: 75, category: "Backend" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 80, category: "Database" },
        { name: "MongoDB", icon: <SiMongodb />, level: 85, category: "Database" },
        { name: "Python", icon: <FaPython />, level: 85, category: "Backend" },
        { name: "C++", icon: <FaCuttlefish />, level: 75, category: "Programming" },
        { name: "C# / .NET", icon: <SiDotnet />, level: 70, category: "Backend" },
        { name: "Figma", icon: <SiFigma />, level: 75, category: "Design" },
        { name: "Docker", icon: <FaDocker />, level: 65, category: "DevOps" },
        { name: "GitHub", icon: <FaGithub />, level: 90, category: "Tools" },
        { name: "AI Integration", icon: <FaPython />, level: 80, category: "AI/ML" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skillCategories = [...new Set(skills.map(skill => skill.category))];

    return (
        <section 
            ref={sectionRef}
            className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-white bg-[#0d0d0d] overflow-hidden min-h-screen"
        >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[var(--primary-color)]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 bg-[var(--primary-color)]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className={`max-w-7xl mx-auto relative z-10 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
                
                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-unbounded font-bold mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)]">Resume</span>
                    </h1>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto font-sora px-4">
                        Passionate full-stack developer with expertise in modern web technologies and AI integration
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                    
                    {/* Left Sidebar - Tabs */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 lg:p-8 sticky top-24">
                            <h2 className="text-2xl lg:text-3xl font-unbounded font-bold mb-6">
                                Explore My <span className="text-[var(--primary-color)]">Journey</span>
                            </h2>
                            
                            {/* Tabs Navigation - Fixed: Removed unused 'index' */}
                            <div className="space-y-3">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`group relative w-full text-left px-4 py-4 rounded-xl transition-all duration-500 cursor-pointer transform hover:scale-105 border ${
                                            activeTab === tab
                                                ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)] text-white shadow-lg shadow-[var(--primary-color)]/30 border-transparent"
                                                : "bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white border-gray-700"
                                        }`}
                                    >
                                        <span className="relative z-10 flex items-center justify-between font-semibold">
                                            {tab}
                                            {activeTab === tab && (
                                                <i className="bi bi-arrow-right-short text-xl animate-pulse"></i>
                                            )}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 lg:p-8">
                            
                            {/* Content Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl lg:text-3xl font-unbounded font-bold">
                                    {activeTab}
                                </h2>
                                <div className="w-12 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)] rounded-full"></div>
                            </div>

                            {/* Experience Content */}
                            {activeTab === "Experience" && (
                                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                    {experiences.map((exp, index) => (
                                        <div
                                            key={index}
                                            className={`group relative bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-500 hover:border-[var(--primary-color)]/50 hover:shadow-lg hover:shadow-[var(--primary-color)]/10 overflow-hidden ${
                                                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                            }`}
                                            style={{ transitionDelay: `${index * 150}ms` }}
                                        >
                                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                                                        <span className="text-[var(--primary-color)] font-semibold text-sm bg-[var(--primary-color)]/10 px-3 py-1 rounded-full w-fit">
                                                            {exp.Date}
                                                        </span>
                                                        <h3 className="text-xl lg:text-2xl font-unbounded font-semibold text-white">
                                                            {exp.role}
                                                        </h3>
                                                    </div>
                                                    <p className="text-gray-300 font-medium mb-3">
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                        {exp.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.technologies.map((tech, techIndex) => (
                                                            <span 
                                                                key={techIndex}
                                                                className="px-3 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-xs font-medium border border-[var(--primary-color)]/20"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Education Content */}
                            {activeTab === "Education" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                    {education.map((edu, index) => (
                                        <div
                                            key={index}
                                            className={`group relative bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-500 hover:border-[var(--primary-color)]/50 hover:shadow-lg hover:shadow-[var(--primary-color)]/10 overflow-hidden ${
                                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                            }`}
                                            style={{ transitionDelay: `${index * 150}ms` }}
                                        >
                                            <span className="text-[var(--primary-color)] font-semibold text-sm">
                                                {edu.year}
                                            </span>
                                            <h3 className="text-xl font-unbounded font-semibold mt-3 mb-2 text-white">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-gray-300 font-medium mb-2">
                                                {edu.institute}
                                            </p>
                                            <p className="text-gray-400 text-sm">
                                                {edu.score}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Skills Content - Fixed: Removed unused 'skillIndex' */}
                            {activeTab === "Skills" && (
                                <div className="space-y-8 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                    {skillCategories.map((category, categoryIndex) => (
                                        <div 
                                            key={category}
                                            className={`transform transition-all duration-700 ${
                                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                            }`}
                                            style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                                        >
                                            <h3 className="text-xl font-unbounded font-semibold mb-4 text-white border-b border-gray-700 pb-2">
                                                {category}
                                            </h3>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                                {skills
                                                    .filter(skill => skill.category === category)
                                                    .map((skill) => (
                                                        <div
                                                            key={skill.name}
                                                            className="group relative bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-lg p-4 transition-all duration-300 hover:border-[var(--primary-color)]/50 hover:shadow-lg hover:shadow-[var(--primary-color)]/10 cursor-pointer"
                                                        >
                                                            <div className="flex flex-col items-center text-center space-y-3">
                                                                <div className="text-3xl text-gray-300 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                                <span className="text-sm font-semibold text-white">
                                                                    {skill.name}
                                                                </span>
                                                                {/* Skill Level Bar */}
                                                                <div className="w-full bg-gray-700 rounded-full h-2">
                                                                    <div 
                                                                        className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)] h-2 rounded-full transition-all duration-1000 ease-out"
                                                                        style={{ width: `${skill.level}%` }}
                                                                    ></div>
                                                                </div>
                                                                <span className="text-xs text-gray-400">{skill.level}%</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* About Me Content - Fixed: Escaped single quotes */}
                            {activeTab === "About me" && (
                                <div className={`space-y-6 transform transition-all duration-700 ${
                                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                }`} style={{ transitionDelay: '200ms' }}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <p className="text-gray-300 leading-relaxed">
                                                Hi, I&apos;m <span className="text-[var(--primary-color)] font-semibold">Dhaval Rathod</span>,
                                                a passionate <strong>Full-Stack &amp; React Native Developer</strong> who loves turning ideas
                                                into fast, modern, and visually appealing digital products.
                                            </p>
                                            <p className="text-gray-300 leading-relaxed">
                                                I enjoy working with <strong>React / Next.js, Node, FastAPI</strong>,
                                                and I&apos;ve built AI-powered apps like <em className="text-[var(--primary-color)]">AI Resume Analyzer.</em>
                                            </p>
                                        </div>
                                        
                                        <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                                            <h3 className="text-lg font-unbounded font-semibold mb-4 text-white">Personal Info</h3>
                                            <ul className="space-y-3">
                                                {[
                                                    { icon: "bi bi-briefcase", text: "2+ years building full-stack projects" },
                                                    { icon: "bi bi-person-check", text: "Available for collaborations" },
                                                    { icon: "bi bi-telephone", text: "(+91) 76240 41235" },
                                                    { icon: "bi bi-envelope", text: "dr9373407@gmail.com" },
                                                    { icon: "bi bi-translate", text: "English | Hindi | Gujarati" }
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                                                        <i className={`${item.icon} text-[var(--primary-color)]`}></i>
                                                        <span>{item.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                                        <p className="text-gray-300 leading-relaxed">
                                            I thrive at the intersection of <strong>code, creativity, and user experience</strong>,
                                            always excited to learn new technologies and deliver real-world solutions that make a difference.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: var(--primary-color);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: var(--primary-light-2);
                }
            `}</style>
        </section>
    );
}