import React from "react"
import { Button, Slider, styled, } from '@material-ui/core'


import { withStyles, makeStyles } from '@material-ui/core/styles'

export default function IconSlider() {
    const useStyles = makeStyles({
        horizontal: {
            width: "100%",
            margin: '0 auto'
        }
    })

    const CustomSlider = withStyles({
        root: {
            height: 4,
        },
        thumb: {
            height: 14,
            width: 14,
            backgroundColor: 'green',
            border: '3px solid #FAFAF4',
            marginTop: -4,
            marginLeft: -12,
            textShadow: "none"
        },
        active: {},
        // for text
        valueLabel: {
            left: 'calc(-50% + 4px)',
            top: -20,
            "& *": {
                background: "transparent",
                color: "#000"
            }
        },
        track: {
            height: 6,
            borderRadius: 4,
            // background: "linear-gradient(to right,hsl(60deg 100% 50%),hsl(60,100%,50%),hsl(60deg 100% 50%),#f50057,#f50057,#f50057,hsl(360,100%,50%))"
            // background: "linear-gradient(to right, #ffff00 0%, #ff0000 100%)"
            background: "linear-gradient(to right, #ef5443 36%, #71b94e 74%)"

        },
        rail: {
            height: 6,
            borderRadius: 4,
            // background: "linear-gradient(to right,hsl(60deg 100% 50%),hsl(60,100%,50%),hsl(60deg 100% 50%),hsl(60deg 100% 50%),hsl(60deg 100% 50%),#ff0018,hsl(0deg 100% 52%))"
            // background: "linear-gradient(to right, #ffff00 0%, #ff0000 100%)"
            background: "linear-gradient(to right, #ef5443 0%, #71b94e 100%)"
        },
    })(Slider)

    const classes = useStyles()

    return (
        < div className="App" >
            <div className={classes.horizontal}>
                <CustomSlider
                    defaultValue={100}
                    valueLabelDisplay="off"
                    aria-labelledby="non-linear-slider"
                />
            </div>
        </div >
    )
}