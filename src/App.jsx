import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  Globe,
  Monitor,
  Layout,
  Layers,
  Phone,
  Calendar,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import './App.css';

const translations = {
  en: {
    role: "Fullstack Developer & Frontend Specialist",
    heroDesc: "Passionate about building robust, secure, and scalable web applications. Transforming ideas into high-performance digital experiences.",
    heroBtn1: "View Repos",
    heroBtn2: "Get in touch",
    aboutTitle: "About Me",
    aboutText: "I am a Fullstack Developer passionate about creating digital solutions that combine robust functionality with exceptional aesthetics. Currently studying Software Development Technology at UNICATÓLICA, I complement my academic path with a solid technical foundation and real-world experience. I specialize in the entire software life cycle, from conceptualization to deployment and maintenance, always with a proactive and detail-oriented approach to ensure secure and scalable applications.",
    experienceTitle: "Experience",
    projectsTitle: "Repositories & Projects",
    footerText: "Built with Power.",
    lang: "ES",
    skillsTitle: "Core Technologies",
    age: "21 Years",
    location: "Cali, Colombia",
    details: "Professional Details",
    contactTitle: "Get in Touch",
    formName: "Full Name",
    formEmail: "Email Address",
    formMessage: "How can I help you?",
    formSubject: "Subject",
    formBtn: "Send Message",
    formSending: "Sending...",
    formSuccess: "Message sent! I'll get back to you soon.",
    formError: "Oops! Something went wrong. Please try again."
  },
  es: {
    role: "Desarrollador Fullstack & Especialista Frontend",
    heroDesc: "Apasionado por construir aplicaciones web robustas, seguras y escalables. Transformando ideas en experiencias digitales de alto rendimiento.",
    heroBtn1: "Ver Repositorios",
    heroBtn2: "Contáctame",
    aboutTitle: "Sobre Mí",
    aboutText: "Soy un Desarrollador Fullstack apasionado por crear soluciones digitales que combinen una funcionalidad robusta con una estética excepcional. Actualmente estudio Tecnología en Desarrollo de Software en UNICATÓLICA, lo que complemento con una sólida base técnica y experiencia en el mundo real. Me especializo en el ciclo de vida completo del software, desde la conceptualización hasta el despliegue y mantenimiento, siempre con un enfoque proactivo y orientado al detalle para garantizar aplicaciones seguras y escalables.",
    experienceTitle: "Experiencia",
    projectsTitle: "Repositorios y Proyectos",
    footerText: "Creado con fuerza.",
    lang: "EN",
    skillsTitle: "Tecnologías Principales",
    age: "21 Años",
    location: "Cali, Colombia",
    details: "Detalles Profesionales",
    contactTitle: "Contacto",
    formName: "Nombre Completo",
    formEmail: "Correo Electrónico",
    formMessage: "¿En qué puedo ayudarte?",
    formSubject: "Asunto",
    formBtn: "Enviar Mensaje",
    formSending: "Enviando...",
    formSuccess: "¡Mensaje enviado! Te contactaré pronto.",
    formError: "¡Ups! Algo salió mal. Inténtalo de nuevo."
  }
};

