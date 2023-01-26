import React, {useState, useMemo} from 'react';

const Memo = () => {
    const [memoCount, setMemoCount] = useState(0);
    const [memoCounter, setMemoCounter] = useState(0);

    const changeHandlerCount = () => {
        setMemoCount(memoCount + 1);
    }
    const changeHandlerCounter = () => {
        setMemoCounter(memoCounter + 1);
    }


    const isEven = useMemo( () => {
        let i=0;
      while ( i<1000000000) i++
        return memoCount % 2 === 0;
    },[memoCount]);

    return (
        <div>
            <button onClick={changeHandlerCount}>Count 1 - {memoCount} </button>
            <p>Count 1 Value : is {isEven ? "Even" : "Old"}</p>
            <button onClick={changeHandlerCounter}>Counter 2 - {memoCounter}</button>
        </div>
    );
}

export default Memo;