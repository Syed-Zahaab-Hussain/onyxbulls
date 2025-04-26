import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Onyxbulls",
  description: "Your Crepto and trading learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
