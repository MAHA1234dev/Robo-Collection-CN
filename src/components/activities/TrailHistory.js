import { useEffect } from "react";
import AccordionMuI from "../AccordionMuI";
import ActioncheckBox from "../checkBox/ActionCheckBox";
import CustomizedCheckbox from "../checkBox/CustomizedCheckbox";

export default function TrailHistory() {

    return (
        <div>
            <div>
                <CustomizedCheckbox/>
            </div>
            <div className="my-2">
                <AccordionMuI />
            </div>
        </div>
    )
}