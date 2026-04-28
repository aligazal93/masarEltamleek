"use client";

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
