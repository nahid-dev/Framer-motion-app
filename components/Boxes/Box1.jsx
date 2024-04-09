"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="container">
      <motion.div
        className="w-40 h-40 bg-blue-600 rounded cursor-pointer"
        animate={{
            x: isAnimating? "1000px" : "0px",
            opacity: isAnimating? 1 : 0.2,
            rotate: isAnimating?360: 0
        }}
        initial={{
          opacity: 0.2,
              }}
              transition={{
                  type: "tween",
                  duration: 1,
              }}
              onClick={()=>setIsAnimating((prev)=>!prev)}
      ></motion.div>
    </div>
  );
};

export default Box1;
