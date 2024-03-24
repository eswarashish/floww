import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FLOWW",
  description: "Floww offers a user-friendly interface that simplifies the process of creating flowcharts, making it accessible to both beginners and experienced users alike.",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <link rel="icon" href="/FLOWW-removebg-preview.png" />
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
