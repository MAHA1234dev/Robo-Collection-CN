import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Box, Button, Card, CardContent, Grid, Paper, Slider, Tabs, Typography } from '@material-ui/core';
import React, { useEffect, useState } from "react"
import CustomSlider from './slider/CustomSlider';
import Car from './images/Car.png'
import Cap from './images/Cap.png'
import Home from './images/Home.png'
import rupee from './images/icons/rupee.png'
import TrailHistory from './activities/TrailHistory';
import CustomizedCheckbox from './checkBox/CustomizedCheckbox';
export default function DigitalCollectionExecutiopnDetails() {
    const actions = [
        {

            media: "All",
            count: "3,567"
        },
        {

            media: "SMS",
            count: "1,467"
        },
        {

            media: "WhatsApp",
            count: 490

        },
        {

            media: "Email"
        },
        {
            media: "courier",

        },
        {
            media: "courier",

        }, {
            media: "Email",

        },
        {
            media: "courier",

        },
        {
            media: "courier",

        }
    ];
    const details = [
        {
            name: "Deshmukh Dairy Milk",
            color: "red",
            place: "New Delhi",
            amount: "58,734",
            icon: "home"
        },
        {
            name: "Vaishnavi Caterers",
            color: "green",
            place: "PUNE",
            amount: " 1,12,234",
            icon: "car"
        },
        {
            name: "Mr Surinder Kumar",
            color: "red",
            place: "BANGALORE",
            amount: "23,42,355",
            icon: "school"
        },
        {
            name: "Jain Warehousing",
            color: "blue",
            place: "HYDRABAD",
            amount: "98,76,776",
            icon: "home"
        },
        {
            name: "Mr Surinder Kumar",
            color: "green",
            place: "NEW DELHI",
            amount: " 1,12,234",
            icon: "car"
        },
        {
            name: "shubham",
            color: "red",
            place: "MUMBAI",
            amount: "23,42,355",
            icon: "home"
        },
        {
            name: "sachin",
            color: "blue",
            place: "GURGAON",
            amount: "98,76,776",
            icon: "school"
        },
    ]
    const activities = [
        {
            activity: "Summary"
        },
        {
            activity: "Allocation"
        },
        {
            activity: "Demographics"
        },
        {
            activity: "Status"
        },
        {
            activity: "Trail history"
        },
        {
            activity: "Payments"
        },

    ]

    const carImage = Car
    const homeImg = Home
    const rupeeeIcon = rupee
    const capImg = Cap
    const [axctionColor, setActionColor] = useState('')
    const [finalData, setFinalData] = useState([])
    const [detailsData, setDetailsData] = useState([])
    const [activityData, setActivityData] = useState([]);
    const [isActivity, setIsActivity] = useState('Summary')
    const [bgColor, setBgColor] = useState("")
    const handleActionClick = (id) => {
        setActionColor(id)
    }
    const handleClick = (id, item) => {
        setBgColor(id)
        setIsActivity(item)
    }
    useEffect(() => {
        setFinalData([...actions])
        setDetailsData([...details])
        setActivityData([...activities])
    }, [])
    function valuetext(value) {
        return `${value}°C`;
    }
    return (
        <div className="d-flex " style={{ width: "100%" }}>
            <div className='' style={{ width: "24%", height: '100vh', overflowY: 'scroll', margin: "0 0 0 5px" }}>
                <div className="d-flex mt-4 mx-3 ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="blue"
                            class="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="7" r="7" />
                            <ChevronLeftIcon style={{ color: 'white', marginLeft: "-52%", fontSize: "40px" }} />

                        </svg>
                    </div>
                    <h5 style={{ marginLeft: "2%" }}>
                        Robo collection actions
                    </h5>

                </div>

                <Box style={{ margin: "5% 5% 0 5%" }}>
                    <Tabs
                        variant="scrollable"
                        aria-label="scrollable auto tabs example"
                        disableFocusRipple={false}
                        textColor="primary"
                        scrollButtons={false}

                    >
                        {
                            finalData.map((val, index) => {
                                return (
                                    <div className='mx-1'>
                                        <Button onClick={() => handleActionClick(index)}
                                            style={{
                                                color: axctionColor === index ? "white" : "#919598",
                                                borderRadius: "6px",
                                                backgroundColor: axctionColor === index ? "#133a4b" : "#eff1f1",
                                            }}
                                            variant="contained" >
                                            <div className='d-flex'>
                                                <span> {val.media}</span><span style={{ marginLeft: "5px" }} >{val.count}</span>
                                            </div>
                                        </Button>
                                    </div>
                                )
                            })
                        }
                    </Tabs>
                </Box>
                <div style={{ margin: "0 6% 5% 6%" }}>
                    {
                        detailsData.map((val, index) => {
                            return (
                                <>
                                    <Card style={{ marginTop: "5%", backgroundColor: "#f8f9f9", borderRadius: "1%", }}>
                                        <div className='d-flex bd-highlight mx-2 mt-1'>
                                            <Typography className='p-2 flex-grow-1' style={{ fontWeight: "bold", fontSize: "95%" }}>
                                                {val.name}
                                            </Typography>
                                            <Typography className='p-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="13"
                                                    height="13"
                                                    fill={`${val.color === "red" ? "#fe4646" : val.color === "blue" ? "#8b63ff" : "#57cf57"}`}
                                                    class="bi bi-circle-fill" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="7" r="7" />
                                                </svg>
                                            </Typography>
                                        </div>
                                        <Typography className='px-2 text-muted mx-2' style={{ marginTop: "-3%", fontSize: "75%", }}>
                                            {val.place}
                                        </Typography>
                                        <hr />
                                        <div className='d-flex bd-highlight mb-3 mx-2'>
                                            <Typography className='flex-grow-1 mx-2'>
                                                {
                                                    val.icon === "home" ? <img src={homeImg} height="24px" width="24px" ></img>

                                                        : val.icon === "car" ? <img src={carImage} height="24px" width="24px" ></img> :
                                                            val.icon === "school" ? <img src={capImg} height="24px" width="24px" ></img> : ""
                                                }

                                            </Typography>
                                            <div className='d-flex mx-2'>
                                                <Typography>
                                                    <img src={rupeeeIcon} height="15px" width="15px" ></img>
                                                </Typography>
                                                <Typography style={{ fontWeight: "bold" }} >
                                                    {val.amount}
                                                </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <div style={{ width: "76%", backgroundColor: "#F8F9F9", height: '100vh', overflowY: 'scroll', overflowX: "hidden" }}>

                <div
                    className='row mt-3'
                    style={{ padding: "20px 30px 20px 20px" }}
                >
                    <div
                        className='col-1'
                    >
                        <div className='' style={{ height: "50px", width: "55px", borderRadius: "15px", backgroundColor: "#ffdc64" }}  >
                            <img src={carImage} height="15px" width="20px" style={{ margin: '8px 0px 0px 7px', width: "45px", height: "35px" }}></img>
                        </div>
                    </div>
                    <div
                        className='col-2'
                    >
                        <Typography
                            style={{ fontWeight: "bold", fontSize: "98%", marginLeft: "-6%" }}
                        > Mahadev Nidode</Typography>
                        <Typography className='text-muted' style={{ fontSize: "80%", margin: "3% 0 0 -6%" }}>LNBLAMR000051458</Typography>
                    </div>
                    <div
                        className=' col-9 d-dlex' style={{ textAlign: 'end', marginRight: "" }}
                    >
                        <span>
                            <img src={rupeeeIcon} height="15px" width="15px" ></img>
                        </span>
                        <span style={{ fontWeight: "bold", fontSize: "99%" }}>
                            98,71,67,67,68,687
                        </span>

                        <Typography className='text-muted' style={{ fontSize: "80%", marginTop: "1%" }}>LOITXVG78955LOK</Typography>

                    </div>
                </div>

                <Box style={{ margin: "0% 0% 0% 0%", backgroundColor: "#EBEDEF", padding: "2% 0 2% 0" }}>
                    <Tabs
                        variant="scrollable"
                        aria-label="scrollable auto tabs example"
                        disableFocusRipple={false}
                        textColor="primary"
                        scrollButtons={false}
                    >
                        {
                            activityData.map((val, index) => {
                                return (
                                    <div className='my-1' style={{ marginLeft: `${index === 0 ? "2%" : "1%"}` }}>
                                        <Button onClick={() => handleClick(index, val.activity)}
                                            style={{
                                                color: bgColor === index ? "#2a2815" : "#8b8f92",
                                                borderRadius: "6px",
                                                backgroundColor: bgColor === index ? "#ffdc64" : "#FBFCFC",
                                                textTransform: "capitalize"
                                            }}
                                            variant="contained" 
                                            >

                                            {val.activity}
                                        </Button>
                                    </div>
                                )
                            })
                        }
                    </Tabs>
                </Box>
                {
                    isActivity === "Summary" ? (
                        <>
                            <Box style={{ backgroundColor: "white", margin: "2% 2% 2% 2%", padding: "5% 1% 2% 1%" }}>
                                <CustomSlider />
                            </Box>
                            <Paper style={{ margin: "2%", display: "flex" }}>
                                <div style={{ width: "50%" }}>

                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%", marginTop: "3%" }}>
                                        <div className='col-6 ' style={{ color: "#919598", }} >
                                            Unique Ref Number
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            LNBH00004567f
                                        </div>
                                    </div>
                                    <div className='mx-3' >
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%" }}>
                                        <div className='col-6' style={{ color: "#919598" }}>
                                            Customer Name
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            Koshi kurian
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%" }}>
                                        <div className='col-6' style={{ color: "#919598" }} >
                                            Product
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            Car Loan
                                        </div>
                                    </div>
                                    <div className='mx-3' >
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%" }}>
                                        <div className='col-6' style={{ color: "#919598" }} >
                                            EMI
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", }}>
                                            <span>
                                                <img src={rupeeeIcon} height="15px" width="15px" ></img>
                                            </span>
                                            <span style={{ fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                                45566
                                            </span>
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%" }}>
                                        <div className='col-6' style={{ color: "#919598" }}>
                                            Segment
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            Car Loan
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%" }}>
                                        <div className='col-6' style={{ color: "#919598" }} >
                                            Customer Age
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            24
                                        </div>
                                    </div>

                                </div>


                                <div style={{ width: "50%", }}>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%", marginTop: "3%" }}>
                                        <div className='col-6' style={{ color: "#919598" }} >
                                            Customer Id
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            LNGHBD888004
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%", }}>
                                        <div className='col-6' style={{ color: "#919598" }} >
                                            Branch
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            Ahmedabad
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%", }}>
                                        <div className='col-6' style={{ color: "#919598" }} >
                                            Tenure
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            27 Months
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%", }}>
                                        <div className='col-6' style={{ color: "#919598" }} >
                                            Cycle
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            4
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 0% 4%" }}>
                                        <div className='col-6' style={{ color: "#919598" }} >
                                            Gender
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            Male
                                        </div>
                                    </div>
                                    <div className='mx-3' >
                                        <hr />
                                    </div>
                                    <div style={{ display: "flex", padding: "0% 4% 4% 4%" }}>
                                        <div className='col-6' style={{ color: "#919598" }}>
                                            Email
                                        </div>
                                        <div className='col-6' style={{ textAlign: "end", fontFamily: "sans-serif open", fontWeight: "bold" }}>
                                            mnedode56@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        </>
                    ) : (
                        <div className='mx-3 my-3'>
                            <TrailHistory />
                        </div>
                    )
                }
            </div>
        </div >
    )
}

