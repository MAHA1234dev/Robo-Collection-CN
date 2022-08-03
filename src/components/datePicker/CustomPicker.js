import React, { useState } from "react"
import { withFormik } from "formik";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function CustomPicker() {
    const [startDate, setStartDate] = useState(null);
    return (
        <div>
            <DatePicker
                // className="date"
                showYearDropdown
                // dateFormatCalendar="MMM"
                dateFormatCalendar={"MMMM"}
                // yearDropdownItemNumber={100}
                // scrollableYearDropdown
                selected={startDate}
                showMonthYearDropdown
                onChange={(date) => setStartDate(date)} />
        </div>
    )
}
// const ValidatedForm = withFormik({

// })(CustomPicker);
// const rootElement = document.getElementById("root");
// ReactDOM.render(<ValidatedForm />, rootElement);