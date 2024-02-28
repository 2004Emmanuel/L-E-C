import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Hub with ALly",
  description: "Blog forthe purpose of sharing information, etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={`${inter.className} flex flex-col justify-between  w-10/12 m-auto h-screen`}> 
      <Navbar />

      {children}  
      <Footer />
      </body>
     
     
    </html>
  );
}
