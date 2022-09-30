import "./../index.css";
import DcaDate from "./DcaDate";

const DcaItem = (props) => {
  return (
    <div className="container mx-auto stats stats-vertical lg:stats-horizontal shadow border bg-base-300">
      <table>
        <tbody>
          <tr className="stat flex h-38 place-items-center">
            <td className="stat-title basis-1/12 leading-10 ">
              <DcaDate date={props.date} />
            </td>
            <td className="flex justify-center stat-title grow basis-1/2 leading-10 ">
              {props.coin}
            </td>
            <td className="flex justify-center stat-title grow basis-1/2 leading-10 ">
              {props.amount}
            </td>
            <td className="stat-title leading-10">Up / Down </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DcaItem;
