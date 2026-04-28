import React from "react";
import Container from "./layout/Container";
import ServiceCard from "./ServiceCard";

export default function AllServices() {
  return (
    <section className="bg-primary w-full py-[100px]">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="text-center pt-[50px]">
              <h1 className="text-white font-[500] text-custom26 my-2">
                خدمات الافراد
              </h1>
              <h3 className="text-white font-[700] text-custom20 my-1 ">
                لماذا تختار مسار التميز للاستشارات المالية؟{" "}
              </h3>
            </div>
          </div>
          <div className="col-span-6 md:col-span-6 lg:col-span-4">
            <ServiceCard />
          </div>
          <div className="col-span-6 md:col-span-6 lg:col-span-4">
            <ServiceCard />
          </div>
          <div className="col-span-6 md:col-span-6 lg:col-span-4">
            <ServiceCard />
          </div>

          <div className="col-span-12">
            <div className="text-center pt-[50px]">
              <h1 className="text-white font-[500] text-custom26 my-2">
                خدمات الشركات
              </h1>
              <h3 className="text-white font-[700] text-custom20 my-1 ">
                حلول مالية احترافية تدعم نمو أعمالك وتساعدك على اتخاذ قرارات
                استثمارية مدروسة.
              </h3>
            </div>
          </div>
          <div className="col-span-6 md:col-span-6 lg:col-span-4">
            <ServiceCard />
          </div>
          <div className="col-span-6 md:col-span-6 lg:col-span-4">
            <ServiceCard />
          </div>
          <div className="col-span-6 md:col-span-6 lg:col-span-4">
            <ServiceCard />
          </div>

          {/* 
                <div className="col-span-6 md:col-span-6 lg:col-span-3">
                  <WhyUs />
                </div>
                <div className="col-span-6 md:col-span-6 lg:col-span-3">
                  <WhyUs />
                </div>
                <div className="col-span-6 md:col-span-6 lg:col-span-3">
                  <WhyUs />
                </div>
    
                <div className="col-span-12">
                  <div className="text-center py-8">
                    <h1 className="text-white font-[500] text-custom18 my-2">
                      منهجيتنا
                    </h1>
                    <h3 className="text-white font-[700] text-custom24 my-2">
                      ثلاث خطوات للوصول إلى أهدافك
                    </h3>
                    <p className="text-white font-[500] text-custom14 md:text-custom18 my-4">
                      في مسار التمليك القابضة لا نعتمد على الحلول الجاهزة، بل نعمل
                      وفق منهج احترافي مبني على التحليل والدقة والنتائج.
                    </p>
                  </div>
                </div>
    
                <div className="col-span-6 md:col-span-4">
                  <OurMethodology />
                </div>
                <div className="col-span-6 md:col-span-4">
                  <OurMethodology />
                </div>
                <div className="col-span-6 md:col-span-4">
                  <OurMethodology />
                </div>
     */}
        </div>
      </Container>
    </section>
  );
}
