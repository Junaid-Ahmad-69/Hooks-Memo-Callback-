import React, {useRef} from 'react'

const HookRefBg = () => {
    const counterRef = useRef(0);
    const containerRef = useRef(null);


    const handlerChange = () => {
        counterRef.current += 1
        console.log(`I am ${counterRef.current} Times`)
        if (containerRef.current) {
            containerRef.current.style.backgroundColor = counterRef.current % 2 === 0 ? 'grey' : "whitesmoke"
        }

    }


    return (
        <div ref={containerRef}>
            <h1>Change Child Component Color {counterRef.current}</h1>
            <button onClick={handlerChange}>Toggle Color</button>

        </div>
    )
}

export default HookRefBg
