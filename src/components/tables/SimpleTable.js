import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import ReactDOM from 'react-dom';
import { ColumnGroup } from 'primereact/columngroup';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Row } from 'primereact/row'

export default function SimpleTable() {
    const products = [
        {
            id: "1000",
            code: "f230fh0g3",
            name: "Bamboo Watch",
            description: "Product Description",
            image: "bamboo-watch.jpg",
            price: 65,
            category: "Accessories",
            quantity: 24,
            inventoryStatus: "INSTOCK",
            rating: 5
        }
    ]
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        setProductsData(products)
    }, []);
    return (
        <div>
            {/* <div className="card">
                <DataTable value={productsData} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

            </div> */}
            <table>
                <tr>
                    <td></td>
                </tr>

            </table>
        </div>
    );
}

{/* <div style={{ margin: "2%" }}>

<Paper style={{ display: "flex", }}>

    <div style={{ width: "50%", display: "flex", backgroundColor: "blue", }}>

        <div className='mx-2' >
            Mahadev
        </div>
        <div className='col-9' style={{ textAlign: "end" }}>

            asdfdfghjkl;kjhgfds
        </div>
    </div>
    <div style={{width :"50%" , display:"flex", backgroundColor:"red"}}>
        <div className='mx-2'>
           afGHJHGJYTD
        </div>
        <div className='col-9'  style={{textAlign:"end"}}>
            dwfawfdqfqs
        </div>
    </div>

</Paper>

</div> */}