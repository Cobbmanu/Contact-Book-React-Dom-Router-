import React, { useContext, useEffect, useState } from 'react';
import { todoContext } from '../../context/TodoContext';
import { Link } from 'react-router-dom'


const EditTodo = (props) => {
    const { taskToEdit, saveTask } = useContext(todoContext);
    const [newPerson, setNewPerson] = useState(taskToEdit)



    useEffect(() => {
        setNewPerson(taskToEdit)
    }, [taskToEdit])

    function handleInput1(e) {
        let newObj = {
            ...newPerson,
            name: e.target.value
        }
        setNewPerson(newObj)
    }
    console.log(newPerson)

    function handleInput2(e) {
        let newObj = {
            ...newPerson,
            surName: e.target.value
        }
        setNewPerson(newObj)
    }

    function handleInput3(e) {
        let newObj = {
            ...newPerson,
            phone: e.target.value
        }
        setNewPerson(newObj)
    }

    function handleClick() {
        saveTask(newPerson, props.history)
    }


    return (
        <div>
            {newPerson ?
                <>
                    <input value={newPerson.name} onChange={handleInput1} type="text" name="" id="" />
                    <input value={newPerson.surName} onChange={handleInput2} type="text" name="" id="" />
                    <input value={newPerson.phone} onChange={handleInput3} type="text" name="" id="" />
                    <button onClick={handleClick}>Save</button>
                </>
                :
                <h1>Loading...</h1>
            }
        </div>
    );
};

export default EditTodo;
