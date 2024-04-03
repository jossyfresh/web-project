"use client";
import Image from "next/image";
import { useState } from "react";
import { Input, Button, Alert } from "antd";
import { Icon } from "@iconify/react";
import Link from "next/link";
import PinInput from "react-pin-input";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setOtp, selectotp } from "@/lib/redux/Slices/otpSlice";
import { useAuth } from "@/lib/hooks/useAuth";

export default function Page() {
  const [otpvalue, setOtpValue] = useState("");
  const [sentAlert, setSentAlert] = useState(false);
  const dispatch = useDispatch();
  const otp = useSelector(selectotp);
  const { verifyEmailHandler } = useAuth();
  const { resendForgotOtpHandler } = useAuth();
  const {
    verifyOtpHandler,
    otp: { isAuthenticated, isLoading, error },
  } = useAuth();

  const router = useRouter();

  const handleotp = async (value: string) => {
    if (otp.registration) {
      await verifyEmailHandler(value);
    } else {
      await verifyOtpHandler(value);
    }
  };

  const handleResend = async () => {
    const response = await resendForgotOtpHandler();

    if ("data" in response && response.data.success === true) {
      console.log("otp sent successfully");
      setSentAlert(true);
    }
  };

  return (
    <div className="flex flex-col lg:px-20 bg-bodyBg h-screen">
      <div className="lg:h-auto lg:flex flex-col justify-between py-5 px-5 lg:px-0 lg:py-10 ">
        <div className="text-primaryColor font-bold">YAYA ACADEMY</div>
      </div>
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="max-w-lg  max-h-96 flex flex-col items-center justify-center gap-7 px-20 py-5  ">
          <div className="w-full font-Roboto text-center text-3xl text-primaryColor">
            Email Verification
          </div>
          <div className="w-full font-Roboto text-center text-base font-light text-textColor">
            Enter the 4&#45;digit OTP Code that we sent to
            <p className="text-primaryColor cursor-pointer">{otp.email}</p>
          </div>
          <div className="w-full">
            <PinInput
              length={4}
              initialValue=""
              onChange={(value, index) => {
                setOtpValue(value);
              }}
              type="numeric"
              inputMode="numeric"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 20,
              }}
              inputStyle={{
                width: "60px",
                height: "60px",
                background: "white",
                borderColor: "white",
                borderRadius: "10px",
                fontSize: "20px",
                color: "#595D72",
              }}
              inputFocusStyle={{
                borderColor: "blue",
                color: "#1478A4",
              }}
              onComplete={(value, index) => {
                handleotp(value.toString());
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            {sentAlert && (
              <Alert
                onClose={() => setSentAlert(false)}
                message="OTP sent successfully"
                type="success"
                showIcon
                closable
              />
            )}
            <button
              onClick={() => handleotp(otpvalue)}
              className="bg-primaryColor text-white w-full py-2 rounded-md items-center text-center"
            >
              {isLoading ? (
                <svg
                  width="24"
                  height="24"
                  className="spinner mx-auto"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
                    stroke="white"
                  />
                </svg>
              ) : (
                "Verify"
              )}
            </button>
          </div>
          <div className="w-full font-Roboto text-center text-sm font-light text-textColor">
            Didn&apos;t receive the code?
            <span className="text-primaryColor cursor-pointer">
              {" "}
              <button onClick={handleResend}>Send again</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
