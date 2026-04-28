import React from "react";

export default function TestimonialsCard() {
  const rating = 5;

  return (
    <div className="relative border border-[#F3F5F8] rounded-[12px] p-4 md:p-10 bg-white pt-[0px]">
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-yellow-400"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.857 1.548 8.264L12 18.896l-7.484 4.531 1.548-8.264L0 9.306l8.332-1.151z" />
          </svg>
        ))}
      </div>
      <p className="text-[#575F70] text-custom16 text-justify leading-relaxed  mb-[20px] block w-full">
        "تجربتي مع مسار التمليك كانت احترافية بكل المقاييس، ساعدوني في إعادة
        هيكلة محفظتي الاستثمارية وحققت نتائج رائعة."
      </p>
      <div className="flex items-ceenter gap-4">
        <div className="w-[50px] h-[50px] rounded-full bg-[#1D2939] flex items-center justify-center">
          <span className="text-white font-[700]"> ع</span>
        </div>
        <div>
          <h1 className="text-custom12 font-[700] text-darkGrey">
            {" "}
            عبدالله الغامدي{" "}
          </h1>
          <span className="text-custom12 font-[700] text-grey">
            {" "}
            رجل أعمال{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
