import React, {memo} from 'react'

const ChildCallBack = ({count, test}) => {
    console.log('Logged in ChildCallBack Component');
    test();
    return (
        <div>
            Hello from Child
            <br/>
            <p>Count :{count}</p>
        </div>
    )
}

export default memo(ChildCallBack)
