import React from 'react';

const EditLocation = ({ selected, index, onLocationDelete, editLocationTime }) => {
	let minutes = [];
	let edit = null;
	if(selected === index) {
		edit = <div>
			<button onClick={() => onLocationDelete(index)}>
				{"Delete"}
			</button>
			<form 
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
		</div>
	}
	return (
		<div>{edit}</div>
	)
}

export default EditLocation;