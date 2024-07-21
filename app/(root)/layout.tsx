import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Career Resumes",
  description: "MOdern Ai Resume Builder ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
