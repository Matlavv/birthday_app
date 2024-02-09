import Header from "@/components/Header";
import LeftColumn from "@/components/LeftColumn/LeftColumn";
import RightColumn from "@/components/RightColumn/RightColumn";
import localFont from "next/font/local";

const bison = localFont({ src: "../assets/fonts/bison.ttf" });

export default function Home() {
  return (
    <div className={`${bison.className} min-h-screen flex flex-col`}>
      <Header />
      <div className="flex flex-grow justify-between">
        {/* Left side */}
        <div className="w-1/2 bg-myPink h-100">
          <LeftColumn />
        </div>
        {/* Vertical bar */}
        <div className="w-0.5 bg-black self-stretch"></div>
        {/* Right side */}
        <div className="w-1/2 mt-4">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}
