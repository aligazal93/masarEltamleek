import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

const ibm = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
  display: "swap",
});

export const metadata = {
  title: {
    default: "شركة مسار التمليك القابضة",
    template: "%s | مسار التمليك",
  },
  description: "شريكك المالي الموثوق",

  keywords: ["استشارات مالية", "تمويل", "استثمار"],

  openGraph: {
    title: "شركة مسار التمليك",
    description: "شريكك المالي الموثوق",
    type: "website",
    locale: "ar_SA",
  },

  twitter: {
    card: "summary_large_image",
    title: "شركة مسار التمليك",
    description: "شريكك المالي الموثوق",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={ibm.className}>
      <body>
        {children}</body>
    </html>
  );
}