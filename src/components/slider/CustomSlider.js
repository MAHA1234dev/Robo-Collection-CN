import React from "react"
import { Button, Slider, styled, } from '@material-ui/core'
import { Tooltip } from "@material-ui/core";
import PropTypes from 'prop-types';

import { withStyles, makeStyles } from '@material-ui/core/styles'
export default function CustomSlider() {
    const useStyles = makeStyles({
        
        horizontal: {
            width: "100%",
            margin: '0 auto'
        }
    })



    const CustomSlider = withStyles({
        root: {
            color: '#52af77',
            height: 8,

        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            // '&:focus, &:hover': {
            //     boxShadow: '0px 0px 0px 8px rgba(84, 199, 97, 0.16)'
            // },
            // '&$active': {
            //     boxShadow: '0px 0px 0px 12px rgba(84, 199, 97, 0.16)'
            // }
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)'
        },
        track: {
            height: 8,
            borderRadius: 4
        },
        rail: {
            height: 8,
            borderRadius: 4
        },

    })(Slider)



    const value = [
        10, 40, 70
    ]
    const classes = useStyles()

    return (


        <div className="App">
            <div className={classes.horizontal}>
                <CustomSlider defaultValue={value} valueLabelDisplay="on" aria-label="custom thumb label"

                />
            </div>
        </div>



    )
}

{/* <Slider
                    // backgroundColor="red"
                    // color='primary'
                    style={{color:"red",backgroundColor:"blue"}}
                    track={'inverted'}
                    aria-labelledby="track-false-range-slider"
                    getAriaValueText={valuetext}
                    defaultValue={[20, 37, 50]}
                    valueLabelDisplay="on"
                    
                /> */}