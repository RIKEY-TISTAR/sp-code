import { Inter } from "next/font/google";
import "./globals.css";
// import { Sidebar } from "lucide-react";
// import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Header } from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SP-code",
  description: "Информационный портал",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className + ' w-full bg-blue-50 text-stone-800 text-base'}>
        <div className="__next">
          <div className="w-full p-5 flex">
            <Sidebar/>
            <div className="w-full px-5">
              <Header/>
              <main className="w-full" id="main">
                <div className="w-full" id="main-content">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
