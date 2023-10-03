import "../App.css";
export const Button = ({ btntext, info, backgroundColor }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <div className="btn-cont">
      <button className="btn" style={buttonStyle}>
        {btntext}
      </button>
      <span className="info-box">{info}</span>
    </div>
  );
};
