import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Sidebar (Client Component for interactivity) */}
          <Sidebar />

          <div className="flex flex-col flex-1">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 bg-gray-200 p-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
