import Header from "@/components/Header";
import localFont from "next/font/local";

const bison = localFont({ src: "../assets/fonts/bison.ttf" });

export default function Home() {
  return (
    <div className={bison.className}>
      <Header />
    </div>
  );
}
