import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowRight,
  FaDownload,
  FaSpinner,
  FaCheck,
} from "react-icons/fa";
import MorphingParticleBackground from "./MorphingParticleBackground";

const Hero = () => {
  const [downloadState, setDownloadState] = useState("idle"); // 'idle', 'downloading', 'downloaded'

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = async () => {
    if (downloadState !== "idle") return;

    setDownloadState("downloading");

    try {
      // Create download link
      const link = document.createElement("a");
      link.href = "/Ritesh_Kumar_FullStack_Developer_Resume.pdf";
      link.download = "Ritesh_Kumar_FullStack_Developer_Resume.pdf";

      // Simulate download time for better UX
      setTimeout(() => {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show downloaded state
        setDownloadState("downloaded");

        // Reset to idle after 3 seconds
        setTimeout(() => {
          setDownloadState("idle");
        }, 3000);
      }, 1500); // 1.5 second download simulation
    } catch (error) {
      console.error("Download failed:", error);
      setDownloadState("idle");
    }
  };

  const getDownloadButtonContent = () => {
    switch (downloadState) {
      case "downloading":
        return (
          <>
            <FaSpinner size={14} className="flex-shrink-0 animate-spin" />
            <span className="transition-all duration-300">Downloading...</span>
          </>
        );
      case "downloaded":
        return (
          <>
            <FaCheck
              size={14}
              className="flex-shrink-0 text-green-500 animate-bounce"
            />
            <span className="transition-all duration-300">Downloaded!</span>
          </>
        );
      default:
        return (
          <>
            <FaDownload size={14} className="flex-shrink-0" />
            <span className="transition-all duration-300">Download CV</span>
          </>
        );
    }
  };

  const getDownloadButtonClasses = () => {
    const baseClasses =
      "px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 horizontal-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] transition-all duration-500 transform";

    switch (downloadState) {
      case "downloading":
        return `${baseClasses} bg-[#00786f]/10 border-2 border-[#00786f]/30 text-[#00786f] cursor-wait scale-[0.98] shadow-inner`;
      case "downloaded":
        return `${baseClasses} bg-green-50 border-2 border-green-200 text-green-700 cursor-default scale-105 shadow-lg animate-pulse`;
      default:
        return `${baseClasses} btn-secondary hover:scale-105 hover:shadow-lg active:scale-95`;
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-end sm:items-center justify-center relative overflow-hidden hero-custom-bg pb-16 sm:pb-20 md:pb-24"
    >
      <MorphingParticleBackground />

      {/* Mobile Availability Status - Centered */}
      <div className="lg:hidden absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
        <div className="mobile-status-card bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 horizontal-full shadow-md">
          <div className="flex items-center justify-center gap-2 mb-0.5 sm:mb-1 transition-all duration-300 hover:scale-105">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#00786f] horizontal-full animate-pulse shadow-sm shadow-[#00786f]/50"></div>
            <span className="text-[10px] sm:text-xs font-medium text-charcoal">
              Available for work
            </span>
          </div>
          <p className="text-[9px] sm:text-xs text-medium-gray text-center transition-all duration-300">
            Open to new opportunities
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] sm:min-h-[85vh] py-8 sm:py-12 md:py-16">
          {/* Left Content - Main Hero Content */}
          <div className="w-full lg:flex-1 space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in-up">
            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-4 w-full">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 horizontal-full overflow-hidden shadow-lg flex-shrink-0 ring-2 ring-[#00786f]/20">
                  <img
                    src="/ritesh.jpeg"
                    alt="Ritesh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-medium-gray">
                  <FaMapMarkerAlt
                    className="text-[#00786f] flex-shrink-0"
                    size={12}
                  />
                  <span className="text-xs sm:text-sm font-medium whitespace-normal sm:whitespace-nowrap">
                    Mumbai, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content Section - Full Name */}
            <div className="w-full space-y-2 sm:space-y-3 md:space-y-4">
              <div className="text-left">
                <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.22em] text-[#00786f]">
                  {" "}
                  Freelance Full Stack Developer in India{" "}
                </p>
                <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-tight tracking-tight">
                  Ritesh
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-sans font-medium text-[#00786f] mt-1 sm:mt-1.5 md:mt-2">
                  Full Stack Developer
                </h2>
              </div>

              {/* Description */}
              <div className="w-full max-w-3xl">
                <p className="text-sm sm:text-base md:text-lg text-medium-gray leading-relaxed">
                  I'm Ritesh, a Full Stack Developer with 2 years of experience
                  building fast, scalable, and user-friendly web applications
                  using the MERN Stack (MongoDB, Express.js, React.js, Node.js)
                  and TypeScript. I specialize in building responsive front-end
                  interfaces with React.js and Tailwind CSS, designing secure
                  backend systems, and integrating solutions like Razorpay,
                  RBAC, and REST APIs. I focus on converting business ideas into
                  functional products, solving real-world problems through
                  efficient coding, and continuously learning new technologies
                  to improve performance, scalability, and user experience.
                </p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div
              className="flex flex-col xs:flex-row gap-3 w-full animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <button
                onClick={scrollToContact}
                className="btn-primary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 horizontal-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 w-full xs:w-auto group min-w-[140px] sm:min-w-[160px] md:min-w-[180px] transition-all duration-300"
                style={{ background: "#00786f", borderColor: "#00786f" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#00635b";
                  e.currentTarget.style.borderColor = "#00635b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#00786f";
                  e.currentTarget.style.borderColor = "#00786f";
                }}
              >
                Get In Touch
                <FaArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                  size={14}
                />
              </button>

              <button
                onClick={handleDownload}
                disabled={downloadState === "downloading"}
                className={getDownloadButtonClasses()}
              >
                {getDownloadButtonContent()}
              </button>
            </div>

            {/* Download Status Message */}
            {downloadState !== "idle" && (
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  {downloadState === "downloading" && (
                    <div className="flex items-center gap-2 text-[#00786f]">
                      <div className="w-3 sm:w-4 h-1 bg-[#00786f]/20 horizontal-full overflow-hidden">
                        <div className="w-full h-full bg-[#00786f] horizontal-full animate-pulse"></div>
                      </div>
                      <span className="font-medium">
                        Preparing to Download...
                      </span>
                    </div>
                  )}
                  {downloadState === "downloaded" && (
                    <div className="flex items-center gap-2 text-green-600 animate-fade-in">
                      <FaCheck size={12} className="animate-bounce" />
                      <span className="font-medium">
                        Resume Downloaded Successfully!
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Social Integration */}
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-4 w-full animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="text-medium-gray text-xs sm:text-sm font-medium">
                Follow:
              </span>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <a
                  href="https://www.linkedin.com/in/ritesh-kumar-goswami-b56a5b208/"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-charcoal text-white horizontal-full flex items-center justify-center smooth-transition hover:-translate-y-2 hover:shadow-lg flex-shrink-0 hover:bg-[#0077B5]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={14} />
                </a>
                <a
                  href="https://github.com/ritesh637"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-charcoal text-white horizontal-full flex items-center justify-center smooth-transition hover:-translate-y-2 hover:shadow-lg flex-shrink-0 hover:bg-[#333]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={14} />
                </a>
                <a
                  href="https://www.instagram.com/heyritesh09"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-charcoal text-white horizontal-full flex items-center justify-center smooth-transition hover:-translate-y-2 hover:shadow-lg flex-shrink-0 hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Simple Availability Status (Desktop Only) */}
          <div
            className="hidden lg:flex flex-col justify-center items-center ml-6 xl:ml-8 mt-6 lg:mt-0 relative h-full animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              {/* Availability Status */}
              <div className="simple-status-card bg-white/90 backdrop-blur-sm px-6 py-4 horizontal-2xl shadow-md border border-light-gray/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 bg-[#00786f] horizontal-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-charcoal">
                    Available for work
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-medium-gray">
                  Open to new opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for fade-in-up animation if not already in your global CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-bounce {
          animation: bounce 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
