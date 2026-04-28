"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import Sidenav from "./Sidenav";
import HeaderActions from "./HeaderActions";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-[99] bg-white border border-borderColor rounded-[8px] mt-[30px] p-4">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-2 col-span-12">
            <div className="flex justify-between items-center">
              <Image
                src="/images/logo.png"
                alt="شركة مسار التمليك"
                width={220}
                height={100}
                className="object-contain"
                priority
              />
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="lg:hidden block"
                aria-label="فتح القائمة"
              >
                <FaBars size={30} className="text-primary" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-6">
            <nav>
<<<<<<< HEAD
              <ul className="hidden lg:flex items-center justify-center gap-8">
=======
              <ul className="hidden lg:flex items-center justify-center gap-4">
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
                <li>
                  <Link
                    href="/"
                    className="text-custom14 font-[700] text-blackGrey"
                  >
                    الرئيسية
                  </Link>
                </li>
<<<<<<< HEAD

=======
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
                <li>
                  <Link
                    href="/"
                    className="text-custom14 font-[700] text-blackGrey"
                  >
<<<<<<< HEAD
                    كيف نعمل
=======
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-custom14 font-[700] text-blackGrey"
                  >
                    المدونة
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    href="/consulting"
                    className="flex items-center gap-2 text-custom14 font-[700] text-blackGrey"
                  >
<<<<<<< HEAD
                    الخدمات
=======
                    الاستشارات المالية
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
                    <FaChevronDown className="text-[12px] text-grey transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  <div className="absolute top-[25px] right-[-60px] pt-6 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                    <div className="w-[280px] rounded-[4px] border border-[#E9EEF5] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-0">
                      <ul className="">
                        <li>
                          <Link
                            href="/"
                            className="block text-custom14 font-[500] text-darkGrey px-4 py-3 transition-all duration-300 hover:bg-[#F5FBFF]"
                          >
                            مثال علي نص
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/"
                            className="block text-custom14 font-[500] text-darkGrey  px-4 py-3 transition-all duration-300 hover:bg-[#F5FBFF]"
                          >
                            مثال علي نص
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/"
                            className="block text-custom14 font-[500]  text-darkGrey px-4 py-3 transition-all duration-300 hover:bg-[#F5FBFF]"
                          >
                            مثال علي نص
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/"
                            className="block text-custom14 font-[500]  text-darkGrey px-4 py-3 transition-all duration-300 hover:bg-[#F5FBFF]"
                          >
                            مثال علي نص
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-custom14 font-[700] text-blackGrey"
                  >
<<<<<<< HEAD
                    لماذا نحن
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-custom14 font-[700] text-blackGrey"
                  >
                    الأرقام
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-custom14 font-[700] text-blackGrey"
                  >
                    اراء العملاء
=======
                    تواصل معنا
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <HeaderActions />
          </div>
        </div>
      </header>
      <Sidenav open={open} setOpen={setOpen} />
    </>
  );
}
