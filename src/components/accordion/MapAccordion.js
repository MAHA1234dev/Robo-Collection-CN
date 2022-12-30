import React from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
// import { settlementColumns } from "../services/loanService";
import moment from "moment";
// import './AccordionDemo.css';

const settlementColumns = [
    {
        header: "Settlement Amount",
        field: "settlementAmount",
        type: "",
    },
    {
        header: "Waiver Amount",
        field: "waiverAmount",
        type: "",
    },
    {
        header: "Installment Amount",
        field: "installmentAmount",
        type: "",
    },
    {
        header: "No of Installments",
        field: "noOfInstallments",
        type: "",
    },
    {
        header: "Next Due Date",
        field: "nextDueDate",
        type: "date",
    }, {
        header: "First Due Date",
        field: "firstDueDate",
        type: "date",
    }, {
        header: "Last Due Date",
        field: "lastDueDate",
        type: "date",
    },
    {
        header: "Request Type",
        field: "requestType",
        type: "",
    },
    {
        header: "Request Type",
        field: "requestType",
        type: "",
    },
    {
        header: "Approver Remarks",
        field: "approverRemarks",
        type: "",
    },
]


const data = [
    {
        settlementAmount: 12345,
        waiverAmount: 1232345,
        installmentAmount: 454657,
        noOfInstallments: 3,
        nextDueDate: '2022-03-21',
        firstDueDate: "2022-03-21",
        lastDueDate: "2022-03-21",
        requestType: "geygfjg",
        approverRemarks: "Pay"
    },
    {
        settlementAmount: 12345,
        waiverAmount: 1232345,
        installmentAmount: 454657,
        noOfInstallments: 3,
        nextDueDate: '2022-03-21',
        firstDueDate: "2022-03-21",
        lastDueDate: "2022-03-21",
        requestType: "geygfjg",
        approverRemarks: "Pay"
    },
    {
        settlementAmount: 12345,
        waiverAmount: 1232345,
        installmentAmount: 454657,
        noOfInstallments: 3,
        nextDueDate: '2022-03-21',
        firstDueDate: "2022-03-21",
        lastDueDate: "2022-03-21",
        requestType: "geygfjg",
        approverRemarks: "Pay"
    }
]

function MapAccordion({ rows }) {
    console.log(rows);
    return (
        <div className="col-details-section-wrapper" style={{ marginBottom: 160 }}>
            <div className="details-tile" style={{ padding: 20 }}>
                <Accordion activeIndex={0} id="settlement">
                    <AccordionTab
                        header={
                            <>
                                <div className="row col-md-12">
                                    <div className="col-lg-3">
                                        <p className="text-shade-sm"></p>
                                        <p className="text-main"></p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p className="text-shade-sm"></p>
                                        <p className="text-main"></p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p className="text-shade-sm"></p>
                                        <p className="text-main"></p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p className="text-shade-sm"></p>
                                        <p className="text-main"></p>
                                    </div>
                                </div>
                            </>
                        }>
                        {
                            data && settlementColumns.map((item) => {
                                <>
                                    <div className="col-lg-3 card-col" key={item?.field}>
                                        <div className="card-item">
                                            <p className="text-shade-sm">{item?.header}</p>
                                            <p className="text-main">{(item?.type === 'date' && data[item?.field]) ? moment(data[item?.field]).format('YYYY-MM-DD') : data[item?.field]}</p>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    )
}
export default MapAccordion