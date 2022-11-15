import "./../../index.css";
import Card from "../UI/Card";
import React, { useState } from "react";

const CoinForm = (props) => {
  const [newCoinName, setNewCoinName] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCost, setNewCost] = useState("");
  const [newDate, setNewDate] = useState("");

  const changeCoin = (event) => {
    setNewCoinName(event.target.value);
  };

  const changeAmount = (event) => {
    setNewAmount(event.target.value);
  };

  const changeCost = (event) => {
    setNewCost(event.target.value);
  };

  const changeDate = (event) => {
    setNewDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const coinData = {
      coin: newCoinName,
      amount: newAmount,
      cost: newCost,
      date: new Date(newDate),
    };

    props.onSaveCoinData(coinData);
    setNewCoinName("");
    setNewAmount("");
    setNewCost("");
    setNewDate("");
  };

  return (
    <Card className="mb-8">
      <form onSubmit={submitHandler}>
        <table className="">
          <tbody className="">
            <tr className="stat flex place-items-center">
              <td className="">
                <input
                  type="text"
                  value={newCoinName}
                  onChange={changeCoin}
                  placeholder="Coin"
                  className="input input-bordered w-full max-w-xs pr-4"
                />
              </td>
              <td className="">
                <input
                  type="number"
                  value={newAmount}
                  onChange={changeAmount}
                  placeholder="Amount"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td className="">
                <input
                  type="number"
                  value={newCost}
                  onChange={changeCost}
                  placeholder="Cost in $USD"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td className="">
                <input
                  type="Date"
                  value={newDate}
                  onChange={changeDate}
                  placeholder="Date"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
              <td>
                <button
                  type="submit"
                  className="btn"
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Card>
  );
};

export default CoinForm;
