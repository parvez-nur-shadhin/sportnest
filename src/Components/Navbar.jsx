"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { MdSportsCricket } from "react-icons/md";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  const links = (
    <>
      <li className="font-medium text-md text-white hover:bg-[#aaf40c] rounded-xl hover:text-black active:">
        <Link href={"/"}>
          <h1>Home</h1>
        </Link>
      </li>
      <li className="font-medium text-md text-white hover:bg-[#aaf40c] rounded-xl hover:text-black active:">
        <Link href={"/all-facilities"}>
          <h1>All Facilities</h1>
        </Link>
      </li>
      <li className="font-medium text-md text-white hover:bg-[#aaf40c] rounded-xl hover:text-black active:">
        <Link href={"/my-bookings"}>
          <h1>My Bookings</h1>
        </Link>
      </li>
      <li className="font-medium text-md text-white hover:bg-[#aaf40c] rounded-xl hover:text-black active:">
        <Link href={"/add-facilities"}>
          <h1>Add Facility</h1>
        </Link>
      </li>
      <li className="font-medium text-md text-white hover:bg-[#aaf40c] rounded-xl hover:text-black active:">
        <Link href={"/my-facilities"}>
          <h1>My Facilities</h1>
        </Link>
      </li>
    </>
  );
  const loggedInLinks = (
    <>
      <li className="font-medium text-md text-white hover:bg-[#aaf40c] rounded-xl hover:text-black active:">
        <Link href={"/my-bookings"}>
          <h1>My Bookings</h1>
        </Link>
      </li>
      <li className="font-medium text-md text-white hover:bg-[#aaf40c] rounded-xl hover:text-black active:">
        <Link href={"/add-facilities"}>
          <h1>Add Facility</h1>
        </Link>
      </li>
      <li className="font-medium text-md text-white hover:bg-[#aaf40c] rounded-xl hover:text-black active:">
        <Link href={"/my-facilities"}>
          <h1>My Facilities</h1>
        </Link>
      </li>
      <li
        onClick={handleLogOut}
        className="font-medium text-md text-white hover:bg-[#aaf40c] rounded-xl hover:text-black active:"
      >
        <h1>Logout</h1>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-none p-4 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-black/50 text-white"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"}>
            <h1 className="font-(family-name:--font-smooch-sans) text-5xl font-bold flex items-center gap-2 text-white">
              <MdSportsCricket className="text-[#aaf40c]" /> SportNest
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
              {/* For TSX uncomment the commented types below */}
              <button
                className=" cursor-pointer"
                popoverTarget="popover-1"
                style={
                  { anchorName: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <Image
                  src={user.image}
                  alt={user.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </button>

              <ul
                className="dropdown menu w-52 rounded-box bg-black/50 text-white shadow-sm"
                popover="auto"
                id="popover-1"
                style={
                  { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                {loggedInLinks}
              </ul>
            </div>
          ) : (
            <Link href={"/login"}>
              <button className="btn bg-[#aaf40c] text-black">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
