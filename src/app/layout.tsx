import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Etec Dashboard",
  description: "Admin dashboard for Etec e-commerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
