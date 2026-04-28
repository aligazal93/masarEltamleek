import React from "react";
import { motion } from "framer-motion";
import HeroCards from "@/components/HeroCards";
import Image from "next/image";
import Link from "next/link";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};
export default function HeroSection() {
  return (
    <section className="mt-[-200px] relative w-full min-h-[700px] flex flex-col justify-center items-center overflow-hidden">
      <Image
        src="/images/introBk.png"
        alt="خلفية الاستشارات المالية"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative pt-[300px] z-10 text-center px-4 max-w-4xl">
        <motion.span
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center mb-4 bg-[rgba(57,185,147,0.3)] p-3 w-[220px] text-white text-sm font-bold justify-center gap-2 mx-auto rounded-full"
        >
          <Image
            width={18}
            height={18}
            src="/images/ic-1.png"
            alt="شريكك المالي"
          />
          شريكك المالي الموثوق
        </motion.span>

        <motion.h1
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-white text-[30px] md:text-[45px] lg:text-[54px] leading-[45px] md:leading-[55px] lg:leading-[80px] font-bold w-[80%] mx-auto"
        >
          نقودك نحو الاستقرار المالي والاستثمار الذكي مع{" "}
          <span className="text-secondary">فريقنا من الخبراء الماليين</span>
        </motion.h1>

        <motion.p
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-4 text-[16px] mb-6 leading-[35px] w-full md:w-[80%] lg:w-[70%] text-highlightColor"
        >
          نتمتع بخبرة واسعة في مجال الاستشارات المالية ونفخر بسجل حافل من النجاح
          في مساعدة العملاء على تحقيق أهدافهم المالية. و نقدم لكل عميل نهجًا
          مخصصًا ونأخذ بعين الاعتبار احتياجاته وظروفه الفردية. فنحن ملتزمون
          بتقديم أفضل خدمة ممكنة لعملائنا ونعمل باستمرار على تحسين خدماتنا..
        </motion.p>
      </div>

      <motion.div
        custom={0.8}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative z-10 mb-[50px] w-full justify-center max-w-6xl px-4 flex flex-col lg:flex-row gap-4"
      >
        <div className="flex items-center justify-center gap-6">
          <Link
            href=""
            className="bg-transparent border border-white font-[700] text-custom14 mx-auto w-[220px] text-white text-center py-3 rounded-[10px] duration-300 hover:bg-secondary hover:text-white hover:border-none"
          >
            اطلب استشارتك المالية
          </Link>
          <Link
            href=""
            className="bg-transparent border border-white font-[700] block text-custom14 mx-auto w-[220px] text-white text-center py-3 rounded-[10px] duration-300 hover:bg-secondary hover:text-white hover:border-none"
          >
            اكتشف خدماتنا
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
