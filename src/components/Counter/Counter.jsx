import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    console.log("counter", counter);

    return (
        <div className = "container">
            <button onClick={() => setCounter(counter + 1)}>Add one</button>
            <h1>Count: {counter}</h1>
            <button
                onClick={() => setCounter(counter - 1)}
                disabled = {counter <= 0}>
                Minus one
            </button>
        </div>
    );
}

export default Counter;