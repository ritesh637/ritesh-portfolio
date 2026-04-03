import React, { useState, useEffect } from 'react'
import { FaHome, FaUser, FaCog, FaLaptopCode, FaEnvelope, FaStar, FaBriefcase, FaBars, FaTimes } from 'react-icons/fa'

const Navigation = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCog },
    { id: 'services', label: 'Services', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaLaptopCode },
    { id: 'testimonials', label: 'Testimonials', icon: FaStar },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ]

  // Check if device is desktop (screen width >= 1024px)
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Handle body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  // Desktop Navigation (Horizontal Pill) - ONLY for desktop
  const DesktopNavigation = () => (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="nav-pill horizontal-full px-2 sm:px-3 py-2 sm:py-3 bg-[#00786f]/90 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-full font-medium smooth-transition
                    flex items-center gap-1 sm:gap-2 relative overflow-hidden
                    ${isActive 
                      ? 'bg-white text-[#00786f] shadow-lg scale-110' 
                      : 'text-white hover:bg-white/20 hover:scale-105'
                    }
                  `}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  <Icon size={14} className="sm:w-4 sm:h-4" />
                  {isActive && (
                    <span className="hidden sm:inline-block text-xs font-semibold whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </button>
                
                {/* Tooltip */}
                {!isActive && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                    <div className="bg-gray-900 text-white px-2 py-1.5 sm:px-3 sm:py-2 horizontal-lg text-xs font-medium whitespace-nowrap shadow-lg">
                      {item.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <div className="border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  // Mobile & Tablet Navigation (Bottom Bar with Hamburger) - ONLY for mobile/tablet
  const MobileNavigation = () => (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed bottom-4 right-4 z-50 bg-[#00786f] text-white p-3 sm:p-4 horizontal-full shadow-lg hover:bg-[#00635b] transition-all duration-300 hover:scale-110"
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? <FaTimes size={20} className="sm:w-5 sm:h-5" /> : <FaBars size={20} className="sm:w-5 sm:h-5" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white horizontal-t-2xl shadow-2xl z-40 transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '80vh' }}
      >
        <div className="flex flex-col p-4 sm:p-6">
          {/* Drag Indicator */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-gray-300 horizontal-full"></div>
          </div>

          {/* Menu Header */}
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#00786f] font-serif">Navigation</h3>
            <p className="text-xs sm:text-sm text-gray-500">Jump to section</p>
          </div>

          {/* Navigation Items */}
          <div className="space-y-2 sm:space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-200
                    ${isActive 
                      ? 'bg-[#00786f] text-white shadow-md' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-medium">{item.label}</span>
                  {isActive && (
                    <span className="ml-auto text-xs bg-white/20 px-2 py-1 horizontal-full">Active</span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 sm:mt-6 py-2 sm:py-3 text-gray-500 hover:text-gray-700 text-sm sm:text-base font-medium transition-colors"
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  )

  // Render only desktop navigation for desktop users
  if (isDesktop) {
    return <DesktopNavigation />
  }
  
  // Render only mobile navigation for mobile/tablet users
  return <MobileNavigation />
}

export default Navigation