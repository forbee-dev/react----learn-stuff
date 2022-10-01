import "./../../index.css";

const DcaDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="w-32 h-32 shadow border rounded-lg bg-zinc-800 p-2.5">
      <div className="flex justify-center text-4xl font-bold text-white">
        {day}
      </div>
      <div className="flex justify-center text-2xl  text-white">{month}</div>
      <div className="flex justify-center text-2xl  text-white">{year}</div>
    </div>
  );
};

export default DcaDate;
