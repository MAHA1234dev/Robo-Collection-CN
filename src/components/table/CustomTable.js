import React, { useState } from "react"

export default function CustomTable() {
    const reminders =
    {
        data: [{
            loanNo: "LN000001",
            caseId: 1,
            caseRefernceNo: "CASE 1",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMIMDER"
        }, {
            loanNo: "LN000001",
            caseId: 1,
            caseRefernceNo: "CASE 1",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMIMDER"
        }, {
            loanNo: "LN000001",
            caseId: 1,
            caseRefernceNo: "CASE 1",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMIMDER"
        }, {
            loanNo: "LN000001",
            caseId: 4,
            caseRefernceNo: "CASE 4",
            customerName: "AA ENTERPRISES",
            caseType: "CASE",
            reminderName: "WF_REMINDER"
        }],
        entityType: "caseReminders",
        type: "REMINDER",
        title: "Case Reminders",
        titleMap: {
            loanNo: "Loan Number",
            caseId: "Case Id",
            caseRefernceNo: "Case Reference Number",
            customerName: "Customer Name",
            caseType: "Case Type",
            reminderName: "Reminder Name"
        },
    }
    const [data, setData] = useState(reminders)
    const TableHeadItem = ({ item }) => {
        return (
            <th>{item[0]}</th>
        )

    }
    const TableRow = ({ item, column }) => (
        <tr>
            {Object.entries(data.titleMap).map((columnItem, index) => {
                return <td>{item[`${columnItem[0]}`]}</td>
            })}
        </tr>
    )
    return (
        <div>
            table
            <div>
                <table>
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