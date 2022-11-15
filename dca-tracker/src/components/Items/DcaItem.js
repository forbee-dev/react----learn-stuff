import "./../../index.css";
import DcaDate from "./DcaDate";
import { useState } from "react";

const DcaItem = (props) => {
  const [coin, setCoin] = useState(props.coin);
  const [amount, setAmount] = useState(props.amount);
  const [date, setDate] = useState(props.date);

  const dateHandler = () => {
    setDate("date");
  };
  const coinHandler = () => {
    setCoin("updated");
  };
  const amountHandler = () => {
    setAmount("new Amount");
  };

  return (
    <div className="container mx-auto stats stats-vertical lg:stats-horizontal shadow border bg-base-300 mb-8">
      <table>
        <tbody>
          <tr className="stat flex h-38 place-items-center">
            <td className="stat-title basis-1/12 leading-10 ">
              <DcaDate date={date} />
            </td>
            <td className="flex justify-center stat-title grow basis-1/2 leading-10 ">
              {coin}
            </td>
            <td className="flex justify-center stat-title grow basis-1/2 leading-10 ">
              {amount}
            </td>
            <td className="stat-title leading-10">Up / Down </td>
          </tr>
          <tr className="stat flex h-38 place-items-center">
            <td className="stat-title basis-1/12 leading-10 ">
              <button
                className="btn"
                onClick={dateHandler}
              >
                Change Date
              </button>
            </td>
            <td className="flex justify-center stat-title grow basis-1/2 leading-10 ">
              <button
                className="btn"
                onClick={coinHandler}
              >
                Change Coin
              </button>
            </td>
            <td className="flex justify-center stat-title grow basis-1/2 leading-10 ">
              <button
                className="btn"
                onClick={amountHandler}
              >
                Change Amount
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DcaItem;
