import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const certificates = [
    'https://res.cloudinary.com/deu6avikv/image/upload/v1775242652/Customer_feedback_for_team1_a7gpgs.png',
    'https://res.cloudinary.com/deu6avikv/image/upload/v1775242652/Customer_feedback_via_WhatsApp_message_vwofnn.png',
    'https://res.cloudinary.com/deu6avikv/image/upload/v1775242652/Customer_feedback_for_Webhouse_India_nxaocc.png',
    'https://res.cloudinary.com/deu6avikv/image/upload/v1775242651/Forwarded_customer_feedback_for_BESPL.IN_o3iyfi.png',
    'https://res.cloudinary.com/deu6avikv/image/upload/v1775242652/Customer_feedback_for_team_iqk0ou.png',
    'https://res.cloudinary.com/deu6avikv/image/upload/v1775243427/Forwarded_customer_feedback_for_TechNova_stnffl.png',
    'https://res.cloudinary.com/deu6avikv/image/upload/v1775242651/Testimonial_for_Sunil_Sound_Service_v2fyld.png',
    'https://res.cloudinary.com/deu6avikv/image/upload/v1775243700/Customer_feedback_for_BrightMark_Urban_and_CodeCrafters_yqgmci.png'
  ]

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const section = document.getElementById('testimonials')
    if (section) observer.observe(section)
    
    return () => observer.disconnect()
  }, [])

  // Auto slide for mobile
  useEffect(() => {
    if (window.innerWidth < 1024 && !showAll) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [certificates.length, showAll])

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4)

  const handleCertificateClick = (certUrl) => {
    window.open(certUrl, '_blank', 'noopener,noreferrer')
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  return (
    <section 
      id="testimonials" 
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br via-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#00786f]/5 to-transparent rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tl from-[#00786f]/5 to-transparent rounded-full opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Feedback from <span className="text-[#00786f]">Real Clients</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00786f] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real client feedback for projects delivered by Ritesh Kumar, a freelance full stack developer trusted for responsive websites, MERN stack builds, and business-focused web solutions.
          </p>
        </div>

        {/* Desktop: Marquee Animation */}
        <div className="hidden lg:block">
          <div className="certificate-marquee-container relative">
            <style jsx>{`
              .certificate-marquee-container {
                width: 100%;
                overflow: hidden;
                position: relative;
                padding: 1rem 0;
              }
              
              .certificate-marquee-container::before,
              .certificate-marquee-container::after {
                content: '';
                position: absolute;
                top: 0;
                width: 100px;
                height: 100%;
                z-index: 2;
                pointer-events: none;
              }
              
              .certificate-marquee-container::before {
                left: 0;
                background: linear-gradient(to right, rgba(249, 250, 251, 1), transparent);
              }
              
              .certificate-marquee-container::after {
                right: 0;
                background: linear-gradient(to left, rgba(249, 250, 251, 1), transparent);
              }
              
              .certificate-marquee {
                display: flex;
                gap: 1.5rem;
                animation: marquee 30s linear infinite;
                width: max-content;
              }
              
              .certificate-marquee:hover {
                animation-play-state: paused;
              }
              
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .certificate-item {
                flex-shrink: 0;
                width: 280px;
                transition: all 0.3s ease;
              }
              
              .certificate-item:hover {
                transform: translateY(-8px);
              }
              
              .certificate-image {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 12px;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
                cursor: pointer;
              }
              
              .certificate-image:hover {
                box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.2);
              }
            `}</style>
            <div className="certificate-marquee">
              {/* First set */}
              {certificates.map((cert, index) => (
                <div 
                  key={`first-${index}`} 
                  className="certificate-item cursor-pointer"
                  onClick={() => handleCertificateClick(cert)}
                >
                  <img 
                    src={cert} 
                    alt={`Certificate ${index + 1}`}
                    className="certificate-image"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {certificates.map((cert, index) => (
                <div 
                  key={`second-${index}`} 
                  className="certificate-item cursor-pointer"
                  onClick={() => handleCertificateClick(cert)}
                >
                  <img 
                    src={cert} 
                    alt={`Certificate ${index + 1}`}
                    className="certificate-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet: Simple Carousel */}
        <div className="lg:hidden">
          {!showAll ? (
            <div>
              {/* Main Carousel */}
              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden px-2">
                  <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {certificates.map((cert, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div 
                          className="bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
                          onClick={() => handleCertificateClick(cert)}
                        >
                          <img 
                            src={cert} 
                            alt={`Testimonial ${index + 1}`}
                            className="w-full h-auto min-h-[400px] object-contain bg-gray-50"
                            loading="lazy"
                          />
                          <div className="p-4 text-center border-t border-gray-100">
                            <p className="text-sm text-gray-600 font-medium">
                              👆 Tap to view full feedback
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-r-xl p-2 shadow-lg transition-all duration-300"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6 text-[#00786f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-l-xl p-2 shadow-lg transition-all duration-300"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6 text-[#00786f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {certificates.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        currentIndex === idx
                          ? 'w-8 h-2 bg-[#00786f]'
                          : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAll(true)}
                    className="px-8 py-3 rounded-lg font-medium text-white bg-[#00786f] hover:bg-[#00635b] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    View All {certificates.length} Testimonials
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Grid View for Show All */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visibleCertificates.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                    onClick={() => handleCertificateClick(cert)}
                  >
                    <img 
                      src={cert} 
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-auto object-contain bg-gray-50"
                      loading="lazy"
                    />
                    <div className="p-3 text-center border-t border-gray-100">
                      <p className="text-xs text-gray-600">Tap to view</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show Less Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(false)}
                  className="px-8 py-3 rounded-lg font-medium text-white bg-[#00786f] hover:bg-[#00635b] transition-all duration-300"
                >
                  Show Less
                </button>
              </div>
            </>
          )}
        </div>
      </div>

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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Testimonials