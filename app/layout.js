import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "John Alencar",
  description: "Porifolio Pessoal de Programação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={inter.className}> 
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
