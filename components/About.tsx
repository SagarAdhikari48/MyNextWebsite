"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-full h-96 gradient-primary rounded-2xl shadow-2xl"></div>
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-7xl font-bold mb-2">7+</div>
                    <div className="text-2xl font-semibold">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Software Developer with <span className="font-bold text-purple-600 dark:text-purple-400">7 years of experience</span> in designing, 
                developing, and testing various applications. Proficient in front-end and back-end web development.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in building exceptional digital experiences with modern frameworks like 
                <span className="font-semibold text-gray-800 dark:text-gray-200"> Angular, React, Vue.js, Next.js</span>, and 
                <span className="font-semibold text-gray-800 dark:text-gray-200"> ASP.NET Core</span>. My passion lies in creating 
                scalable, user-friendly applications that solve real-world problems.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiMapPin className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <span>Tarakeshwar, Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiPhone className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <span>+977 9843650962</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiMail className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <span>sagradhkr48@gmail.com</span>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Education</h3>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Computer Engineering</h4>
                  <p className="text-gray-600 dark:text-gray-400">Advanced College of Engineering & Management</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">2014 - 2018</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
