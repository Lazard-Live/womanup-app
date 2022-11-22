import {useState} from "react";

function ToDoForm({addTask}) {
    const [userInputTitle, setUserInputTitle] = useState(''),
        [userInputText, setUserInputText] = useState(''),
        [userInputFile, setUserInputFile] = useState('');


    const handleSubmit = (data) => {
        data.preventDefault();
        addTask(userInputTitle, userInputText, userInputFile)
        setUserInputTitle('')
        setUserInputText('')
        setUserInputFile('')
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form">

                <input
                    className="form_title"
                    value={userInputTitle}
                    type="text"
                    onChange={(event) => setUserInputTitle(event.target.value)}
                    placeholder="Введите заголовок"
                />

                <textarea
                    className="form_text"
                    value={userInputText}
                    onChange={(event) => setUserInputText(event.target.value)}
                    placeholder="Введите описание"
                />
                <input
                    value={userInputFile}
                    type={"file"}
                    onChange={(event) => setUserInputFile(event.target.value)}
                />
                <button>Добавить запись</button>
            </div>

        </form>
    )
}

export default ToDoForm;