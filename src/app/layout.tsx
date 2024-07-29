import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Story Teller",
  description: "Aplicación desde la cual podrás hacer uso de inteligencia artificial para darle vida a cualquier historia",
  icons: {
    icon:['/favicon.ico?v=112']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{


  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
