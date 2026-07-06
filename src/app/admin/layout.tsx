import Navbar from "@/components/nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
