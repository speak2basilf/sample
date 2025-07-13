import React from 'react';
import { Shield, FileText, Users, Globe, Mail, Phone, Scale, BookOpen } from 'lucide-react';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Healthcare Training" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <Scale className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
              Terms & <span className="text-yellow-400">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto font-poppins">
              Please read these terms and conditions carefully before using CliniGlobal's services and educational programs.
            </p>
            <p className="text-sm text-white/80 font-poppins">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <FileText className="text-blue-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Introduction</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4 font-poppins">
            Welcome to CliniGlobal Research Institute Private Limited ("CliniGlobal," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our website, educational services, and programs. By accessing our services, you agree to be bound by these Terms.
          </p>
          <p className="text-gray-700 leading-relaxed font-poppins">
            If you disagree with any part of these terms, then you may not access our services.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Users className="text-green-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Acceptance of Terms</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              By enrolling in our courses, using our website, or accessing our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
            <p className="text-gray-700 leading-relaxed font-poppins">
              These Terms apply to all users, including students, prospective students, visitors, and any other users of our services.
            </p>
          </div>
        </div>

        {/* Educational Services */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="text-purple-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Educational Services</h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 font-poppins">Course Enrollment</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Students must meet eligibility criteria for their chosen program</li>
              <li>Enrollment is subject to availability and acceptance by CliniGlobal</li>
              <li>Course fees must be paid according to the agreed payment schedule</li>
              <li>Students are responsible for maintaining academic standards</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-900 font-poppins mt-6">Course Content and Materials</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>All course materials are proprietary to CliniGlobal</li>
              <li>Students may not reproduce, distribute, or share course content</li>
              <li>Access to online materials is provided for the duration of the course</li>
              <li>CliniGlobal reserves the right to update course content as needed</li>
            </ul>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Globe className="text-orange-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Payment Terms</h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 font-poppins">Fees and Payment</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Course fees are as published on our website or enrollment materials</li>
              <li>Payment schedules are agreed upon at the time of enrollment</li>
              <li>Late payment may result in suspension of access to course materials</li>
              <li>All fees are non-transferable between students</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-900 font-poppins mt-6">Refund Policy</h3>
            <p className="text-gray-700 font-poppins">
              Refunds are governed by our separate Refund Policy. Please refer to our Refund Policy page for detailed information about cancellations and refunds.
            </p>
          </div>
        </div>

        {/* Student Responsibilities */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Shield className="text-red-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Student Responsibilities</h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 font-poppins">Academic Conduct</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Maintain academic integrity and honesty in all coursework</li>
              <li>Attend classes and complete assignments as required</li>
              <li>Respect fellow students, faculty, and staff</li>
              <li>Follow all institutional policies and procedures</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-900 font-poppins mt-6">Technology Use</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Use technology resources responsibly and ethically</li>
              <li>Protect login credentials and not share account access</li>
              <li>Report technical issues promptly to support staff</li>
              <li>Comply with acceptable use policies for online platforms</li>
            </ul>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <FileText className="text-indigo-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Intellectual Property</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              All content, materials, and resources provided by CliniGlobal are protected by intellectual property laws. This includes but is not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Course curricula and educational materials</li>
              <li>Videos, presentations, and multimedia content</li>
              <li>Software, applications, and online platforms</li>
              <li>Trademarks, logos, and branding materials</li>
              <li>Assessment tools and examination materials</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-poppins">
              Students are granted limited, non-exclusive access to these materials solely for educational purposes during their enrollment period.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Shield className="text-yellow-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Limitation of Liability</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              CliniGlobal provides educational services to the best of our ability. However, we cannot guarantee specific outcomes, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Job placement or employment opportunities</li>
              <li>Certification exam success rates</li>
              <li>Specific salary increases or career advancement</li>
              <li>Compatibility with all technical systems</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-poppins">
              Our liability is limited to the fees paid for the specific course or service in question.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Users className="text-red-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Termination</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              CliniGlobal reserves the right to terminate or suspend access to our services for any student who:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Violates these Terms and Conditions</li>
              <li>Engages in academic dishonesty or misconduct</li>
              <li>Fails to meet payment obligations</li>
              <li>Disrupts the learning environment for other students</li>
              <li>Misuses our technology resources or platforms</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-poppins">
              Students may also terminate their enrollment subject to our refund policy and any applicable notice requirements.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Globe className="text-purple-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Changes to Terms</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              CliniGlobal reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website.
            </p>
            <p className="text-gray-700 leading-relaxed font-poppins">
              Continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>
            <p className="text-gray-700 leading-relaxed font-poppins">
              We encourage students to review these Terms periodically to stay informed of any updates.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">Contact Us</h2>
            <p className="text-white/90 font-poppins">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-white" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Email</p>
                  <p className="text-white/90 font-poppins">legal@cliniglobal.com</p>
                  <p className="text-white/90 font-poppins">info@cliniglobal.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-white" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Phone</p>
                  <p className="text-white/90 font-poppins">+919052992967</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Globe className="text-white mt-1" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Address</p>
                  <p className="text-white/90 text-sm font-poppins">
                    CliniGlobal Research Institute Private Limited<br/>
                    125, 7th Cross Road, Off Bannerghatta Road<br/>
                    Dollar Layout, BTM 2nd Stage<br/>
                    Bangalore, Karnataka 560068
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-white/20">
            <p className="text-white/80 text-sm font-poppins">
              These Terms and Conditions are effective as of January 15, 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;