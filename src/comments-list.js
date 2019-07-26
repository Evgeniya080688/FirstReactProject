import React from 'react';
import CommentItem from './comment-item';

const CommentsList = (props) => {
	const { comments } = props;
	return (<ul>
		{
			comments.map((comment, i) => {
				const { id, author, text, date, remove } = comment;
				return (
					<CommentItem 
						key = { i }	
						id = { id }					
						author = { author }
						text = { text }
						date = { date }							
						remove = { remove }
				/>
				)
			})
		}
	</ul>
	)
}

export default CommentsList;