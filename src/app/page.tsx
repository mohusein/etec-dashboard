import Link from "next/link";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineDashboard,
} from "react-icons/md";
import { PiTreeStructureBold } from "react-icons/pi";
import { GoListUnordered } from "react-icons/go";
import { FaUsersLine } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { BiSolidPurchaseTag } from "react-icons/bi";

const features = [
  {
    icon: MdOutlineDashboard,
    title: "Dashboard",
    description: "Real-time overview of orders, products, clients and revenue charts.",
  },
  {
    icon: MdOutlineProductionQuantityLimits,
    title: "Products",
    description: "Create, update and remove products with images and category tags.",
  },
  {
    icon: PiTreeStructureBold,
    title: "Categories",
    description: "Organise your catalogue with a full category management system.",
  },
  {
    icon: GoListUnordered,
    title: "Orders",
    description: "Track every order and update statuses from Processing to Delivered.",
  },
  {
    icon: BiSolidPurchaseTag,
    title: "Purchased",
    description: "Review completed purchases and manage purchased product records.",
  },
  {
    icon: FaUsersLine,
    title: "Clients",
    description: "Browse registered users and manage client accounts.",
  },
  {
    icon: RiContactsFill,
    title: "Contacts",
    description: "View and respond to support messages sent through your storefront.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="w-full border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">etec</span>
        <Link
          href="/admin/dashboard"
          className="text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Go to Dashboard →
        </Link>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 border border-gray-200 rounded-full px-4 py-1">
          Admin Panel
        </span>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
          Manage your store,{" "}
          <span className="text-gray-400">all in one place.</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl">
          Etec Dashboard gives you full control over products, orders, clients
          and more — with a clean, fast interface built on Next.js 15.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            href="/admin/dashboard"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
          >
            Open Dashboard
          </Link>
          <a
            href="https://github.com/mohusein/etec-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* ── Features grid ───────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold mb-8 text-center">Everything you need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-gray-100 rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <f.icon className="text-xl text-gray-700" />
              </div>
              <h3 className="font-semibold text-base">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="mt-auto border-t border-gray-100 px-6 py-5 flex items-center justify-between text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Etec</span>
        <a
          href="https://github.com/mohusein/etec-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors"
        >
          GitHub
        </a>
      </footer>
    </main>
  );
}
