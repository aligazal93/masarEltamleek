import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function CompanyServiceCard() {
  return (
    <div className="border border-borderColor my-1 md:my-6 rounded-[12px] text-center p-6">
      <Image
        src="/images/s-2.png"
        alt="شريكك المالي"
        width={70}
        height={70}
        className="w-[70px] my-4 h-[70px] block mx-auto "
      />
      <h1 className="font-[700] text-custom20 text-center text-darkGrey">
        دراسة الجدوى
      </h1>
      <p className="text-custom16 line-clamp-2 mt-[10px] leading-relaxed font-[500] text-grey">
        نقيّم جدوى مشروعك من جميع الجوانب لتحديد فرص النجاح وتقليل المخاطر قبل
        التنفيذ.
      </p>
      <div className="flex items-center mt-[12px] gap-4 justify-between">
        <Link
          href=""
          className="flex-2 border border-borderColor w-full text-darkGrey text-custom14 px-4 py-2 rounded-[8px]"
        >
          تفاصيل اكتر
        </Link>
        <Link
          href=""
          className="flex-2 flex items-center justify-center gap-2 border border-borderColor w-full text-secondary font-[700] text-custom14 px-4 py-2 rounded-[8px]"
        >
          احصل على الخدمة <FaLongArrowAltLeft />
        </Link>
      </div>
    </div>
  );
}
