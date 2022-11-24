import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

function ToDoForm({ addTask, editedTask, endEditTask }) {
    // коллекции данных
    const [userInputTitle, setUserInputTitle] = useState(''),
        [userInputText, setUserInputText] = useState(''),
        [userInputFile, setUserInputFile] = useState(''),
        [userInputDate, setUserInputDate] = useState(''),
        [isEdit, setIsEdit] = useState(false);

    // перенос данных в оформу для редактирования
    useEffect(() => {
        if (editedTask) {
            setUserInputTitle(editedTask.title);
            setUserInputText(editedTask.text);
            // setUserInputFile(editedTask.file);
            setUserInputDate(editedTask.date);

            setIsEdit(true);
        }
    }, [editedTask]);

    // действие при собитии отправки формы
    const handleSubmit = (data) => {
        // отключение перезагрузки формы
        data.preventDefault();

        // вызов добавления задачи и передача данных из полей формы
        if (isEdit) {
            endEditTask(editedTask.id, userInputTitle, userInputText, userInputFile, userInputDate);
            setIsEdit(false);
        } else {
            addTask(userInputTitle, userInputText, userInputFile, userInputDate);
        }

        // очистка полей ввода
        setUserInputTitle('');
        setUserInputText('');
        setUserInputFile('');
        setUserInputDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <input
                    className="form__title"
                    value={userInputTitle}
                    type="text"
                    onChange={(event) => setUserInputTitle(event.target.value)}
                    placeholder="Введите заголовок"
                />

                <textarea
                    className="form__text"
                    value={userInputText}
                    onChange={(event) => setUserInputText(event.target.value)}
                    placeholder="Введите описание"
                />

                <div className="form__wrap">
                    <input
                        value={userInputFile}
                        type={'file'}
                        onChange={(event) => setUserInputFile(event.target.value)}
                    />

                    <input
                        className="form__date"
                        value={userInputDate}
                        type={'date'}
                        // min={dayjs().format('YYYY-MM-DD')} // закрыто для тестов
                        onChange={(event) => setUserInputDate(event.target.value)}
                    />

                    <button>{isEdit ? 'Изменить запись' : 'Добавить запись'}</button>
                </div>
            </div>
        </form>
    );
}

export default ToDoForm;
