import React from 'react';

const CommentItem = (props) => {
	const { id, author, text, date, remove } = props;
	return (
		<li>	
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
				onClick = { () => remove(id) }				
			>
			Удалить
			</button>
		</li>
	);
}

export default CommentItem;

			
