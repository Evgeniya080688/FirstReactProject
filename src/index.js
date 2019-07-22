import React from 'react';
import ReactDOM from 'react-dom';
import CommentItem from './comment-item';
import css from './style.css';

const defaultComments = [
  {author: "Вася", date: "08-07-2017", text: "Очень классно! Молодцы"},
  {author: "Коля", date: "08-07-2017", text: "Просто Супер"},
  {author: "Петя", date: "08-07-2017", text: "Да, согласен"}
];

const comments = JSON.parse(localStorage.getItem("comments"));

//React-компонент (class-based)
class CommentApp extends React.Component {
	constructor() {
		super();
		this.state = {
	        comments: comments || defaultComments,
	        newAuthor: "",
	        newComment: ""
    	};

		//localStorage.setItem('comments', '');

	}

	remove(key) {
		const {comments} = this.state;
		comments.splice(key, 1);

		//Обновляем состояние приложения
		localStorage.setItem('comments', JSON.stringify(this.state.comments));
		this.setState( { comments } );

	}

	addNewComment() {
		const comments = this.state.comments;
		const nowDate = new Date();
		
		const dayToday = nowDate.getDate();
		const monthToday = nowDate.getMonth()+1;
		const yearToday = nowDate.getFullYear();

		const fullDate = "" + dayToday+"-"+ monthToday + "-" + yearToday;
		//console.log('now');

		comments.push({
			author: this.state.newAuthor,
			date: fullDate,
			text: this.state.newComment
		});

		localStorage.setItem('comments', JSON.stringify(this.state.comments));

		this.setState({ 
			comments, 
			newAuthor: '',
			newComment: ''
		});
		
	}

	render() {
		// JSX-синтаксис

		return (

			<div>
				<h1>Комментарии</h1>

				<ul>
					{
						this.state.comments.map((comment, i) => {
							return (
								<CommentItem
									key = {i}
									author = {comment.author}
									text = {comment.text}
									date = {comment.date}							
									remove = {this.remove.bind(this, i)}
							/>
							)
						})
					}
				</ul>


				<form  name="addNewComment">
					<h2>Добавь свой комментарий</h2>
					<input 
						type="text"
						required
						placeholder = "Введите имя"
						value = {this.state.newAuthor}
						onChange = {ev => {
							this.setState({ newAuthor: ev.target.value});
						}}
						
					/>

					<textarea 
						required
						rows="10" 
						cols="45" 
						name="comment"
						onChange = {ev => {
							this.setState({ newComment: ev.target.value});
						}}
						
					>
						{this.state.newComment}			  
					</textarea>					

					<button
						onClick ={ev => {	
							if ((this.state.newAuthor.replace(/\s+/g," ").trim() != '') && (this.state.newComment.replace(/\s+/g," ").trim() != '')) {
								this.addNewComment();
							}				    							
						}}
					>
					Добавить
					</button>

				</form>	

			</div>		
		);
	}
}

ReactDOM.render(
	<CommentApp />,
	document.querySelector('#app')
);