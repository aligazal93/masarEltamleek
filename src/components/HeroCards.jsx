"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroCards() {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex bg-gradient-to-r from-white to-[#EEF7FF] p-4 rounded-xl flex-1 items-center justify-between shadow-sm hover:shadow-lg"
    >
      <div>
        <h2 className="font-[700] text-primary text-custom20 md:text-[30px] lg:text-[40px]">
          الاستشارات المالية الشخصية
        </h2>

        <ul className="my-2">
          <li className="flex items-center my-2 text-grey text-custom14 font-bold gap-2">
            <Image src="/images/cirle.png" width={14} height={14} alt="✔" />
            معالجة الديون
          </li>
          <li className="flex items-center my-2 text-grey text-custom14 font-bold gap-2">
            <Image src="/images/cirle.png" width={14} height={14} alt="✔" />
            استشارات مالية شخصية
          </li>
          <li className="flex items-center my-2 text-grey text-custom14 font-bold gap-2">
            <Image src="/images/cirle.png" width={14} height={14} alt="✔" />
            التخطيط المالي الشخصي
          </li>
        </ul>

        <button className="bg-secondary px-4 py-2 w-[180px] text-custom16 rounded-lg text-white mt-2 hover:bg-primary transition">
          تفاصيل أكثر
        </button>
      </div>

      <motion.div variants={imageVariants} initial="initial" animate="animate">
        <Image
          src="/images/p-1.png"
          width={250}
          className="object-cover"
          height={250}
          alt="استشارات شخصية"
        />
      </motion.div>
    </motion.div>
  );
}