"use client";
import React from "react";
import { motion } from "framer-motion";

const boxItems = [1, 2, 3];

const Box3 = () => {
    const boxVariant = {
        hidden: {
            x: '-100vw'
        },
        visible: {
            x: 0
        }
    }
  return (
    <div className="container">
          <motion.div className="w-40 h-40 bg-blue-600 rounded cursor-pointer space-y-3 flex flex-col justify-center items-center"
              variants={boxVariant}
              animate="visible"
              initial="hidden"
          >
        {boxItems.map((box, index) => (
          <div key={index} className="bg-white w-10 h-10 rounded-sm"></div>
        ))}
      </motion.div>
    </div>
  );
};

export default Box3;
