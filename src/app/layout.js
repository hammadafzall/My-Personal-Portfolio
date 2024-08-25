import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties";
const poppins = Poppins({ weight: "200", subsets: ["latin"] });
export const metadata = {
  title: "Hammad Afzal | Software Developer | Portfolio",
  description: "Hi my name is Hammad Afzal and i am a software developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
      <GoogleAnalytics gaId="G-6E5P5NHX1L" />
    </html>
  );
}
