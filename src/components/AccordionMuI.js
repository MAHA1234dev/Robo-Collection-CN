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
import Sent from "./actions/Sent";
import IconSlider from "./slider/IconSlider";


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
            date: "10 Nov 2021",
            time: "12:06 PM",
            status: "Pending"
        },
        {
            date: "9 Nov 2021",
            time: "12:06 PM",
            status: "Sent"
        },
        {
            date: "10 Nov 2021",
            time: "12:06 PM",
            status: "Sent"
        },
        {
            date: "8 Nov 2021",
            time: "12:06 PM",
            status: "Cancelled"
        },
        {
            date: "6 Nov 2021",
            time: "12:06 PM",
            status: "Pending"
        },
        {
            date: "12 Nov 2021",
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
    const toggleClick = (status) => {
        console.log(status);
    }
    return (
        <>
            <div>
                <div style={{ width: "" }}>
                    {
                        emailsData.map((val, index) => {
                            return (
                                <>
                                    < Accordion expanded={current === index} onChange={changeState(index)}>
                                        <AccordionSummary onClick={() => toggleClick(val.status)} expandIcon={<ExpandMoreOutlinedIcon />}>
                                            <span style={{ fontWeight: "bold" }}>{val.date}</span>
                                            <span style={{ paddingLeft: "1%", color: "#BDC3C7" }}>{val.time}</span>
                                            <div
                                                style={{
                                                    marginLeft: "auto",
                                                    padding: "2px 3px 2px 3px",
                                                    borderRadius: "10%",
                                                    backgroundColor: `${val.status === "Sent" ? "#eaf9e8" : val.status === "Pending" ? "#fff5eb" : "#f8f8f8"}`,
                                                    color: `${val.status === "Sent" ? "#5ccd5a" : val.status === "Pending" ? "#f99b2b" : "#c0c2c1"}`,
                                                }}>
                                                {val.status}
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>
                                                <div className="d-flex" style={{ width: "97%", marginTop: "-2%" }}>
                                                    <Card className="col-4" style={{ backgroundColor: "#f8f9f9", borderRadius: "4%", }}>
                                                        <Typography className='px-2 text-muted' style={{ marginTop: "3%", fontSize: "85%" }}>
                                                            Reference
                                                        </Typography>
                                                        <Typography className='p-2 flex-grow-1' style={{ fontWeight: "bold", fontSize: "90%" }}>
                                                            LNHMBH00005678
                                                        </Typography>
                                                    </Card>

                                                    <Card className="col-4" style={{ backgroundColor: "#f8f9f9", borderRadius: "4%", marginLeft: "1%" }}>
                                                        <Typography className='px-2 text-muted' style={{ marginTop: "3%", fontSize: "85%" }}>
                                                            Medium
                                                        </Typography>
                                                        <Typography className='p-2 flex-grow-1' style={{ fontWeight: "bold", fontSize: "90%" }}>
                                                            Email
                                                        </Typography>
                                                    </Card>
                                                    <Card className="col-4" style={{ backgroundColor: "#f8f9f9", borderRadius: "4%", marginLeft: "1%" }}>
                                                        <Typography className='px-2 text-muted' style={{ marginTop: "3%", fontSize: "85%" }}>
                                                            Contact
                                                        </Typography>
                                                        <Typography className='p-2 flex-grow-1' style={{ fontWeight: "bold", fontSize: "90%" }}>
                                                            surikr@gmail.com
                                                        </Typography>
                                                    </Card>
                                                </div>
                                                <div className="d-flex" style={{ width: "97%", marginTop: "1%" }}>
                                                    <Card className="col-4" style={{ backgroundColor: "#f8f9f9", borderRadius: "4%", }}>
                                                        <div style={{ display: "flex" }}>
                                                            <Typography className='px-2 text-muted' style={{ marginTop: "3%", fontSize: "85%" }}>
                                                                Sentiment
                                                            </Typography>
                                                            <Typography style={{ marginTop: "3%", fontSize: "85%", marginLeft: "auto", paddingRight: "10px", fontWeight: "bold", fontSize: "90%" }}>
                                                                Positive
                                                            </Typography>
                                                        </div>
                                                        <div className="d-flex mx-2">
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                                                </svg>
                                                            </div>
                                                            <div className="mx-3 w-75">
                                                                <IconSlider />
                                                            </div>
                                                            <div style={{ marginLeft: "auto" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                                                </svg>
                                                            </div>
                                                        </div>


                                                    </Card>

                                                    <Card className="col-4" style={{ backgroundColor: "#f8f9f9", borderRadius: "4%", marginLeft: "1%" }}>
                                                        <Typography className='px-2 text-muted' style={{ marginTop: "3%", fontSize: "85%" }}>
                                                            Reasons
                                                        </Typography>
                                                        <Typography className='p-2 flex-grow-1' style={{ fontWeight: "bold", fontSize: "90%" }}>
                                                            Velit officia consequat
                                                        </Typography>
                                                    </Card>
                                                    <Card className="col-4" style={{ backgroundColor: "#f8f9f9", borderRadius: "4%", marginLeft: "1%" }}>
                                                        <Typography className='px-2 text-muted' style={{ marginTop: "3%", fontSize: "85%" }}>
                                                            Action status
                                                        </Typography>
                                                        <Typography className='p-2 flex-grow-1' style={{ fontWeight: "bold", fontSize: "90%" }}>
                                                            surikr@gmail.com
                                                        </Typography>
                                                    </Card>

                                                </div>
                                                <div style={{ marginTop: "1%" }}>
                                                    <Card className="" style={{ backgroundColor: "#f8f9f9", borderRadius: "4%", marginLeft: "" }}>
                                                        <Typography className='px-2 text-muted' style={{ margin: "2% 0 1% 0", fontSize: "85%" }}>
                                                            Message
                                                        </Typography>
                                                        <Typography className='px-2 pb-3' style={{ fontWeight: "bold", fontSize: "90%" }}>
                                                            Dear MACHINERY CLINIC, Greetings from Credit Nirvana! , EMI towards your Business Loans loan is returned
                                                            unpaid. Request you to please make the EMI payment immediately. You can make the payment by using the
                                                            payment link https://creditnirvana.ai/online-payment For any clarification, reach us on 1800-102-1021 or visit us at
                                                            https://creditnirvana.ai for payment. Ignore if already paid - Credit Nirvana
                                                        </Typography>
                                                    </Card>
                                                </div>
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
