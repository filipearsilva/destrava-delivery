import type { Metadata } from "next";
import { TikTok_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const tiktokSans = TikTok_Sans({
  variable: "--font-tiktok-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Destrava Delivery 2.0 | Imersão presencial com Vini Pires",
  description:
    "Em 2 dias de imersão presencial em São Paulo, destrave seu delivery, aumente seus lucros e dependa menos da operação. 16 e 17 de novembro.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${tiktokSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
