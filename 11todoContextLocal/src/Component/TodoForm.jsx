import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoForm() {
    const [todoMsg,setTodoMsg] = useState("")
    const {addTodo} =useTodo()

    const addbtn=(e)=>{
        e.preventDefault()

        addTodo({todo: todoMsg,completedStatus: false}) //IF todo: todo then just write todo only (if field name and value both are same then only write one name)
        setTodoMsg("")
    }

    return (
        <form  onSubmit={addbtn} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMsg}
                onChange={(e)=>setTodoMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;