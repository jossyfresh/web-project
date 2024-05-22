import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mb-5 w-full">
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl  py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="self-center font-poppins text-2xl font-semibold whitespace-nowrap dark:text-white">
                YAYA Academy
              </span>
            </div>
            <div className="flex gap-7 font-poppins">
              <div>Contact us</div>
              <div>FAQs</div>
              <div>Terms of Service</div>
              <div>Privacy Policy</div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                YayaAcademy™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex gap-5 mt-4 sm:justify-center sm:mt-0 px-10">
              <span className="px-3 inline-block">
                <Image
                  src="/icons8-facebook.svg"
                  width={24}
                  height={24}
                  alt="socials"
                />
              </span>
              <span className="px-3 inline-block">
                <Image
                  src="/icons8-instagram.svg"
                  width={24}
                  height={24}
                  alt="socials"
                />
              </span>
              <span className="px-3 inline-block">
                <Image
                  src="/icons8-linkedin.svg"
                  width={24}
                  height={24}
                  alt="socials"
                />
              </span>
              <span className="px-3 inline-block">
                <Image
                  src="/icons8-youtube.svg"
                  width={24}
                  height={24}
                  alt="socials"
                />
              </span>{" "}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
