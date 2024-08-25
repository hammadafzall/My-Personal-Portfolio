import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const poppins = Poppins({ weight: "200", subsets: ["latin"] });
export const metadata = {
  title: "Hammad Afzal | Software Developer | Portfolio",
  description: "Hi my name is Hammad Afzal and i am a software developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6E5P5NHX1L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date())

  gtag('config', 'G-6E5P5NHX1L')`}
        </Script>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
