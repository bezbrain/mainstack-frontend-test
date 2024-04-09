import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { calendarFormat } from "../../../../utils/convertDateFormat";
import styled from "styled-components";

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

const DateRange = () => {
  const [isStartCloseCalendar, setIsStartCloseCalendar] = useState(true);

  const [isEndCloseCalendar, setIsEndCloseCalendar] = useState(true);

  const [startValue, setStartValue] = useState<Value>(new Date());
  const [endValue, setEndValue] = useState<Value>(new Date());

  useEffect(() => {
    calendarFormat(startValue);
  }, [startValue]);

  const handleStartCalenderClick = () => {
    setIsStartCloseCalendar(!isStartCloseCalendar);
  };

  const handleEndCalenderClick = () => {
    setIsEndCloseCalendar(!isEndCloseCalendar);
  };

  return (
    <DateWrapper className="text-[#141417]">
      <h2 className="font-extrabold mb-1">Date Range</h2>
      <div className="flex gap-2">
        {/* Start Date */}
        <div className="w-1/2">
          <DatePicker
            calendarIcon={<FaAngleDown />}
            className="h-[50px] w-full cursor-pointer z-20"
            closeCalendar={isStartCloseCalendar}
            isOpen={!isStartCloseCalendar}
            disabled={true}
            onClick={handleStartCalenderClick}
            value={startValue}
            onChange={setStartValue}
          />
        </div>
        {/* End Date */}
        <div className="w-1/2">
          <DatePicker
            calendarIcon={<FaAngleDown />}
            className="h-[50px] w-full cursor-pointer z-20"
            closeCalendar={isEndCloseCalendar}
            isOpen={!isEndCloseCalendar}
            disabled={true}
            onClick={handleEndCalenderClick}
            value={endValue}
            onChange={setEndValue}
          />
        </div>
      </div>
    </DateWrapper>
  );
};

export default DateRange;

const DateWrapper = styled.div`
  input {
    /* border: 2px solid red;
    display: none;
    border-radius: 10px; */
  }
`;
