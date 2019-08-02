import React from 'react';

const CommentItem = (props) => {
	const { id, author, text, date, remove } = props;
	return (
		<li>
			<article>
				<header>
					<h2>{author}</h2>					
				</header>	 
				
				<p>
					{text}
				</p>	
				<footer>
					<time>
						{date}
					</time>	
				</footer>				
			</article>
			<button class="deleteBtn"
				onClick = { () => remove(id) }				
			>
			Удалить
			</button>			
		</li>
	);
}

export default CommentItem;

			
