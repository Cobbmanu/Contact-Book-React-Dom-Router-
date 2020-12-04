import React, { useContext, useState, useEffect } from 'react';
import { todoContext } from '../../context/TodoContext';
import { Link } from 'react-router-dom'


const ContactDetails = () => {
    const {taskToDetails} = useContext(todoContext)
    console.log(taskToDetails)
    const [data, setData] = useState(taskToDetails)

    useEffect(() => {
        setData(taskToDetails)
    }, [taskToDetails]);

        
        return (
            <div>
                <ul>
                    <li>
                        {data.name} {data.surName} {data.phone}
                    </li>
                </ul>
            </div>
        );
    };

    export default ContactDetails;