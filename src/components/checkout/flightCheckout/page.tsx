"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  faUser,
  faSuitcase,
  faCalendar,
  faCalendarXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cbe from "@/images/cbe-logo.png";
import telebirr from "@/images/Telebirr.png";
import awash from "@/images/awashbank.png";
import zemen from "@/images/zemen bank.png";
import Image from "next/image";
import DatePicker from "react-datepicker";
import DatesRangeInput from "../../../app/[locale]/(client-components)/(HeroSearchForm2Mobile)/DatesRangeInput";
interface PassengerDetails {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  contact: string;
  email: string;
  passportNo: string;
  passportImage?: File;
}

interface PassengerDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (passengerDetails: PassengerDetails) => void;
  airlineName: string;
  flightType: string;
  price: number;
}

const PassengerDetailsModal: React.FC<PassengerDetailsModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  airlineName,
  flightType,
  price,
}) => {
  const [step, setStep] = useState<number>(1);
  const [showCancellation, setShowCancellation] = useState<boolean>(false);
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [pnr, setPnr] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [dob, setDob] = useState<string>(" ");
  const [formValues, setFormValues] = useState<
    Omit<PassengerDetails, "dob"> & { dob: string }
  >({
    firstName: "",
    lastName: "",
    gender: "",
    dob: dob,
    contact: "",
    email: "",
    passportNo: "",
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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormValues((prev) => ({ ...prev, passportImage: e.target.files![0] }));
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(2);
  };

  const handlePayNow = () => {
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions first");
      return;
    }
    setStep(3);
  };

  const generatePNR = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const handleConfirmPayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method");
      return;
    }
    const newPnr = generatePNR();
    setPnr(newPnr);
    setPaymentSuccess(true);
    setStep(4);
  };

  const paymentMethods = [
    {
      id: "Commercial Bank of Ethiopia",
      name: "Commercial Bank of Ethiopia",
      src: cbe,
      instructions:
        "Follow these steps to pay with Commercial Bank of Ethiopia",
      className: "h-8 w-8",
    },
    {
      id: "Tele Birr",
      name: "TeleBirr",
      src: telebirr,
      instructions: "Follow these steps to pay with TeleBirr.",
      className: "h-8 w-14",
    },
    {
      id: "Awash Bank",
      name: "Awash Bank",
      src: awash,
      instructions: "Follow these steps to pay with Awash Bank.",
      className: "h-8 w-24",
    },
    {
      id: "Zemen Bank",
      name: "Zemen Bank",
      src: zemen,
      instructions: "Follow these steps to pay with Zemen Bank.",
      className: "h-8 w-20",
    },
  ];

  const renderStepOne = () => (
    <form className="p-4 md:p-5" onSubmit={handleFormSubmit}>
      <div className="grid gap-4 mb-4 grid-cols-2">
        {/* First Name */}
        <div className="relative z-0 w-full mb-5 group col-span-2">
          <input
            type="text"
            name="firstName"
            id="first-name"
            value={formValues.firstName}
            onChange={handleChange}
            className="my-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#2995D3] focus:outline-none focus:ring-0 focus:border-[#2995D3] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="first-name"
            className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
          >
            First Name
          </label>
        </div>
        {/* Last Name */}
        <div className="relative z-0 w-full mb-5 group col-span-2">
          <input
            type="text"
            name="lastName"
            id="last-name"
            value={formValues.lastName}
            onChange={handleChange}
            className="my-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#2995D3] focus:outline-none focus:ring-0 focus:border-[#2995D3] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="last-name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
          >
            Last Name
          </label>
        </div>
        {/* Gender */}
        <div className="relative z-0 w-full mb-5 group col-span-2 sm:col-span-1">
          <select
            id="gender"
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            className="my-2 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-[#2995D3] focus:outline-none focus:ring-0 focus:border-[#2995D3] peer"
            required
          >
            <option value="" className="dark:bg-gray-700">
              Select gender
            </option>
            <option value="male" className="dark:bg-gray-700">
              Male
            </option>
            <option value="female" className="dark:bg-gray-700">
              Female
            </option>
          </select>
          <label
            htmlFor="gender"
            className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
          >
            Gender
          </label>
        </div>
        {/* Date of Birth */}
        <div className="relative max-w-sm">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            id="default-datepicker"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>
        {/* Contact Number using react-phone-input-2 */}
        <div className="relative z-10 w-full mb-5 group col-span-2">
          <label className="block text-sm text-gray-500 mb-1">
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
        {/* Email */}
        <div className="relative z-0 w-full mb-5 group col-span-2 ">
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className="block my-2 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#2995D3] focus:outline-none focus:ring-0 focus:border-[#2995D3] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
          >
            Email
          </label>
        </div>
        {/* Passport No/ID with standard placeholder */}
        <div className="relative z-0 w-full mb-5 group col-span-2">
          <input
            type="text"
            name="passportNo"
            id="passport-no"
            value={formValues.passportNo}
            onChange={handleChange}
            className="block my-2 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#2995D3] focus:outline-none focus:ring-0 focus:border-[#2995D3] peer"
            placeholder="Enter Passport No/ID"
            required
          />
          <label
            htmlFor="passport-no"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
          >
            Passport No/ID
          </label>
        </div>
        {/* Passport Image (Optional) */}
        <div className="relative z-0 w-full mb-5 group col-span-2">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="passport-image"
              className="flex flex-col items-center justify-center w-full h-24 border-2 border-[#2995D3] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6 px-5">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> Your
                  Passport Image (Optional)
                </p>
              </div>
              <input
                id="passport-image"
                name="passport-image"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white inline-flex items-center bg-[#2995D3] hover:bg-[#1e7bb5] focus:ring-4 focus:outline-none focus:ring-[#2995D3] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2995D3] dark:hover:bg-[#1e7bb5] dark:focus:ring-[#2995D3]"
        >
          Next Step
        </button>
      </div>
    </form>
  );

  const renderStepTwo = () => {
    const fullName = `${formValues.firstName} ${formValues.lastName}`;
    return (
      <div className="p-4 md:p-5">
        <div className="mb-4">
          <div className="bg-neutral-100 shadow-md flex flex-col justify-center p-6 dark:bg-slate-800 rounded-lg">
            <h2 className="text-xl text-[#0682ca] font-semibold border-b pb-2 text-center flex justify-center items-center gap-2">
              <FontAwesomeIcon icon={faUser} /> Passenger Details
            </h2>
            <p className="mt-2 text-neutral-500">
              <strong className="text-neutral-900 dark:text-neutral-100 text-md font-thin">
                Name:
              </strong>{" "}
              {fullName}
            </p>
            <p className="mt-2 text-neutral-500">
              <strong className="text-neutral-900 dark:text-neutral-100 text-md font-thin">
                Email:
              </strong>{" "}
              {formValues.email}
            </p>
            <p className="mt-2 text-neutral-500">
              <strong className="text-neutral-900 dark:text-neutral-100 text-md font-thin">
                Contact:
              </strong>{" "}
              {formValues.contact}
            </p>
            <p className="mt-2 text-neutral-500">
              <strong className="text-neutral-900 dark:text-neutral-100 text-md font-thin">
                Passport No/ID:
              </strong>{" "}
              {formValues.passportNo}
            </p>
          </div>
        </div>
        <div className="mb-4 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl text-[#0682ca] font-semibold border-b pb-2 text-center flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faSuitcase} />
            Baggage Allowance
          </h2>
          <div className="flex flex-col py-4">
            <p className="text-neutral-900 dark:text-neutral-100 text-base font-medium">
              Cabin Baggage
            </p>
            <p>
              <strong className="text-neutral-500 dark:text-neutral-400 text-sm font-thin">
                1 x Upto 15lb/7kg and Upto 45LI/115LCM
              </strong>
            </p>
          </div>
          <div className="flex flex-col py-4">
            <p className="text-neutral-900 dark:text-neutral-100 text-base font-medium">
              Baggage
            </p>
            <p>
              <strong className="text-neutral-500 dark:text-neutral-400 text-sm font-thin">
                1 x CHGS may apply if bags exceed TTL WT Allowance
              </strong>
            </p>
          </div>
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setShowCancellation(!showCancellation)}
            className="text-sm text-[#2995D3] underline"
          >
            {showCancellation
              ? "Hide Cancellation Policy"
              : "Show Cancellation Policy"}
          </button>
          {showCancellation && (
            <div className="mt-2 p-4 border rounded bg-gray-100">
              <p className="text-sm">Cancellation Policy details go here.</p>
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
              className="w-4 h-4 text-[#2995D3] border-gray-300 rounded focus:ring-[#2995D3]"
            />
            <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">
              I agree to the terms, policy and conditions.
            </span>
          </label>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-gray-700 inline-flex items-center bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Go Back
          </button>
          <button
            type="button"
            onClick={handlePayNow}
            className="text-white inline-flex items-center bg-[#2995D3] hover:bg-[#1e7bb5] focus:ring-4 focus:outline-none focus:ring-[#2995D3] font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Pay Now
          </button>
        </div>
      </div>
    );
  };

  const renderStepThree = () => {
    return (
      <div className="p-4 md:p-5">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-[#2995D3]">
            Payment Method
          </h3>
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Price: ${price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedPaymentMethod === method.id
                  ? "border-[#2995D3] bg-blue-50"
                  : "hover:border-[#2995D3]"
              }`}
              onClick={() => setSelectedPaymentMethod(method.id)}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  id={method.id}
                  name="paymentMethod"
                  checked={selectedPaymentMethod === method.id}
                  className="h-4 w-4 text-[#2995D3]"
                  onChange={() => {}}
                />
                <label htmlFor={method.id} className="ml-3 flex items-center">
                  <Image
                    src={method.src}
                    alt={method.name}
                    className={method.className}
                  />
                  <span className="text-sm font-medium ml-5">
                    {method.name}
                  </span>
                </label>
              </div>
              <p className="mt-2 text-sm text-gray-600 ml-7">
                {method.instructions}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setStep(2)}
            className="text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
          >
            Go Back
          </button>
          <button
            onClick={handleConfirmPayment}
            className={`px-4 py-2 rounded-lg ${
              selectedPaymentMethod
                ? "bg-[#2995D3] text-white hover:bg-[#1e7bb5]"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            disabled={!selectedPaymentMethod}
          >
            Confirm Payment
          </button>
        </div>
      </div>
    );
  };
  const renderStepFour = () => (
    <div className="p-4 md:p-5">
      <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Booking Confirmed!</h3>
        <p>
          Your flight has been successfully booked. Please complete your payment
          within 2 hours to avoid expiration.
        </p>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            PNR Number:
          </label>
          <div className="flex items-center gap-2 mt-1">
            <input
              type="text"
              value={pnr}
              readOnly
              className="w-5/6 flex-1 p-2 bg-gray-100 rounded-md border-transparent focus:outline-none focus:border-none hover:outline-none hover:border-none"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(pnr);
                alert("PNR Number copied to clipboard");
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
              lastName: "",
              gender: "",
              dob: "",
              contact: "",
              email: "",
              passportNo: "",
            });
            setSelectedPaymentMethod("");
            setPaymentSuccess(false);
            setAgreeTerms(false);
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
      className={`fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 ${
        isOpen ? "flex" : "hidden"
      } ${step === 4 ? "overflow-hidden" : ""}`}
    >
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      )}
      <div
        className={`relative p-4 ${
          step === 4 ? "max-w-md h-[55vh]" : "max-w-lg h-full mb-20 lg:mb-0"
        }`}
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-[#2995D3]">
              {airlineName} -{" "}
              {flightType === "departure" ? "Departure" : "Return"}
            </h3>
            {step !== 4 && (
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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

          {step === 1
            ? renderStepOne()
            : step === 2
            ? renderStepTwo()
            : step === 3
            ? renderStepThree()
            : step === 4
            ? renderStepFour()
            : null}
        </div>
      </div>
    </div>
  );
};

export default PassengerDetailsModal;
