import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "피플네트웍스 - 소상공인 전문 홈페이지 제작",
  description: "소상공인을 위한 전문 홈페이지 제작 서비스. 신뢰할 수 있는 제작 사례와 합리적인 가격으로 시작하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="min-h-screen flex flex-col bg-slate-950 text-white relative overflow-x-hidden">
        {/* Background gradient effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

