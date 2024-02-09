import Image from "next/image";
import image from "../../assets/gif/image.png"; //possibilité de remplacer par des gifs

const GifBar = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="p-10 border border-black rounded-xl shadow-md shadow-myPink w-full flex justify-center items-center">
        <Image
          src={image}
          alt="my gif"
          width={250}
          height={250}
          className="rounded-xl"
        />
      </div>
      <div className="w-3/4 mt-7 flex items-center">
        <span className="text-lg font-semibold">01</span>
        <div className="flex-grow mx-4 bg-gray-200 h-2 rounded-full relative">
          <div className="progress-bar rounded-full absolute bg-myPink h-full"></div>
        </div>
        <span className="text-lg font-semibold">03</span>
      </div>
    </div>
  );
};

export default GifBar;
