import type { Metadata } from "next";
import "./globals.css";
import WebNav from "@/components/WebNav";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Route Frontend Task ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bgColor">
        <section className="min-h-screen">
          {/* <nav className=" bg-mainColor">
            <WebNav />
          </nav> */}
          <main>
            <Header />
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
