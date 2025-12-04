"use client";

import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f3f2ef] dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-normal">
              Hi, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-semibold mb-4 text-gray-900 dark:text-white">
              Sagar Adhikari
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-normal text-[#0a66c2] dark:text-[#70b5f9] mb-6 h-16"
          >
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "Frontend Specialist",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-normal"
          >
            7 years of experience crafting exceptional digital experiences with modern web technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-3 mb-12"
          >
            <a
              href="https://linkedin.com/in/sagaradhikari48"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full linkedin-card hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="mailto:sagradhkr48@gmail.com"
              className="p-3 rounded-full linkedin-card hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all"
            >
              <FiMail size={22} />
            </a>
            <a
              href="https://www.sagaradhikari.info.np"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full linkedin-card hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all"
            >
              <FiExternalLink size={22} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-3"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-[#0a66c2] dark:bg-[#70b5f9] text-white rounded-full font-semibold hover:bg-[#004182] dark:hover:bg-[#5a9fd8] transition-all"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 linkedin-card text-[#0a66c2] dark:text-[#70b5f9] rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
