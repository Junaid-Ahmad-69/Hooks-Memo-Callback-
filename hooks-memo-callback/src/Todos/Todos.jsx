import React, {memo} from "react";
const Todos = ({addTodo, Todos}) => {
    console.log("Child Run Again and Again & Effects app performance");

    return (
        <div>
            {Todos.map((item, index) => {
                return <p key={index}>{item}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default memo(Todos)
