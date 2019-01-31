import React from 'react';

const EditLocation = ({ selected, index, onLocationDelete, editLocationTime }) => {
	let minutes = [];
	let editTime = null;
	let edit = null;

	if(index !== 0) {
		editTime = <form 
			onSubmit={e => {
				e.preventDefault()

				if(!minutes[index].value) {
	        		return
	        	}
	        	editLocationTime(index, parseInt(minutes[index].value))
	        }}
	    >
			<input type="number" ref={node => (minutes[index] = node)} />
		</form>
	}
	if(selected === index) {
		edit = <div>
			<button onClick={() => onLocationDelete(index)}>
				{"Delete"}
			</button>
			{editTime}
		</div>
	}
	
	return (
		<div>{edit}</div>
	)
}

export default EditLocation;