const App = () => {
  const [lang, setLang] = useState('es');
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const formRef = useRef();
  const t = translations[lang];

  const skills = [
    { name: 'React.js', icon: <Cpu size={18} />, context: 'Comunicación Efectiva, FUCLG' },
    { name: 'JavaScript', icon: <Terminal size={18} />, context: 'Web de canje, Curso Práctico' },
    { name: 'Next.js', icon: <Layers size={18} />, context: 'Comunicación Efectiva, Web de Canje' },
    { name: 'TypeScript', icon: <Code2 size={18} />, context: 'Comunicación Efectiva' },
    { name: 'Node.js', icon: <Database size={18} />, context: 'Backend API Rest Express' },
    { name: 'HTML5', icon: <Globe size={18} />, context: 'Comunicación Efectiva' },
    { name: 'CSS3', icon: <Layout size={18} />, context: 'Comunicación Efectiva, Curso Práctico' },
    { name: 'Responsive Design', icon: <Monitor size={18} />, context: 'Comunicación Efectiva, FUCLG' },
  ];

  const experience = [
    {
      role: 'Web Developer',
      company: 'Comunicación Efectiva S.A.S.',
      period: 'Oct 2025 – Dec 2025',
      desc: lang === 'es' ? 'Modernización de sitio de radio institucional (Next.js/React) y desarrollo de sitios corporativos con Tailwind.' : 'Modernized institutional radio website (Next.js/React) and developed corporate sites with Tailwind.'
    },
    {
      role: 'TI Support Technician',
      company: 'QBiko Arquitectura',
      period: 'July 2025 – Sept 2025',
      desc: lang === 'es' ? 'Diagnóstico de hardware/software y procedimientos de soporte técnico.' : 'Hardware/software diagnosis and technical support procedures.'
    }
  ];

  const repositories = [
    {
      name: 'CatViewer',
      desc: lang === 'es' ? 'Plataforma completa para entusiastas de los felinos. Incluye galería interactiva, sistema de likes, gestión de razas y una interfaz moderna y responsiva.' : 'Complete platform for feline enthusiasts. Includes interactive gallery, like system, breed management, and a modern, responsive interface.',
      tags: ['React', 'Node.js', 'Supabase', 'Vercel'],
      link: 'https://github.com/Manolinhopng/CatViewerFront',
      backend: 'https://github.com/Manolinhopng/CatViewerBack',
      live: 'https://catviewer.vercel.app/'
    },
    {
      name: 'Crypto Dashboard',
      desc: lang === 'es' ? 'Visualización de estadísticas y precios de criptomonedas en tiempo real con gráficos interactivos.' : 'Real-time cryptocurrency statistics and price visualization with interactive charts.',
      tags: ['React', 'API', 'Charts.js'],
      link: 'https://github.com/Manolinhopng/dashboardStatsCrypto'
    },
    {
      name: 'Movie Search',
      desc: lang === 'es' ? 'Buscador de películas que consume la API de TMDB, permitiendo explorar detalles y calificaciones.' : 'Movie search engine consuming the TMDB API, allowing exploration of details and ratings.',
      tags: ['React', 'API Rest', 'Vite'],
      link: 'https://github.com/Manolinhopng/movieSearch'
    },
    {
      name: 'Meme Generator',
      desc: lang === 'es' ? 'Creador de memes interactivo con edición de texto dinámico y descarga de imágenes.' : 'Interactive meme creator with dynamic text editing and image download.',
      tags: ['React', 'Canvas API', 'CSS3'],
      link: 'https://github.com/Manolinhopng/memeGenerator'
    },
    {
      name: 'Mini E-commerce',
      desc: lang === 'es' ? 'Pequeña tienda virtual con carrito de compras y gestión de catálogo de productos.' : 'Small virtual store with a shopping cart and product catalog management.',
      tags: ['React', 'State Management'],
      link: 'https://github.com/Manolinhopng/MiniEcommerce'
    },
    {
      name: 'To-Do List',
      desc: lang === 'es' ? 'Aplicación de gestión de tareas con persistencia en almacenamiento local y filtrado.' : 'Task management application with local storage persistence and filtering.',
      tags: ['React', 'Local Storage', 'CSS3'],
      link: 'https://github.com/Manolinhopng/ToDoList'
    }
  ];

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; 
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; 

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      }, (error) => {
        console.error(error.text);
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      });
  };

  return (
    <div className="portfolio">
      <div className="bg-gradient-glow" style={{ top: '-10%', left: '-10%' }} />
      <div className="bg-gradient-glow" style={{ bottom: '10%', right: '-10%', background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1), transparent 70%)' }} />

      {/* Language Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLang}
        className="lang-toggle glass"
      >
        <Globe size={18} />
        <span>{t.lang}</span>
      </motion.button>

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1 className="text-gradient">Manuel Rendón Orrego</motion.h1>
          <motion.p className="subtitle">{t.role}</motion.p>
          <motion.p className="hero-desc">{t.heroDesc}</motion.p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">{t.heroBtn1}</a>
            <a href="#contact" className="btn-secondary">{t.heroBtn2}</a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass about-card"
        >
          <h2>{t.aboutTitle}</h2>
          <div className="about-grid">
            <div className="about-info">
              <p>{t.aboutText}</p>
              <div className="personal-details">
                <div className="detail-item"><MapPin size={18} /> <span>{t.location}</span></div>
                <div className="detail-item"><Calendar size={18} /> <span>{t.age}</span></div>
                <div className="detail-item"><Phone size={18} /> <span>+57 317 4171291</span></div>
              </div>
            </div>
            <div className="skills-container-detailed">
              <h3 className="section-small-title">{t.skillsTitle}</h3>
              <div className="skills-grid-detailed">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="skill-item-detailed"
                  >
                    <div className="skill-icon-box">{skill.icon}</div>
                    <div className="skill-text-box">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-context">{skill.context}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>{t.experienceTitle}</h2>
        <div className="experience-list">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass experience-card glass-hover"
            >
              <h3>{exp.role}</h3>
              <p className="company">{exp.company} | <span className="period">{exp.period}</span></p>
              <p className="desc">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Repositories Section */}
      <section id="projects">
        <h2>{t.projectsTitle}</h2>
        <div className="projects-grid">
          {repositories.map((repo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass project-card glass-hover"
            >
              <div className="card-header">
                <div className="flex gap-4">
                  <a href={repo.link} target="_blank" rel="noreferrer" className="icon-main" title="GitHub (Frontend)">
                    <Github size={24} />
                  </a>
                  {repo.backend && (
                    <a href={repo.backend} target="_blank" rel="noreferrer" className="icon-main" title="GitHub (Backend)">
                      <Code2 size={24} />
                    </a>
                  )}
                  {repo.live && (
                    <a href={repo.live} target="_blank" rel="noreferrer" className="icon-main" title="Live Preview">
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
              <h3>{repo.name}</h3>
              <p>{repo.desc}</p>
              <div className="tag-container">
                {repo.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass contact-container"
        >
          <h2>{t.contactTitle}</h2>
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="form-grid">
              <div className="input-group">
                <label>{t.formName}</label>
                <input type="text" name="name" required placeholder="John Doe" />
              </div>
              <div className="input-group">
                <label>{t.formEmail}</label>
                <input type="email" name="email_id" required placeholder="john@example.com" />
              </div>
            </div>
            <div className="input-group">
              <label>{t.formSubject}</label>
              <input type="text" name="subject" required placeholder={t.formSubject} />
            </div>
            <div className="input-group">
              <label>{t.formMessage}</label>
              <textarea name="message" required rows="5" placeholder={t.formMessage}></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn-submit ${formStatus}`}
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'idle' && (
                <>
                  <Send size={18} />
                  <span>{t.formBtn}</span>
                </>
              )}
              {formStatus === 'sending' && (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>{t.formSending}</span>
                </>
              )}
              {formStatus === 'success' && (
                <>
                  <CheckCircle2 size={18} />
                  <span>{t.formSuccess}</span>
                </>
              )}
              {formStatus === 'error' && (
                <>
                  <AlertCircle size={18} />
                  <span>{t.formError}</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="http://www.linkedin.com/in/manuel-fernando-rendon-orrego-752a7b27a" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><Github /></a>
          <a href="mailto:rmanuelorrego@gmail.com"><Mail /></a>
        </div>
        <p>© 2026 Manuel Rendón Orrego. {t.footerText}</p>
      </footer>
    </div>
  );
};

export default App;
