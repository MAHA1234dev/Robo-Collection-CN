import React, { useState, useEffect, useRef } from 'react'
import { Checkbox, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { Button as PButton } from "primereact/button";
import { Button } from "primereact/button";

const data = [
    { value: "Segment", key: "segment" },
    { value: "Customer Contact Status", key: "customerContactStatus" },
    { value: "Allocation Status", key: "allocationStatus" },
    { value: "Field Agent", key: "fieldAgent" },
    { value: "State", key: "state" },
    { value: "Branch", key: "branch" },
    { value: "Customer Status", key: "customerStatus" },
    { value: "Customer Name", key: "customerName" },
    { value: "Customer Number", key: "customerNumber"}
]

function TableSort({ setFilterOptions = {}, filterOptions }) {

    const [checked, setChecked] = React.useState([0]);
    const toast = React.useRef(null);
    const [selectedData, setSelectedData] = useState([])
    const [finalData, setdata] = useState([])
    const [showDialog, setShowDailog] = useState(true)
    console.log(finalData);
    useEffect(() => {
        let order = 'Asc'
        let arr = data.map(({ ...rest }) => ({
            order, ...rest
        }))
        setdata(arr)
    }, [data])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        let arr = selectedData.slice(0)
        if (currentIndex === -1) {
            newChecked.push(value);
            arr.push(value)
        } else {
            newChecked.splice(currentIndex, 1);
            arr.map((val, index) => {
                if (val.key === value.key) {
                    arr.splice(index, 1)
                }
            })
        }
        setChecked(newChecked);
        setSelectedData(arr)
    };

    const handleOrder = (val, order) => {
        let arr = selectedData.map((value) => {
            if (value.value === val.value) {
                return {
                    ...value,
                    order: order
                }
            } else {
                return {
                    ...value,
                }
            }
        })
        setSelectedData(arr)
    }

    const handleApply = () => {
        let res = {}
        selectedData.forEach(obj => {
            res[obj.key] = obj.order;
        })
        setFilterOptions({
            ...filterOptions,
            sortParams: JSON.stringify(
                res ? res : {}
            )
        })
        onHide()
    }

    const handleCancel = () => {
        onHide()
    }

    const closeDailog = () => {
        onHide()
    }

    const handleReset = () => {
        onHide()
        setSelectedData([])
        setChecked([0])
        setFilterOptions({
            ...filterOptions,
            sortParams: JSON.stringify(
                {}
            )
        })
    }

    const onHide = () => {
        setShowDailog(false)
    }
    return (
        <Dialog
            header={`Columns`}
            visible={showDialog}
            style={{ width: "50vw" }}
            onHide={() => closeDailog()}
            className="cn-modal"
        >
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <List sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper', }}>
                    {finalData.map((value) => {
                        const labelId = `checkbox-list-label-${value.value}`;
                        return (
                            <ListItem role={undefined} dense>
                                <ListItemIcon onClick={handleToggle(value)}>
                                    <Checkbox
                                        style={{ color: "blue" }}
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${value.value}`} />
                            </ListItem>
                        );
                    })}
                </List>
                <div style={{ height: "28rem", border: "1px solid #eee" }}></div>
                <List sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper', }}>
                    {selectedData.map((value, index) => {
                        const labelId = `checkbox-list-label-${value.value}`;
                        return (
                            <ListItem role={undefined} dense>
                                <ListItemText key={index} id={labelId} primary={` ${value.value}`} />
                                <PButton
                                    icon="pi pi-sort-amount-up"
                                    title="View"
                                    className="p-button-rounded p-button-info p-button-text"
                                    onClick={() => handleOrder(value, "Asc")}
                                    style={{
                                        backgroundColor: `${value?.order === "Asc" ? "#d0d5e7" : ""}`
                                    }}
                                />
                                <PButton
                                    icon="pi pi-sort-amount-down"
                                    title="View"
                                    className="p-button-rounded p-button-info p-button-text"
                                    onClick={() => handleOrder(value, "Desc")}
                                    style={{
                                        backgroundColor: `${value?.order === "Desc" ? "#d0d5e7" : ""}`
                                    }}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </div>
            <div style={{ marginLeft: "30%" }}>
                <Button
                    label="Reset"
                    icon="pi pi-refresh"
                    type="button"
                    onClick={handleReset}
                />
                <Button
                    className='ml-2'
                    label="Cancel"
                    icon="pi pi-save"
                    type="button"
                    onClick={handleCancel}
                />
                <Button
                    className='ml-2'
                    label="Apply"
                    icon="pi pi-save"
                    type="button"
                    onClick={handleApply}
                />
            </div>

            <Toast ref={toast} onHide={() => onHide()} />
        </Dialog>
    );
}
export default TableSort