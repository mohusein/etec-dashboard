import Navbar from "@/components/nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 min-w-0 overflow-auto">{children}</main>
    </div>
  );
}
