import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
export default function DetailsTable() {
    const rows = [
        {
            refno: 12357657687698980,

        }, {
            name: "Frozen yoghurt",

        },
        {
            product: " car"
        },
        {
            emi: "3456"
        }
    ]
    const columns = [
        {
            name: "Dessert",

        }, {
            name: "Calories"
        },
        {
            name: "Calories"
        },
        {
            name: "Calories"
        },

    ]
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    {/* <TableHead>
                        <TableRow>
                            <TableCell>Dessert</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead> */}
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.refno}
                            // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.refno}
                                </TableCell>
                                <TableCell align="" style={{ fontSize: "30px" }}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="">{row.product}</TableCell>
                                <TableCell align="" style={{ fontSize: "30px" }}>{row.emi}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}