import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./nav";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from "./providers.client";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="height-88">
      <body className="h-full">
        <header className="header mt-2">
          <NavBar />
        </header>

        <div className="group mx-2 text-center h-full mt-12 bg-slate-900 text-white rounded-2xl md:w-auto md:mt-0">
          <Providers>
            {children}
            <SpeedInsights />
          </Providers>
        </div>
      </body>
    </html>
  );
}
