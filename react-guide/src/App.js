import DcaMod from "./components/DcaMod";
import "./index.css";

const App = () => {
  const dca = [
    {
      id: "1",
      coin: "ETH",
      amount: "300",
      date: new Date(),
    },
  ];

  return (
    <div className="container mx-auto ">
      <h1 className="text-center text-4xl p-6 font-bold">Crypto DCA Tracker</h1>
      <div className="divider"></div>
      <DcaMod items={dca}></DcaMod>
    </div>
  );
};

export default App;
