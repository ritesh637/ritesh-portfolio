import React, { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([])

  const projects = [
    {
      id: 1,
      title: 'ExamGenius AI',
      description: 'ExamGenius AI is a full-stack AI-powered test preparation platform where users can attempt tests, track their performance, and improve through personalized practice. It analyzes incorrect answers using AI, generates custom questions based on user weaknesses, and offers real-time performance dashboards. The platform combines a seamless user interface with robust backend logic to deliver a smooth and intelligent learning experience that enhances preparation efficiency.',
      image: '/examgenius.png',
      technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'OpenRouter API', 'Tailwind CSS', 'Vite'],
      status: 'Completed',
      github: 'https://github.com/harshavardhan-hub/Exam-Genius_AI',
      demo: 'https://exam-genius-ai.vercel.app/'
    },
    {
      id: 2,
      title: 'Harsha Vardhan Portfolio Website',
      description: 'A full-stack personal portfolio designed to showcase skills, projects, and professional journey in an interactive and visually appealing way. Built for potential employers, clients, and collaborators, featuring React 18.2.0 with Vite for fast modular UI, custom typography with Playfair Display and Inter fonts, real-time WhatsApp alerts for contact form submissions, and optimized performance with accessibility focus.',
      image: '/portfolio.png',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'React Icons', 'React Toastify'],
      status: 'Completed',
      github: 'https://github.com/harshavardhan-hub/harsha-portfolio',
      demo: 'https://harsha-portfolio-teal.vercel.app/'
    },
    {
      id: 3,
      title: 'Travel Planner App',
      description: 'A full-stack travel itinerary planner designed for effortless trip organization. Features secure Firebase Authentication for user sign-up and login, customizable trip planning with categories for accommodation, activities, and transport, favorite marking system for quick access to preferred destinations, and comprehensive itinerary management with real-time editing capabilities across all devices.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop&auto=format&q=80',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'Firebase Authentication', 'Mongo DB'],
      status: 'Completed',
      github: 'https://github.com/harshavardhan-hub/travel-planner',
      demo: 'https://github.com/harshavardhan-hub/travel-planner'
    },
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
    <section id="projects" className="py-8 sm:py-12 md:py-16 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 sm:mb-5 md:mb-6">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-medium-gray leading-relaxed text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            A curated selection of my most impactful work, showcasing expertise across various technologies and industries.
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
              {/* Project Image Container - Responsive aspect ratio */}
              <div className="relative w-full pt-[56.25%] overflow-hidden bg-gray-200 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Overlay - Responsive touch targets */}
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

              {/* Project Content - Responsive padding */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                {/* Project Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-charcoal mb-2 sm:mb-3 leading-tight font-serif">
                  {project.title}
                </h3>

                {/* Project Description - Responsive text size */}
                <p className="text-xs sm:text-sm md:text-base text-medium-gray leading-relaxed mb-3 sm:mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Status Badge */}
                <div className="mb-3 sm:mb-4">
                  <span className="inline-flex items-center px-2 sm:px-2.5 py-1 text-xs font-semibold bg-[#00786f]/10 text-[#00786f] horizontal">
                    {project.status}
                  </span>
                </div>

                {/* Technology Tags - Responsive spacing */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="tech-tag px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm bg-gray-100 text-gray-700 horizontal transition-colors duration-200 hover:bg-[#00786f] hover:text-white cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Responsive touch targets */}
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