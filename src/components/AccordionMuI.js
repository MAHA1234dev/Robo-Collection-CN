import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";


function AccordionMuI() {
    const [current, setcurrent] = useState(-1);
    const [emailsData, setEmailsData] = useState([])
    const emails = [
        {
            date: "11 Nov 2021",
            time: "12:06 PM",
            status: "Sent"
        },
        {
            date: "11 Nov 2021",
            time: "12:06 PM",
            status: "Pending"
        },
        {
            date: "11 Nov 2021",
            time: "12:06 PM",
            status: "Sent"
        },
        {
            date: "11 Nov 2021",
            time: "12:06 PM",
            status: "Sent"
        },
        {
            date: "11 Nov 2021",
            time: "12:06 PM",
            status: "Cancelled"
        },
        {
            date: "11 Nov 2021",
            time: "12:06 PM",
            status: "Pending"
        },
    ];
    useEffect(() => {
        setEmailsData(emails)
    }, [])
    const changeState = (panel) => (e, newValue) => {
        setcurrent(newValue ? panel : -1);
    };
    return (
        <>
            <div style={{}}>
                <div style={{ width: "100%" }}>
                    {
                        emailsData.map((val, index) => {
                            return (
                                <>
                                    < Accordion expanded={current === index} onChange={changeState(index)}>
                                        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                                            <span style={{ fontWeight: "bold" }}>{val.date}</span>
                                            <span style={{ paddingLeft: "1%", color: "#BDC3C7" }}>{val.time}</span>
                                            <div
                                                style={{
                                                    marginLeft: "auto",
                                                    padding: "2px 3px 2px 3px",
                                                    borderRadius: "10%",
                                                    backgroundColor: `${val.status === "Sent" ? "#E5FCE1" : val.status === "Pending" ? "#F8DBB4" : "#eff1f1"}`,
                                                    color: `${val.status === "Sent" ? "green" : val.status === "Pending" ? "#F3981C" : "#919598"}`
                                                }}>
                                                {val.status}
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>
                                                dmcksdmlkmklm
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default AccordionMuI;
