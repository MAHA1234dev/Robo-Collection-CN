import React, { useState } from "react"
import { Button } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit";

export default function CustomTable() {
    const reminders =
    {
        data: [{
            loanNo: "LN000001",
            caseId: 1,
            caseRefernceNo: "CASE 1",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMIMDER",
            reminder: "consequences"
        }, {
            loanNo: "LN000002",
            caseId: 1,
            caseRefernceNo: "CASE 1",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMIMDER",
            reminder: "consequences"
        }, {
            loanNo: "LN000003",
            caseId: 1,
            caseRefernceNo: "CASE 1",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMIMDER",
            reminder: "consequences"
        }, {
            loanNo: "LN000004",
            caseId: 4,
            caseRefernceNo: "CASE 4",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMINDER",
            reminder: "pay"
        },
        {
            loanNo: "LN000005",
            caseId: 4,
            caseRefernceNo: "CASE 4",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMINDER",
            reminder: "pay"
        },
        {
            loanNo: "LN000006",
            caseId: 4,
            caseRefernceNo: "CASE 4",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMINDER",
            reminder: "pay"
        },
        {
            loanNo: "LN000007",
            caseId: 4,
            caseRefernceNo: "CASE 4",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMINDER",
            reminder: "pay"
        },
        {
            loanNo: "LN000008",
            caseId: 4,
            caseRefernceNo: "CASE 4",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMINDER",
            reminder: "pay"
        },
        {
            loanNo: "LN000009",
            caseId: 4,
            caseRefernceNo: "CASE 4",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMINDER",
            reminder: "pay"
        },
        {
            loanNo: "LN000001",
            caseId: 4,
            caseRefernceNo: "CASE 4",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMINDER",
            reminder: "pay"
        },
        {
            loanNo: "LN000001",
            caseId: 4,
            caseRefernceNo: "CASE 4",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMINDER",
            reminder: "pay"
        }

        ],
        entityType: "caseReminders",
        type: "REMINDER",
        title: "Case Reminders",
        titleMap: {
            actions: "Actions",
            loanNo: "Loan Number",
            caseId: "Case Id",
            caseRefernceNo: "Case Reference Number",
            customerName: "Customer Name",
            caseType: "Case Type",
            reminderName: "Reminder Name",
            reminder: "Remnder",
        },
    }
    const [data, setData] = useState(reminders)

    const TableHeadItem = ({ item }) => {
        return (
            <th
                style={{
                    padding: "3px",
                    width: "30px",
                    border: "1px solid black",
                }}
            >{item[1]}</th>
        )
    }
    
    const TableRow = ({ item, column }) => (
        <tr>
            {Object.entries(data.titleMap).map((columnItem, index) => {
                return (
                    <td
                        style={{
                            padding: "10px",
                            width: "30px",
                            border: "1px solid black",
                            cursor: 'pointer',
                            fontSize: "13px"
                        }}
                    >
                        {columnItem[0] === "actions" ? (

                            <Button onClick={() => handleClick(item)}>
                                <EditIcon />
                            </Button>
                        ) : item[`${columnItem[0]}`]}
                        {/* {item[`${columnItem[0]}`]} */}
                    </td>
                )

            })}
        </tr>
    )

    const handleClick = (item) => {
        console.log("item");
    }

    return (
        <div>
            <div className="m-5" style={{ overflowX: "scroll" }}>
                <table style={{ width: "100vw", }}>
                    <thead>
                        <tr>
                            {Object.entries(data.titleMap).map((item, index) => <TableHeadItem item={item} />)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((item, index) => <TableRow item={item} column={data.titleMap} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}