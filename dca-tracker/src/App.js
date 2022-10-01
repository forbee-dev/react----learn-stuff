import Card from "./components/UI/Card";
import DcaMod from "./components/Items/DcaMod";
import Theme from "./components/UI/Theme";
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
    <div className="container mx-auto min-w-min">
      <h1 className="text-center text-4xl p-6 font-bold">Crypto DCA Tracker</h1>
      <div className="divider"></div>
      <Card>
        <DcaMod items={dca}></DcaMod>
      </Card>
      <Theme></Theme>
    </div>
  );
};

export default App;
