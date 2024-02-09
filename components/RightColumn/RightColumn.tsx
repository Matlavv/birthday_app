import GifBar from "../LeftColumn/GifBar";
import Quote from "../LeftColumn/Quote";

const RightColumn = () => {
  return (
    <div className="flex-col">
      <div className="mt-4 ml-8 w-5/6 ">
        <Quote />
      </div>
      <div className="mt-8 ml-8 w-5/6">
        <GifBar />
      </div>
    </div>
  );
};

export default RightColumn;
