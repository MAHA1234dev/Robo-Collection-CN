import React from "react"
import { Button, Slider, styled, } from '@material-ui/core'
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
            height: 8,
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: 'gold',
            // backgroundColor:`${ value[0] < 40  ? "gold" : "red" }`,
            border: '3px solid #FAFAF4', 
            marginTop: -8,
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
            height: 8,
            borderRadius: 4,
            // background: "linear-gradient(to right,hsl(60deg 100% 50%),hsl(60,100%,50%),hsl(60deg 100% 50%),#f50057,#f50057,#f50057,hsl(360,100%,50%))"
            background: "linear-gradient(to right, #e8ce05 0%, #f76735 100%)"

        },
        rail: {
            height: 8,
            borderRadius: 4,
            // background: "linear-gradient(to right,hsl(60deg 100% 50%),hsl(60,100%,50%),hsl(60deg 100% 50%),hsl(60deg 100% 50%),hsl(60deg 100% 50%),#ff0018,hsl(0deg 100% 52%))"
            background: "linear-gradient(to right, #e8ce05 0%, #f76735 100%)"
        },

    })(Slider)

    const value = [
        5, 70, 97
    ]

    const classes = useStyles()
    // function valueLabelComponent(props) {
    //     const { children, open, value } = props;
    //     return (
    //         <Tooltip
    //             open={open} enterTouchDelay={2}
    //             placement="top"
    //             title={value}
    //         >
    //             {children}
    //         </Tooltip>
    //     );
    // }

    // valueLabelComponent.propTypes = {
    //     children: PropTypes.element.isRequired,
    //     open: PropTypes.bool.isRequired,
    //     value: PropTypes.number.isRequired,
    // };

    function valueLabelFormat(value) {
        const units = ["july", "oct", "Days"];
        const months = ["2020"]
        let unitIndex = 0;
        let scaledValue = value;
        while (scaledValue >= 100 && unitIndex < units.length - 1) {
            unitIndex += 1;
            scaledValue /= 100;
        }
        return <div>
            <span style={{color:"black",fontSize:"13px",fontWeight:"bold"}}>
                {scaledValue}
            </span>
            <span className="mx-1"  style={{color:"black",fontSize:"13px",fontWeight:"bold"}}>
                {units[unitIndex]}
            </span>
            <span style={{color:"black", fontSize:"13px",fontWeight:"bold"}}>
                {months}
            </span>
        </div>

        {/* {`${scaledValue} ${units[unitIndex]}`} */ }
    }
    const handleChange = (val) => {
        console.log(val, "ava");
    }
    return (
        <div className="App">
            <div className={classes.horizontal}>
                <CustomSlider
                    defaultValue={value}
                    valueLabelDisplay="on"
                    aria-labelledby="non-linear-slider"
                    getAriaValueText={valueLabelFormat}
                    valueLabelFormat={valueLabelFormat}
                    onChange={(e, value) => { handleChange(value) }}
                // ValueLabelComponent={valueLabelComponent}
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