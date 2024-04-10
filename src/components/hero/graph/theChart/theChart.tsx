import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { RootState } from "../../../../store";
import { completeNumberFormat } from "../../../../utils/convertDateFormat";

const TheChart = () => {
  const { transactions } = useSelector(
    (store: RootState) => store.transactionStore
  );

  const startDate = new Date(2022, 2, 1).getTime(); // Note: Months are zero-based, so March is represented as 2

  const endDate = new Date(2022, 2, 31).getTime();

  const filterTrans = transactions?.filter((each) => {
    const convertDate = completeNumberFormat(each.date);

    return convertDate >= startDate && convertDate <= endDate;
  });
  // console.log(filterTrans);

  const data = [
    { name: "Mar 1, 2022", count: filterTrans[0]?.amount },
    { name: "", count: filterTrans[1]?.amount },
    { name: "", count: filterTrans[2]?.amount },
    { name: "", count: filterTrans[3]?.amount },
    { name: "Mar 31, 2022", count: filterTrans[4]?.amount },
  ];

  return (
    <ResponsiveContainer className="h-[400px] w-[600px] sm:w-full">
      <LineChart className="w-full" height={400} data={data}>
        <CartesianGrid vertical={false} horizontal={false} />
        <Line type="monotone" dataKey="count" stroke="#ffaa82" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TheChart;
