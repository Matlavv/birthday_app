import Header from "@/components/Header";
import LeftColumn from "@/components/LeftColumn/LeftColumn";
import RightColumn from "@/components/RightColumn/RightColumn";
import localFont from "next/font/local";

const bison = localFont({ src: "../assets/fonts/bison.ttf" });

export default function Home() {
  return (
    <div className={bison.className}>
      <Header />
      <div className="flex justify-between p-5">
        {/* Left side */}
        <div className="w-1/2">
          <LeftColumn />
        </div>
        {/* Right side */}
        <div className="w-1/2">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}
