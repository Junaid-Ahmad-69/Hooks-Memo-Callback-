import React, {useState, useRef, useEffect} from 'react'
import ChildRef from "../Child/ChildRef";

const Ref = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("");
    console.log("render")
    const reference = useRef(0)
    const elementRef = useRef();
    const prevElement = useRef()


// Default
    const handler = () => {
        reference.current++;
        console.log(`Clicked ${reference.current} times`);

    }

// Using Ref working with Dom Interaction 
    const focusInput = () => {
        elementRef.current.focus();
    };


    // Using Ref Hook we store previous state
    // useEffect(() => {
    //     return () => {
    //         prevElement.current = inputValue;
    //     };
    // }, [inputValue]);


    console.log(`I am render`)
    return (
        <>

            <input ref={elementRef} type="text" defaultValue=""/>
            <button onClick={focusInput}>Focus Input using UseRef</button>


            <button onClick={handler}>Use Ref Hook</button>
            <button onClick={() => setCounter(prevState => prevState + 1)}> Button Click {counter}</button>


            <ChildRef ref={prevElement} type="text"  onChange={(e) => {
                setInputValue(e.target.value)
            }}/>
            {/*<input onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>*/}
            <section>
                <h2> Current Value : {inputValue}</h2>
                <p> Previous Value : {prevElement.current}</p>

            </section>


        </>
    )
}

export default Ref
