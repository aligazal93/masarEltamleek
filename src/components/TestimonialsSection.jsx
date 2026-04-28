import React from "react";
import Container from "./layout/Container";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsSection() {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="text-center py-8">
              <h1 className="text-secondary font-[500] text-custom18 my-2">
                آراء عملائنا
              </h1>
              <h3 className="text-darkGrey font-[700] text-custom24 my-2">
                ماذا يقول عنا عملاؤنا
              </h3>
              <p className="text-grey font-[500] text-custom18 my-4">
                نفخر بثقة عملائنا، وها هي بعض شهاداتهم عن تجربتهم معنا.
              </p>
            </div>
          </div>

          <div className="col-span-12">
            <Swiper
              className="testimonials-swiper"
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 8000 }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 12 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              <SwiperSlide>
                <TestimonialsCard />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
