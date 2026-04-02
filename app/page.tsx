'use client';

import { useState, useEffect, useCallback } from 'react';

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
          'Built critical modules for the Expropriation Management System using PHP and CodeIgniter; designed dynamic web forms with JavaScript, jQuery, HTML, CSS, and Bootstrap; structured PostgreSQL databases with custom reporting via JasperReports.',
          'Contributed to requirements gathering and technical planning for the Document Management System (SGD 2.0); developed reusable Django components and polished frontend interfaces using HTML and CSS.',
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
          'Contributed to frontend development of the flagship Chispawer platform for Palermo S.A. using Ember.js with custom CSS styling.',
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
    skills_hint: 'Click any skill to see where I used it',

    projects_title: 'Featured Projects',
    projects: [
      {
        title: 'Empower School – Thesis Project',
        desc: 'Full-featured modern web application built with Vite, React, Firebase, and Tailwind CSS.',
        link: 'https://github.com/jkkma/empower-school',
        cta: 'View on GitHub 🔗',
      },
      {
        title: 'Personal Portfolio',
        desc: 'This very website — a responsive portfolio built with Next.js, React, TypeScript, and Tailwind CSS, featuring smooth navigation and a clean, modern design.',
        link: 'https://github.com/jkkma/jonathan-merlo-portfolio',
        cta: 'View on GitHub 🔗',
      },
      {
        title: 'Job Board API',
        desc: 'Full REST API for a job board built with Node.js, Express, Prisma and PostgreSQL. Features: user auth (Employer/Applicant roles), data validation using Zod, Job CRUD, Applications with status tracking.',
        link: 'https://github.com/jkkma/job-board-api',
        cta: 'View on GitHub 🔗',
      },
    ],

    contact_title: "Let's Connect",
    footer: '© 2026 Jonathan Merlo Apuril • Built with Next.js & Tailwind CSS',
    mention: 'mention',
    mentions: 'mentions',
    clear_filter: 'Clear filter',
    // floating navigator
    nav_prev: 'Previous',
    nav_next: 'Next',
    nav_of: 'of',
    nav_in_exp: 'in experience',
    nav_in_proj: 'in projects',
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
          'Desarrollé módulos críticos para el Sistema de Gestión de Expropiaciones con PHP y CodeIgniter; diseñé formularios web dinámicos con JavaScript, jQuery, HTML, CSS y Bootstrap; estructuré bases de datos PostgreSQL con reportes personalizados vía JasperReports.',
          'Contribuí al relevamiento de requisitos y la planificación técnica del Sistema de Gestión Documental (SGD 2.0); desarrollé componentes reutilizables en Django e interfaces frontend pulidas con HTML y CSS.',
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
          'Contribuí al desarrollo frontend de la plataforma insignia Chispawer para Palermo S.A. usando Ember.js con estilos CSS personalizados.',
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
    skills_hint: 'Haz clic en una habilidad para ver dónde la he usado',

    projects_title: 'Proyectos Destacados',
    projects: [
      {
        title: 'Empower School – Proyecto de Tesis',
        desc: 'Aplicación web moderna y completa desarrollada con Vite, React, Firebase y Tailwind CSS.',
        link: 'https://github.com/jkkma/empower-school',
        cta: 'Ver en GitHub 🔗',
      },
      {
        title: 'Sitio web Personal',
        desc: 'Este mismo sitio web responsive construido con Next.js, React, TypeScript y Tailwind CSS, con navegación fluida y un diseño limpio y moderno.',
        link: 'https://github.com/jkkma/jonathan-merlo-portfolio',
        cta: 'Ver en GitHub 🔗',
      },
      {
        title: 'Job Board API',
        desc: 'API REST completa para un tablero de empleos construida con Node.js, Express, Prisma y PostgreSQL. Funcionalidades: autenticación de usuarios (roles Empleador/Postulante), validación de datos utilizando Zod, CRUD de empleos, postulaciones con seguimiento de estado.',
        link: 'https://github.com/jkkma/job-board-api',
        cta: 'Ver en GitHub 🔗',
      },
    ],

    contact_title: 'Contacto',
    footer: '© 2026 Jonathan Merlo Apuril • Hecho con Next.js & Tailwind CSS',
    mention: 'mención',
    mentions: 'menciones',
    clear_filter: 'Quitar filtro',
    nav_prev: 'Anterior',
    nav_next: 'Siguiente',
    nav_of: 'de',
    nav_in_exp: 'en experiencia',
    nav_in_proj: 'en proyectos',
  },
} as const;

