import { Checkbox, FormControlLabel, Grid } from '@material-ui/core'
import { pink } from '@material-ui/core/colors'
import React, { useEffect, useState } from 'react'

export default function ActioncheckBox() {
    const actions = [
        {
            name: "All"
        },
        {
            name: "Email"
        },
        {
            name: "WatsApp"
        },
        {
            name: "SMS"
        },
        {
            name: "IVR"
        },
        {
            name: "Call"
        },
        {
            name: "Visit"
        }
    ]
    const [actionsData, setActionsData] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [id, setId] = useState('')
    const handleClick = (id) => {
        setId(id)
    }
    useEffect(() => {
        setActionsData(actions)
    }, [])


    return (
        <div>
            {
                actionsData.map((val, index) => {
                    return (
                        <>
                            <FormControlLabel
                                control=
                                {
                                    <Checkbox
                                        size="medium"
                                        style={{ color:"#181717"}}
                                        onClick={() => handleClick(index)} />
                                }
                                label={val.name}
                                checked={`${id === index ? isChecked : ""}`}
                                value={val.name}
                            >
                                
                            </FormControlLabel>
                        </>
                    )
                })
            }
        </div>
    )
}