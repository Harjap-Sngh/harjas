import type { Metadata } from "next";
import { Quattrocento } from "next/font/google";
import "./globals.css";

const quattrocento = Quattrocento({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HarJas Tiffin Service",
  description: "Delicious home-cooked Punjabi meals delivered daily.",
  openGraph: {
    title: "HarJas Tiffin Service",
    description: "Delicious home-cooked Punjabi meals delivered daily.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quattrocento.className} bg-[#FFFBF5]`}>
        {children}
      </body>
    </html>
  );
}
