"use client";

<<<<<<< HEAD
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

import PersonalServiceCard from "@/components/PersonalServiceCard";
import CompanyServiceCard from "@/components/CompanyServiceCard";
import AchievmentsNumber from "@/components/AchievmentsNumber";
import WhyUs from "@/components/WhyUs";
import OurMethodology from "@/components/OurMethodology";
import TestimonialsSection from "@/components/TestimonialsSection";
import Ready from "@/components/Ready";
import Footer from "@/components/layout/Footer";
import HowWorking from "@/components/HowWorking";
import AllServices from "@/components/AllServices";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container>
        <section className="bg-white py-10 mb-[50px]">
          <div className="grid grid-cols-12 gap-4">
            <HowWorking />
            {/* 

            {/* <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <AchievmentsNumber />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <AchievmentsNumber />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <AchievmentsNumber />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <AchievmentsNumber />
            </div> */}
          </div>
        </section>
      </Container>
      <AllServices />

      <Container>
        <section className="bg-white py-[100px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="text-center">
                <h1 className="text-secondary font-[500] text-custom18 my-2">
                  لماذا نحن
                </h1>
                <h3 className="text-blackGrey  font-[700] text-custom24 my-2">
                  لماذا تختار مسار التميز للاستشارات المالية؟{" "}
                </h3>
                <p className="text-blackGrey font-[500] text-custom18 my-4">
                  نقدم خدمات استثنائية مبنية على ركائز أساسية تضمن لك تجربة
                  احترافية ونتائج موثوقة.
                </p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <WhyUs />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <WhyUs />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <WhyUs />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <WhyUs />
            </div>

            <br />

            <div className="col-span-12">
              <div className="text-center">
                <h1 className="text-secondary font-[500] text-custom18 my-2">
                  إنجازاتنا في أرقام
                </h1>
                <h3 className="text-blackGrey  font-[700] text-custom24 my-2">
                  نفتخر بالإنجازات الكبيرة التي حققناها
                </h3>
                <p className="text-blackGrey font-[500] text-custom18 my-4">
                  والتي تعكس التزامنا بتقديم أفضل الخدمات لجميع المستخدمين.
                </p>
              </div>
            </div>

            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <AchievmentsNumber />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <AchievmentsNumber />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <AchievmentsNumber />
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <AchievmentsNumber />
            </div>
          </div>
        </section>
      </Container>
      <TestimonialsSection />
    </>
  );
}
=======
import HeroCards from "@/components/HeroCards";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function Home() {
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
          className="mx-auto mt-4 text-[16px] leading-[35px] w-full md:w-[80%] lg:w-[70%] text-highlightColor"
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
        className="relative z-10 my-20 w-full max-w-6xl px-4 flex flex-col lg:flex-row gap-4"
      >
        <HeroCards />
        <HeroCards />
      </motion.div>
    </section>
  );
}
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
