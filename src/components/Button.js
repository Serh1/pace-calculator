import "./Button.css";

const Button = ({ name, handleClick }) => {
  return (
    <div onClick={() => handleClick(name)} className="button-wrapper">
      {name}
    </div>
  );
};

export default Button;
