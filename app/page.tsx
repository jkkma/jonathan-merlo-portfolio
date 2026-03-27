'use client';

export default function JonathanPortfolio() {
  const skillData = [
    { id: 'nextjs', name: 'Next.js' },
    { id: 'react', name: 'React' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'tailwindcss', name: 'Tailwind CSS' },
    { id: 'ember', name: 'Ember.js' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'jquery', name: 'jQuery' },
    { id: 'html', name: 'HTML5' },
    { id: 'css', name: 'CSS3' },
    { id: 'bootstrap', name: 'Bootstrap' },
    { id: 'php', name: 'PHP' },
    { id: 'java', name: 'Java' },
    { id: 'python', name: 'Python' },
    { id: 'rails', name: 'Ruby on Rails' },
    { id: 'postgresql', name: 'PostgreSQL' },
    { id: 'supabase', name: 'Supabase' },
    { id: 'firebase', name: 'Firebase' },
    { id: 'git', name: 'Git' },
    { id: 'maven', name: 'Maven' },
    { id: 'tomcat', name: 'Apache Tomcat', customSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg' },
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Paraguay Security S.A.",
      period: "Aug 2023 – Nov 2024",
      location: "Asunción, Paraguay",
      points: [
        "Designed and developed full-stack web applications with React, Next.js, TypeScript, Tailwind CSS, and Supabase, creating responsive, user-centric interfaces.",
        "Engineered high-performance UIs and optimized PostgreSQL database solutions, boosting application scalability and data efficiency.",
        "Collaborated with cross-functional teams to deliver features on time and to exact specifications."
      ]
    },
    {
      role: "IT Support Specialist",
      company: "Quality Care Medical Center",
      period: "May 2021 – Jul 2021",
      location: "San Bernardino, CA",
      points: [
        "Automated repetitive data entry processes and developed simple, user-friendly guides for non-technical staff, streamlining daily operations.",
        "Resolved software and hardware issues in person and remotely.",
        "Maintained and monitored daily IT operations."
      ]
    },
    {
      role: "IT Consultant",
      company: "IDOM Consulting",
      period: "Feb 2019 – Dec 2019",
      location: "Asunción, Paraguay",
      points: [
        "Built critical modules for the Expropriation Management System using PHP and CodeIgniter; designed dynamic web forms with JavaScript, jQuery, HTML, and Bootstrap; structured PostgreSQL databases with custom reporting via JasperReports.",
        "Drove requirements gathering and technical planning for the Document Management System (SGD 2.0); developed reusable Django components and polished frontend interfaces."
      ]
    },
    {
      role: "Software Developer",
      company: "Tavatech",
      period: "Aug 2016 – Feb 2018",
      location: "Asunción, Paraguay",
      points: [
        "Engineered enterprise-grade backend modules with Java, Spring MVC, and Hibernate to support high-traffic production systems.",
        "Led full software development lifecycle — from architecture and design to deployment on Apache Tomcat.",
        "Managed CI/CD pipelines with Maven and conducted code reviews.",
        "Contributed to frontend development of the flagship Chispawer platform using Ember.js."
      ]
    },
    {
      role: "Web Developer",
      company: "Nexoos",
      period: "Dec 2015 – Jul 2016",
      location: "Asunción, Paraguay",
      points: [
        "Maintained and enhanced the core Nexoos Paraguay platform built on Ruby on Rails.",
        "Translated business requirements into clean, production-ready code while rapidly resolving bugs.",
        "Localized homepage content into English, broadening user reach for international audiences."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-3xl font-semibold text-emerald-600">Jonathan Merlo Apuril</div>
          <div className="flex gap-9 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-600">About</a>
            <a href="#experience" className="hover:text-emerald-600">Experience</a>
            <a href="#skills" className="hover:text-emerald-600">Skills</a>
            <a href="#projects" className="hover:text-emerald-600">Projects</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen pt-32 pb-20 flex items-center bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm mb-6">
            Full Stack Web Developer
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight mb-6">
            Jonathan Merlo Apuril
          </h1>
          <p className="text-2xl text-zinc-600 max-w-3xl mx-auto">
            Asunción, Paraguay • EU Passport Holder • Fluent English Speaker
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#experience" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl text-lg font-medium">
              View Experience
            </a>
            <a href="#contact" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-10 py-4 rounded-2xl text-lg font-medium">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-semibold mb-10 text-center">About me</h2>
          <div className="max-w-3xl mx-auto text-lg text-zinc-700 leading-relaxed">
  I'm a Full Stack Web Developer with nearly 5 years of professional experience designing, developing, and delivering modern, scalable web applications.<br /><br />
  
  I started my career working across the full stack and have continued building complete solutions — from responsive, user-centric frontends with React, Next.js, TypeScript and Tailwind CSS, to robust backends using PHP, Java, Python (Django) and Ruby on Rails.<br /><br />
  
  I enjoy working with databases like PostgreSQL, integrating cloud services, building clean REST APIs, and writing clear documentation. I'm an avid learner who loves exploring new technologies to stay current.<br /><br />
  
  Outside of coding, I like playing videogames and watching movies (the grainier the better).
</div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-5xl font-semibold mb-16 text-center">Professional Experience</h2>
          <div className="space-y-16">
            {experience.map((job, i) => (
              <div key={i} className="bg-white border border-zinc-100 rounded-3xl p-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold">{job.role}</h3>
                    <p className="text-emerald-600 font-medium">{job.company} • {job.location}</p>
                  </div>
                  <p className="text-zinc-500 font-medium whitespace-nowrap">{job.period}</p>
                </div>
                <ul className="pl-6 list-disc space-y-4 text-zinc-700 text-[17px]">
                  {job.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills - Island cards */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-semibold mb-16 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skillData.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center bg-white border border-zinc-200 hover:border-emerald-300 rounded-3xl p-6 transition-all hover:shadow-md"
              >
                <img
                  src={skill.customSrc || `https://skillicons.dev/icons?i=${skill.id}`}
                  alt={skill.name}
                  className="w-16 h-16 mb-4"
                />
                <p className="font-medium text-zinc-800 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-semibold mb-12 text-center">Featured Projects</h2>
          <div className="bg-white border border-zinc-100 rounded-3xl p-12">
            <h3 className="text-3xl font-semibold mb-4">Empower School – Thesis Project</h3>
            <p className="text-zinc-600 mb-8 text-lg">
              Full-featured modern web application built with Vite, React, Firebase, and Tailwind CSS.
            </p>
            <a 
              href="https://github.com/githubbabby/empower-school" 
              target="_blank"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-medium"
            >
              View on GitHub 🔗
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-semibold mb-10">Let's Connect</h2>
          <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-12 space-y-8 text-left max-w-md mx-auto">
            <a href="mailto:merlo.a.jonathan@gmail.com" className="flex items-center gap-4 text-xl hover:text-emerald-600">
              ✉️ merlo.a.jonathan@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/jonathanmerloapuril/" target="_blank" className="flex items-center gap-4 text-xl hover:text-emerald-600">
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center text-zinc-500 bg-zinc-50 border-t border-zinc-100">
        © 2026 Jonathan Merlo Apuril • Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}