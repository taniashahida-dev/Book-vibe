import React from 'react';
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
   return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-emerald-100 px-4">
      <div className="text-center max-w-xl">
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-9xl font-extrabold text-green-500"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold mt-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mt-2"
        >
          Oops! The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition"
          >
            ⬅ Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;