import React, {useState} from 'react'

const Child = ({count, test}) => {
    console.log('Logged in Child Component');
    return (
        <div>
            Hello from Child
            <br/>
            <p>Count :{count}</p>
        </div>
    )
}
const Parent = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const test = () => {
        return 'Hello from'
    }
    return (
        <>
            Hello from parent
            <Child count1={count} test={test}/>
            <button onClick={() => setCount(count + 1)}> Count ++</button>
            <button onClick={() => setCount1(count1 + 1)}> Count2 ++</button>
        </>
    )
}


const App = () => {
    return (
        <>
            <Parent/>
        </>
    )
}
export default App