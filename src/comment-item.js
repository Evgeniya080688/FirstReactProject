import React from 'react';

const CommentItem = (props) => {
	const { author, date, text, remove} = props;
	return (
		<li 
		>	
			<div>
				{author}
			</div>	 
			
			<div>
				{text}
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