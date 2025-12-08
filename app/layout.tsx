import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sagar Adhikari - Software Engineer | Full Stack Developer",
  description: "Experienced Software Engineer with 7 years in web development. Specializing in Angular, React, Vue.js, Next.js, ASP.NET, and modern web technologies.",
  keywords: ["Software Engineer", "Full Stack Developer", "Frontend Developer", "Angular", "React", "Vue.js", "Next.js", "TypeScript", "Sagar Adhikari"],
  authors: [{ name: "Sagar Adhikari" }],
  openGraph: {
    title: "Sagar Adhikari - Software Engineer",
    description: "Experienced Software Engineer specializing in modern web development",
    url: "https://www.sagaradhikari.info.np",
    siteName: "Sagar Adhikari Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
