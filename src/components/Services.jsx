import React from 'react';
import { FiCode, FiDatabase, FiMonitor, FiZap, FiShoppingCart, FiLayout } from 'react-icons/fi';

const servicesData = [
  {
    title: 'Front-End Development',
    description: 'Crafting responsive and interactive user interfaces using HTML, CSS, and JavaScript, with a focus on modern frameworks like Bootstrap and TailwindCSS. Expertise in ReactJS for building dynamic single-page applications.',
    icon: <FiCode className="text-[#00786f] text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: true,
    points: ['Responsive Design', 'Modern Frameworks (Bootstrap, TailwindCSS)', 'ReactJS Development', 'Interactive UI Components', 'Cross-browser Compatibility', 'Performance Optimization']
  },
  {
    title: 'Back-End Development',
    description: 'Developing robust server-side applications using Node.js and Express.js, alongside traditional technologies like PHP and MySQL. Skilled in creating RESTful APIs and managing databases.',
    icon: <FiDatabase className="text-[#00786f] text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: false,
    points: ['Node.js & Express.js', 'PHP Development', 'MySQL Database Management', 'RESTful API Creation', 'Server Architecture', 'Database Optimization']
  },
  {
    title: 'Full-Stack Development',
    description: 'Offering comprehensive web solutions by handling both front-end and back-end development, leveraging the MERN stack for seamless integration and efficient development.',
    icon: <FiMonitor className="text-[#00786f] text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: true,
    active: false,
    points: ['MERN Stack Development', 'End-to-End Solutions', 'Seamless Integration', 'Efficient Development Process', 'Scalable Architecture', 'Modern Tech Stack']
  },
  {
    title: 'Website Optimization',
    description: 'Enhancing website performance for faster loading times and better user engagement, alongside implementing SEO best practices to improve visibility.',
    icon: <FiZap className="text-[#00786f] text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: false,
    points: ['Performance Enhancement', 'SEO Best Practices', 'Loading Speed Optimization', 'User Engagement Improvement', 'Core Web Vitals', 'Analytics Integration']
  },
  {
    title: 'E-commerce Development',
    description: 'Developing and setting up online stores, integrating secure payment gateways, and ensuring a smooth shopping experience for customers.',
    icon: <FiShoppingCart className="text-[#00786f] text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: false,
    points: ['Online Store Setup', 'Payment Gateway Integration', 'Shopping Cart Functionality', 'Inventory Management', 'Order Processing', 'Customer Management']
  },
  {
    title: 'Custom Web Application Development',
    description: 'Developing tailor-made web applications based on specific business needs, including dashboards, admin panels, and interactive tools with a focus on scalability and usability.',
    icon: <FiLayout className="text-[#00786f] text-2xl" />,
    iconBg: 'bg-[#00786f]/10',
    popular: false,
    active: false,
    points: ['Custom Business Solutions', 'Admin Panels & Dashboards', 'Interactive Tools', 'Scalable Architecture', 'User-focused Design']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 capitalize font-serif block">
            Services <span className="text-[#00786f]">I Offer</span>
          </h2>
          <p className="text-medium-gray max-w-2xl mx-auto text-base">
            I provide end-to-end development services, from designing responsive UIs to 
            building scalable backends and deploying production-ready web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white horizontal-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 relative flex flex-col border-b-[3px] border-[#00786f]"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-[#00786f] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 horizontal-full">
                  Most Popular
                </div>
              )}
              
              <div className="flex flex-col items-center text-center mb-8 flex-grow">
                <div className={`w-14 h-14 horizontal-2xl flex items-center justify-center mb-6 shadow-sm ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-4 font-serif">{service.title}</h3>
                <p className="text-sm text-medium-gray leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-auto">
                <ul className="space-y-3">
                  {service.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-center">
                      <span className="w-1.5 h-1.5 horizontal-full bg-[#00786f] mr-3 flex-shrink-0"></span>
                      <span className="text-sm text-medium-gray">{point}</span>
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