import axios from "axios";
import { useState, useEffect } from "react";

function Practice() {
    const object =
        [
            {
                name: 'sivaji',
                age: '10',
            }, {
                name: 'abbass',
                age: '11',
            }, {
                name: 'hemanth',
                age: '12',
            }, {
                name: 'harish',
                age: '13',
            },
        ]

    const [indexVlaue, setIndexValue] = useState([]);
    const [data, setData] = useState([])

    useEffect(() => {
        setData(object)
    }, [])

    const handleClick = (ele, ind) => {
        setIndexValue([...indexVlaue, ind])
        
        /* forenable the input field */
        if (indexVlaue.includes(ind)) {
            setIndexValue([])
        } 

    }

    return (
        <div>
            <>
                {
                    data.map((ele, ind) => {
                        return <div key={ind}>
                            <input type='text'
                                disabled={indexVlaue.includes(ind)}
                            />
                            <button onClick={() => handleClick(ele, ind)} >click</button>
                        </div>
                    })
                }
            </>

        </div>
    )
}
export default Practice