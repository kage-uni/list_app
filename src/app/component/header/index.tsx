import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header id="#top">
      <h1 className="text-center text-black">
        <Link href="#top">List</Link>
      </h1>
      <div className="flex h-[8vh] w-auto items-center justify-center bg-white">
        <ul className="space-between flex max-w-5xl">
          <li className="mx-4">
            <Link href="#">content01</Link>
          </li>
          <li className="mx-4">
            <Link href="#">content02</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
