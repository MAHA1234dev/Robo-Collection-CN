import React from "react"
import Select from 'react-select';

const aquaticCreatures = [
    { label: 'Shark', value: 'Shark',vid:"1" },
    { label: 'Dolphin', value: 'Dolphin',vid:"1"},
    { label: 'Whale', value: 'Whale',vid:"1" },
    { label: 'Octopus', value: 'Octopus',vid:"1"},
    { label: 'Crab', value: 'Crab',vid:"1" },
    { label : 'Lobster', value: 'Lobster',vid:"1" },
];
export default function SearchDropdown() {
    return (
        <div>
            <Select
                options={aquaticCreatures}
                onChange={e => console.log(e)}
            />
        </div>
    )
}