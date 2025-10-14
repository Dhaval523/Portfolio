"use client";
import { useState, useEffect, useRef } from 'react';
import { BiPhone, BiEnvelope, BiMap, BiSend } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const services = [
    "Full-Stack Web Development",
    "React Native Mobile App",
    "AI-Powered Solutions",
    "REST API & Backend Development",
    "UI/UX Design",
    "Cloud Deployment",
    "Other Project"
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    // ✅ Fixed apostrophe issue
    alert('Message sent successfully! I&apos;ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: BiPhone,
      label: "Phone",
      value: "(+91) 76240 41235",
      link: "tel:+917624041235"
    },
    {
      icon: BiEnvelope,
      label: "Email",
      value: "dr9373407@gmail.com",
      link: "mailto:dr9373407@gmail.com"
    },
    {
      icon: BiMap,
      label: "Address",
      value: "Valsad, Gujarat",
      link: "https://maps.google.com/?q=Valsad"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Dhaval523", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/dhaval-rathod-0406282b3/", label: "LinkedIn" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative px-[5%] lg:px-[10%] py-20 lg:py-28 text-white bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary-color)]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--primary-color)]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Section Header */}
      <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-4xl lg:text-6xl font-unbounded font-bold mb-6">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)]">Touch</span>
        </h1>
        <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto font-sora">
          {/* ✅ Fixed apostrophe */}
          Ready to bring your ideas to life? Let&apos;s discuss your project and create something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {/* ===== Form Section ===== */}
        <div className={`transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-[var(--primary-color)]/10 transition-all duration-500 hover:border-[var(--primary-color)]/30">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-unbounded font-semibold text-white mb-3">
                {/* ✅ Fixed apostrophe */}
                Let&apos;s Work <span className="text-[var(--primary-color)]">Together</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-sora">
                {/* ✅ Fixed apostrophe */}
                Have a project in mind? Fill out this form and I&apos;ll get back to you within 24 hours to discuss how we can bring your vision to life.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                  className="w-full bg-gray-500/5 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary-color)] focus:bg-gray-500/10 transition-all duration-300"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                  className="w-full bg-gray-500/5 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary-color)] focus:bg-gray-500/10 transition-all duration-300"
                />
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-gray-500/5 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary-color)] focus:bg-gray-500/10 transition-all duration-300"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full bg-gray-500/5 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary-color)] focus:bg-gray-500/10 transition-all duration-300"
                />
              </div>

              {/* Service Select */}
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-500/5 border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[var(--primary-color)] focus:bg-gray-500/10 transition-all duration-300 cursor-pointer"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="Tell me about your project, goals, and timeline..."
                required
                className="w-full bg-gray-500/5 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--primary-color)] focus:bg-gray-500/10 transition-all duration-300 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-light-2)] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/30 overflow-hidden ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <BiSend className="text-xl" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>
          </div>
        </div>

        {/* ===== Contact Info Section ===== */}
        <div className={`space-y-8 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-unbounded font-semibold text-white mb-6">
              Contact <span className="text-[var(--primary-color)]">Information</span>
            </h3>

            {contactInfo.map((item, index) => ( // ✅ Added index parameter
              <a
                key={item.label}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all duration-500 hover:border-[var(--primary-color)]/50 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary-color)]/10 cursor-pointer"
              >
                <div className="relative">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--primary-color)]/10 text-[var(--primary-color)] border border-[var(--primary-color)]/20 group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-[var(--primary-color)] animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 font-medium mb-1">{item.label}</p>
                  <p className="text-white text-lg font-semibold">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-gray-700">
            <h4 className="text-xl font-unbounded font-semibold text-white mb-6">Follow Me On</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => ( // ✅ Added index parameter
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gray-500/5 border border-gray-700 text-gray-400 transition-all duration-500 hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] hover:scale-110 hover:shadow-lg hover:shadow-[var(--primary-color)]/20"
                  title={social.label}
                >
                  <social.icon size={20} />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mt-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Available for Projects</span>
            </div>
            {/* ✅ Fixed apostrophe */}
            <p className="text-gray-400 text-sm">
              I&apos;m currently accepting new projects and would love to hear about your ideas. Typical response time: within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}