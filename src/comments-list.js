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
						id = { id }					
						author = { author }
						text = { text }
						date = { date }							
						remove = { () => this.remove(id) }
				/>
				)
			})
		}
	</ul>
	)
}

export default CommentsList;