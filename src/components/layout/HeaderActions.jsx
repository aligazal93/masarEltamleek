"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginModal from "../LoginModal";

export default function HeaderActions() {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <>
      <div className=" hidden lg:flex items-center justify-center gap-2">
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

        <button className="bg-secondary rounded-[8px] text-custom14 font-[700] text-white p-3 px-4 duration-300 hover:bg-primary">
          اطلب استشارتك المالية
        </button>
      </div>
      <LoginModal open={openLogin} setOpen={setOpenLogin} />
    </>
  );
}
