'use client';

import { useState, useEffect } from 'react';

type Lang = 'en' | 'es';

const t = {
  en: {
    badge: 'Full Stack Web Developer',
    hero_sub: 'Asunción, Paraguay • EU Passport Holder • Fluent English Speaker',
    cta_exp: 'View Experience',
    cta_contact: 'Get in touch',
    nav: ['About', 'Experience', 'Skills', 'Projects', 'Contact'],
    nav_ids: ['about', 'experience', 'skills', 'projects', 'contact'],

    about_title: 'About me',
    about_body: [
      "I'm a Full Stack Web Developer with nearly 5 years of professional experience designing, developing, and delivering modern, scalable web applications.",
      'I started my career working across the full stack and have continued building complete solutions — from responsive, user-centric frontends with React, Next.js, TypeScript and Tailwind CSS, to robust backends using PHP, Java, Python (Django) and Ruby on Rails.',
      "I enjoy working with databases like PostgreSQL, integrating cloud services, building clean REST APIs, and writing clear documentation. I'm an avid learner who loves exploring new technologies to stay current.",
      'Outside of coding, I like playing videogames and watching movies (the grainier the better).',
    ],

    exp_title: 'Professional Experience',
    experience: [
      {
        role: 'Software Developer',
        company: 'Paraguay Security S.A.',
        period: 'Aug 2023 – Nov 2024',
        location: 'Asunción, Paraguay',
        points: [
          'Designed and developed full-stack web applications with React, Next.js, TypeScript, Tailwind CSS, and Supabase, creating responsive, user-centric interfaces.',
          'Engineered high-performance UIs and optimized PostgreSQL database solutions, boosting application scalability and data efficiency.',
          'Collaborated with cross-functional teams to deliver features on time and to exact specifications.',
        ],
      },
      {
        role: 'IT Support Specialist',
        company: 'Quality Care Medical Center',
        period: 'May 2021 – Jul 2021',
        location: 'San Bernardino, CA',
        points: [
          'Automated repetitive data entry processes and developed simple, user-friendly guides for non-technical staff, streamlining daily operations.',
          'Resolved software and hardware issues in person and remotely.',
          'Maintained and monitored daily IT operations.',
        ],
      },
      {
        role: 'IT Consultant',
        company: 'IDOM Consulting',
        period: 'Feb 2019 – Dec 2019',
        location: 'Asunción, Paraguay',
        points: [
          'Built critical modules for the Expropriation Management System using PHP and CodeIgniter; designed dynamic web forms with JavaScript, jQuery, HTML, and Bootstrap; structured PostgreSQL databases with custom reporting via JasperReports.',
          'Drove requirements gathering and technical planning for the Document Management System (SGD 2.0); developed reusable Django components and polished frontend interfaces.',
        ],
      },
      {
        role: 'Software Developer',
        company: 'Tavatech',
        period: 'Aug 2016 – Feb 2018',
        location: 'Asunción, Paraguay',
        points: [
          'Engineered enterprise-grade backend modules with Java, Spring MVC, and Hibernate to support high-traffic production systems.',
          'Led full software development lifecycle — from architecture and design to deployment on Apache Tomcat.',
          'Managed CI/CD pipelines with Maven and conducted code reviews.',
          'Contributed to frontend development of the flagship Chispawer platform using Ember.js.',
        ],
      },
      {
        role: 'Web Developer',
        company: 'Nexoos',
        period: 'Dec 2015 – Jul 2016',
        location: 'Asunción, Paraguay',
        points: [
          'Maintained and enhanced the core Nexoos Paraguay platform built on Ruby on Rails.',
          'Translated business requirements into clean, production-ready code while rapidly resolving bugs.',
          'Localized homepage content into English, broadening user reach for international audiences.',
        ],
      },
    ],

    skills_title: 'Technical Skills',

    projects_title: 'Featured Projects',
    projects: [
      {
        title: 'Empower School – Thesis Project',
        desc: 'Full-featured modern web application built with Vite, React, Firebase, and Tailwind CSS.',
        link: 'https://github.com/githubbabby/empower-school',
        cta: 'View on GitHub 🔗',
      },
      {
        title: 'Personal Portfolio',
        desc: 'This very website — a responsive portfolio built with Next.js, React, TypeScript, and Tailwind CSS, featuring smooth navigation and a clean, modern design.',
        link: 'https://github.com/jkkma/jonathan-merlo-portfolio',
        cta: 'View on GitHub 🔗',
      },
    ],

    contact_title: "Let's Connect",
    footer: '© 2026 Jonathan Merlo Apuril • Built with Next.js & Tailwind CSS',
  },

  es: {
    badge: 'Desarrollador Web Full Stack',
    hero_sub: 'Asunción, Paraguay • Pasaporte de la UE • Inglés Fluido',
    cta_exp: 'Ver Experiencia',
    cta_contact: 'Contáctame',
    nav: ['Resumen', 'Experiencia', 'Habilidades', 'Proyectos', 'Contacto'],
    nav_ids: ['about', 'experience', 'skills', 'projects', 'contact'],

    about_title: 'Resumen',
    about_body: [
      'Soy un Desarrollador Web Full Stack con casi 5 años de experiencia profesional diseñando, desarrollando y entregando aplicaciones web modernas y escalables.',
      'Comencé mi carrera trabajando como desarrollador Full Stack y continué construyendo soluciones completas — desde frontends responsive y centrados en el usuario con React, Next.js, TypeScript y Tailwind CSS, hasta backends robustos con PHP, Java, Python (Django) y Ruby on Rails.',
      'Disfruto trabajar con bases de datos como PostgreSQL, integrar servicios en la nube, construir APIs REST limpias y escribir documentación clara. Soy un aprendiz apasionado que disfruta explorar nuevas tecnologías para mantenerse actualizado.',
      'Fuera del código, me gusta jugar videojuegos y ver películas (mientras más granulada, mejor).',
    ],

    exp_title: 'Experiencia Profesional',
    experience: [
      {
        role: 'Desarrollador de Software',
        company: 'Paraguay Security S.A.',
        period: 'Ago 2023 – Nov 2024',
        location: 'Asunción, Paraguay',
        points: [
          'Diseñé y desarrollé aplicaciones web full-stack con React, Next.js, TypeScript, Tailwind CSS y Supabase, creando interfaces responsivas y centradas en el usuario.',
          'Desarrollé interfaces de alto rendimiento y optimicé soluciones de base de datos PostgreSQL, mejorando la escalabilidad y eficiencia de los datos.',
          'Colaboré con equipos multidisciplinarios para entregar funcionalidades en tiempo y forma según especificaciones.',
        ],
      },
      {
        role: 'Especialista en Soporte IT',
        company: 'Quality Care Medical Center',
        period: 'May 2021 – Jul 2021',
        location: 'San Bernardino, CA',
        points: [
          'Automaticé procesos repetitivos de ingreso de datos y desarrollé guías sencillas para personal no técnico, optimizando las operaciones diarias.',
          'Resolví problemas de software y hardware de forma presencial y remota.',
          'Mantuve y monitoreé las operaciones de IT diarias.',
        ],
      },
      {
        role: 'Consultor IT',
        company: 'IDOM Consulting',
        period: 'Feb 2019 – Dic 2019',
        location: 'Asunción, Paraguay',
        points: [
          'Desarrollé módulos críticos para el Sistema de Gestión de Expropiaciones con PHP y CodeIgniter; diseñé formularios web dinámicos con JavaScript, jQuery, HTML y Bootstrap; estructuré bases de datos PostgreSQL con reportes personalizados vía JasperReports.',
          'Lideré el relevamiento de requisitos y la planificación técnica del Sistema de Gestión Documental (SGD 2.0); desarrollé componentes reutilizables en Django e interfaces frontend pulidas.',
        ],
      },
      {
        role: 'Desarrollador de Software',
        company: 'Tavatech',
        period: 'Ago 2016 – Feb 2018',
        location: 'Asunción, Paraguay',
        points: [
          'Desarrollé módulos backend empresariales con Java, Spring MVC e Hibernate para sistemas de producción de alto tráfico.',
          'Lideré el ciclo completo de desarrollo de software — desde la arquitectura y diseño hasta el despliegue en Apache Tomcat.',
          'Administré pipelines de CI/CD con Maven y realicé revisiones de código.',
          'Contribuí al desarrollo frontend de la plataforma insignia Chispawer usando Ember.js.',
        ],
      },
      {
        role: 'Desarrollador Web',
        company: 'Nexoos',
        period: 'Dic 2015 – Jul 2016',
        location: 'Asunción, Paraguay',
        points: [
          'Mantuve y mejoré la plataforma principal de Nexoos Paraguay construida sobre Ruby on Rails.',
          'Traduje requerimientos de negocio en código limpio y listo para producción, resolviendo errores con rapidez.',
          'Localicé el contenido de la página principal al inglés, ampliando el alcance para audiencias internacionales.',
        ],
      },
    ],

    skills_title: 'Habilidades Técnicas',

    projects_title: 'Proyectos Destacados',
    projects: [
      {
        title: 'Empower School – Proyecto de Tesis',
        desc: 'Aplicación web moderna y completa desarrollada con Vite, React, Firebase y Tailwind CSS.',
        link: 'https://github.com/githubbabby/empower-school',
        cta: 'Ver en GitHub 🔗',
      },
      {
        title: 'Sitio web Personal',
        desc: 'Este mismo sitio web responsive construido con Next.js, React, TypeScript y Tailwind CSS, con navegación fluida y un diseño limpio y moderno.',
        link: 'https://github.com/jkkma/jonathan-merlo-portfolio',
        cta: 'Ver en GitHub 🔗',
      },
    ],

    contact_title: 'Contacto',
    footer: '© 2026 Jonathan Merlo Apuril • Hecho con Next.js & Tailwind CSS',
  },
} as const;

