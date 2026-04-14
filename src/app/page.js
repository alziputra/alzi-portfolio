"use client";

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Briefcase, 
  User, 
  Code, 
  Award, 
  MapPin, 
  ChevronRight,
  Star,
  Terminal
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

// IMPORT SEMUA DATA DARI CONSTANT
import { PERSONAL_INFO, EXPERIENCES, SKILLS, REAL_ARTICLES } from '../constant'; 

export default function App() {
  const [repos, setRepos] = useState([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/alziputra/repos?sort=updated&per_page=4')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        }
        setIsLoadingRepos(false);
      })
      .catch(err => {
        console.error("Gagal mengambil data GitHub:", err);
        setIsLoadingRepos(false);
      });
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <Terminal className="text-blue-500" size={24} />
            <span>Alzi12.Dev</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('tentang')} className="hover:text-blue-400 transition">Tentang</button>
            <button onClick={() => scrollToSection('pengalaman')} className="hover:text-blue-400 transition">Pengalaman</button>
            <button onClick={() => scrollToSection('portofolio')} className="hover:text-blue-400 transition">Portofolio</button>
            <button onClick={() => scrollToSection('artikel')} className="hover:text-blue-400 transition">Artikel</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/20">
            {PERSONAL_INFO.greeting}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-400">
            {PERSONAL_INFO.role}
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl text-lg">
            {PERSONAL_INFO.heroDescription}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('portofolio')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center gap-2"
            >
              <Code size={20} /> Lihat Portofolio
            </button>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition flex items-center gap-2 border border-slate-700">
              <Mail size={20} /> Hubungi Saya
            </a>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition">
              <FaGithub size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute inset-4 bg-slate-800 rounded-full border-2 border-slate-700 flex items-center justify-center overflow-hidden">
            <Image 
              src="/profile.jpeg" 
              alt="Foto Profil Alzi" 
              width={400} 
              height={400} 
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="tentang" className="py-20 bg-slate-800/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <User className="text-blue-400" /> Tentang Saya
            </div>
            <p className="text-slate-400 leading-relaxed">
              {PERSONAL_INFO.aboutDescription}
            </p>
            <div className="pt-4 border-t border-slate-700">
              <div className="flex items-center gap-2 text-slate-300 mb-2">
                <MapPin size={18} className="text-emerald-400" /> {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award size={18} className="text-yellow-400" /> {PERSONAL_INFO.award}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <Code className="text-blue-400" /> Fokus Keahlian
            </div>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm font-medium text-slate-300 hover:border-blue-500 transition cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section (Dynamic Map) */}
      <section id="pengalaman" className="py-20 px-4 max-w-6xl mx-auto border-b border-slate-800">
        <div className="flex items-center gap-2 text-2xl font-bold text-white mb-12">
          <Briefcase className="text-blue-400" /> Pengalaman Kerja
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${exp.isActive ? 'is-active' : ''}`}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors ${exp.isActive ? 'border-white bg-blue-600 text-emerald-50' : 'border-slate-700 bg-slate-900 text-slate-500'}`}>
                {exp.iconType === 'briefcase' ? <Briefcase size={18} /> : <Code size={18} />}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800 border border-slate-700 shadow-xl">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-white text-lg">{exp.jobTitle}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full w-fit ${exp.isActive ? 'text-blue-400 bg-blue-500/10' : 'text-slate-400 bg-slate-700/50'}`}>
                    {exp.period}
                  </span>
                </div>
                <div className="text-slate-300 font-medium mb-4">{exp.company}</div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                {exp.highlight && (
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 mt-2">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <span className="font-bold text-blue-400">Proyek Internal:</span> {exp.highlight}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Portofolio Section */}
      <section id="portofolio" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-2">
              <FaGithub className="text-blue-400" /> Repositori Terbaru
            </div>
            <p className="text-slate-400">Kode sumber proyek saya di GitHub.</p>
          </div>
        </div>

        {isLoadingRepos ? (
          <div className="text-center py-12 text-slate-500">Memuat data GitHub...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="group p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-blue-500 transition flex flex-col">
                <h4 className="text-lg font-bold text-blue-400 mb-2 truncate">{repo.name}</h4>
                <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-2">
                  {repo.description || 'Proyek pengembangan web.'}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                  <span>{repo.language}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Artikel Section */}
      <section id="artikel" className="py-20 bg-slate-800/30 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-white mb-10">
            <BookOpen className="text-emerald-400" /> Tulisan Terbaru di Medium
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REAL_ARTICLES.map((article) => (
              <a key={article.id} href={article.link} target="_blank" rel="noreferrer" className="flex flex-col p-6 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700/50 transition group h-full">
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-3">
                  {article.contentSnippet}
                </p>
                <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1 mt-auto">
                  Baca Artikel <ChevronRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-slate-500 text-sm mb-4">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}.
          </p>
          <div className="flex justify-center space-x-6">
            <a href={PERSONAL_INFO.githubUrl} className="text-slate-500 hover:text-white transition"><FaGithub size={20} /></a>
            <a href={PERSONAL_INFO.linkedinUrl} className="text-slate-500 hover:text-white transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}