// Map each skill ID → array of [experienceIndex, bulletIndex] pairs
const skillMap: Record<string, Array<[number, number]>> = {
  nextjs:       [[0, 0]],
  react:        [[0, 0]],
  typescript:   [[0, 0]],
  tailwindcss:  [[0, 0]],
  supabase:     [[0, 0]],
  postgresql:   [[0, 1], [2, 0]],
  javascript:   [[2, 0]],
  html:         [[2, 0], [2, 1]],
  css:          [[2, 0], [2, 1], [3, 3]], 
  jquery:       [[2, 0]],
  bootstrap:    [[2, 0]],
  php:          [[2, 0]],
  codeigniter:  [[2, 0]],
  python:       [[2, 1]],
  django:       [[2, 1]],
  java:         [[3, 0]],
  spring:       [[3, 0]],
  hibernate:    [[3, 0]],
  tomcat:       [[3, 1]],
  maven:        [[3, 2]],
  ember:        [[3, 3]],
  rails:        [[4, 0]],
  ruby:         [[4, 0]],
};

// Map each skill ID → array of project indices
const projectMap: Record<string, number[]> = {
  react:        [0, 1],
  firebase:     [0],
  tailwindcss:  [0, 1],
  nextjs:       [1],
  typescript:   [1],
  vite:         [0],
  // Job Board API
  nodejs:       [2],
  express:      [2],
  prisma:       [2],
  postgresql:   [2],
};

// A single scrollable mention target
type MentionTarget =
  | { kind: 'bullet'; expIdx: number; bulletIdx: number; label: string }
  | { kind: 'project'; projIdx: number; label: string };

const skillData = [
  { id: 'nextjs',       name: 'Next.js' },
  { id: 'react',        name: 'React' },
  { id: 'typescript',   name: 'TypeScript' },
  { id: 'tailwindcss',  name: 'Tailwind CSS' },
  { id: 'nodejs',       name: 'Node.js' },
  {
    id: 'prisma',
    name: 'Prisma',
    customSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
  },
  { id: 'supabase',     name: 'Supabase' },
  { id: 'postgresql',   name: 'PostgreSQL' },
  { id: 'vite',         name: 'Vite' },
  { id: 'javascript',   name: 'JavaScript' },
  { id: 'html',         name: 'HTML5' },
  { id: 'css',          name: 'CSS3' },
  { id: 'express',      name: 'Express' },
  { id: 'firebase',     name: 'Firebase' },
  { id: 'python',       name: 'Python' },
  { id: 'django',       name: 'Django' },
  { id: 'java',         name: 'Java' },
  { id: 'spring',       name: 'Spring' },
  {
    id: 'hibernate',
    name: 'Hibernate',
    customSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg',
  },
  { id: 'php',          name: 'PHP' },
  {
    id: 'codeigniter',
    name: 'CodeIgniter',
    customSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
  },
  { id: 'ruby',         name: 'Ruby' },
  { id: 'rails',        name: 'Ruby on Rails' },
  { id: 'bootstrap',    name: 'Bootstrap' },
  { id: 'jquery',       name: 'jQuery' },
  { id: 'ember',        name: 'Ember.js' },
  { id: 'git',          name: 'Git' },
  { id: 'maven',        name: 'Maven' },
  {
    id: 'tomcat',
    name: 'Apache Tomcat',
    customSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg',
  },
];

// Company name lookup for bullet labels
const companyNames = [
  'Paraguay Security',
  'Quality Care',
  'IDOM',
  'Tavatech',
  'Nexoos',
];

