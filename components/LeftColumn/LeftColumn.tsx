import AnniversaryCircle from "./AnniversaryCircle";

const LeftColumn = () => {
  return (
    <div className="flex flex-col justify-between mt-10">
      <div className="flex flex-1 items-center justify-center">
        <AnniversaryCircle />
      </div>
      <h1 className="text-center text-4xl md:text-8xl lg:text-9xl mb-4 mt-40">
        <span>Mathis Laversin</span>
      </h1>
    </div>
  );
};

export default LeftColumn;
