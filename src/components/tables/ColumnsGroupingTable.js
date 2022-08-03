import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

export default function ColumnsGroupingTable() {
    const sales = [
        { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342, date: "ddv", type: "sdssdv" },
        { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122, date: "ddv", type: "sdssdv" },
        { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533, date: "ddv", type: "sdssdv" }
    ];
    let headerGroup = (
        <ColumnGroup>
            <Row>
                {/* <Row header="" colSpan={2} /> */}
                <Column header="" colSpan={2} />
                <Column header="Sales" colSpan={2} />
                <Column header="Profits" colSpan={2} />
            </Row>
            <Row>
                <Column header="Date" field="date" />
                <Column header="Type" field="type" />
                <Column header="Last Year" field="lastYearSale" />
                <Column header="This Year" field="thisYearSale" />
                <Column header="Last Year" field="lastYearProfit" />
                <Column header="This Year" field="thisYearProfit" />
            </Row>
        </ColumnGroup>
    );
    const lastYearSaleBodyTemplate = (rowData) => {
        return `${rowData.lastYearSale}%`;
    }

    const thisYearSaleBodyTemplate = (rowData) => {
        return `${rowData.thisYearSale}%`;
    }

    const lastYearProfitBodyTemplate = (rowData) => {
        return `${rowData.lastYearProfit}`;
    }

    const thisYearProfitBodyTemplate = (rowData) => {
        return `${rowData.thisYearProfit}`;
    }

    return (
        <div>
            <div className="card">
                <DataTable
                    value={sales}
                    headerColumnGroup={headerGroup}
                //   footerColumnGroup={footerGroup}
                // responsiveLayout="scroll"
                >
                    <Column field="date" />
                    <Column field="type" />
                    <Column field="lastYearSale" />
                    <Column field="thisYearSale" />
                    <Column field="lastYearProfit" />
                    <Column field="thisYearProfit" />

                    {/* <Column field="lastYearSale" body={lastYearSaleBodyTemplate} /> */}
                    {/* <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
                    <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
                    <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} /> */}
                </DataTable>
            </div>
        </div>
    )
}
  {/* <Column header="Due Date" field="dueDate" />
                <Column header="Type" field="dueType" />
                <Column header="Principal" field="lastYearSale" />
                <Column header="Interest" field="thisYearSale" />
                <Column header="Total" field="lastYearProfit" />
                <Column header="Principal" field="lastYearSale" />
                <Column header="Interest" field="thisYearSale" />
                <Column header="Total" field="lastYearProfit" />
                <Column header="Principal" field="lastYearSale" />
                <Column header="Interest" field="thisYearSale" />
                <Column header="Total" field="lastYearProfit" /> */}