export default function JonathanPortfolio() {
  const [lang, setLang] = useState<Lang>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  // Index of the currently highlighted mention (0-based)
  const [mentionIndex, setMentionIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'es') setLang(saved as Lang);
  }, []);

  const c = t[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Escape key clears selection
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSkill(null);
      if (e.key === 'ArrowRight' && selectedSkill) cycleRelative(1);
      if (e.key === 'ArrowLeft' && selectedSkill) cycleRelative(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSkill, mentionIndex]);

  // ── Build ordered mention targets for a skill ──
  const getMentionTargets = useCallback((skillId: string): MentionTarget[] => {
    const targets: MentionTarget[] = [];
    for (const [ei, bi] of skillMap[skillId] ?? []) {
      targets.push({ kind: 'bullet', expIdx: ei, bulletIdx: bi, label: companyNames[ei] ?? '' });
    }
    for (const pi of projectMap[skillId] ?? []) {
      targets.push({ kind: 'project', projIdx: pi, label: `Project ${pi + 1}` });
    }
    return targets;
  }, []);

  // ── Scroll to a specific target ──
  const scrollToTarget = useCallback((target: MentionTarget) => {
    const id =
      target.kind === 'bullet'
        ? `bullet-${target.expIdx}-${target.bulletIdx}`
        : `project-${target.projIdx}`;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  // ── Cycle by relative offset (+1 / -1) ──
  const cycleRelative = useCallback((delta: number) => {
    if (!selectedSkill) return;
    const targets = getMentionTargets(selectedSkill);
    if (targets.length === 0) return;
    const next = (mentionIndex + delta + targets.length) % targets.length;
    setMentionIndex(next);
    scrollToTarget(targets[next]);
  }, [selectedSkill, mentionIndex, getMentionTargets, scrollToTarget]);

  const handleNavClick = () => setMenuOpen(false);
  const toggleLang = () =>
    setLang((l) => {
      const next = l === 'en' ? 'es' : 'en';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });

  const toggleLabel = lang === 'en' ? 'ES' : 'EN';
  const toggleAriaLabel = lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés';

  const handleSkillClick = useCallback((skillId: string) => {
    if (selectedSkill === skillId) {
      setSelectedSkill(null);
      setMentionIndex(0);
      return;
    }
    setSelectedSkill(skillId);
    setMentionIndex(0);

    const targets = getMentionTargets(skillId);
    if (targets.length === 0) return;

    setTimeout(() => scrollToTarget(targets[0]), 50);
  }, [selectedSkill, getMentionTargets, scrollToTarget]);

  const isMatchedBullet = (expIdx: number, bulletIdx: number): boolean => {
    if (!selectedSkill) return false;
    const matches = skillMap[selectedSkill] ?? [];
    return matches.some(([ei, bi]) => ei === expIdx && bi === bulletIdx);
  };

  const isActiveBullet = (expIdx: number, bulletIdx: number): boolean => {
    if (!selectedSkill) return false;
    const targets = getMentionTargets(selectedSkill);
    const current = targets[mentionIndex];
    return (
      !!current &&
      current.kind === 'bullet' &&
      current.expIdx === expIdx &&
      current.bulletIdx === bulletIdx
    );
  };

  const isDimmedBullet = (expIdx: number, bulletIdx: number): boolean => {
    if (!selectedSkill) return false;
    return !isMatchedBullet(expIdx, bulletIdx);
  };

  const getMentionCount = (skillId: string): number => {
    return (skillMap[skillId]?.length ?? 0) + (projectMap[skillId]?.length ?? 0);
  };

  const isMatchedProject = (projIdx: number): boolean => {
    if (!selectedSkill) return false;
    return (projectMap[selectedSkill] ?? []).includes(projIdx);
  };

  const isActiveProject = (projIdx: number): boolean => {
    if (!selectedSkill) return false;
    const targets = getMentionTargets(selectedSkill);
    const current = targets[mentionIndex];
    return !!current && current.kind === 'project' && current.projIdx === projIdx;
  };

  const isDimmedProject = (projIdx: number): boolean => {
    if (!selectedSkill) return false;
    const projMatches = projectMap[selectedSkill] ?? [];
    return projMatches.length > 0 && !projMatches.includes(projIdx);
  };

  const selectedSkillData = selectedSkill ? skillData.find(s => s.id === selectedSkill) : null;
  const selectedMentionCount = selectedSkill ? getMentionCount(selectedSkill) : 0;
  const activeMentionTargets = selectedSkill ? getMentionTargets(selectedSkill) : [];
  const currentTarget = activeMentionTargets[mentionIndex];

  // Label for what the current mention is (company name or project name)
  const currentTargetLabel = currentTarget
    ? currentTarget.kind === 'bullet'
      ? currentTarget.label
      : currentTarget.label
    : '';

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">

      {/* ── Navbar ── */}
      <nav
        className={`fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-zinc-100 transition-shadow ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 sm:py-5 flex justify-between items-center gap-4">
          <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-emerald-600 leading-tight shrink-0">
            Jonathan Merlo Apuril
          </div>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {c.nav.map((label, i) => (
              <a key={label} href={`#${c.nav_ids[i]}`} className="hover:text-emerald-600 transition-colors">
                {label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              aria-label={toggleAriaLabel}
              className="flex items-center gap-1.5 bg-zinc-100 hover:bg-emerald-50 border border-zinc-200 hover:border-emerald-300 text-zinc-700 hover:text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            >
              <span className="text-base leading-none">🌐</span>
              {toggleLabel}
            </button>
          </div>

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
              <span className={`block h-0.5 w-6 bg-zinc-800 rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-zinc-800 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-zinc-800 rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
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
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">{c.hero_sub}</p>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#experience" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-medium transition-colors">
              {c.cta_exp}
            </a>
            <a href="#contact" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-medium transition-colors">
              {c.cta_contact}
            </a>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-10 text-center">{c.about_title}</h2>
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
          {/* Header row with active filter pill */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center sm:text-left">{c.exp_title}</h2>
            {selectedSkill && (
              <div className="flex items-center gap-2 self-center sm:self-auto">
                <span className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
                  <img
                    src={skillData.find(s => s.id === selectedSkill)?.customSrc || `https://skillicons.dev/icons?i=${selectedSkill}`}
                    alt=""
                    className="w-4 h-4"
                  />
                  {selectedSkillData?.name}
                  {selectedMentionCount > 0 && (
                    <span className="bg-emerald-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {selectedMentionCount}
                    </span>
                  )}
                </span>
                <button
                  onClick={() => { setSelectedSkill(null); setMentionIndex(0); }}
                  className="text-zinc-400 hover:text-zinc-700 transition-colors text-xs underline underline-offset-2"
                >
                  {c.clear_filter}
                </button>
              </div>
            )}
          </div>

          <div className="space-y-8 sm:space-y-16">
            {c.experience.map((job, expIdx) => (
              <div key={expIdx} className="bg-white border border-zinc-100 rounded-3xl p-6 sm:p-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">{job.role}</h3>
                    <p className="text-emerald-600 font-medium text-sm sm:text-base">{job.company} • {job.location}</p>
                  </div>
                  <p className="text-zinc-500 font-medium text-sm sm:text-base whitespace-nowrap">{job.period}</p>
                </div>
                <ul className="pl-5 sm:pl-6 list-disc space-y-3 sm:space-y-4">
                  {job.points.map((point, bulletIdx) => {
                    const matched = isMatchedBullet(expIdx, bulletIdx);
                    const active = isActiveBullet(expIdx, bulletIdx);
                    const dimmed = isDimmedBullet(expIdx, bulletIdx);
                    return (
                      <li
                        key={bulletIdx}
                        id={`bullet-${expIdx}-${bulletIdx}`}
                        className={`text-sm sm:text-[17px] leading-relaxed rounded-lg transition-all duration-500 ${
                          active
                            ? 'text-zinc-900 bg-emerald-100 -mx-3 px-3 py-2 border-l-[3px] border-emerald-600 list-none ring-1 ring-emerald-200'
                            : matched
                            ? 'text-zinc-900 bg-emerald-50 -mx-3 px-3 py-2 border-l-[3px] border-emerald-400 list-none opacity-70'
                            : dimmed
                            ? 'text-zinc-400'
                            : 'text-zinc-700'
                        }`}
                      >
                        {(matched || active) && (
                          <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 mb-0.5 align-middle transition-colors ${active ? 'bg-emerald-600' : 'bg-emerald-400'}`} />
                        )}
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 text-center">{c.skills_title}</h2>
          <p className="text-center text-zinc-500 text-sm sm:text-base mb-10 sm:mb-14">
            {c.skills_hint}
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
            {skillData.map((skill) => {
              const mentionCount = getMentionCount(skill.id);
              const isSelected = selectedSkill === skill.id;
              const hasMentions = mentionCount > 0;

              return (
                <button
                  key={skill.id}
                  onClick={() => handleSkillClick(skill.id)}
                  aria-pressed={isSelected}
                  className={`group relative flex flex-col items-center rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-200 text-left
                    ${isSelected
                      ? 'bg-emerald-50 border-2 border-emerald-500 shadow-md shadow-emerald-100 scale-[1.03]'
                      : hasMentions
                      ? 'bg-white border border-zinc-200 hover:border-emerald-300 hover:shadow-md cursor-pointer'
                      : 'bg-white border border-zinc-200 hover:border-zinc-300 cursor-pointer opacity-75'
                    }`}
                >
                  {/* Mention count badge */}
                  {hasMentions && (
                    <span
                      className={`absolute -top-2 -right-2 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isSelected ? 'bg-emerald-600' : 'bg-zinc-400 group-hover:bg-emerald-500'
                      }`}
                    >
                      {mentionCount}
                    </span>
                  )}

                  <img
                    src={skill.customSrc || `https://skillicons.dev/icons?i=${skill.id}`}
                    alt={skill.name}
                    className={`w-10 h-10 sm:w-16 sm:h-16 mb-3 sm:mb-4 transition-transform duration-200 ${
                      isSelected ? 'scale-110' : 'group-hover:scale-105'
                    }`}
                  />
                  <p className={`font-medium text-center text-xs sm:text-sm transition-colors duration-200 ${
                    isSelected ? 'text-emerald-700' : 'text-zinc-800'
                  }`}>
                    {skill.name}
                  </p>

                  {/* Subtle label under skill name */}
                  {hasMentions ? (
                    <p className={`text-[10px] sm:text-xs mt-1 transition-colors duration-200 ${
                      isSelected ? 'text-emerald-600' : 'text-zinc-400 group-hover:text-emerald-500'
                    }`}>
                      {mentionCount} {mentionCount === 1 ? c.mention : c.mentions}
                    </p>
                  ) : (
                    <p className="text-[10px] sm:text-xs mt-1 text-zinc-300">—</p>
                  )}
                </button>
              );
            })}
          </div>

          
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-16 sm:py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 sm:mb-12 text-center">{c.projects_title}</h2>
          <div className="space-y-6">
            {c.projects.map((proj, i) => (
              <div
                key={i}
                id={`project-${i}`}
                className={`rounded-3xl p-8 sm:p-12 transition-all duration-500 ${
                  isActiveProject(i)
                    ? 'bg-emerald-100 border-2 border-emerald-500 shadow-md shadow-emerald-100 ring-1 ring-emerald-200'
                    : isMatchedProject(i)
                    ? 'bg-emerald-50 border-2 border-emerald-400 shadow-md shadow-emerald-100 opacity-70'
                    : isDimmedProject(i)
                    ? 'bg-white border border-zinc-100 opacity-40'
                    : 'bg-white border border-zinc-100'
                }`}
              >
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-10">{c.contact_title}</h2>
          <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 sm:p-12 space-y-6 sm:space-y-8 text-left max-w-md mx-auto">
            <a href="mailto:merlo.a.jonathan@gmail.com" className="flex items-center gap-4 text-base sm:text-xl hover:text-emerald-600 transition-colors break-all sm:break-normal">
              ✉️ merlo.a.jonathan@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/jonathanmerloapuril/" target="_blank" className="flex items-center gap-4 text-base sm:text-xl hover:text-emerald-600 transition-colors">
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 sm:py-16 text-center text-sm sm:text-base text-zinc-500 bg-zinc-50 border-t border-zinc-100">
        {c.footer}
      </footer>

      {/* ── Floating Mention Navigator ── */}
      {selectedSkill && selectedMentionCount > 1 && (
        <div
          className={`
            fixed bottom-6 left-1/2 -translate-x-1/2 z-50
            flex items-center gap-2 sm:gap-3
            bg-white/95 backdrop-blur-md
            border border-emerald-200
            shadow-xl shadow-emerald-100/60
            rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3
            transition-all duration-300
            animate-in fade-in slide-in-from-bottom-4
          `}
          role="navigation"
          aria-label="Cycle through skill mentions"
        >
          {/* Skill icon + name */}
          <div className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-zinc-100">
            <img
              src={selectedSkillData?.customSrc || `https://skillicons.dev/icons?i=${selectedSkill}`}
              alt={selectedSkillData?.name}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="hidden sm:block text-sm font-semibold text-emerald-700 max-w-25 truncate">
              {selectedSkillData?.name}
            </span>
          </div>

          {/* Prev button */}
          <button
            onClick={() => cycleRelative(-1)}
            aria-label={c.nav_prev}
            className="flex items-center justify-center w-8 h-8 rounded-xl text-zinc-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Counter + location label */}
          <div className="flex flex-col items-center min-w-13">
            <span className="text-sm font-bold text-zinc-800 leading-none">
              {mentionIndex + 1}
              <span className="text-zinc-400 font-normal mx-0.5">/</span>
              {selectedMentionCount}
            </span>
            {currentTargetLabel && (
              <span className="text-[10px] text-emerald-600 font-medium mt-0.5 truncate max-w-20">
                {currentTargetLabel}
              </span>
            )}
          </div>

          {/* Next button */}
          <button
            onClick={() => cycleRelative(1)}
            aria-label={c.nav_next}
            className="flex items-center justify-center w-8 h-8 rounded-xl text-zinc-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Divider + dismiss */}
          <div className="pl-2 sm:pl-3 border-l border-zinc-100">
            <button
              onClick={() => { setSelectedSkill(null); setMentionIndex(0); }}
              aria-label="Clear filter"
              className="flex items-center justify-center w-7 h-7 rounded-xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-all"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}