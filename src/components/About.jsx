import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-pure-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-bl from-gray-50 to-transparent horizontal-full opacity-30 -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-gradient-to-tr from-gray-100 to-transparent horizontal-full opacity-20 translate-y-20 -translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* Left Content */}
          <div className="animate-fade-in-up order-1 lg:order-none">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 sm:mb-8 leading-tight">
              About Me
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-medium-gray leading-relaxed">
              
              <p className="text-sm sm:text-base lg:text-lg">
                I am a <strong className="text-[#00786f]">Full Stack Developer with 2+ year of Experience</strong> working with the MERN stack and TypeScript. 
                I have professional experience at <strong className="text-[#00786f]">DB Skills (Chennai)</strong> and <strong className="text-[#00786f]">Yodiso India Pvt Ltd (Mumbai)</strong>, 
                where I built scalable and user-friendly web applications for real-world business use cases.
              </p>

              <p className="text-sm sm:text-base lg:text-lg">
                I specialize in developing <strong className="text-[#00786f]">REST APIs, role-based authentication (RBAC), and Payment integrations like Razorpay</strong>. 
                I have also worked on performance optimization, reducing API response time significantly and improving user engagement through clean UI/UX.
              </p>

              <p className="text-sm sm:text-base lg:text-lg">
                My experience includes building complete systems such as <strong className="text-[#00786f]">Coworking Management Platforms, CRM Systems, and Admin Dashboards</strong>. 
                I enjoy solving real-world problems, writing clean and maintainable code, and continuously learning new technologies to build high-performance applications.
              </p>

            </div>

            {/* Metrics Section - 4 Cards on Mobile, 3 Cards on Tablet/Desktop */}
            {/* Mobile View - 4 Cards (2x2 grid) */}
            <div className="mt-8 sm:mt-10 block sm:hidden">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 horizontal-xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#00786f]">70%</h3>
                  <p className="text-xs text-medium-gray mt-1">API Performance Boost</p>
                </div>
                <div className="bg-gray-50 p-3 horizontal-xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#00786f]">60%</h3>
                  <p className="text-xs text-medium-gray mt-1">User Engagement</p>
                </div>
                <div className="bg-gray-50 p-3 horizontal-xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#00786f]">75%</h3>
                  <p className="text-xs text-medium-gray mt-1">Payment Success Rate</p>
                </div>
                <div className="bg-gray-50 p-3 horizontal-xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#00786f]">95%</h3>
                  <p className="text-xs text-medium-gray mt-1">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Tablet/Desktop View - 3 Cards */}
            <div className="mt-8 sm:mt-10 hidden sm:block">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-gray-50 p-3 sm:p-4 horizontal-xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#00786f]">70%</h3>
                  <p className="text-xs text-medium-gray mt-1 sm:mt-0">API Performance Boost</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 horizontal-xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#00786f]">60%</h3>
                  <p className="text-xs text-medium-gray mt-1 sm:mt-0">User Engagement</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 horizontal-xl text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#00786f]">75%</h3>
                  <p className="text-xs text-medium-gray mt-1 sm:mt-0">Payment Success Rate</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="w-12 sm:w-16 h-1 bg-[#00786f] horizontal-full"></div>
              <span className="text-xs sm:text-sm text-medium-gray font-medium italic">
                Building scalable products with clean and efficient code
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in-up lg:animate-fade-in-right order-2 lg:order-none" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm horizontal-3xl p-6 sm:p-8 border border-light-gray/30 card-hover shadow-lg">
                <div className="space-y-6 sm:space-y-8">

                  {/* Experience Timeline */}
                  <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-4 sm:mb-6 text-center">
                    Experience Journey
                  </h3>

                  <div className="space-y-6 sm:space-y-8">

                    {/* DB Skills */}
                    <div className="relative pl-5 sm:pl-6">
                      <div className="absolute left-0 top-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#00786f] horizontal-full"></div>
                      <div className="absolute left-1 sm:left-1.5 top-4 w-px h-full bg-gradient-to-b from-[#00786f]/30 to-transparent"></div>
                      <div>
                        <h4 className="font-semibold text-charcoal text-sm sm:text-base mb-1">
                          Full Stack Developer — DB Skills (Chennai)
                        </h4>
                        <span className="text-xs text-medium-gray italic">
                          Jan 2026 - Present
                        </span>
                      </div>
                    </div>

                    {/* Yodiso */}
                    <div className="relative pl-5 sm:pl-6">
                      <div className="absolute left-0 top-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#00786f]/70 horizontal-full"></div>
                      <div className="absolute left-1 sm:left-1.5 top-4 w-px h-full bg-gradient-to-b from-[#00786f]/20 to-transparent"></div>
                      <div>
                        <h4 className="font-semibold text-charcoal text-sm sm:text-base mb-1">
                          Associate MERN Developer — Yodiso India Pvt Ltd (Mumbai)
                        </h4>
                        <span className="text-xs text-medium-gray italic">
                          June 2024 - Dec 2025
                        </span>
                      </div>
                    </div>

                    {/* Internship */}
                    <div className="relative pl-5 sm:pl-6">
                      <div className="absolute left-0 top-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#00786f]/50 horizontal-full"></div>
                      <div>
                        <h4 className="font-semibold text-charcoal text-sm sm:text-base mb-1">
                          Full Stack Intern — Motherson Group (Noida)
                        </h4>
                        <span className="text-xs text-medium-gray italic">
                          June 2023 - Aug 2023
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Education */}
                  <div className="mt-8 sm:mt-10 pt-6 sm:pt-6 border-t border-gray-100">
                    <h3 className="text-base sm:text-lg font-semibold text-charcoal mb-3 sm:mb-4 text-center">
                      Education
                    </h3>

                    <div className="text-center">
                      <h4 className="font-semibold text-charcoal text-sm sm:text-base">
                        Centurion University
                      </h4>
                      <p className="text-xs sm:text-sm text-medium-gray mt-1">
                        B.Tech - Computer Science (CGPA: 7.9)
                      </p>
                      <span className="text-xs text-medium-gray italic">
                        2020 - 2024
                      </span>
                    </div>
                  </div>

                </div>

                {/* Decorations - Made responsive */}
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-5 sm:w-6 h-5 sm:h-6 bg-[#00786f] horizontal-full opacity-10"></div>
                <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-3 sm:w-4 h-3 sm:h-4 bg-[#00786f] horizontal-full opacity-20"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About