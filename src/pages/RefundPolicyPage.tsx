import React from 'react';
import { RefreshCw, DollarSign, Clock, FileText, Mail, Phone, Globe, CreditCard } from 'lucide-react';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Healthcare Training Students" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/60 to-indigo-600/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <RefreshCw className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">
              Refund <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto font-poppins">
              Our commitment to student satisfaction includes a fair and transparent refund policy for all CliniGlobal programs.
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
            At CliniGlobal Research Institute Private Limited, we are committed to providing high-quality healthcare education and training. This Refund Policy outlines the terms and conditions under which refunds may be requested and processed.
          </p>
          <p className="text-gray-700 leading-relaxed font-poppins">
            Please read this policy carefully before enrolling in any of our programs.
          </p>
        </div>

        {/* Refund Eligibility */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <DollarSign className="text-green-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Refund Eligibility</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Full Refund (100%)</h3>
              <p className="text-gray-700 mb-3 font-poppins">You are eligible for a full refund if:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>Cancellation is made within 7 days of enrollment and before the course start date</li>
                <li>CliniGlobal cancels the course due to insufficient enrollment</li>
                <li>Technical issues prevent access to online course materials for more than 7 consecutive days</li>
                <li>Course content significantly differs from what was advertised</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Partial Refund (50%)</h3>
              <p className="text-gray-700 mb-3 font-poppins">You may be eligible for a partial refund if:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>Cancellation is made within 14 days of course commencement</li>
                <li>You have attended less than 25% of the total course duration</li>
                <li>Medical emergency prevents course completion (documentation required)</li>
                <li>Job relocation to a location where course attendance is not feasible</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">No Refund</h3>
              <p className="text-gray-700 mb-3 font-poppins">Refunds will not be provided if:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>More than 25% of the course has been completed</li>
                <li>Course materials have been downloaded or accessed extensively</li>
                <li>Cancellation is due to personal reasons not covered above</li>
                <li>Student violates terms and conditions leading to course termination</li>
                <li>Certification has been issued</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Refund Process */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Clock className="text-purple-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Refund Process</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">How to Request a Refund</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>Submit a written refund request to refunds@cliniglobal.com</li>
                <li>Include your full name, enrollment ID, course name, and reason for refund</li>
                <li>Provide supporting documentation if applicable (medical certificates, etc.)</li>
                <li>Allow 5-7 business days for initial review and response</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Processing Timeline</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li><strong>Review Period:</strong> 5-7 business days from receipt of request</li>
                <li><strong>Approval Notification:</strong> 2-3 business days after review</li>
                <li><strong>Refund Processing:</strong> 7-14 business days after approval</li>
                <li><strong>Bank Transfer:</strong> Additional 3-5 business days depending on your bank</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Required Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
                <li>Student enrollment ID or registration number</li>
                <li>Original payment receipt or transaction ID</li>
                <li>Bank account details for refund processing</li>
                <li>Valid reason for refund request with supporting documents</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Method Specific Refunds */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <CreditCard className="text-orange-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Payment Method Specific Refunds</h2>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Credit/Debit Card</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins text-sm">
                  <li>Refunded to the original card used for payment</li>
                  <li>Processing time: 5-10 business days</li>
                  <li>May appear as a credit on your statement</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Bank Transfer</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins text-sm">
                  <li>Direct transfer to your bank account</li>
                  <li>Processing time: 3-7 business days</li>
                  <li>Requires valid bank account details</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Online Payment Gateways</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins text-sm">
                  <li>Refunded through the original payment method</li>
                  <li>Processing time varies by provider</li>
                  <li>May incur minimal processing fees</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 font-poppins">Cash/Cheque Payments</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins text-sm">
                  <li>Refunded via bank transfer or cheque</li>
                  <li>Requires additional verification</li>
                  <li>Processing time: 10-15 business days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Special Circumstances */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <FileText className="text-red-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Special Circumstances</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Medical Emergency</h3>
              <p className="text-gray-700 mb-2 font-poppins">
                In case of medical emergencies that prevent course completion:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins">
                <li>Medical certificate from a registered practitioner required</li>
                <li>Partial refund may be considered based on course completion percentage</li>
                <li>Option to defer enrollment to the next available batch</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Technical Issues</h3>
              <p className="text-gray-700 mb-2 font-poppins">
                For technical problems affecting course access:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins">
                <li>Report issues immediately to technical support</li>
                <li>Allow 48-72 hours for resolution attempts</li>
                <li>Refund considered if issues persist beyond 7 days</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">Course Cancellation by CliniGlobal</h3>
              <p className="text-gray-700 mb-2 font-poppins">
                If CliniGlobal cancels a course:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 font-poppins">
                <li>Full refund provided within 14 business days</li>
                <li>Option to transfer to alternative course at no extra cost</li>
                <li>Priority enrollment in the next available batch</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Non-Refundable Items */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center mb-6">
            <Globe className="text-indigo-600 mr-4" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Non-Refundable Items</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-poppins">
              The following items and services are non-refundable under any circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 font-poppins">
              <li>Application and registration fees</li>
              <li>Examination and certification fees</li>
              <li>Physical study materials once shipped</li>
              <li>One-on-one mentoring sessions already conducted</li>
              <li>Workshop or seminar attendance fees</li>
              <li>Third-party certification costs</li>
              <li>Payment processing fees and bank charges</li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 font-poppins">Contact Us for Refunds</h2>
            <p className="text-white/90 font-poppins">
              For refund requests or questions about this policy, please contact us:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-white" size={20} />
                <div>
                  <p className="font-semibold font-poppins">Email</p>
                  <p className="text-white/90 font-poppins">refunds@cliniglobal.com</p>
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
              This Refund Policy is effective as of January 15, 2024 and may be updated from time to time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;