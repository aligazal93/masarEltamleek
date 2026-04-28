import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function ServiceCard() {
  return (
    <div className="border border-borderColor my-1 rounded-[12px] text-center p-6">
      <Image
        src="/images/s-7.png"
        alt="شريكك المالي"
        width={70}
        height={70}
        className="w-[70px] duration-150 hover:transform hover:scale-110 my-4 h-[70px] block mx-auto "
      />
      <h1 className="font-[700] line-clamp-2 text-custom18 text-center text-white">
        معالجة الديون
      </h1>
      <p className="text-custom14 line-clamp-2 mt-[10px] leading-relaxed font-[500] text-white">
        نساعدك على إعادة تنظيم التزاماتك ووضع خطة سداد تقلل الضغط الشهري وتحسن
        استقرارك المالي.
      </p>
      <div className="flex items-center mt-[15px] gap-4 justify-between">
        <Link
          href=""
          className="flex-2 border duration-300 hover:border-secondary hover:bg-secondary border-borderColor w-full text-white text-custom14 px-4 py-2 rounded-[8px]"
        >
          تفاصيل اكتر
        </Link>
        <Link
          href=""
          className="flex-2 flex items-center justify-center gap-2 border duration-300 hover:border-secondary hover:bg-secondary border-borderColor w-full text-white font-[700] text-custom14 px-4 py-2 rounded-[8px]"
        >
          احصل على الخدمة 
        </Link>
      </div>
    </div>
  );
}
