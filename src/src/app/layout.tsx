import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "LogTurret",
  robots: {index: false, follow: false}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={rubik.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
