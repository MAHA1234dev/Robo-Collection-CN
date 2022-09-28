import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function HtmlDropDown() {

    const [callerstatus, setCallerStatus] = useState()

    const handleStatus = (e) => {
        setCallerStatus(e.target.value)
    }

    return (
        <div>
            <form onChange={(e) => handleStatus(e)}>
                <div className="d-flex">
                    <div style={{ marginTop: "0.4rem" }}>
                        <label style={{ fontWeight: "500", fontSize: "16px" }} className='mr-2'>Status : </label>
                    </div>
                    <div style={{
                        display: "flex",
                        border: "1px solid #dcdcdc",
                        borderRadius: "50px",
                        padding: "4px",
                        height: "1.8rem",
                        marginTop: "5px"
                    }}>
                        <div style={{ alignSelf: "center" }}>
                            <span><FiberManualRecordIcon
                                style={{ color: `${callerstatus === "Available" ? '#1E8E3E' : callerstatus === "Logged Out" ? "#D5D0D1" : "#F14112"}` }}
                            /></span>
                        </div>
                        <select style={{ border: "none", outline: "0px" }}>
                            <option selected={callerstatus === "Available" ? true : false}
                                value="Available">

                                Available</option>
                            <option selected={callerstatus === "Logged Out" ? true : false}
                                value="Logged Out">Not Available</option>
                            <option selected={callerstatus === "On Break" ? true : false}
                                value="On Break">On Break</option>
                        </select>
                    </div>
                </div>

            </form>

        </div>
    )
}
export default HtmlDropDown