import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaLongArrowAltLeft,
  FaSnapchatGhost,
  FaTwitter,
  FaTwitterSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "./Container";
export default function Footer({ className = "pt-[50px] mt-[-100px]" }) {    
  return (
    <section className={`bg-primary ${className} block`}>
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12  md:col-span-6 lg:col-span-3">
            <h1 className="border-b pb-2 text-white/80 mb-[14px] border-[white]/10">
              روابط مهمة
            </h1>
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-white text-custom16 my-2 font-[700] block"
                >
                  {" "}
                  الرئيسية{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  href="/"
                  className="text-white text-custom16 my-2 font-[700] block"
                >
                  {" "}
                  من نحن{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  href="/"
                  className="text-white text-custom16 my-2 font-[700] block"
                >
                  {" "}
                  المدونة{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  href="/"
                  className="text-white text-custom16 my-2 font-[700] block"
                >
                  {" "}
                  تسجيل الدخول{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  href="/"
                  className="text-white text-custom16 my-2 font-[700] block"
                >
                  {" "}
                  تواصل معنا{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-span-12  md:col-span-6 lg:col-span-3">
            <h1 className="border-b pb-2 text-white/80 mb-[14px] border-[white]/10">
              خدماتنا
            </h1>
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-white text-custom16 my-2 font-[700] block"
                >
                  الاستشارات والحلول المالية للأفراد
                </Link>{" "}
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white text-custom16 my-2 font-[700] block"
                >
                  الاستشارات المالية للشركات والمؤسسات
                </Link>{" "}
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white text-custom16 my-2 font-[700] block"
                >
                  التمويل والحلول العقارية
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-span-12  md:col-span-6 lg:col-span-3">
            <h1 className="border-b pb-2 text-white/80 mb-[14px] border-[white]/10">
              تابعنا على
            </h1>
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-white flex items-center gap-2 text-custom14 my-2 font-[700]"
                >
                  <FaWhatsapp className="text-custom20" /> 920033034
                </Link>{" "}
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white flex items-center gap-2 text-custom14 my-2 font-[700]"
                >
                  <FaEnvelope className="text-custom20" /> info@gmail.com
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-span-12  md:col-span-6 lg:col-span-3">
            <h1 className="border-b pb-2 text-white/80 mb-[14px] border-[white]/10">
              تابعنا على
            </h1>
            <ul className="flex items-center gap-4 ">
              <li className="bg-[rgba(251,253,255,0.1)] text-center justify-center flex items-center w-[40px] h-[40px] rounded-[12px]">
                <Link href="/">
                  <FaWhatsapp className="text-custom22 text-white text-center" />
                </Link>
              </li>
              <li className="bg-[rgba(251,253,255,0.1)] text-center justify-center flex items-center w-[40px] h-[40px] rounded-[12px]">
                <Link href="/">
                  <FaSnapchatGhost className="text-custom22 text-white text-center" />
                </Link>
              </li>
              <li className="bg-[rgba(251,253,255,0.1)] text-center justify-center flex items-center w-[40px] h-[40px] rounded-[12px]">
                <Link href="/">
                  <FaInstagram className="text-custom22 text-white text-center" />
                </Link>
              </li>
              <li className="bg-[rgba(251,253,255,0.1)] text-center justify-center flex items-center w-[40px] h-[40px] rounded-[12px]">
                <Link href="/">
                  <FaXTwitter className="text-custom22 text-white text-center" />
                </Link>
              </li>
              <li className="bg-[rgba(251,253,255,0.1)] text-center justify-center flex items-center w-[40px] h-[40px] rounded-[12px]">
                <Link href="/">
                  <FaFacebookF className="text-custom22 text-white text-center" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12">
            <hr className="mt-2" />
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-white text-center md:text-start text-custom14 mb-0">
              © جميع الحقوق محفوظة – مسار التمليك القابضة{" "}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-center text-white font-[700] text-custom14 mb-2 md:mb-0">
              تطوير شركة مسار الرقمية
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <ul className="hidden md:flex justify-end items-center gap-4 mb-4">
              <li className="text-white text-custom14 border-l border-[text-white] pl-2">
                <Link href=""> سياسة الخصوصية </Link>
              </li>
              <li className="text-white text-custom14">
                {" "}
                <Link href=""> الشروط و الأحكام </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
