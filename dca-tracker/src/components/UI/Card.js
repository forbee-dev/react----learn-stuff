import "./../../index.css";

const Card = (props) => {
  const classes =
    "container mx-auto border bg-base-300 rounded-lg p-10 " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
