"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  faUser,
  faSuitcase,
  faPhone,
  faEnvelope,
  faChild,
  faBaby,
} from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cbe from "@/images/cbe-logo.png";
import telebirr from "@/images/Telebirr.png";
import awash from "@/images/awashbank.png";
import zemen from "@/images/zemen bank.png";
import Image from "next/image";

interface PassengerDetails {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  contact: string;
  email: string;
  passportNo: string;
}

interface PackageCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (passengerDetails: PassengerDetails) => void;
  packageName: string;
  price: number;
}

const PackageCheckoutModal: React.FC<PackageCheckoutModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  packageName,
  price,
}) => {
  const [step, setStep] = useState<number>(1);
  const [packageNumber, setPackageNumber] = useState<string>("");

  const [formValues, setFormValues] = useState({
    firstName: "",
    contact: "",
    email: "",
    adult: "",
    child: "",
    infant: "",
    remarks: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormValues((prev) => ({ ...prev, contact: value }));
  };

  const generatePackageNumber = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPackageNumber = generatePackageNumber();
    setPackageNumber(newPackageNumber);
    setStep(4);
  };

  const renderStepOne = () => (
    <form className="p-4 md:p-5" onSubmit={handleFormSubmit}>
      <div className="grid gap-4 mb-4 grid-cols-2">
        {/* Contact Number using react-phone-input-2 */}
        <div className="relative z-10 w-full mb-5 group col-span-2">
          <label className=" text-sm text-gray-500 mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-[#2995D3]" />
            Contact Number
          </label>
          <PhoneInput
            country={"et"}
            value={formValues.contact}
            onChange={handlePhoneChange}
            inputStyle={{
              width: "100%",
              padding: "12px",
              paddingLeft: "60px",
              border: "none",
              borderBottom: "2px solid #D1D5DB",
              background: "transparent",
              color: "C0C0C0",
            }}
            containerStyle={{ zIndex: 10000 }}
            inputClass="pl-20 focus:outline-none"
            inputProps={{ inputMode: "tel" }}
          />
        </div>
        {/* Full Name */}
        <div className="relative z-0 w-full mb-5 group col-span-2">
          <label
            htmlFor="first-name"
            className="text-sm text-gray-500 mb-1 flex items-center gap-2 "
          >
            <FontAwesomeIcon icon={faUser} className="text-[#2995D3]" />
            Full Name
          </label>
          <input
            type="text"
            name="firstName"
            id="first-name"
            value={formValues.firstName}
            onChange={handleChange}
            className="my-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2995D3] peer"
            placeholder="Abebe Kebede"
            required
          />
        </div>
        {/* Email */}
        <div className="relative z-0 w-full mb-5 group col-span-2">
          <label
            htmlFor="email"
            className="text-sm text-gray-500 mb-1 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-[#2995D3]" />
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className="block my-2 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2995D3] peer"
            placeholder="abebek@gmail.com"
            required
          />
        </div>
      </div>
      <div className="mb-4 text-lg font-semibold text-gray-700">
        Total Guests:{" "}
        {(+formValues.adult || 0) +
          (+formValues.child || 0) +
          (+formValues.infant || 0)}
      </div>
      <div className="grid gap-4 mb-4 grid-cols-3">
        <div className="relative z-0 w-full group">
          <label
            htmlFor="adult"
            className="text-sm text-gray-500 mb-1 flex items-center gap-1"
          >
            <FontAwesomeIcon icon={faUser} className="text-[#2995D3]" />
            Adult
          </label>
          <input
            type="number"
            name="adult"
            id="adult"
            min="0"
            value={formValues.adult}
            onChange={handleChange}
            className="focus:ring-0 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-[#2995D3]"
            placeholder="0"
            required
          />
        </div>
        <div className="relative z-0 w-full group">
          <label
            htmlFor="child"
            className="text-sm text-gray-500 mb-1 flex items-center gap-1"
          >
            <FontAwesomeIcon icon={faChild} className="text-[#2995D3]" />
            Child
          </label>
          <input
            type="number"
            name="child"
            id="child"
            min="0"
            value={formValues.child}
            onChange={handleChange}
            className="focus:ring-0 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-[#2995D3]"
            placeholder="0"
          />
        </div>
        <div className="relative z-0 w-full group">
          <label
            htmlFor="infant"
            className="text-sm text-gray-500 mb-1 flex items-center gap-1"
          >
            <FontAwesomeIcon icon={faBaby} className="text-[#2995D3]" />
            Infant
          </label>
          <input
            type="number"
            name="infant"
            id="infant"
            min="0"
            value={formValues.infant}
            onChange={handleChange}
            className="focus:ring-0 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-[#2995D3]"
            placeholder="0"
          />
        </div>
      </div>
      {/* Optional Remarks Input */}
      <div className="relative z-0 w-full mb-5 group">
        <label
          htmlFor="remarks"
          className="text-sm text-gray-500 mb-1 flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faSuitcase} className="text-[#2995D3]" />
          Remarks
        </label>
        <input
          type="text"
          name="remarks"
          id="remarks"
          value={formValues.remarks || ""}
          onChange={handleChange}
          className="focus:ring-0 block my-2 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-[#2995D3] peer"
          placeholder="(optional)"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white inline-flex items-center bg-[#2995D3] hover:bg-[#1e7bb5] focus:ring-4 focus:outline-none focus:ring-[#2995D3] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Next Step
        </button>
      </div>
    </form>
  );

  const renderStepFour = () => (
    <div className="p-4 md:p-5">
      <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Booking Confirmed!</h3>
        <p className="text-center">
          Your package has been successfully booked. Please copy your Package
          Number and complete your payment.
        </p>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Package Number:
          </label>
          <div className="flex items-center gap-2 mt-1">
            <input
              type="text"
              value={packageNumber}
              readOnly
              className="w-5/6 flex-1 p-2 bg-gray-100 rounded-md border-transparent focus:outline-none"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(packageNumber);
                alert("Package Number copied to clipboard");
              }}
              className="text-[#2995D3] hover:text-[#1e7bb5] font-medium w-1/6"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            setStep(1);
            setFormValues({
              firstName: "",
              contact: "",
              email: "",
              adult: "",
              child: "",
              infant: "",
              remarks: "",
            });
            setPackageNumber("");
            onClose();
          }}
          className="bg-[#2995D3] text-white px-4 py-2 rounded-lg hover:bg-[#1e7bb5]"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 ${
        isOpen ? "flex" : "hidden"
      } ${step === 4 ? "overflow-hidden" : ""}`}
    >
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      )}
      <div
        className={`relative p-4 max-h-screen overflow-y-auto ${
          step === 4 ? "max-w-sm h-[80vh]" : "max-w-md h-full mb-20 lg:mb-0"
        }`}
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-lg font-semibold text-[#2995D3] text-center">
              {packageName} Package Checkout
            </h3>
            {step !== 4 && (
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                onClick={onClose}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          {step === 1 ? renderStepOne() : step === 4 ? renderStepFour() : null}
        </div>
      </div>
    </div>
  );
};

export default PackageCheckoutModal;
