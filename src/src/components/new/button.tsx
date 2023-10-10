import React, {useState} from "react";
import "./button.css"


function Counter() {

    const [count, setCount] = useState<number>(0);
    const divClassName = count === 5 ? "divStyle red" : "divStyle";
    const AddClick = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    const DeleteClick = () => {
        setCount(0)
    }
    return (
        <div className="totalDivStyle">
            <div className={divClassName}>{count}</div>
            <button
                disabled={count === 5} onClick={AddClick} className="ButtonStyle">
                AddClick
            </button>
            <button
                disabled={count === 0} onClick={DeleteClick} className="ButtonStyle">
                DeleteClick
            </button>
        </div>
    )
}

export default Counter;