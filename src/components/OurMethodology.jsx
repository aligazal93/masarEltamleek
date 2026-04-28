import Image from 'next/image'
import React from 'react'

export default function OurMethodology() {
  return (
        <div className="bg-[rgba(251,253,255,0.1)] rounded-[12px] p-4 mb-4">
          <Image
            src="/images/s-4.png"
            width={50}
            height={50}
            alt="w1"
            className="mx-auto block mb-3"
          />
          <h1 className="text-white text-center font-[500] text-custom16 md:text-custom18 my-1">
            التحليل أولاً  
          </h1>
          <p className="w-full md:w-[70%] block mx-auto text-custom12 md:text-custom16 text-center text-[#BCD4FF] leading-relaxed">
           نفهم وضع العميل بشكل كامل قبل أي اقتراح.
          </p>
        </div>
  )
}
