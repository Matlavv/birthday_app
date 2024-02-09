import GifBar from "./GifBar";
import Quote from "./Quote";

const RightColumn = () => {
  return (
    <div className="flex-col">
      <div className="mt-5 ml-8 w-5/6 ">
        <Quote />
      </div>
      <div className="mt-5 ml-8 w-5/6">
        <GifBar />
      </div>
    </div>
  );
};

export default RightColumn;
