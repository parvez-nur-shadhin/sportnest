import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const notFountPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-6">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-red-600">404</h1>
        <p className="text-gray-300 text-4xl font-bold">Page Not Found</p>
        <p className="text-gray-300 text-xl font-medium">
          Sorry, the page you are looking for doesn't exist
        </p>
        <Link href={"/"}>
          <button className="btn bg-[#aaf40c] mx-auto">
            <BiArrowBack /> Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default notFountPage;
