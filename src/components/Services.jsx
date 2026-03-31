import React from 'react';
import { FiCode, FiDatabase, FiMonitor, FiZap, FiShoppingCart, FiLayout } from 'react-icons/fi';

const servicesData = [
  {
    title: 'Front-End Development',
    description: 'Crafting responsive and interactive user interfaces using HTML, CSS, and JavaScript, with a focus on modern frameworks like Bootstrap and TailwindCSS. Expertise in ReactJS for building dynamic single-page applications.',
    icon: <FiCode className="text-[#00786f] text-xl sm:text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: true,
    points: ['Responsive Design', 'Modern Frameworks (Bootstrap, TailwindCSS)', 'ReactJS Development', 'Interactive UI Components', 'Cross-browser Compatibility', 'Performance Optimization']
  },
  {
    title: 'Back-End Development',
    description: 'Developing robust server-side applications using Node.js and Express.js, alongside traditional technologies like PHP and MySQL. Skilled in creating RESTful APIs and managing databases.',
    icon: <FiDatabase className="text-[#00786f] text-xl sm:text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: false,
    points: ['Node.js & Express.js', 'PHP Development', 'MySQL Database Management', 'RESTful API Creation', 'Server Architecture', 'Database Optimization']
  },
  {
    title: 'Full-Stack Development',
    description: 'Offering comprehensive web solutions by handling both front-end and back-end development, leveraging the MERN stack for seamless integration and efficient development.',
    icon: <FiMonitor className="text-[#00786f] text-xl sm:text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: true,
    active: false,
    points: ['MERN Stack Development', 'End-to-End Solutions', 'Seamless Integration', 'Efficient Development Process', 'Scalable Architecture', 'Modern Tech Stack']
  },
  {
    title: 'Website Optimization',
    description: 'Enhancing website performance for faster loading times and better user engagement, alongside implementing SEO best practices to improve visibility.',
    icon: <FiZap className="text-[#00786f] text-xl sm:text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: false,
    points: ['Performance Enhancement', 'SEO Best Practices', 'Loading Speed Optimization', 'User Engagement Improvement', 'Core Web Vitals', 'Analytics Integration']
  },
  {
    title: 'E-commerce Development',
    description: 'Developing and setting up online stores, integrating secure payment gateways, and ensuring a smooth shopping experience for customers.',
    icon: <FiShoppingCart className="text-[#00786f] text-xl sm:text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: false,
    points: ['Online Store Setup', 'Payment Gateway Integration', 'Shopping Cart Functionality', 'Inventory Management', 'Order Processing', 'Customer Management']
  },
  {
    title: 'Custom Web Application Development',
    description: 'Developing tailor-made web applications based on specific business needs, including dashboards, admin panels, and interactive tools with a focus on scalability and usability.',
    icon: <FiLayout className="text-[#00786f] text-xl sm:text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: false,
    points: ['Custom Business Solutions', 'Admin Panels & Dashboards', 'Interactive Tools', 'Scalable Architecture', 'User-focused Design']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 sm:mb-5 md:mb-6 capitalize font-serif">
            Services <span className="text-[#00786f]">I Offer</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#00786f] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base text-medium-gray max-w-2xl mx-auto px-4 sm:px-6">
            I provide end-to-end development services, from designing responsive UIs to 
            building scalable backends and deploying production-ready web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white horizontal-xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 relative flex flex-col border-b-[3px] border-[#00786f] group hover:-translate-y-1"
            >
              {service.popular && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-500 text-white text-[8px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-1 sm:px-3 sm:py-1.5 horizontal-full z-10">
                  Most Popular
                </div>
              )}
              
              <div className="flex flex-col items-center text-center mb-6 sm:mb-7 md:mb-8 flex-grow">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 horizontal-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-sm ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-charcoal mb-2 sm:mb-3 md:mb-4 font-serif">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-medium-gray leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4 sm:pt-5 md:pt-6 mt-auto">
                <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                  {service.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start sm:items-center">
                      <span className="w-1.5 h-1.5 horizontal-full bg-[#00786f] mt-1.5 sm:mt-0 mr-2 sm:mr-3 flex-shrink-0"></span>
                      <span className="text-xs sm:text-sm text-medium-gray leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;