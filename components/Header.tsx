import { format } from "date-fns";
import { fr } from "date-fns/locale";
import React from "react";

const Header: React.FC = () => {
  const now = new Date();
  const formattedDate = format(now, "EEEE dd MMMM", { locale: fr });
  const formattedTime = format(now, "HH:mm", { locale: fr });

  return (
    <header className="border-b-black border-2">
      <div className="flex justify-between items-center p-5">
        <h1 className="text-3xl">Citation et anniversaires</h1>
        <p className="text-3xl">{`${formattedDate} | ${formattedTime}`}</p>
      </div>
    </header>
  );
};

export default Header;
