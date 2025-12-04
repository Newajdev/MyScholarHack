import { Urbanist } from "next/font/google";
import "./globals.css";
import Container from "./component/LandingComponent/Container";
import Header from "./component/LandingComponent/Header";
import Footer from "./component/LandingComponent/Footer";

const urbanist = Urbanist({
  subsets: ["urbanist"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "MyScholarHack",
  description:
    " MyScholarHack uses your real stories, achievements, and writing  voice to help you create authentic scholarship essays that win. No made-up  experiences. No generic AI fluff. Just your unique story, told powerfully",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${urbanist.className} antialiased`}>

        <Header/>        

          {children}
      
        <Footer/>
      </body>
    </html>
  );
}
