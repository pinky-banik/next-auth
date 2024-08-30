import { Inter } from "next/font/google";
import "../globals.css";
import { dbConnect } from "@/service/mongo";
import Navbar from "@/components/Navbar";
import AuthProvider from "../providers/AuthProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StaySwift",
  description: "One Place Stop for Hospitability",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <Navbar sideMenu={true} />
        <main>
          {children}
          </main>
          </AuthProvider>
      </body>
    </html>
  );
}
