import React, { useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

export default function ColumnsGroupingTable() {

    const columns = [
        { field: 'date', header: 'Date' },
        { field: 'type', header: 'Type' },
        { field: 'lastYearSale', header: 'Last Year' },
        { field: 'thisYearSale', header: 'This Year' },
        { field: 'lastYearProfit', header: 'Last Year' },
        { field: 'thisYearProfit', header: 'This Year' }

    ];

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

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.thisYearProfit);
    }
    const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }

    const cellEditor = (options) => {
        console.log(options);
        if (options.field === 'price')
            return priceEditor(options);
        else
            return textEditor(options);
    }

    const isPositiveInteger = (val) => {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }
    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }
    useEffect(() => {
        // cellEditor()
    },[])
    const defaultEditShow = (e) => {
        console.log(e);
    }
    return (
        <div>
            <div className="card">
                <DataTable
                    value={sales}
                    headerColumnGroup={headerGroup}
                    // editMode="row"
                    editMode="cell"
                    className="editable-cells-table"
                //   footerColumnGroup={footerGroup}
                // responsiveLayout="scroll"
                >
                    <Column field="date" />
                    <Column field="type" />
                    <Column field="lastYearSale" />
                    <Column field="thisYearSale" />
                    <Column field="lastYearProfit" />
                    <Column field="thisYearProfit"
                        editor={(options) => cellEditor(options)}
                        onCellEditComplete={onCellEditComplete}
                        onBeforeCellEditShow={defaultEditShow}
                    />

                    {/* <Column field="lastYearSale" body={lastYearSaleBodyTemplate} /> */}
                    {/* <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
                    <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
                    <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} /> */}

                    {/* {
                        columns.map(({ field, header }) => {
                            return <Column key={field} field={field} header={header} filter sortable style={{ width: '25%' }} body={field === 'thisYearProfit' && priceBodyTemplate}
                                editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />
                        })
                    } */}
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