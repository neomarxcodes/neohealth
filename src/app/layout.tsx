import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import UserSync from "@/components/UserSync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeoHealth - Telemedicine for Specialists",
  description: "Connect with trusted specialists, book appointments, and manage your care—all online with NeoHealth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {
        colorPrimary: "#008cb4",
        colorBackground: "#DBDEE1",
        colorText: "#121113",
        colorTextSecondary: "#121113",
        colorInputBackground:"#DBDEE1",
      },
  }}>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <UserSync />
        {children}
      </body>
      </html>
    </ClerkProvider>
  );
}
