"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function LoginModal({ open, setOpen }) {
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-[999]"
          />

          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-[500px] rounded-[24px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="login-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-6 md:p-8">
                <div className="mb-6 text-center">
                  <Image
                    src="/images/userPlus.png"
                    alt="تسجيل الدخول"
                    width={80}
                    height={80}
                    className="block my-4 mx-auto object-contain"
                  />
                  <h1 className="text-primary text-custom20 md:text-custom24 lg:text-custom26 font-[700]">
                    سجّل حسابك الآن{" "}
                  </h1>
                  <p className="text-primary text-custom20 md:text-custom24 lg:text-custom26 font-[700]">
                    واطلب أفضل حلولك التمويلية بسهولة
                  </p>
                  <p className="text-custom16 text-grey py-4">
                    سجّل حسابك للوصول إلى خدماتنا، تقديم طلبات التمويل، ومتابعة
                    حالتها خطوة بخطوة من مكان واحد.{" "}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Link className="border border-borderColor duration-500 hover:bg-secondary hover:text-white rounded-[8px] w-full p-3 text-custom16 font-[700] text-center" href="/"> انشاء حساب جديد </Link>
                  <Link className="border border-borderColor duration-500 hover:bg-secondary hover:text-white rounded-[8px] w-full p-3 text-custom16 font-[700] text-center" href="/"> تسجيل الدخول </Link>
                  <Link className=" w-full text-grey p-3 text-custom16 font-[700] text-center" href="/"> أو استمر كزائر </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
