import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Current Count: {count}</p>
            <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
        </div>
    );

}
export default Counter;