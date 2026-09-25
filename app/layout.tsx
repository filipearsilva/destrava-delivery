import type { Metadata } from "next";
import { TikTok_Sans } from "next/font/google";
import Script from "next/script";
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
  other: {
    "facebook-domain-verification": "faj7pcwqc4xpfqgdhpklmglyn43mi6",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${tiktokSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','2247189142680465');fbq('track','PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2247189142680465&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
