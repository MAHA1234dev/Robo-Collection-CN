import axios from "axios";
import { useState, useEffect } from "react";

function Practice() {
    const [object, setObject] = useState(
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
    );
    const [index, setIndex] = useState([])
    const handleClick = (ele, ind) => {
        setIndex([...index, ind])
        // if(index.includes(ind)){
        //     index.splice(ind, 0)
        // }
    }
    useState(() => {
        axios.get('https://www.cloudflare.com/cdn-cgi/trace').then((res) => {
            
            console.log(res.data.split('/'));
            // console.log(res, "res");
        })
    }, [])
    return (
        <div>
            {
                object.map((ele, ind) => {
                    return <div>
                        <input type='text'
                            disabled={index.includes(ind)}
                        />
                        <button onClick={() => handleClick(ele, ind)} >click </button>
                    </div>
                })
            }
        </div>
    )
}
export default Practice