'use client';

import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaLightbulb, FaUsers, FaBalanceScale } from 'react-icons/fa';

export default function About() {
  return (
    <Layout>
      <main className="flex-1 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Rekura</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Empowering Human Potential Through AI
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            {/* Header Banner */}
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white text-center px-4">Our Mission</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-12">
              {/* Mission Statement */}
              <div className="mb-12">
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  At Rekura, we believe that artificial intelligence should augment human capabilities, not replace them. 
                  Our mission is to develop AI solutions that enhance productivity, foster creativity, and support 
                  individuals in achieving their goals.
                </p>
              </div>

              {/* Founder */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Founder</h2>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                  <div className="w-32 h-32 rounded-full border-4 border-blue-100 dark:border-blue-900 overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image 
                      src="/IMG_9346.jpeg" 
                      alt="Pradeep Banavara" 
                      width={128} 
                      height={128} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pradeep Banavara</h3>
                    <p className="text-blue-600 dark:text-blue-400">Founder & CEO</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      A seasoned technology executive with over 25 years of experience in startups and Fortune 500 companies.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Pradeep&apos;s extensive background includes leadership roles at Walmart, where he led e-commerce revenues 
                  exceeding $3 billion, and technical positions at Microsoft and other leading organizations.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  His vision for Rekura is rooted in his passion for leveraging AI to solve real-world problems. 
                  His work focuses on designing lightweight asynchronous AI agents and exploring the intersection 
                  of technology and human behavior.
                </p>
              </div>

              {/* Our Approach */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Approach</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {`Rekura's approach to AI is grounded in the following principles:`}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4">
                      <FaUsers className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Human-Centric Design</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We prioritize user experience, ensuring our AI solutions are intuitive and accessible.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mb-4">
                      <FaLightbulb className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Scalability</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our technologies are built to scale, accommodating the growing needs of users and organizations.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                      <FaBalanceScale className="w-6 h-6 text-green-600 dark:text-green-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ethical AI</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We are committed to developing AI responsibly, with a focus on transparency and fairness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Join Us */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join Us</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We are a team of innovators, engineers, and thinkers dedicated to pushing the boundaries of what&apos;s 
                  possible with AI. If you&apos;re passionate about creating technology that makes a difference, we&apos;d love to hear from you.
                </p>
                <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Get in Touch
                </a>
              </div>

              {/* Skills */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing', 
                    'Computer Vision', 'Robotics', 'E-commerce', 'Enterprise Solutions', 
                    'Cloud Architecture', 'Scalable Systems', 'Ethical AI'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/pbanavara/" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/pbanavara" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/pbanavara" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href="mailto:contact@rekura.ai" 
                     className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400">
                    <FaEnvelope className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
