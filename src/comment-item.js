import React from 'react';

const CommentItem = (props) => {
	const { author, date, remove} = props;
	return (
		<li 
		>	
			<div>
				{author}
			</div>	 
			
			<div>
				{props.text}
			</div>	
			
			<div>
				{date}
			</div>	

			<button 
				onClick = {remove}				
			>Удалить
			</button>
		</li>
	);
}

export default CommentItem;