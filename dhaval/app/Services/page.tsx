"use client"
import { useEffect, useRef, useState } from 'react'

export default function ServicesPage() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    
    const ServicesData = [
        {
            id: "01",
            title: "Full-Stack Web Development",
            desc: "Building modern, scalable web apps with React.js / Next.js front-ends and secure Node.js back-ends.",
            icon: "bi bi-laptop",
            gradient: "from-blue-500 to-purple-600"
        },
        {
            id: "02",
            title: "Cross-Platform Mobile Apps",
            desc: "Creating sleek, high-performance apps with React Native that run seamlessly on both Android and iOS.",
            icon: "bi bi-phone",
            gradient: "from-green-500 to-cyan-600"
        },
        {
            id: "03",
            title: "AI-Powered Solutions",
            desc: "Integrating AI models like Gemini AI for smart tools such as resume analyzers, chatbots, and data-driven applications.",
            icon: "bi bi-cpu",
            gradient: "from-orange-500 to-red-600"
        },
        {
            id: "04",
            title: "REST API & Database Design",
            desc: "Designing secure REST APIs and efficient databases using MongoDB, PostgreSQL, and SQL Server to power robust applications.",
            icon: "bi bi-database",
            gradient: "from-purple-500 to-pink-600"
        },
        {
            id: "05",
            title: "UI / UX Design",
            desc: "Designing clean, responsive, and user-friendly interfaces with Tailwind CSS and modern UI practices to improve user experience.",
            icon: "bi bi-palette",
            gradient: "from-yellow-500 to-orange-600"
        },
        {
            id: "06",
            title: "Cloud & Deployment",
            desc: "Deploying full-stack projects using services like Vercel, Render, and Google Cloud for reliable and fast delivery.",
            icon: "bi bi-cloud",
            gradient: "from-cyan-500 to-blue-600"
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section 
            ref={sectionRef}
            className="relative px-[5%] lg:px-[10%] py-20 lg:py-28 text-white bg-[#0d0d0d] overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--primary-color)]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary-color)]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            {/* Section Header */}
            <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
                <h1 className="text-4xl lg:text-6xl font-unbounded font-bold mb-6">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)]">Services</span>
                </h1>
                <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto font-sora">
                    Comprehensive digital solutions tailored to bring your ideas to life with cutting-edge technology
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                {ServicesData.map((service, index) => (
                    <div
                        key={index}
                        className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-[var(--primary-color)]/30 hover:shadow-2xl hover:shadow-[var(--primary-color)]/10 overflow-hidden transform transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        {/* Animated Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                        
                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary-color)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                            <div className="absolute inset-[1px] rounded-2xl bg-[#0d0d0d]"></div>
                        </div>

                        {/* Header Section */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                {/* Icon Container */}
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <i className={`${service.icon} text-xl text-[var(--primary-color)]`}></i>
                                    </div>
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-xl bg-[var(--primary-color)] animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                                
                                {/* Service Number */}
                                <span className="text-4xl lg:text-5xl font-unbounded font-bold text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)] transition-all duration-300">
                                    {service.id}
                                </span>
                            </div>
                            
                            {/* Arrow Icon */}
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-gray-700 text-gray-400 transition-all duration-300 group-hover:bg-[var(--primary-color)] group-hover:text-white group-hover:border-[var(--primary-color)] group-hover:scale-110 group-hover:rotate-45">
                                <i className="bi bi-arrow-up-right text-lg"></i>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-4">
                            <h2 className="text-xl lg:text-2xl font-unbounded font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-gray-300 transition-all duration-300">
                                {service.title}
                            </h2>
                            <p className="text-gray-400 text-base lg:text-lg leading-relaxed font-sora group-hover:text-gray-300 transition-colors duration-300">
                                {service.desc}
                            </p>
                        </div>

                        {/* Animated Bottom Border */}
                        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent group-hover:via-[var(--primary-color)] transition-all duration-500"></div>

                        {/* Floating Elements */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--primary-color)] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[var(--primary-color)] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-200"></div>
                    </div>
                ))}
            </div>

            
        </section>
    )
}