import React, {forwardRef} from 'react'

const ChildRef = forwardRef(({type , onChange}, ref) => {
    return (
        <input type={type} onChange={onChange} ref={ref}> </input>
    )
});

export default ChildRef
