import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: "Pink City Tour Website",
      description:
        "Designed and developed a responsive travel website for a tourism business to showcase destinations and tour packages. Focused on clean UI, smooth navigation, and mobile-friendly design to enhance user experience. Improved user engagement and established a strong professional online presence for the brand.",
      image: "/pinkcitytour.png",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Responsive Design",
        "UI/UX Design",
        "Cross-Browser Compatibility",
        "Performance Optimization",
      ],
      status: "Completed",
      github: "https://github.com/ritesh637/Pink-City-Tour-showcase",
      demo: "https://pinkcitytour.in/",
    },
    {
      id: 2,
      title: "Here4Trip Travel & Booking Platform UI",
      description:
        "Designed and developed a modern, responsive travel and booking platform UI to showcase destinations, tour packages, and booking details. Focused on clean design, intuitive navigation, and mobile responsiveness to improve user experience. Delivered a professional interface that enhances brand credibility and simplifies user interaction.",
      image: "/here4trip.png",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "SEO Basics",
        "Layout Design",
        "Cross-Browser Compatibility",
      ],
      status: "Completed",
      github: "https://github.com/ritesh637/Here4Trip-Travel-Booking-Platform-UI",
      demo: "https://here4trip.com/",
    },
    {
      id: 3,
      title: "Dasu Tours Tourism Website",
      description:
        "Designed and developed a visually appealing, responsive tourism website to showcase destinations, tour services, and contact options. Focused on clean UI, smooth navigation, and mobile-first design to enhance user experience. Improved user engagement and streamlined inquiry flow, helping attract and convert potential travelers effectively.",
      image: "/dasutours.png",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "SEO Basics",
        "Web Accessibility (A11y)",
        "Layout Design",
        "User Interface Development",
      ],
      status: "Completed",
      github: "https://github.com/ritesh637/Dasu-Tours-Tourism-Website",
      demo: "https://dasutours.com/",
    },
    {
      id: 4,
      title: "Bhati Desert Camp Tourism Website",
      description:
        "Designed and developed a responsive tourism website for a desert camp to showcase desert experiences, accommodation, and cultural activities. Focused on visually engaging UI, smooth navigation, and mobile-first design to attract travelers. Improved online visibility and increased booking inquiries through an optimized and user-friendly interface.",
      image: "/bhati-desert-camp.png",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Responsive Design",
        "Mobile-First Design",
        "UI/UX Design",
        "Cross-Browser Compatibility",
        "Performance Optimization",
        "SEO Basics",
        "Web Accessibility (A11y)",
        "Layout Design",
        "User Interface Development",
      ],
      status: "Completed",
      github: "https://github.com/ritesh637/Bhati-Desert-Camp-Tourism",
      demo: "https://www.bhatidesertcampsam.com/",
    },
    {
      id: 5,
      title: "Coworking Management System",
      description:
        "Built a full-stack Coworking Space Management System with a responsive frontend and modular backend using React, Node.js, Express.js, and MongoDB, enabling real-time bookings, payments, and workspace discovery across 4+ cities. Implemented secure role-based authentication (RBAC) for Admin, Manager, and Store Manager using JWT. Integrated Razorpay Payment Gateway with Real-Time Transaction Validation, Webhook Handling, and PDF Invoice Generation, resulting in a 75% increase in successful payments. Built a CRM with lead tracking, status management, and user assignment workflows to improve lead conversion handling by 70%. Developed an Interactive Admin Dashboard with Revenue Analytics, Booking Visualization, and Filtering Capabilities.",
      image: "/coworking-management.png",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Razorpay",
        "SEO Basics",
        "Web Accessibility (A11y)",
        "Tailwind CSS",
        "Next.js",
        "JWT",
        "Node.js",
      ],
      status: "Completed",
      github: "https://github.com/ritesh637/coworking-showcase",
      demo: "https://ritesh-officespace.vercel.app/",
    },
    {
      id: 6,
      title: "Institute of Drone Education and Aerospace Website",
      description:
        "Developed a modern and responsive drone training website for the Institute of Drone Education and Aerospace (IDEAAS) using Next.js and Tailwind CSS. Built dynamic course pages, interactive gallery, and functional contact forms to enhance user engagement. Optimized performance, ensured mobile responsiveness, and deployed the project on Vercel for fast and reliable access.",
      image: "/ideaas-drone.png",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "Mobile-First Design",
        "UI/UX Design",
        "Performance Optimization",
        "SEO Basics",
        "Web Accessibility (A11y)",
        "Vercel",
        "Frontend Development",
      ],
      status: "Completed",
      github: "https://github.com/ritesh637/Institute-of-Drone-Education-and-Aerospace-IDEAAS-Website",
      demo: "https://ideaas-drone.vercel.app/",
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute("data-project-id");
            setVisibleProjects((prev) => [...new Set([...prev, projectId])]);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 md:py-16 bg-white min-h-screen flex items-center"
    >
      <div className="max-w-[1400px] xl:max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 sm:mb-5 md:mb-6">
            Featured Projects
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00786f] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-medium-gray leading-relaxed text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            A curated selection of my most impactful work, showcasing expertise
            across the MERN stack, TypeScript, Python, and modern web
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`project-card min-h-[520px] sm:min-h-[560px] lg:min-h-[420px] lg:min-h-[420px] transition-all duration-700 ease-out flex flex-col h-full horizontal-lg overflow-hidden bg-white shadow-md hover:shadow-xl ${
                visibleProjects.includes(project.id.toString())
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transformOrigin: "center bottom",
              }}
            >
              {/* Project Image Container */}
              <div className="relative w-full pt-[70%] lg:pt-[55%] overflow-hidden bg-gray-200 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x450?text=Project+Preview";
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
                    <FaExternalLinkAlt
                      size={12}
                      className="sm:w-[14px] sm:h-[14px]"
                    />
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
              <div className="p-4 sm:p-7 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-charcoal mb-2 sm:mb-3 leading-tight font-serif">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-medium-gray leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-4 lg:line-clamp-3">
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
                    <FaExternalLinkAlt
                      size={11}
                      className="sm:w-[12px] sm:h-[12px]"
                    />
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
  );
};

export default Projects;
