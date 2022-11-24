import {useState} from "react";

function ToDo({todo, removeTask, editTask}) {

    const [itemClassName, setItemClassName] = useState('item');

    const toggleClass = () => {
        if (itemClassName === 'item') {
            setItemClassName('item item_complete');
        } else {
            setItemClassName('item');
        }
    }

    return (
        <div key={todo.id} className={itemClassName}>

            <div className="item_title" >{todo.title}</div>
            <div className="item_text">{todo.text}</div>
            <i className="item_file">{todo.file}</i>
            <div className="item_date"> {todo.date} </div>

            <button className={"item_end"} onClick={() => {
               toggleClass()
            }}> Complete
            </button>

            <button className={"item_edit"} onClick={() => {
                editTask(todo.id)
            }}> Edit
            </button>

            <button className={"item_delete"} onClick={() => {
                removeTask(todo.id)
            }}> Del
            </button>

        </div>
    )
}

export default ToDo;