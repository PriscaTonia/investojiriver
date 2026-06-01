import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ORIPA | Oji River Investment Promotion Agency",
  description: "Driving Growth. Building Futures. The investment gateway to Oji River, Enugu State.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="bg-brand-white text-brand-green selection:bg-brand-gold/30">
        {children}
      </body>
    </html>
  );
}
