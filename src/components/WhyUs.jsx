import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <div className="bg-[rgba(251,253,255,0.1)] border border-borderColor rounded-[12px] p-4 mb-4">
      <Image
        src="/images/w1.png"
        width={50}
        height={50}
        alt="w1"
        className="mx-auto block mb-3"
      />
      <h1 className="text-darkGrey text-center font-[500] text-custom18 my-1">
        ثقة وشفافية
      </h1>
      <p className="w-full md:w-[70%] block mx-auto text-custom16 text-center text-blackGrey leading-relaxed">
        نتعامل بأعلى معايير الشفافية والمصداقية.
      </p>
    </div>
  );
}
