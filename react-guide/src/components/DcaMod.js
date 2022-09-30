import DcaItem from "./DcaItem";

const DcaMod = (props) => {
  return (
    <div>
      <DcaItem
        coin={props.items[0].coin}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></DcaItem>
      <DcaItem
        coin={props.items[0].coin}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></DcaItem>
      <DcaItem
        coin={props.items[0].coin}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></DcaItem>
    </div>
  );
};

export default DcaMod;
