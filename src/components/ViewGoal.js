import React from 'react';

const ViewGoal = (props) => {
    return (
        <>
            <span>Attendence Goal: {props.goal}</span>
            <button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
                Edit
            </button>
        </>
    );
};

export default ViewGoal;