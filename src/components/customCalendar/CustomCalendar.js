import React, { useEffect, useState } from 'react'
import { format, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, parse, isSameMonth, isSameDay } from 'date-fns'
export default function CastomCalendar() {

    const data = [{

        title: "SARFAESI-Case ID :8",
        start: "2022-01-28",
        end: "2022-01-29",
        calenderType: "Reminders",

    }, {
        title: "SARFAESI-Case ID :8",
        start: "2022-03-24",
        end: "2022-03-25",

    }, {
        title: "SARFAESI-Case ID :8",
        start: "2022-04-23",
        end: "2022-04-24",

    }, {
        title: "SARFAESI-Case ID :8",
        start: "2022-04-23",
        end: "2022-04-24",

    }, {
        title: "SARFAESI-Case ID :9",
        start: "2022-01-28",

    }, {
        title: "SARFAESI-Case ID :9",
        start: "2022-03-24",

    }, {
        title: "SARFAESI-Case ID :9",
        start: "2022-04-23",



    }, {
        title: "SARFAESI-Case ID :9",
        start: "2022-04-23",



    }, {
        title: "Arbitration-Case ID :11",
        start: "2022-02-07",



    }, {
        title: "Arbitration-Case ID :11",
        start: "2022-03-09",



    }, {
        title: "Section 138-Case ID :12",
        start: "2022-02-22",



    },
    ]

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    const renderHeader = () => {
        const dateFormat = "dd MMMM yyyy";
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                        {format(currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end" onClick={nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );

    }
    const renderDays = () => {
        const dateFormat = "EEEE";
        const days = [];
        let startDate = startOfWeek(currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }
    const renderCells = (props) => {
        // const { currentMonth :currentMonth , selectedDate : selectedDate} 
        // let currentMonth = currentMonth
        // const {selectedDate} = selectedDate
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                days.push(
                    <div
                        className={`col cell ${!isSameMonth(day, monthStart)
                            ? "disabled"
                            : isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                    // onClick={() => onDateClick(parse(cloneDay))}
                    >
                        {/* <button>fjngnj</button> */}
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                        <span></span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">
            <div>
                {rows}
            </div>

        </div>;
    }

    const renderData = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const rows = [];
        let finalData = data
        let days = [];
        let day = startDate;
        console.log(selectedDate);
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                // formattedDate = format(day, dateFormat);
                finalData.forEach((val) => {
                    if (val.start === monthStart.getMonth())
                        days.push(
                            <div
                                className={`col cell ${!isSameMonth(day, monthStart)
                                    ? "disabled"
                                    : isSameDay(day, selectedDate) ? "selected" : ""
                                    }`}
                                key={day}
                            >
                                {/* <button>fjngnj</button> */}
                                {/* <span className="number">{formattedDate}</span> */}
                                <span>{val.title}</span>
                                {/* <span className="bg">{formattedDate}</span> */}

                                <span></span>
                            </div>
                        );
                })
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">
            <div>
                {rows}
            </div>

        </div>;
    }

    const onDateClick = (day) => {
        setSelectedDate(day)
    }

    const nextMonth = () => {
        setCurrentMonth(addDays(currentMonth, 1))
    }
    
    const prevMonth = () => {
        setCurrentMonth(addDays(currentMonth, -1))
    }
    
    return (
        <div className="calendar">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
            {renderData()}
        </div>
    )
}