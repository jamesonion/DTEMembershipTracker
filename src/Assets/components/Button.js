import PropTypes from "prop-types";

const Button = ({ text, name }) => {
  //Figure out way to get onclick to add to a list
  // or somehow get the input from the given username and passwords
  const onClick = (e) => {
    let name = document.getElementById("name");
    console.log(name);
  };

  return (
    <button classname="btn" onClick={onClick} name={name}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
};
export default Button;
