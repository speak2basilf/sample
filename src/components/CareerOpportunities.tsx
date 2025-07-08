import React, { useState, useEffect } from 'react';
import { Users, Building, TrendingUp, Award, Briefcase, Star, Heart, Sparkles } from 'lucide-react';

const CareerOpportunities: React.FC = () => {
  const [counters, setCounters] = useState({
    students: 0,
    companies: 0,
    rate: 0,
    package: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const targetValues = {
    students: 5000,
    companies: 50,
    rate: 95,
    package: 18
  };

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('career-opportunities');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        students: Math.floor(targetValues.students * progress),
        companies: Math.floor(targetValues.companies * progress),
        rate: Math.floor(targetValues.rate * progress),
        package: Math.floor(targetValues.package * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues); // Ensure exact final values
      }
    }, stepDuration);
  };

  const metrics = [
    {
      icon: Users,
      number: `${counters.students}+`,
      label: 'Students Placed',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600',
      delay: '0s'
    },
    {
      icon: Building,
      number: `${counters.companies}+`,
      label: 'Partner Companies',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      iconColor: 'text-indigo-600',
      delay: '0.2s'
    },
    {
      icon: TrendingUp,
      number: `${counters.rate}%`,
      label: 'Placement Rate',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-600',
      delay: '0.4s'
    },
    {
      icon: Award,
      number: `₹${counters.package}L`,
      label: 'Highest Package',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      iconColor: 'text-orange-600',
      delay: '0.6s'
    }
  ];

  return (
    <section 
      id="career-opportunities" 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-white/10 to-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-indigo-300/20 to-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-300/15 to-pink-300/15 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 right-1/4 text-pink-300 opacity-40 animate-bounce" size={24} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Star className="absolute bottom-32 left-1/5 text-yellow-300 opacity-50 animate-bounce" size={28} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        <Sparkles className="absolute top-1/3 left-1/6 text-purple-300 opacity-40 animate-bounce" size={22} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
        <Briefcase className="absolute top-2/3 right-1/6 text-blue-300 opacity-50 animate-bounce" size={26} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Career <span className="text-yellow-300">Opportunities</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-poppins">
            Unlock your potential in healthcare and clinical research with our comprehensive training programs. 
            Join thousands of successful professionals who transformed their careers with CliniGlobal.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: metric.delay }}
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl hover:scale-105 hover:bg-white/15 transition-all duration-500 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.bgColor} opacity-10 rounded-3xl`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <metric.icon className={`${metric.iconColor} group-hover:text-white transition-colors duration-300`} size={32} />
                  </div>
                  
                  {/* Number */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 font-poppins group-hover:scale-110 transition-transform duration-300">
                    {metric.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-white/80 text-sm md:text-base font-medium font-poppins group-hover:text-white transition-colors duration-300">
                    {metric.label}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
              </div>

              {/* Floating Animation Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:bg-white/15 transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-poppins">
              Ready to Transform Your Career?
            </h3>
            <p className="text-white/90 mb-8 text-lg font-poppins">
              Join our next batch and become part of the healthcare revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg text-lg font-poppins">
                Explore Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg font-poppins">
                Schedule Counselling
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;