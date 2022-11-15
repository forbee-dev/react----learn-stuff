import DcaItem from "./DcaItem";
import Card from "../UI/Card";

const DcaMod = (props) => {
  return (
    <Card className="items">
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
    </Card>
  );
};

export default DcaMod;
