import "./../index.css";

const DcaDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="shadow border rounded-lg bg-zinc-800 p-2.5">
      <div className="flex justify-center text-4xl font-bold text-white">
        {day}
      </div>
      <div className="flex justify-center text-2xl">{month}</div>
      <div className="flex justify-center text-2xl">{year}</div>
    </div>
  );
};

export default DcaDate;
