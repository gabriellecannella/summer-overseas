import React, { useState, useContext } from 'react';
import ViewGoal from './ViewGoal';
import EditGoal from './EditGoal';
import { AppContext } from '../context/AppContext';

const Goal = () => {
    const { goal, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);  
    };

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_GOAL',
            payload: value,
        });
        setIsEditing(false);
    };

    return (
        <div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
            {isEditing ? (
                <EditGoal handleSaveClick={handleSaveClick} goal={goal}/>
            ) : (
                <ViewGoal handleEditClick={handleEditClick} goal={goal}/>
            )}
        </div>
    );
};

export default Goal;