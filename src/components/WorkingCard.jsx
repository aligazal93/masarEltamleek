import Image from "next/image";
import React from "react";

export default function WorkingCard() {
  return (
    <div className="border border-borderColor my-1 md:my-6 rounded-[12px] text-center p-6">
      <Image
        src="/images/s-4.png"
        alt="شريكك المالي"
        width={50}
        height={50}
        className="w-[50px] my-4 h-[50px] block mx-auto"
      />
      <h1 className="font-[700] text-custom20 text-center text-darkGrey">
        التحليل أولاً
      </h1>
      <p className="text-custom16 line-clamp-2 mt-[10px] leading-relaxed font-[500] text-grey">
        نفهم وضع العميل بشكل كامل قبل أي اقتراح.
      </p>
    </div>
  );
}
