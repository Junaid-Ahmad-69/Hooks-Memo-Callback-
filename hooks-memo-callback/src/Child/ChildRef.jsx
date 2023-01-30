import React, {forwardRef} from 'react';

const ChildRef = forwardRef(({type, onClick}, ref) => {
    console.log('ref', ref)
    return (
        <>        <input type={type} ref={ref}/>
            <button onClick={onClick}>Click me to Focus</button>
            {/*<button onClick={ref}>Click me to Focus</button>*/}
        </>
    )
});

export default ChildRef
