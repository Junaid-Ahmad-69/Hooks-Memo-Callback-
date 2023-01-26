import React, {useState, useMemo, useCallback, useEffect} from 'react'
import Child from "./Child/ChildCallBack";
import CallBack from "./HookCallBack/CallBack";
import ChildMemo from "./Child/ChildMemo";
import Memo from "./HookMemo/Memo";
import Child2 from "./Child/NewChild3";

const test = () => {
    return 'Hello from';
};


const Parent = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const changeHandlerCounter = () => {
        setCount1(pre1 => pre1 + 1);
    }

    const changeHandler = () => {
        setCount(pre => pre + 1);
    }
    return (
        <>
            Hello from parent
            <Child count={count} test={test}/>
            <Child2/>
            <button onClick={changeHandler}> Count ++</button>
            <button onClick={changeHandlerCounter}> Count2 ++ {count1}</button>
        </>
    )
}

const App = () => {
    return (
        <>
            <Parent/>
            <CallBack/>
            <Memo/>
        </>
    )
}
export default App