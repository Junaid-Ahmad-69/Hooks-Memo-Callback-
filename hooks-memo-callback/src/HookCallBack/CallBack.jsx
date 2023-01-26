import React, {useCallback, useState} from 'react'
import Todos from "../Todos/Todos";

const CallBack = () => {

    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);
    const changeHandler = () => {
        setCount(count + 1);
    }


    const changeTodo = useCallback(() => {
        setTodo(prevState => [...prevState, `New Entry`]);
    }, [todo])


    return (
        <>
            <Todos addTodo={changeTodo} Todos={todo}/>
            <button onClick={changeHandler}>Click Me : {count}</button>
        </>
    )
}

export default CallBack