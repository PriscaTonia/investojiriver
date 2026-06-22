import type { Metadata } from "next";
import { dmSans, playfair, sulphurPoint } from "@/lib/fonts";
import "./globals.css";

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
      className={`${dmSans.variable} ${playfair.variable} ${sulphurPoint.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="bg-brand-white text-brand-green selection:bg-brand-gold/30"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
