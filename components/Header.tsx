import { format } from "date-fns";
import React from "react";

const Header: React.FC = () => {
  const currentDate = format(new Date(), "dd/MM/yyyy");

  return (
    <header className="border-b-black border-2">
      <div className="flex justify-between items-center p-5">
        <h1 className="text-3xl">Citation et anniversaires</h1>
        <p className="text-3xl">{currentDate}</p>
      </div>
    </header>
  );
};

export default Header;
