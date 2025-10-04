// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hành Trình 30 Năm",
  description: "Website lịch sử...",
  icons: {
    icon: "/favicon.ico",       // hoặc "/favicon.png"
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",     // dành cho iOS
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
