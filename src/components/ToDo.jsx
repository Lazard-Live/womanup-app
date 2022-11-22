function ToDo({todo, removeTask}) {

    return (
        <div key={todo.id} className='item'>
            <div className="item-title">
                {todo.title}
            </div>
            <div className={todo.complete ? "item-text strike" : "item-text"}>
                {todo.text}
            </div>
            <div className="item-file">
                {todo.file}
            </div>
            <button className={"item-delete"} onClick={() => {
                removeTask(todo.id)
            }}>X
            </button>
        </div>
    )
}

export default ToDo;