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
    description:
      "Real-time overview of orders, products, clients and revenue charts.",
  },
  {
    icon: MdOutlineProductionQuantityLimits,
    title: "Products",
    description:
      "Create, update and remove products with images and category tags.",
  },
  {
    icon: PiTreeStructureBold,
    title: "Categories",
    description: "Organise your catalogue with a full category management system.",
  },
  {
    icon: GoListUnordered,
    title: "Orders",
    description:
      "Track every order and update statuses from Processing to Delivered.",
  },
  {
    icon: BiSolidPurchaseTag,
    title: "Purchased",
    description:
      "Review completed purchases and manage purchased product records.",
  },
  {
    icon: FaUsersLine,
    title: "Clients",
    description: "Browse registered users and manage client accounts.",
  },
  {
    icon: RiContactsFill,
    title: "Contacts",
    description:
      "View and respond to support messages sent through your storefront.",
  },
];

const stats = [
  { label: "Pages", value: "7+" },
  { label: "Built with", value: "Next.js 15" },
  { label: "UI", value: "shadcn/ui" },
  { label: "State", value: "Zustand" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans antialiased">
      {/* ── Navbar ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            etec<span className="text-gray-400 font-normal"> dashboard</span>
          </span>
          <nav className="flex items-center gap-3">
            <a
              href="https://github.com/mohusein/etec-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block"
            >
              GitHub
            </a>
            <Link
              href="/admin/dashboard"
              className="text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Dashboard →
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 gap-8">
        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          Admin Panel
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl">
          Manage your store,
          <br />
          <span className="text-gray-400">all in one place.</span>
        </h1>

        <p className="text-gray-500 text-base sm:text-lg max-w-lg leading-relaxed">
          Etec Dashboard gives you full control over products, orders, clients
          and more — with a clean interface built on Next.js&nbsp;15.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/admin/dashboard"
            className="bg-gray-900 text-white px-7 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors text-sm"
          >
            Open Dashboard
          </Link>
          <a
            href="https://github.com/mohusein/etec-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 text-gray-700 px-7 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm"
          >
            View on GitHub
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-4 border-t border-gray-100 w-full max-w-lg">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-bold">{s.value}</span>
              <span className="text-xs text-gray-400">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Everything you need</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Seven management modules, all accessible from one sidebar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:border-gray-300 hover:shadow-lg transition-all duration-200 bg-white ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-gray-100 flex items-center justify-center transition-colors">
                <f.icon className="text-[18px] text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA banner ──────────────────────────────────────── */}
      <section className="mx-6 mb-16 rounded-2xl bg-gray-900 text-white px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-6xl lg:mx-auto">
        <div>
          <h3 className="text-xl font-bold">Ready to get started?</h3>
          <p className="text-gray-400 text-sm mt-1">
            Jump straight into the dashboard and start managing your store.
          </p>
        </div>
        <Link
          href="/admin/dashboard"
          className="shrink-0 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition-colors"
        >
          Open Dashboard →
        </Link>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Etec. All rights reserved.</span>
          <a
            href="https://github.com/mohusein/etec-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
