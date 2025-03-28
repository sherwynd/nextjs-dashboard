import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Analytic Dashboard",
  description: "Sherwynd Portfolio App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Client Component for interactivity */}
          <Sidebar />

          <div className="flex flex-1 flex-col">
            <Header />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-gray-200 p-4 dark:bg-gray-600">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
