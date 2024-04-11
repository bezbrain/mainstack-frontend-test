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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import {
  Value,
  endDateValue,
  startDateValue,
} from "../../../../management/features/filtersSlice";

const DateRange = () => {
  const {
    date: { startValue, endValue },
  } = useSelector((store: RootState) => store.filterStore);

  const [isStartCloseCalendar, setIsStartCloseCalendar] = useState(true);

  const [isEndCloseCalendar, setIsEndCloseCalendar] = useState(true);

  const dispatch = useDispatch<AppDispatch>();

  // FORMAT DATE EVERY TIME THE START DATE VALUE CHANGES
  useEffect(() => {
    calendarFormat(startValue);
  }, [startValue]);

  // DATE START TOGGLE
  const handleStartCalenderClick = () => {
    setIsStartCloseCalendar(!isStartCloseCalendar);
  };

  // DATE END TOGGLE
  const handleEndCalenderClick = () => {
    setIsEndCloseCalendar(!isEndCloseCalendar);
  };

  // HANDLE CALENDAR CHANGE
  const handleStartDateChange = (startValue: Value) => {
    dispatch(startDateValue(startValue));
  };

  const handleEndDateChange = (endValue: Value) => {
    dispatch(endDateValue(endValue));
  };

  useEffect(() => {
    dispatch(startDateRange(startValue));
    dispatch(endDateRange(endValue));
  }, [startValue, endValue]);

  return (
    <DateWrapper className="text-[#141417]">
      <h2 className="font-extrabold mb-1">Date Range</h2>
      <div className="iPhone:flex gap-2">
        {/* Start Date */}
        <div className="iPhone:w-1/2">
          <DatePicker
            calendarIcon={<FaAngleDown />}
            calendarClassName="w-full bg-white rounded-2xl border-none shadow-xl absolute top-[20px]"
            className="h-[50px] w-full cursor-pointer z-30"
            onClick={handleStartCalenderClick}
            value={startValue}
            onChange={handleStartDateChange}
            format="y-MM-dd"
          />
        </div>
        {/* End Date */}
        <div className="mt-2 iPhone:w-1/2 iPhone:mt-0">
          <DatePicker
            calendarIcon={<FaAngleDown />}
            calendarClassName="w-full bg-white rounded-2xl border-none shadow-xl absolute top-[20px] right-1/2 translate-x-1/2"
            className="h-[50px] w-full cursor-pointer z-20"
            onClick={handleEndCalenderClick}
            value={endValue}
            onChange={handleEndDateChange}
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
    background: inherit !important;
  }

  input:focus {
    /* border: 2px solid red; */
    border: 1px solid #000;
    outline: none;
    height: fit-content;
    border-radius: 3px;
    background-color: inherit;
  }
`;
