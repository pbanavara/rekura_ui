'use client';

import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);

        // Reset form after success
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 5000);
      } else {
        // Handle error
        console.error('Error submitting form:', result.error);
        alert('There was an error submitting your request. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout>
      <main className="flex-1 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Get in touch with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        San Francisco Bay Area<br />
                        California, USA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FaEnvelope className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="mailto:pradeep@rekura.ai" className="hover:text-blue-500 transition-colors">
                          pradeep@rekura.ai
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FaPhone className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        +1 (510) 695-5628 
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FaLinkedin className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a 
                          href="https://www.linkedin.com/in/pbanavara/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 transition-colors"
                        >
                          linkedin.com/in/pbanavara
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
                
                {submitSuccess ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                    <p className="text-green-800 dark:text-green-200">
                      {`Thank you for your message! We'll get back to you soon.`}
                    </p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Career">Career Information</option>
                      <option value="Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 text-white font-medium rounded-lg transition-colors ${
                        isSubmitting 
                          ? 'bg-blue-400 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Map or additional information could go here */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Our Location</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Rekura is proud to be based in the San Francisco Bay Area, a global hub for technology innovation and AI research. 
              Our location puts us at the center of the tech ecosystem, allowing us to collaborate with leading minds in artificial intelligence and robotics.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              While we&apos;re headquartered in the Bay Area, our team works with clients and partners worldwide. We&apos;re always open to 
              virtual meetings and are happy to discuss how our AI solutions can help your organization, regardless of your location.
            </p>
            
            {/* Placeholder for a map */}
            <div className="mt-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Map of San Francisco Bay Area</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
