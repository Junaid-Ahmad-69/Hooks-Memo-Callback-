import React, {memo} from 'react'

const ChildMemo = ({todo, memo, fun}) => {
    console.log("Memo changed & Run");
    return (
        <div>
            {todo.map((item, index) => {
                return <p key={index}>{item}</p>
            })}
            <button onClick={memo}>Click to ADD Memo</button>
        </div>
    )
}

export default ChildMemo
