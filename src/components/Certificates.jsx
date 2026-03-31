import React, { useState, useEffect } from 'react'

const Certificates = () => {
  const [showAll, setShowAll] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const certificates = [
    'https://media-content.ccbp.in/certificates/share/IIYBIHSQAD.png',
    'https://media-content.ccbp.in/certificates/share/NQUYIYCZTR.png',
    'https://media-content.ccbp.in/certificates/share/EFZNPGPJYM.png',
    'https://media-content.ccbp.in/certificates/share/AUOMVYSKJS.png',
    'https://media-content.ccbp.in/certificates/share/DWLGKLFLZI.png',
    'https://media-content.ccbp.in/certificates/share/CCKZUQZLAL.png',
    'https://media-content.ccbp.in/certificates/share/NHYVZKECZO.png',
    'https://media-content.ccbp.in/certificates/share/GJYQQMZAVH.png'
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

    const section = document.getElementById('certificates')
    if (section) observer.observe(section)
    
    return () => observer.disconnect()
  }, [])

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4)

  const handleCertificateClick = (certUrl) => {
    window.open(certUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section 
      id="certificates" 
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br via-white to-gray-100 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#00786f]/5 to-transparent horizontal-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tl from-[#00786f]/5 to-transparent horizontal-full opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            Certifications
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00786f] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-medium-gray max-w-2xl mx-auto px-4">
            Professional certifications that showcase my commitment to continuous learning and excellence.
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
              
              @media (max-width: 1024px) {
                .certificate-item {
                  width: 240px;
                }
                .certificate-image {
                  height: 170px;
                }
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

        {/* Tablet & Mobile: Grid with Show More */}
        <div className="lg:hidden">
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {visibleCertificates.map((cert, index) => (
              <div 
                key={index} 
                className="certificate-card group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCertificateClick(cert)}
              >
                <div className="relative horizontal-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={cert} 
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white text-sm sm:text-base font-medium inline-flex items-center gap-2">
                        View Certificate
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {certificates.length > 4 && (
            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 horizontal-lg font-medium text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                style={{ 
                  background: '#00786f', 
                  border: 'none',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#00635b'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#00786f'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {showAll ? (
                    <>
                      Show Less
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      View All {certificates.length} Certificates
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </div>
          )}
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Certificates