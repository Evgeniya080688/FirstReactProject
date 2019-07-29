import React from 'react';
import CommentItem from './comment-item';

const CommentsList = (props) => {
	const { comments, remove } = props;
	return (<ul>
		{
			comments.map((comment, i) => {
				const { id, author, text, date } = comment;
				return (
					<CommentItem 	
						key = { id }
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