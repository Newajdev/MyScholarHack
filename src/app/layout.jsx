import { Urbanist } from "next/font/google";
import "./globals.css";
import Container from "./component/Container";
import HeaderBG from "./component/HeaderBG";
import Navbar from "./component/Navbar";

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
        <HeaderBG Height={"h-[1152px]"}>
          <Container>
            <Navbar/>
          </Container>
        </HeaderBG>

        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
