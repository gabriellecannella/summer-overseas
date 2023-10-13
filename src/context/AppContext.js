import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ATTENDEE':
            return {
                ...state,
                attendees: [...state.attendees, action.payload],
            };
        case 'DELETE_ATTENDEE':
            return {
                ...state, 
                attendees: state.attendees.filter(
                    (attendee) => attendee.id !== action.payload
                ),
            };
        case 'SET_GOAL':
            return {
                ...state,
                goal: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    goal: 20,
    attendees: [
        { id: uuidv4(), name: 'David'},
        { id: uuidv4(), name: 'Gabby'},
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                attendees: state.attendees,
                goal: state.goal,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};