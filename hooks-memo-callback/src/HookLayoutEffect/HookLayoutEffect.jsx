import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'

const HookLayoutEffect = () => {

    const elementRef = useRef(null)
    const [dimension, setDimension] = useState({width: 0, height: 0})



    useLayoutEffect(() => {
        const element = elementRef.current;
        if (element) {
            setDimension({
                width: element.offsetWidth,
                height: element.offsetHeight,
            })
        }


    }, []);

    return (
        <div ref={elementRef}>
            <p style={{border: "1px solid green"}}> The size of and element to display with a ${dimension.width} x
                ${dimension.height}
            </p>
        </div>
    )
}

export default HookLayoutEffect
