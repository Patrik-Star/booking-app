import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "../providers/ConvexClientProvider";
import Footer from "@/components/layout/footer";
import TopNavigationBar from "@/components/navigation/top-navigation-bar";
import SideNavigationBar from "@/components/navigation/side-navigation-bar";
import { Authenticated } from "convex/react";
import AuthenticatedSideNavigation from "@/components/navigation/AuthenticatedSideNavigationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App Title",
  description: "My app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <TopNavigationBar />
          <div className="sm:grid grid-cols-[240px_minmax(0,1fr)]"> 
            <AuthenticatedSideNavigation />
            {children}
          </div>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}


{/* <div className="sm:grid grid-cols-[240px_minmax(0,1fr)]"> */ }
