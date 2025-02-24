import React, { useEffect, useState } from "react";
import "../LandingPage.css";
import { motion } from "framer-motion";

const LandingPage = ({ onNext }) => {
  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);
  }, []);

  return (
    <motion.div
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="landing-container">
        {/* Left Side: Image */}
        <motion.div
          className="image-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src="https://repository-images.githubusercontent.com/759825266/f391c391-61e4-4e42-86e3-4a74dd27133e" alt="AI Gemi" className="ai-image" />
        </motion.div>

        {/* Right Side: Description */}
        <motion.div
          className="content"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Welcome to Code Reviewer
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Your AI-powered assistant for code review and improvement. Enhance your coding experience with automated insights and best practices.
          </motion.p>
          <motion.div // Changed to a div
            className="name-div" // Added a class for styling
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }} // Added a delay
          >
            By Abhinav Sharma
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;