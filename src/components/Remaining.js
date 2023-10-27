import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
	const { attendees, goal } = useContext(AppContext);

	// const totalAttendees = attendees.reduce((total, item) => {
	// 	return (total += item.cost);
	// }, 0);

	// const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
        // <div class={`alert p-4 ${alertType}`}>
        <div class={`alert p-4`}>
			{/* <span>Remaining: £{budget - totalExpenses}</span> */}
			<span>Spots Left: {goal}</span>
		</div>
	);
};

export default Remaining;