import React from "react";
import Container from "./layout/Container";
import Link from "next/link";

export default function Ready() {
  return (
    <section className="mt-[100px] w-full md:w-[90%] block mx-auto z-[999] relative">
      <Container>
        <div className="bg-secondary text-center rounded-[12px]  py-10">
          <h1 className="text-custom20 md:text-custom32 font-[700] text-white">
            جاهز تحسن وضعك المالي أو العقاري؟{" "}
          </h1>
          <p className="text-custom14 md:text-custom18 py-6 font-[700] text-white">
            احجز استشارتك المجانية اليوم ودعنا نساعدك على اتخاذ قرارات مالية
            أكثر ذكاءً.
          </p>
          <Link
            href=""
            className="bg-white w-[250px] text-custom14 font-[700] rounded-[8px] p-3 text-center block mx-auto text-darkGrey"
          >
            اطلب استشارتك المالية
          </Link>
        </div>
      </Container>
    </section>
  );
}