const skillData = [
  { id: 'nextjs', name: 'Next.js' },
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'tailwindcss', name: 'Tailwind CSS' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'html', name: 'HTML5' },
  { id: 'css', name: 'CSS3' },
  { id: 'php', name: 'PHP' },
  { id: 'python', name: 'Python' },
  { id: 'rails', name: 'Ruby on Rails' },
  { id: 'java', name: 'Java' },
  { id: 'postgresql', name: 'PostgreSQL' },
  { id: 'supabase', name: 'Supabase' },
  { id: 'firebase', name: 'Firebase' },
  { id: 'git', name: 'Git' },
  { id: 'ember', name: 'Ember.js' },
  { id: 'jquery', name: 'jQuery' },
  { id: 'bootstrap', name: 'Bootstrap' },
  { id: 'maven', name: 'Maven' },
  {
    id: 'tomcat',
    name: 'Apache Tomcat',
    customSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg',
  },
];

export default function JonathanPortfolio() {
  const [lang, setLang] = useState<Lang>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sync language from localStorage after hydration
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'es') setLang(saved);
  }, []);

  const c = t[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);
  const toggleLang = () =>
    setLang((l) => {
      const next = l === 'en' ? 'es' : 'en';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });

  const toggleLabel = lang === 'en' ? 'ES' : 'EN';
  const toggleAriaLabel = lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés';

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">

      {/* ── Navbar ── */}
      <nav
        className={`fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-zinc-100 transition-shadow ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 sm:py-5 flex justify-between items-center gap-4">
          {/* Logo / Name */}
          <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-emerald-600 leading-tight shrink-0">
            Jonathan Merlo Apuril
          </div>

          {/* Desktop links + toggle */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {c.nav.map((label, i) => (
              <a
                key={label}
                href={`#${c.nav_ids[i]}`}
                className="hover:text-emerald-600 transition-colors"
              >
                {label}
              </a>
            ))}

            {/* Language pill */}
            <button
              onClick={toggleLang}
              aria-label={toggleAriaLabel}
              className="flex items-center gap-1.5 bg-zinc-100 hover:bg-emerald-50 border border-zinc-200 hover:border-emerald-300 text-zinc-700 hover:text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            >
              <span className="text-base leading-none">🌐</span>
              {toggleLabel}
            </button>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              aria-label={toggleAriaLabel}
              className="flex items-center gap-1 bg-zinc-100 hover:bg-emerald-50 border border-zinc-200 text-zinc-700 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all"
            >
              <span className="text-sm leading-none">🌐</span>
              {toggleLabel}
            </button>

            <button
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-zinc-800 rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-zinc-800 rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-zinc-800 rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-zinc-100 bg-white px-6 pb-4 flex flex-col gap-1">
            {c.nav.map((label, i) => (
              <a
                key={label}
                href={`#${c.nav_ids[i]}`}
                onClick={handleNavClick}
                className="py-3 text-base font-medium text-zinc-700 hover:text-emerald-600 border-b border-zinc-50 last:border-0 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="min-h-screen pt-28 sm:pt-32 pb-20 flex items-center bg-linear-to-br from-white via-emerald-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm mb-6">
            {c.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
            Jonathan Merlo Apuril
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">
            {c.hero_sub}
          </p>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#experience"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-medium transition-colors"
            >
              {c.cta_exp}
            </a>
            <a
              href="#contact"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-medium transition-colors"
            >
              {c.cta_contact}
            </a>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-10 text-center">
            {c.about_title}
          </h2>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-700 leading-relaxed">
            {c.about_body.map((para, i) => (
              <span key={i}>
                {para}
                {i < c.about_body.length - 1 && <><br /><br /></>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-16 sm:py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 sm:mb-16 text-center">
            {c.exp_title}
          </h2>
          <div className="space-y-8 sm:space-y-16">
            {c.experience.map((job, i) => (
              <div key={i} className="bg-white border border-zinc-100 rounded-3xl p-6 sm:p-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">{job.role}</h3>
                    <p className="text-emerald-600 font-medium text-sm sm:text-base">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <p className="text-zinc-500 font-medium text-sm sm:text-base whitespace-nowrap">{job.period}</p>
                </div>
                <ul className="pl-5 sm:pl-6 list-disc space-y-3 sm:space-y-4 text-zinc-700 text-sm sm:text-[17px]">
                  {job.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 sm:mb-16 text-center">
            {c.skills_title}
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
            {skillData.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center bg-white border border-zinc-200 hover:border-emerald-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all hover:shadow-md"
              >
                <img
                  src={skill.customSrc || `https://skillicons.dev/icons?i=${skill.id}`}
                  alt={skill.name}
                  className="w-10 h-10 sm:w-16 sm:h-16 mb-3 sm:mb-4"
                />
                <p className="font-medium text-zinc-800 text-center text-xs sm:text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-16 sm:py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 sm:mb-12 text-center">
            {c.projects_title}
          </h2>
          <div className="space-y-6">
            {c.projects.map((proj, i) => (
              <div key={i} className="bg-white border border-zinc-100 rounded-3xl p-8 sm:p-12">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4">{proj.title}</h3>
                <p className="text-zinc-600 mb-8 text-base sm:text-lg">{proj.desc}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-colors"
                >
                  {proj.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-10">
            {c.contact_title}
          </h2>
          <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 sm:p-12 space-y-6 sm:space-y-8 text-left max-w-md mx-auto">
            <a
              href="mailto:merlo.a.jonathan@gmail.com"
              className="flex items-center gap-4 text-base sm:text-xl hover:text-emerald-600 transition-colors break-all sm:break-normal"
            >
              ✉️ merlo.a.jonathan@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jonathanmerloapuril/"
              target="_blank"
              className="flex items-center gap-4 text-base sm:text-xl hover:text-emerald-600 transition-colors"
            >
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 sm:py-16 text-center text-sm sm:text-base text-zinc-500 bg-zinc-50 border-t border-zinc-100">
        {c.footer}
      </footer>
    </div>
  );
}