function ToDo({todo, removeTask}) {

    return (
        <div key={todo.id} className='item'>

            <div className="item_title" >{todo.title}</div>
            <div className="item_text">{todo.text}</div>
            <i className="item_file">{todo.file}</i>
            <div className="item_date"> {todo.date} </div>

            <button className={"item-delete"} onClick={() => {
                removeTask(todo.id)
            }}> Del
            </button>
        </div>
    )
}

export default ToDo;