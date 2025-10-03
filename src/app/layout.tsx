import { ThemeProvider } from "@/context/ThemeContext";
import { BooksProvider } from "@/context/BooksContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <BooksProvider>
            <Navbar />
            {children}
          </BooksProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
