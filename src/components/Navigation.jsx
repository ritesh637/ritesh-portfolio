import React from 'react'
import { FaHome, FaUser, FaCog, FaLaptopCode, FaEnvelope, FaCertificate, FaBriefcase } from 'react-icons/fa'

const Navigation = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCog },
    { id: 'services', label: 'Services', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaLaptopCode },
    { id: 'certificates', label: 'Certificates', icon: FaCertificate },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="nav-pill rounded-full px-3 py-3">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    px-4 py-3 horizontal-full text-sm font-medium smooth-transition
                    flex items-center gap-2 relative overflow-hidden
                    ${isActive 
                      ? 'bg-[#00786f] text-white shadow-lg scale-110' 
                      : 'text-white hover:bg-white/10 hover:scale-105'
                    }
                  `}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  <Icon size={16} />
                  {isActive && (
                    <span className="hidden sm:block text-xs font-semibold">
                      {item.label}
                    </span>
                  )}
                </button>
                
                {!isActive && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-[#00786f] text-white px-3 py-2 horizontal-lg text-xs font-medium whitespace-nowrap">
                      {item.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <div className="border-4 border-transparent border-t-[#00786f]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation