import { Checkbox, FormControlLabel } from '@material-ui/core'
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
                                style={{ paddingLeft: "1%" }}
                                control={<Checkbox color="default" onClick={() => handleClick(index)} />}
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