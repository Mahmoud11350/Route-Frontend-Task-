
import type { Metadata } from "next";
import "./globals.css";
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
         
          <main>
            <Header />
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
