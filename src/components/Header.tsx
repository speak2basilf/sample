import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, GraduationCap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const rotatingWords = ['Assured', 'Transformation Focused', 'Career Focused', 'Accredited'];

  // Rotate words animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdowns when clicking outside or navigating
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsCoursesOpen(false);
        setIsAboutOpen(false);
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'admission', 'courses', 'placements', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 150; // Increased offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabName: string, href: string) => {
    setActiveTab(tabName);
    setIsMenuOpen(false); // Close mobile menu if open
    setIsCoursesOpen(false); // Close courses dropdown
    setIsAboutOpen(false); // Close about dropdown
    setIsResourcesOpen(false); // Close resources dropdown
    
    // Navigate to home page first if not already there
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 160; // Account for both top bar and main nav
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Smooth scroll to section with proper offset for sticky header
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 160; // Account for both top bar and main nav
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
    setIsAboutOpen(false); // Close other dropdowns
    setIsResourcesOpen(false);
  };

  const handleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsCoursesOpen(false); // Close other dropdowns
    setIsResourcesOpen(false);
  };

  const handleCourseNavigation = (coursePath: string) => {
    setIsCoursesOpen(false);
    setIsMenuOpen(false);
    navigate(coursePath);
  };

  const handleAboutNavigation = (section: string) => {
    setIsAboutOpen(false);
    setIsMenuOpen(false);
    
    if (section === 'about' || section === 'testimonials') {
      handleTabClick(section, `#${section}`);
    } else if (section === 'accreditations') {
      navigate('/accreditations');
      // Ensure smooth scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      // Ensure smooth scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // For other about sections, navigate to dedicated pages (to be created later)
      console.log(`Navigate to ${section} page`);
    }
  };

  const getTabClasses = (tabName: string) => {
    const baseClasses = "relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-3 py-2 rounded-lg";
    const activeClasses = "text-blue-600 bg-blue-50/50 shadow-md scale-105";
    
    return activeTab === tabName ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  const getActiveIndicator = (tabName: string) => {
    if (activeTab === tabName) {
      return (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
      );
    }
    return null;
  };

  return (
    <header className="glass-navbar sticky top-0 z-50 h-[128px]">
      {/* Top Bar */}
      <div className="glass text-glass-white py-2" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(30, 64, 175, 0.9))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <Phone size={14} />
                <span className="hidden sm:inline">+919052992967</span>
                <span className="sm:hidden">Call Us</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                <Mail size={14} />
                <span className="hidden sm:inline">info@cliniglobal.com</span>
                <span className="sm:hidden">Email</span>
              </div>
            </div>
            <div className="flex items-center justify-center flex-1 order-first sm:order-none">
              <div className="glass-button text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1">
                #1 Healthcare Training Institute
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative h-6 overflow-hidden min-w-[200px]">
                <div className="rolling-text-container">
                  <span className="rolling-text font-semibold text-glass-white text-base tracking-wide">
                    {rotatingWords[currentWordIndex]}
                  </span>
                </div>
              </div>
              
              {/* Policy Buttons */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => navigate('/privacy-policy')}
                  className="bg-white text-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => navigate('/terms-conditions')}
                  className="bg-white text-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  Terms & Conditions
                </button>
                <button 
                  onClick={() => navigate('/refund-policy')}
                  className="bg-white text-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  Refund Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[96px] mobile-stack">
          {/* Logo and Text - Extreme Left */}
          <div className="flex items-center flex-shrink-0 -ml-2 md:-ml-4 mobile-center mobile-full sm:w-auto">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src="/finallll.png" 
                alt="CliniGlobal Research Institute Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-28 md:w-28 lg:h-32 lg:w-32 mr-2 md:mr-3 object-contain hover:scale-105 transition-transform duration-300 opacity-90 hover:opacity-100"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                  mixBlendMode: 'multiply'
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold hover:scale-105 transition-all duration-300 cliniglobal-brand font-poppins">
                  <span className="cliniglobal-clini">Clini</span><span className="cliniglobal-global">Global</span>
                </h1>
                <p className="text-xs md:text-sm text-glass-secondary font-medium tracking-wide font-poppins">Research Institute</p>
              </div>
            </div>
          </div>
          
          <div className="hidden xl:flex flex-1 justify-center ml-2 md:ml-4">
            <div className="flex items-baseline space-x-1 xl:space-x-2">
              <button 
                onClick={() => handleTabClick('home', '#home')}
                className={getTabClasses('home')}
              >
                Home
                {getActiveIndicator('home')}
              </button>
              
              {/* About Us Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={handleAboutDropdown}
                  className={`${getTabClasses('about')} flex items-center whitespace-nowrap text-sm xl:text-base`}
                >
                  About Us
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} 
                  />
                  {getActiveIndicator('about')}
                </button>
                {isAboutOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <button 
                      onClick={() => handleAboutNavigation('our-story')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      <span className="text-gray-400 cursor-not-allowed">Our Story/Mission</span>
                    </button>
                    <button 
                      onClick={() => handleAboutNavigation('leadership')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      <span className="text-gray-400 cursor-not-allowed">Leadership/Team</span>
                    </button>
                    <button 
                      onClick={() => handleAboutNavigation('accreditations')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      Accreditations & Recognitions
                    </button>
                    <button 
                      onClick={() => handleAboutNavigation('about')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      Why Choose Us?
                    </button>
                    <button 
                      onClick={() => handleAboutNavigation('testimonials')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      Testimonials/Success Stories
                    </button>
                  </div>
                )}
              </div>

              {/* Courses Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => navigate('/courses')}
                  className={`${getTabClasses('courses')} flex items-center whitespace-nowrap text-sm xl:text-base`}
                >
                  Courses
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} 
                  />
                  {getActiveIndicator('courses')}
                </button>
                {isCoursesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-2 mx-2">
                      <div className="font-semibold text-gray-800 mb-2">Clinical Research</div>
                      <button 
                        onClick={() => handleCourseNavigation('/courses/pgdcr')}
                        className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg"
                      >
                        PG Diploma in Clinical Research (PGDCR)
                      </button>
                      <button 
                        onClick={() => handleCourseNavigation('/courses/adcr')}
                        className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg"
                      >
                        Advanced Diploma in Clinical Research (ADCR)
                      </button>
                    </div>
                    <button 
                      onClick={() => handleCourseNavigation('/courses/clinical-sas')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      Advanced Diploma in Clinical SAS
                    </button>
                    <button 
                      onClick={() => handleCourseNavigation('/courses/bioinformatics')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      Advanced Diploma in Bioinformatics
                    </button>
                    <button 
                      onClick={() => handleCourseNavigation('/courses/medical-coding')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      Advanced Diploma in Medical Coding
                    </button>
                    <button 
                      onClick={() => handleCourseNavigation('/courses/ai-ml')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      PG Diploma in AI & ML Healthcare
                    </button>
                    <button 
                      onClick={() => handleCourseNavigation('/courses/mba')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2"
                    >
                      MBA in Healthcare Management
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleTabClick('admission', '#admission')}
                className={getTabClasses('admission')}
              >
                Admission
                {getActiveIndicator('admission')}
              </button>
              
              <button 
                onClick={() => navigate('/placements')}
                className={getTabClasses('placements')}
              >
                Placements
                {getActiveIndicator('placements')}
              </button>
              
              {/* Resources Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => {
                    setIsResourcesOpen(!isResourcesOpen);
                    setIsCoursesOpen(false); // Close other dropdown
                    setIsAboutOpen(false);
                  }}
                  className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 px-2 xl:px-3 py-2 rounded-lg flex items-center whitespace-nowrap text-sm xl:text-base"
                >
                  Resources
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <button onClick={() => navigate('/blog')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2">Blog & Articles</button>
                    <button onClick={() => navigate('/learning-centers')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2">Learning Centers</button>
                    <span className="block px-4 py-2 text-gray-400 cursor-not-allowed rounded-lg mx-2">Webinars</span>
                    <span className="block px-4 py-2 text-gray-400 cursor-not-allowed rounded-lg mx-2">Case Studies</span>
                    <a href="#faq" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 rounded-lg mx-2">FAQ</a>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleTabClick('contact', '#contact')}
                className={getTabClasses('contact')}
              >
                Contact
                {getActiveIndicator('contact')}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="xl:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="glass-button p-2 text-glass-primary hover:text-blue-600"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          {/* LMS and Enroll Now section */}
          <div className="hidden xl:flex items-center ml-auto">
            <div className="flex items-center space-x-3 xl:space-x-4">
              {/* LMS Button */}
              <button 
                onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                className="glass-button flex items-center space-x-1 xl:space-x-2 px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-poppins"
              >
                <GraduationCap size={16} className="xl:w-5 xl:h-5" />
                <span>LMS</span>
              </button>
              
              {/* Enroll Now - moved to last */}
              <button className="glass-button px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-poppins">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="glass-card px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/20 rounded-b-2xl shadow-lg">
              {/* Mobile Rotating Text */}
              <div className="px-3 py-2 text-center">
                <span className="font-semibold text-glass-primary animate-pulse font-poppins">
                  {rotatingWords[currentWordIndex]}
                </span>
              </div>
              
              <button 
                onClick={() => handleTabClick('home', '#home')}
                className={`block w-full text-left px-3 py-2 font-medium rounded-lg transition-all duration-200 font-poppins ${
                  activeTab === 'home' ? 'text-glass-primary glass' : 'text-glass-secondary hover:text-blue-600 hover:glass'
                }`}
              >
                Home
              </button>
              
              {/* Mobile About Us Section */}
              <div className="px-3 py-2">
                <button 
                  onClick={() => handleTabClick('about', '#about')}
                  className={`font-medium mb-2 font-poppins ${
                    activeTab === 'about' ? 'text-glass-primary' : 'text-glass-secondary'
                  }`}
                >
                  About Us
                </button>
                <div className="pl-4 space-y-1">
                  <span className="block w-full text-left px-2 py-1 text-sm text-gray-400 cursor-not-allowed rounded font-poppins">Our Story/Mission</span>
                  <span className="block w-full text-left px-2 py-1 text-sm text-gray-400 cursor-not-allowed rounded font-poppins">Leadership/Team</span>
                  <button onClick={() => handleAboutNavigation('accreditations')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">Accreditations & Recognitions</button>
                  <button onClick={() => handleAboutNavigation('about')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">Why Choose Us?</button>
                  <button onClick={() => handleAboutNavigation('testimonials')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">Testimonials/Success Stories</button>
                </div>
              </div>

              {/* Mobile Courses Section */}
              <div className="px-3 py-2">
                <button 
                  onClick={() => navigate('/courses')}
                  className={`font-medium mb-2 font-poppins ${
                    activeTab === 'courses' ? 'text-glass-primary' : 'text-glass-secondary'
                  }`}
                >
                  Courses
                </button>
                <div className="pl-4 space-y-1">
                  <div className="px-2 py-1 text-sm font-medium text-glass-primary font-poppins">Clinical Research</div>
                  <button onClick={() => handleCourseNavigation('/courses/pgdcr')} className="block w-full text-left px-4 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">PG Diploma in Clinical Research (PGDCR)</button>
                  <button onClick={() => handleCourseNavigation('/courses/adcr')} className="block w-full text-left px-4 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">Advanced Diploma in Clinical Research (ADCR)</button>
                  <button onClick={() => handleCourseNavigation('/courses/clinical-sas')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">Advanced Diploma in Clinical SAS</button>
                  <button onClick={() => handleCourseNavigation('/courses/bioinformatics')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">Advanced Diploma in Bioinformatics</button>
                  <button onClick={() => handleCourseNavigation('/courses/medical-coding')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">Advanced Diploma in Medical Coding</button>
                  <button onClick={() => handleCourseNavigation('/courses/ai-ml')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">PG Diploma in AI & ML Healthcare</button>
                  <button onClick={() => handleCourseNavigation('/courses/mba')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">MBA in Healthcare Management</button>
                </div>
              </div>

              <button 
                onClick={() => handleTabClick('admission', '#admission')}
                className={`block w-full text-left px-3 py-2 font-medium rounded-lg transition-all duration-200 font-poppins ${
                  activeTab === 'admission' ? 'text-glass-primary glass' : 'text-glass-secondary hover:text-blue-600 hover:glass'
                }`}
              >
                Admission
              </button>
              
              <button 
                onClick={() => navigate('/placements')}
                className={`block w-full text-left px-3 py-2 font-medium rounded-lg transition-all duration-200 font-poppins ${
                  activeTab === 'placements' ? 'text-glass-primary glass' : 'text-glass-secondary hover:text-blue-600 hover:glass'
                }`}
              >
                Placements
              </button>
              
              {/* Mobile Resources Section */}
              <div className="px-3 py-2">
                <div className="text-glass-secondary font-medium mb-2 font-poppins">Resources</div>
                <div className="pl-4 space-y-1">
                  <button onClick={() => navigate('/blog')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">Blog & Articles</button>
                  <button onClick={() => navigate('/learning-centers')} className="block w-full text-left px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">Learning Centers</button>
                  <span className="block px-2 py-1 text-sm text-gray-400 cursor-not-allowed rounded font-poppins">Webinars</span>
                  <span className="block px-2 py-1 text-sm text-gray-400 cursor-not-allowed rounded font-poppins">Case Studies</span>
                  <a href="#faq" className="block px-2 py-1 text-sm text-glass-secondary hover:text-blue-600 hover:glass rounded transition-all duration-200 font-poppins">FAQ</a>
                </div>
              </div>

              <button 
                onClick={() => handleTabClick('contact', '#contact')}
                className={`block w-full text-left px-3 py-2 font-medium rounded-lg transition-all duration-200 font-poppins ${
                  activeTab === 'contact' ? 'text-glass-primary glass' : 'text-glass-secondary hover:text-blue-600 hover:glass'
                }`}
              >
                Contact
              </button>
              
              {/* Enhanced mobile Enroll Now button */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open('http://cliniglobal.testpress.in', '_blank')}
                    className="w-full glass-button flex items-center justify-center space-x-2 px-6 py-3 font-medium font-poppins"
                  >
                    <GraduationCap size={18} />
                    <span>LMS</span>
                  </button>
                  <button className="w-full glass-button px-6 py-3 font-poppins">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;