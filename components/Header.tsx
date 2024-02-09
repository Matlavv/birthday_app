import { format } from "date-fns";

const Header = () => {
  const currentDate = format(new Date(), "dd/MM/yyyy");

  return (
    <header
      style={{ backgroundColor: "white", borderBottom: "1px solid black" }}
    >
      <h1 style={{ float: "left" }}>Citation et anniversaires</h1>
      <p style={{ float: "right" }}>{currentDate}</p>
      <div style={{ clear: "both" }}></div>
    </header>
  );
};

export default Header;
