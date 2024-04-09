"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
const classnames = {
  boxBtn: "bg-black text-white px-4 py-2 rounded mr-5 my-5",
};

const Box4 = () => {
  const control = useAnimation();

  return (
    <div className="container">
      <div>
        <button
          onClick={() =>
            control.start({
              x: 1000,
              transition: { duration: 2 },
            })
          }
          className={classnames.boxBtn}
        >
          Move right
        </button>
        <button
          onClick={() =>
            control.start({
              x: 0,
              transition: { duration: 2 },
            })
          }
          className={classnames.boxBtn}
        >
          Move left
        </button>
        <button className={classnames.boxBtn}>Circle</button>
        <button className={classnames.boxBtn}>Square</button>
        <button className={classnames.boxBtn}>Stop</button>
      </div>
      <motion.div
        className="w-40 h-40 bg-blue-600 rounded cursor-pointer"
        animate={control}
      ></motion.div>
    </div>
  );
};

export default Box4;
