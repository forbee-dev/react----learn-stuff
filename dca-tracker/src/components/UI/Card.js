import "./../../index.css";

const Card = (props) => {
  const classes =
    "container mx-auto border bg-base-300 rounded-lg px-10 pt-10 " +
    props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
