import React, { useEffect, useState } from 'react';
import { Checkbox, FormControlLabel, styled } from '@material-ui/core';

const BpIcon = styled('span')(({ theme }) => ({
    border: "2px solid #303437",
    borderRadius: "3px",
    width: 16,
    height: 16,
    // backgroundImage:
    //     theme.palette.mode === 'dark'
    //         ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
    //         : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    // '.Mui-focusVisible &': {
    //     outline: '4px auto rgba(19,124,189,.6)',
    //     outlineOffset: 2,
    // },
}));

const BpCheckedIcon = styled(BpIcon)({
    // backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
        display: 'block',
        width: 14,
        height: 14,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='black'/%3E%3C/svg%3E\")",
        content: '""',
    },

});

// Inspired by blueprintjs
function BpCheckbox(props) {
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
    const [actionsData, setActionsData] = React.useState([])
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
            {actionsData.map((val, index) => {
                return (
                    <>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    style={{ marginLeft: "-10px", paddingLeft: "35px", backgroundColor: "unset" }}
                                    disableRipple
                                    checkedIcon={<BpCheckedIcon />}
                                    icon={<BpIcon />}
                                    inputProps={{ 'aria-label': 'Checkbox demo', }}
                                    {...props}
                                    onClick={() => handleClick(index)}
                                />
                            }
                            label={val.name}
                            checked={`${id === index ? isChecked : ""}`}
                            value={val.name}
                        >
                        </FormControlLabel>
                    </>
                )
            })}
        </div>
    );
}

export default function CustomizedCheckbox() {

    return (
        <div>
            <BpCheckbox />
        </div>
    );
}
// #F8F9F9