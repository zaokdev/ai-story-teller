import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="sticky flex items-center justify-center z-0 bg-gradient-to-r dark:from-violet-800 dark:via-slate-900 dark:to-yellow-950 from-indigo-200 via-offwhite to-yellow-100">
      <img
        src="/favicon.ico"
        className="h-28 md:h-32 hover:filter hover:drop-shadow-2xl"
      />
      <Link className="text-5xl dark:text-offwhite" href={"/"}>
        Dream<strong>AI</strong>ra
      </Link>
    </nav>
  );
};

export default Header;
