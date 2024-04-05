import React from "react";
import { LocationIcon, AccountIcon, CartIcon } from "@/public/assets/icons";

export default function NavBar() {
  return (
    <nav className="">
      <div className="flex justify-between py-5 px-5">
        <div className="flex gap-2">
          <LocationIcon className="text-5xl text-red-800" />
          <div>
            <h2 className="font-extrabold">New Delhi</h2>
            <p className="text-neutral-500">Delhi, india, India</p>
          </div>
        </div>
        <div className="flex gap-2 items-baseline">
          <CartIcon className="text-5xl" />
          <div className="border rounded-full bg-red-300 p-1">
            <AccountIcon className="text-5xl" />
          </div>
        </div>
      </div>
    </nav>
  );
}
