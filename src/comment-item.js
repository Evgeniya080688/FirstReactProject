import React from 'react';

const CommentItem = (props) => {
	//const className = props.checked ? 'checked' : '';

	return (
		<li 
		>	
			<div>
				{props.author}
			</div>	 
			
			<div>
				{props.text}
			</div>	
			
			<div>
				{props.date}
			</div>	

			<button 
				onClick = {props.remove}				
			>Удалить
			</button>
		</li>
	);
}

export default CommentItem;