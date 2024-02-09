import Image from "next/image";
import spiderMan from "../../assets/gif/sad-spiderman.gif";

const GifBar = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="p-10 border border-black rounded-xl shadow-xl shadow-myPink w-full flex justify-center items-center">
        <Image
          src={spiderMan}
          alt="my gif"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>
      <div className="w-full mt-4">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default GifBar;
