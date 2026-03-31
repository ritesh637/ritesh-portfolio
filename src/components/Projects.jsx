import React, { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([])

  const projects = [
    {
      id: 1,
      title: 'Coworking Management System',
      description: 'Built a full-stack Coworking Space Management System with a responsive frontend and modular backend using React, Node.js, Express.js, and MongoDB, enabling real-time bookings, payments, and workspace discovery across 4+ cities. Implemented secure role-based authentication (RBAC) for Admin, Manager, and Store Manager using JWT. Integrated Razorpay Payment Gateway with Real-Time Transaction Validation, Webhook Handling, and PDF Invoice Generation, resulting in a 75% increase in successful payments. Built a CRM with lead tracking, status management, and user assignment workflows to improve lead conversion handling by 70%. Developed an Interactive Admin Dashboard with Revenue Analytics, Booking Visualization, and Filtering Capabilities.',
      image: '/coworking-management.png',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Next.js', 'JWT', 'Razorpay'],
      status: 'Completed',
      github: 'https://github.com/ritesh637/coworking-management',
      demo: 'https://coworking-management-demo.vercel.app/'
    },
    {
      id: 2,
      title: 'Bhagwat Geeta Web Application',
      description: 'Developed a fully functional, interactive web platform delivering the teachings of the Bhagavad Gita in a modern, accessible format. Integrated with MongoDB and Express.js to enable dynamic content delivery and fast page loads, enhancing user engagement by 70%. Implemented essential features such as More Slok, Live Discussion, and About Us sections, enhancing spiritual learning and increasing user engagement by over 65%. Achieved a 95% mobile responsiveness score using Google Lighthouse tools and improved page load speed by 50% by minimizing React bundle size and optimizing static assets.',
      image: '/bhagwat-geeta.png',
      technologies: ['React.js', 'Bootstrap', 'HTML', 'Tailwind CSS', 'MongoDB', 'Express.js'],
      status: 'Completed',
      github: 'https://github.com/ritesh637/bhagwat-geeta',
      demo: 'https://bhagwat-geeta-demo.vercel.app/'
    },
    {
      id: 3,
      title: 'Internship Corporate Website & Certificate Verification',
      description: 'Developed and deployed a secure, mobile-friendly certificate verification module with real-time lookup, token-based authentication, and hashed ID validation integrated into internship platforms to ensure authenticity and trust, boosting verification speed by 45%, success rate by 60%, and admin efficiency by 50%. Built a fully responsive landing page for Tech Mentorship Pvt. Ltd., an innovative IT training and software company, enhancing corporate branding and engagement.',
      image: '/certificate-verification.png',
      technologies: ['React.js', 'CSS', 'Express.js', 'Node.js', 'MongoDB'],
      status: 'Completed',
      github: 'https://github.com/ritesh637/certificate-verification',
      demo: 'https://certificate-verification-demo.vercel.app/'
    },
    {
      id: 4,
      title: 'Rajasthan Tour Wala - Travel Booking',
      description: 'Designed, developed, and deployed a dynamic and mobile-friendly travel booking platform showcasing tourist destinations across Rajasthan. Built a multi-role module with 4-5 distinct user types, each with dedicated access and functionality. Leveraged TypeScript to develop reusable, type-safe React components, enhancing maintainability and reducing bugs by 70%. Built a fully responsive UI using Tailwind CSS, achieving a 90+ Lighthouse score, 98% mobile responsiveness, and fast load times through lazy loading and a11y-compliant design practices. Boosted SEO performance by 50% through semantic HTML, meta tags, and structured content.',
      image: '/rajasthan-tour.png',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'JavaScript', 'Vercel'],
      status: 'Completed',
      github: 'https://github.com/ritesh637/rajasthan-tour-wala',
      demo: 'https://rajasthan-tour-wala.vercel.app/'
    },
    {
      id: 5,
      title: 'Resume Analytics Web Application',
      description: 'Developed a Resume Analytics Web Application with complete ownership of both frontend and backend development. Created RESTful APIs using Python (Flask) and handled routing, data processing, and error handling. Built responsive and dynamic user interfaces using HTML, CSS, and JavaScript. Designed and integrated the backend database (SQLite/MySQL), ensuring efficient data storage and retrieval. Deployed the project locally and performed testing to ensure cross-browser compatibility and performance.',
      image: '/resume-analytics.png',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'MySQL'],
      status: 'Completed',
      github: 'https://github.com/ritesh637/resume-analytics',
      demo: '#'
    }
  ]

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute('data-project-id')
            setVisibleProjects(prev => [...new Set([...prev, projectId])])
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 sm:mb-5 md:mb-6">
            Featured Projects
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00786f] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-medium-gray leading-relaxed text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            A curated selection of my most impactful work, showcasing expertise across the MERN stack, TypeScript, Python, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`project-card transition-all duration-700 ease-out flex flex-col h-full horizontal-lg overflow-hidden bg-white shadow-md hover:shadow-xl ${
                visibleProjects.includes(project.id.toString()) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transformOrigin: 'center bottom'
              }}
            >
              {/* Project Image Container */}
              <div className="relative w-full pt-[56.25%] overflow-hidden bg-gray-200 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x450?text=Project+Preview'
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4 px-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-900 horizontal-lg font-medium text-xs sm:text-sm transform hover:scale-105 transition-all duration-200 min-h-[44px] active:scale-95"
                  >
                    <FaExternalLinkAlt size={12} className="sm:w-[14px] sm:h-[14px]" />
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-gray-900 horizontal-lg font-medium text-xs sm:text-sm transform hover:scale-105 transition-all duration-200 min-h-[44px] active:scale-95"
                  >
                    <FaGithub size={12} className="sm:w-[14px] sm:h-[14px]" />
                    View Code
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-charcoal mb-2 sm:mb-3 leading-tight font-serif">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-medium-gray leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-4">
                  {project.description}
                </p>

                <div className="mb-3 sm:mb-4">
                  <span className="inline-flex items-center px-2 sm:px-2.5 py-1 text-xs font-semibold bg-[#00786f]/10 text-[#00786f] horizontal">
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                  {project.technologies.slice(0, 6).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="tech-tag px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm bg-gray-100 text-gray-700 horizontal transition-colors duration-200 hover:bg-[#00786f] hover:text-white cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="tech-tag px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm bg-gray-100 text-gray-700">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00786f] hover:text-[#00635b] transition-all duration-200 font-semibold text-xs sm:text-sm flex items-center gap-2 transform hover:translate-x-1 min-h-[44px] sm:min-h-[auto] active:scale-95"
                  >
                    View Project
                    <FaExternalLinkAlt size={11} className="sm:w-[12px] sm:h-[12px]" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-medium-gray hover:text-[#00786f] transition-all duration-200 transform hover:scale-110 p-2 -m-2 active:scale-95"
                    aria-label="View GitHub repository"
                  >
                    <FaGithub size={18} className="sm:w-[20px] sm:h-[20px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects