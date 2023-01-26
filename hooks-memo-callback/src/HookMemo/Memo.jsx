import React, {useState, useMemo} from 'react'
import ChildMemo from "../Child/ChildMemo";

const Memo = () => {

    const [meme, setMemo] = useState(0)
    const [todo, setTodo] = useState([]);


    const changeMemo = () => {
        setMemo(meme + 1);
    }

    const changeTodo = () => {
        setTodo(prevState => [...prevState, `New Memo`]);
    }
    const expensiveCalculation = useMemo(() => (num) => {
        // console.log("Calculating...", {meme});
        for (let i = 0; i < 10; i++) {
            num += 1;
        }
        return num;
    }, [meme]);


    return (
        <>
            <ChildMemo todo={todo} memo={changeTodo} fun={expensiveCalculation(meme)}/>
            <button onClick={changeMemo}>Click Memo {}</button>
        </>
    )


}

export default Memo
