import { useEffect } from "react";
import AccordionMuI from "../AccordionMuI";
import ActioncheckBox from "../checkBox/ActionCheckBox";

export default function TrailHistory() {

    return (
        <div>
            <div className="">
                <ActioncheckBox />
            </div>
            <div className="my-2">
                <AccordionMuI />
            </div>
        </div>
    )
}