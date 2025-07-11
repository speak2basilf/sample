import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Users, Award, ArrowRight, GraduationCap, Target, TrendingUp } from 'lucide-react';
import { GlowingEffect } from '../components/ui/glowing-effect';

const CoursesPage: React.FC = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'pgdcr',
      title: 'PG Diploma in Clinical Research',
      duration: '12 Months',
      mode: 'Online / Classroom',
      students: '500+ Enrolled',
      rating: '4.9',
      description: 'Comprehensive training in clinical trial management, GCP guidelines, and regulatory compliance for pharmaceutical industry.',
      features: [
        'Live Interactive Sessions',
        'Real Project Experience', 
        'Industry Certification',
        '100% Placement Support',
        'Expert Mentorship'
      ],
      popular: true,
      route: '/courses/crm',
      color: 'blue'
    },
    {
      id: 'adcr',
      title: 'Advanced Diploma in Clinical Research',
      duration: '6 Months',
      mode: 'Online / Classroom',
      students: '350+ Enrolled',
      rating: '4.8',
      description: 'Intensive 6-month program designed for fast-track entry into clinical research with hands-on training.',
      features: [
        'Industry-Ready Training',
        'GCP & ICH Guidelines',
        'Practical Case Studies',
        'Career Guidance',
        'Placement Assistance'
      ],
      route: '/courses/adcr',
      color: 'green'
    },
    {
      id: 'clinical-sas',
      title: 'Advanced Diploma in Clinical SAS',
      duration: '6 Months',
      mode: 'Online / Classroom',
      students: '400+ Enrolled',
      rating: '4.8',
      description: 'Master SAS programming for clinical data analysis, statistical reporting, and regulatory submissions.',
      features: [
        'SAS Programming',
        'Statistical Analysis',
        'Clinical Reporting',
        'Data Validation',
        'R Programming'
      ],
      route: '/courses/clinical-sas',
      color: 'purple'
    },
    {
      id: 'medical-coding',
      title: 'Advanced Diploma in Medical Coding',
      duration: '6 Months',
      mode: 'Online / Classroom',
      students: '450+ Enrolled',
      rating: '4.8',
      description: 'Master medical coding systems including ICD-10, CPT, and HCPCS for healthcare documentation.',
      features: [
        'ICD-10 Coding',
        'CPT Procedures',
        'Medical Terminology',
        'Healthcare Documentation',
        'CPC Certification Prep'
      ],
      route: '/courses/medical-coding',
      color: 'emerald'
    },
    {
      id: 'ai-ml',
      title: 'PG Diploma in AI & ML Healthcare',
      duration: '12 Months',
      mode: 'Online / Classroom',
      students: '300+ Enrolled',
      rating: '4.8',
      description: 'Expertise in artificial intelligence and machine learning applications in healthcare and medical research.',
      features: [
        'Machine Learning',
        'Healthcare AI',
        'Predictive Analytics',
        'Medical Imaging AI',
        'Industry Projects'
      ],
      route: '/courses/ai-ml',
      color: 'orange'
    },
    {
      id: 'mba',
      title: 'MBA in Healthcare Management',
      duration: '24 Months',
      mode: 'Weekend Batches',
      students: '150+ Enrolled',
      rating: '4.9',
      description: 'Comprehensive business administration program focused on healthcare industry management and leadership.',
      features: [
        'Healthcare Strategy',
        'Operations Management',
        'Financial Planning',
        'Leadership Skills',
        'Executive Placement'
      ],
      route: '/courses/mba',
      color: 'indigo'
    }
  ];

  const handleCourseClick = (course: typeof courses[0]) => {
    navigate(course.route);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Healthcare Education" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 font-poppins">
              Our <span className="text-yellow-400">Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-poppins">
              Transform your career with our industry-focused healthcare training programs. 
              Choose from our comprehensive range of courses designed for success.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <GraduationCap className="mx-auto mb-4 text-white" size={32} />
                <div className="text-2xl md:text-3xl font-bold mb-2 font-poppins">6</div>
                <div className="text-white/80 text-xs md:text-sm font-poppins">Programs</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <Users className="mx-auto mb-4 text-white" size={32} />
                <div className="text-2xl md:text-3xl font-bold mb-2 font-poppins">5000+</div>
                <div className="text-white/80 text-xs md:text-sm font-poppins">Students</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <Award className="mx-auto mb-4 text-white" size={32} />
                <div className="text-2xl md:text-3xl font-bold mb-2 font-poppins">95%</div>
                <div className="text-white/80 text-xs md:text-sm font-poppins">Placement</div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <TrendingUp className="mx-auto mb-4 text-white" size={32} />
                <div className="text-2xl md:text-3xl font-bold mb-2 font-poppins">300%</div>
                <div className="text-white/80 text-xs md:text-sm font-poppins">Avg Hike</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group relative bg-white/60 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => handleCourseClick(course)}
            >
              {/* Glowing Effect */}
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              
              {course.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Most Popular
                </div>
              )}
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(course.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 text-yellow-400 fill-current">
                          ⭐
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700 ml-2">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors font-poppins">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow font-poppins">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span className="font-poppins">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span className="font-poppins">{course.students}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Key Features</h4>
                  <ul className="space-y-2">
                    {course.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(course.color)} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="font-poppins">{feature}</span>
                      </li>
                    ))}
                    {course.features.length > 3 && (
                      <li className="text-sm text-gray-500 font-poppins">
                        +{course.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${getColorClasses(course.color)} text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2 group-hover:scale-105 font-poppins`}>
                  <span>View Details</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              Not Sure Which Course is Right for You?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-poppins">
              Book a free consultation with our career counselors to find the perfect program for your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg font-poppins">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg font-poppins">
                Download Course Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;