'use client';
import Image from "next/image";
import Link from 'next/link';
import BlogTabs from "@/components/BlogTabs";

export default function Home() {
  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="max-w-7xl mx-auto flex justify-end space-x-4">
          <Link 
            href="/fragebogen"
            className="bg-white text-blue-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors"
          >
            Fragebogen
          </Link>
          <Link 
            href="/login"
            className="bg-white text-blue-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors"
          >
            Anmelden
          </Link>
        </div>
      </nav>

      {/* Hero Section mit Video */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            style={{ width: '100%', height: '100%' }}
          >
            <source src="/videos/hero-bg.mp4" type="video/quicktime" />
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-blue-900/50"></div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Atiempo Health
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Dein Weg.
            </p>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Deine Zeit.
            </p>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Deine Gesundheit.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors">
              Termin vereinbaren
            </button>
          </div>
        </div>
      </div>

      {/* Restlicher Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Vorsorgeuntersuchungen</h3>
            <p className="text-blue-100">Regelmäßige Gesundheitschecks für Ihre Sicherheit</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Behandlungen</h3>
            <p className="text-blue-100">Professionelle medizinische Versorgung</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Beratung</h3>
            <p className="text-blue-100">Persönliche Beratung für Ihre Gesundheit</p>
          </div>
        </div>

        {/* 12-Wochenplan Download */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-semibold text-white mb-4">12-Wochenplan</h3>
              <p className="text-blue-100 mb-4">
                Laden Sie unseren kostenlosen 12-Wochenplan herunter und starten Sie Ihre Reise zu einem gesünderen Leben.
              </p>
              <p className="text-blue-100">
                Der Plan enthält strukturierte Übungen, Ernährungsempfehlungen und Tipps für ein ausgewogenes Leben.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button 
                className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors flex items-center"
                onClick={() => {
                  // Hier später den PDF-Download-Link einfügen
                  alert('Der Download wird in Kürze verfügbar sein.');
                }}
              >
                <svg 
                  className="w-6 h-6 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
                PDF herunterladen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Kontaktbereich */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Kontakt</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  placeholder="Ihr Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  placeholder="Ihre E-Mail-Adresse"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-white mb-2">Betreff</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white"
                placeholder="Betreff Ihrer Nachricht"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Nachricht</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white"
                placeholder="Ihre Nachricht"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-950 py-16">
        <BlogTabs />
      </div>
    </div>
  );
}
