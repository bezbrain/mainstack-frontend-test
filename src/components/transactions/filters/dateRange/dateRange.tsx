import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { calendarFormat } from "../../../../utils/convertDateFormat";
import styled from "styled-components";
import {
  endDateRange,
  startDateRange,
} from "../../../../management/features/filteringSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

const DateRange = () => {
  const [isStartCloseCalendar, setIsStartCloseCalendar] = useState(true);

  const [isEndCloseCalendar, setIsEndCloseCalendar] = useState(true);

  const [startValue, setStartValue] = useState<Value>(new Date());
  const [endValue, setEndValue] = useState<Value>(new Date());

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    calendarFormat(startValue);
  }, [startValue]);

  const handleStartCalenderClick = () => {
    setIsStartCloseCalendar(!isStartCloseCalendar);
  };

  const handleEndCalenderClick = () => {
    setIsEndCloseCalendar(!isEndCloseCalendar);
  };

  const shouldCloseCalendar = ({ reason }: { reason: string }) => {
    // Close the calendar only if the reason is not "select" (i.e., clicking on a date)
    return reason !== "select";
  };

  const shouldOpenCalendar = ({ reason }: { reason: string }) => {
    // Open the calendar only if the reason is "focus"
    return reason === "focus";
  };

  useEffect(() => {
    console.log("Change");

    dispatch(startDateRange(startValue));
    dispatch(endDateRange(endValue));
  }, [startValue, endValue]);

  return (
    <DateWrapper className="text-[#141417]">
      <h2 className="font-extrabold mb-1">Date Range</h2>
      <div className="flex gap-2">
        {/* Start Date */}
        <div className="w-1/2">
          <DatePicker
            calendarIcon={<FaAngleDown />}
            calendarClassName="w-full bg-white rounded-2xl border-none shadow-xl absolute top-[50px]"
            className="h-[50px] w-full cursor-pointer z-20"
            // closeCalendar={isStartCloseCalendar}
            isOpen={isStartCloseCalendar}
            onClickDay={() => setIsStartCloseCalendar(false)} // Close the start date calendar when a day is clicked
            disabled={true}
            onClick={handleStartCalenderClick}
            value={startValue}
            onChange={setStartValue}
            onCalendarClose={() => setIsStartCloseCalendar(false)} // Close the start date calendar when it is closed
            onCalendarOpen={() => setIsStartCloseCalendar(true)}
            shouldOpenCalendar={shouldOpenCalendar}
            shouldCloseCalendar={shouldCloseCalendar}
            format="y-MM-dd"
          />
        </div>
        {/* End Date */}
        <div className="w-1/2">
          <DatePicker
            calendarIcon={<FaAngleDown />}
            calendarClassName="w-full bg-white rounded-2xl border-none shadow-xl absolute top-[50px] right-1/2 translate-x-1/2"
            className="h-[50px] w-full cursor-pointer z-20"
            // closeCalendar={isEndCloseCalendar}
            isOpen={isEndCloseCalendar}
            onClickDay={() => setIsEndCloseCalendar(false)} // Close the end date calendar when a day is clicked
            disabled={true}
            onClick={handleEndCalenderClick}
            value={endValue}
            onChange={setEndValue}
            onCalendarClose={() => setIsEndCloseCalendar(false)} // Close the end date calendar when it is closed
            format="y-MM-dd"
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
