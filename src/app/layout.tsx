import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/header';
import Footer from '../components/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ヒトリゴト",
  description: "ヒトリゴトを呟き、誰かに届くサービスです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" prefix="og: http://ogp.me/ns#">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div className="l-content">
          {children}
          { /** トースト通知 */}
          <ToastContainer position="bottom-right"/>
        </div>
        <Footer />
      </body>
    </html>
  );
}
