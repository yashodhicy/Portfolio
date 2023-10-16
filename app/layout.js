import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex-col bg-slate-950 font-mono rounded-2xl mt-5 mx-4">
        <header className="header">
          <nav className=" flex items-center justify-around mb-5 mx-2 bg-slate-900 text-white rounded-2xl h-8 ">
            <ul className="flex flex-row space-x-5">
              <li >
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/aboutme">About me</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="group mx-2 text-center bg-slate-900 text-white rounded-2xl">{children}</div>
      </body>
    </html>
  );
}
