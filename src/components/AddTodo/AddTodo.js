import React, {useContext, useState} from 'react';
import { todoContext } from '../../context/TodoContext';
// import {Link} from 'react-router-dom';

const AddTodo = () => {
    const [value1, setValue1]= useState('')
    const [value2, setValue2]= useState('')
    const [value3, setValue3]= useState('')
    const {addTask} = useContext(todoContext)
    
    console.log(value1)
    function handleClick () {
        let newObj = {
            name: value1,
            surName: value2,
            phone: value3,
            status: false
        }
        addTask(newObj)
        // setValue1('')//очищаем input
        // setValue2('')
        // setValue3('')
    }
    return (
        <div>
            {/* <Link to="/list">List</Link> */}
            <input 
                value1={value1} 
                onChange={(e) => setValue1(e.target.value)} 
                type ="text" />
            <input 
                value2={value2} 
                onChange={(e) => setValue2(e.target.value)} 
                type ="text" />
            <input 
                value3={value3} 
                onChange={(e) => setValue3(e.target.value)} 
                type ="text" />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddTodo;