"use client";
import React from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div className="container">
      <motion.div
              className="w-40 h-40 bg-blue-600 rounded cursor-pointer"
              whileHover={{
                  scale: 1.2,
              }}
              whileTap={{
                  scale: 0.9
              }}
              drag
              dragConstraints={{
                  top: 20,
                  left: 20,
                  right: 20,
                  bottom: 20,
              }}
        
      ></motion.div>
    </div>
  );
};

export default Box2;
