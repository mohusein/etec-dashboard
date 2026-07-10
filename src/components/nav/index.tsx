"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { links } from "@/data";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useRouter();
  const pathname = usePathname();

  const logOut = (): void => {
    Cookies.remove("token");
    navigate.push("/sign-in");
  };

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const NavLinks = () => (
    <ul className="flex flex-col gap-1">
      {links.map((link, index) => {
        const active = pathname === `/admin/${link.href}`;
        return (
          <li key={index}>
            <Link
              href={`/admin/${link.href}`}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                active
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <link.icon className="text-[16px] shrink-0" />
              {link.context}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* ── Desktop sidebar ─────────────────────────────────── */}
      <aside className="hidden lg:flex flex-col w-56 shrink-0 h-screen sticky top-0 border-r border-gray-200 bg-white">
        <div className="px-5 py-5 border-b border-gray-100">
          <span className="text-base font-bold tracking-tight">
            etec<span className="text-gray-400 font-normal"> admin</span>
          </span>
        </div>

        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-3 mb-2">
            Menu
          </p>
          <NavLinks />
        </nav>

        <div className="px-3 py-4 border-t border-gray-100">
          <button
            onClick={logOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <CiLogout className="text-[18px] shrink-0" />
            Sign out
          </button>
        </div>
      </aside>

      {/* ── Mobile top bar ──────────────────────────────────── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4">
        <span className="text-base font-bold tracking-tight">
          etec<span className="text-gray-400 font-normal"> admin</span>
        </span>
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <GrMenu className="text-[18px]" />
        </button>
      </div>

      {/* Mobile top-bar spacer so content isn't hidden behind it */}
      <div className="lg:hidden h-14 shrink-0" />

      {/* ── Mobile drawer overlay ───────────────────────────── */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Drawer */}
          <div
            className="relative w-64 h-full bg-white flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="text-base font-bold">
                etec<span className="text-gray-400 font-normal"> admin</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <IoClose className="text-[18px]" />
              </button>
            </div>

            <nav className="flex-1 px-3 py-4 overflow-y-auto">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-3 mb-2">
                Menu
              </p>
              <NavLinks />
            </nav>

            <div className="px-3 py-4 border-t border-gray-100">
              <button
                onClick={logOut}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                <CiLogout className="text-[18px] shrink-0" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
