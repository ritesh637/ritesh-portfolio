import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaLinkedin, FaSpinner } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { submitContact } from '../utils/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
 

  // Phone number formatting function
  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters except +
    const cleaned = value.replace(/[^\d+]/g, '')
    
    // If it starts with +91, keep it as is
    if (cleaned.startsWith('+91')) {
      return cleaned
    }
    
    // If it starts with 91 and is longer than 10 digits, add +
    if (cleaned.startsWith('91') && cleaned.length > 10) {
      return '+' + cleaned
    }
    
    // If it's a 10-digit number and doesn't start with +91, keep as is
    if (cleaned.length === 10 && !cleaned.startsWith('91')) {
      return cleaned
    }
    
    return cleaned
  }

  // Phone number validation function
  const validatePhoneNumber = (phone) => {
    // Remove all non-numeric characters except +
    const cleaned = phone.replace(/[^\d+]/g, '')
    
    // Check for valid Indian phone number patterns
    const patterns = [
      /^\+91[6-9]\d{9}$/, // +91 followed by 10 digits starting with 6-9
      /^91[6-9]\d{9}$/,   // 91 followed by 10 digits starting with 6-9
      /^[6-9]\d{9}$/      // 10 digits starting with 6-9
    ]
    
    return patterns.some(pattern => pattern.test(cleaned))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value)
      setFormData({
        ...formData,
        [name]: formattedPhone
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  if (!validatePhoneNumber(formData.phone)) {
    toast.error('Please enter a valid Indian phone number')
    return
  }

  setLoading(true)

  try {
    const submissionData = {
      ...formData,
      phone: formData.phone.startsWith('+')
        ? formData.phone
        : `+91${formData.phone.replace(/^91/, '')}`
    }

    const response = await submitContact(submissionData)

    if (response?.success) {
  const userName = formData?.name?.trim() || "there";

  toast.success(`Thank you ${userName}! We’ll get back to you shortly.`);

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

      window.scrollTo({ top: 0, behavior: 'smooth' })

    } else {
      toast.error('❌ Something went wrong')
    }

  } catch (error) {
    toast.error(
      error.message || '❌ Something went wrong. Please try again later.'
    )
    console.error(error)
  } finally {
    setLoading(false)
  }
}

  const contactInfo = [
    {
      icon: <FaEnvelope size={18} />,
      title: 'Email',
      value: 'mneshk480@gmail.com',
      link: 'mailto:mneshk480@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <FaMapMarkerAlt size={18} />,
      title: 'Location',
      value: 'Mumbai, Maharashtra, India',
      link: '#',
      color: '#00786f'
    },
    {
      icon: <FaLinkedin size={18} />,
      title: 'LinkedIn',
      value: 'ritesh-kumar-goswami',
      link: 'https://www.linkedin.com/in/ritesh-kumar-goswami-b56a5b208/',
      color: '#0A66C2'
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 pb-20 sm:pb-32 bg-pure-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#00786f]/5 to-transparent horizontal-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tl from-[#00786f]/5 to-transparent horizontal-full opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            Let's Work <span className="text-[#00786f]">Together</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00786f] mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-medium-gray max-w-2xl mx-auto px-4 leading-relaxed">
            Looking to hire a freelance web developer, MERN stack developer, or React Node.js developer in India? Share your project details and I will reply with the right development approach, timeline, and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-5 animate-fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 bg-white/80 backdrop-blur-sm horizontal-xl border border-light-gray/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 horizontal-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ backgroundColor: `${info.color}15`, color: info.color }}
                  >
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-charcoal text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">
                      {info.title}
                    </div>
                    <div className="text-medium-gray text-xs sm:text-sm break-words">
                      {info.value}
                    </div>
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-[#00786f] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-7 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/80 backdrop-blur-sm horizontal-2xl p-5 sm:p-6 md:p-8 border border-light-gray/30 shadow-lg">
              <form onSubmit={handleSubmit}>
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-light-gray horizontal-lg focus:border-[#00786f] focus:outline-none focus:ring-2 focus:ring-[#00786f]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-light-gray horizontal-lg focus:border-[#00786f] focus:outline-none focus:ring-2 focus:ring-[#00786f]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-light-gray horizontal-lg focus:border-[#00786f] focus:outline-none focus:ring-2 focus:ring-[#00786f]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-charcoal mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-light-gray horizontal-lg focus:border-[#00786f] focus:outline-none focus:ring-2 focus:ring-[#00786f]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="Project inquiry"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-4 sm:mb-5">
                  <label className="block text-xs sm:text-sm font-semibold text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    disabled={loading}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-light-gray horizontal-lg focus:border-[#00786f] focus:outline-none focus:ring-2 focus:ring-[#00786f]/20 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="Tell me about your project requirements, timeline, and budget..."
                  ></textarea>
                </div>

                {/* Response note */}
                <div className="mb-5 sm:mb-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-gray-50 px-3 sm:px-4 py-2 horizontal-full">
                    <p className="text-xs sm:text-sm text-medium-gray">
                      Your inquiry is saved securely and sent directly to my email for a prompt response
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#00786f] text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 horizontal-lg font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:bg-[#00635b] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading && <FaSpinner className="animate-spin" />}
                  <span>
                    {loading ? 'Sending Message...' : 'Send Direct Message'}
                  </span>
                  {!loading && <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />}
                </button>
              </form>
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Contact
