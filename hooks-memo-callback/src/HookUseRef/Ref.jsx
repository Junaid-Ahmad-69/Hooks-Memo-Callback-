import React, {useState, useRef, useEffect} from 'react'
import ChildRef from "../Child/ChildRef";
import HookRefBg from "./HookRefBg";

const Ref = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const reference = useRef(0)
    const reference_2 = useRef(0)
    const elementRef = useRef(null);
    const prevElement = useRef()


// Default
    const handler = () => {
        reference.current++;
        console.log(`Clicked ${reference.current} times`);

    }

    const handler2 = () => {
        reference_2.current++;
        console.log(`Clicked ${reference_2.current} times`);

    }

// Using Ref working with Dom Interaction 
    const focusInput = () => {
        elementRef.current.focus();
        console.log("render")
    };


    // Using Ref Hook we store previous state
    useEffect(() => {
        return () => {
            prevElement.value = inputValue;
        };
    }, [inputValue]);


    console.log(`I am render`)
    return (
        <>

            <input ref={elementRef} type="text" defaultValue=""/>
            <button onClick={focusInput}>Focus Input using UseRef</button>


            <button onClick={handler}>Use Ref Hook</button>
            <button onClick={() => setCounter(prevState => prevState + 1)}> Button Click {counter}</button>


            {/*<ChildRef type="text"  onChange={(e) => {*/}
            {/*    setInputValue(e.target.value)*/}
            {/*}}/>*/}

            <ChildRef type="text" ref={elementRef} onClick={focusInput} ref_2={reference_2}/>
            {/*<input onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>*/}
            <section>
                <h2> Current Value : {inputValue}</h2>
                <p> Previous Value : {prevElement.value}</p>
            </section>

            <HookRefBg/>

        </>
    )
}

export default Ref
