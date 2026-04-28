"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import LoginModal from "../LoginModal";

export default function Sidenav({ open, setOpen }) {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <div
        className={`fixed xl:hidden top-0 right-0 h-full w-[65%] bg-primary text-white transform transition-all duration-300 z-[999999999999] p-5 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="absolute left-4 "
          onClick={() => setOpen(false)}
          aria-label="إغلاق القائمة"
        >
          <FaTimes size={45} className="text-white" />
        </button>
        <nav>
          <ul className="mt-[40px]">
            <li>
              <Link
                href="/"
                className="text-custom16 my-[20px] font-[700] text-white"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/"
<<<<<<< HEAD
                className="text-custom16 my-[20px] block font-[700] text-white"
=======
                className="text-custom16 my-[10px] block font-[700] text-white"
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-custom16 my-[20px] font-[700] text-white"
              >
                المدونة
              </Link>
            </li>
<<<<<<< HEAD
            <li className=" relative my-[20px] group">
=======
            <li className=" relative group">
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
              <Link
                href="/consulting"
                className="flex items-center gap-2 text-custom16 my-[10px] font-[700] text-white"
              >
                الاستشارات المالية
                <FaChevronDown className="text-[12px] text-white transition-transform duration-300 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-[0px] right-0 left-0 mx-auto  pt-6 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="w-[280px] rounded-[4px] border border-[#E9EEF5] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-0">
                  <ul className="">
                    <li>
                      <Link
                        href="/"
                        className="block text-custom14 font-[500] text-blackGrey px-4 py-3 transition-all duration-300 hover:bg-[#F5FBFF]"
                      >
                        مثال علي نص
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                        className="block text-custom14 font-[500] text-blackGrey px-4 py-3 transition-all duration-300 hover:bg-[#F5FBFF]"
                      >
                        مثال علي نص
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block text-custom14 font-[500] text-blackGrey px-4 py-3 transition-all duration-300 hover:bg-[#F5FBFF]"
                      >
                        مثال علي نص
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                        className="block text-custom14 font-[500] text-blackGrey px-4 py-3 transition-all duration-300 hover:bg-[#F5FBFF]"
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
                className="text-custom16 my-[20px] font-[700] text-white"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>
<<<<<<< HEAD
        <div className="mt-[30px]">
          <button
            aria-label="تسجيل الدخول"
            onClick={() =>{
              setOpenLogin(true);
              setOpen(false);
            } }
            className="block w-full bg-white p-3 rounded-[10px] text-primary items-center gap-1 text-custom14 text-center font-[700]"
          >
            تسجيل الدخول
          </button>
        </div>
=======
        <button
          aria-label="تسجيل الدخول"
          onClick={() => setOpenLogin(true)}
          className="flex items-center gap-1 text-custom14 text-darkGrey font-[700]"
        >
          <Image
            src="/images/user.png"
            alt="تسجيل الدخول"
            width={18}
            height={18}
          />
          تسجيل الدخول
        </button>
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[999999] transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <LoginModal open={openLogin} setOpen={setOpenLogin} />
    </>
  );
}
