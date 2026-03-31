import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Python', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Vercel', level: 90 },
        { name: 'Render', level: 95 },
        { name: 'MongoDB Atlas', level: 80 },
        { name: 'Firebase', level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 sm:mb-5 md:mb-6">
            Skills & Experience
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00786f] mx-auto mb-6 sm:mb-8"></div>
          {/* Mobile text - shorter version with smaller font */}
          <p className="block md:hidden text-sm sm:text-base text-medium-gray max-w-3xl mx-auto leading-relaxed px-4">
            Tools I use to build amazing projects.
          </p>
          {/* Tablet/Desktop text - full version */}
          <p className="hidden md:block text-base lg:text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white/80 backdrop-blur-sm horizontal-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-light-gray/50 card-hover animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-serif font-bold text-[#00786f] mb-6 sm:mb-7 md:mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <span className="text-sm sm:text-base text-charcoal font-medium">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-medium-gray">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-light-gray horizontal-full h-1.5 sm:h-2 overflow-hidden">
                      <div 
                        className="bg-[#00786f] horizontal-full h-1.5 sm:h-2 smooth-transition transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills