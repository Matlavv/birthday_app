import "./AnniversaryCircle.css";

const AnniversaryCircle = () => {
  return (
    <div
      className="anniversary-circle"
      style={{ animation: "spin 20s linear infinite" }}
    >
      <svg viewBox="0 0 100 100" className="anniversary-svg">
        <path
          id="curve"
          fill="transparent"
          d="
          M 50, 50
          m -37, 0
          a 37,37 0 1,1 74,0
          a 37,37 0 1,1 -74,0
        "
        />
        <text
          width="100"
          className="tracking-[5.5px]"
          style={{
            fontSize: "16px",
            fill: "#DF80AC",
            stroke: "black",
            strokeWidth: "0.7px",
          }}
        >
          <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
            Joyeux Anniversaire
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default AnniversaryCircle;
