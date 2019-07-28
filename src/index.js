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

    	this.remove = this.remove.bind(this);
    	this.changeElForm = this.changeElForm.bind(this);
    	this.addNewComment = this.addNewComment.bind(this)

    	// this.state.comments.map((comment, i) => {
    	// 	this.remove = this.remove.bind(this, i);
    	// })			

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
		const {comments} = this.state;
		const nowDate = new Date();
		
		const dayToday = nowDate.getDate();
		const monthToday = nowDate.getMonth()+1;
		const yearToday = nowDate.getFullYear();

		const fullDate = "" + dayToday+"-"+ monthToday + "-" + yearToday;
		//console.log('now');

		if ((this.state.newAuthor.replace(/\s+/g," ").trim() != '') && (this.state.newComment.replace(/\s+/g," ").trim() != '')) {

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
		
	}

	changeElForm(event) {
		const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	}


	render() {
		// JSX-синтаксис
		const { comments } = this.state;

		return (

			<div>
				<h1>Комментарии</h1>

				<ul>
					{
						comments.map((comment, i) => {
							const { author, text, date } = comment;
							return (
								<CommentItem 
									//commentsList={CommentsList}
									key = {i}
									author = {author}
									text = {text}
									date = {date}							
									remove = { this.remove }
							/>
							)
						})
					}
				</ul>


				<form action={this.addNewComment} name="addNewComment">
					<h2>Добавь свой комментарий</h2>
					<input 
						type="text"
						name="newAuthor"
						required
						placeholder = "Введите имя"
						value = {this.state.newAuthor}
						onChange = {this.changeElForm}
						
					/>

					<textarea 
						required
						rows="10" 
						cols="45" 
						name="newComment"
						onChange = {this.changeElForm}
						
					>
						{this.state.newComment}			  
					</textarea>					

					<button		
						type="submit"				
						onClick={this.addNewComment}
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