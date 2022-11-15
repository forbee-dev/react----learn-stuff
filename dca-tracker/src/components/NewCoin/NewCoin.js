import "./../../index.css";
import CoinForm from "./CoinForm";

const NewCoin = (props) => {
  const saveCoinDataHandler = (newCoinData) => {
    const coinData = { ...newCoinData, id: Math.random().toString() };
    props.onAddCoin(coinData);
  };

  return (
    <div className="place-content-center">
      <CoinForm onSaveCoinData={saveCoinDataHandler}></CoinForm>
    </div>
  );
};

export default NewCoin;
