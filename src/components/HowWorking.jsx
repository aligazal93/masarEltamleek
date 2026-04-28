import React from "react";
import ServiceCard from "./ServiceCard";
import WorkingCard from "./WorkingCard";

export default function HowWorking() {
  return (
    <>
      <div className="col-span-12">
        <h1 className="text-custom16 text-center text-secondary font-[700] mt-[50px]">
            كيف نعمل
        </h1>
        <h3 className="text-custom24 text-center text-darkGray font-[700] my-[14px]">
          ثلاث خطوات للوصول إلى أهدافك
        </h3>
        <p className="text-grey text-center font-[500] text-custom16">
          في مسار التمليك القابضة لا نعتمد على الحلول الجاهزة، بل نعمل وفق منهج
          احترافي مبني على التحليل والدقة والنتائج.
        </p>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <WorkingCard />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <WorkingCard />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <WorkingCard />
      </div>
    </>
  );
}
