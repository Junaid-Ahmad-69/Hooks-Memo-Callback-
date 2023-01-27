import React from 'react'

const Child2 = () => {
    console.log('child 2');
    return (
        <div>
            <p>Child 2</p>
        </div>
    )
}
export default React.memo(Child2)
