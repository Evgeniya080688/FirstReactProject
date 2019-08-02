import React from 'react';
import ReactDOM from 'react-dom';
import CommentItem from './comment-item';
import CommentsList from './comments-list';
import CommentForm from './comment-form';
import css from './style.css';
import {createId, getDate, isEmptyString} from './utils.js';

const defaultComments = [
  {id: "000000001", author: "Вася", date: "08-07-2017", text: "Очень классно! Молодцы"},
  {id: "000000002", author: "Коля", date: "08-07-2017", text: "Просто Супер"},
  {id: "000000003", author: "Петя", date: "08-07-2017", text: "Да, согласен"}
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
    	this.addNewComment = this.addNewComment.bind(this);

	}

	remove(id) {
		const { comments } = this.state;

		comments.forEach(function(item, i, comments) {
			if (id === item.id) {
				comments.splice(i, 1);
			}
		});

		//Обновляем состояние приложения
		this.setState((state) => ({
			comments: state.comments
		}));
		
		localStorage.setItem('comments', JSON.stringify(this.state.comments));
		

	}

	addNewComment(event) {
		event.preventDefault();

		const {comments, newAuthor, newComment} = this.state;
		const newId = createId();
		const fullDate = getDate();	

		if (!isEmptyString(newAuthor) && !isEmptyString(newComment)) {

			comments.push({
				id: newId,
				author: newAuthor,
				date: fullDate,
				text: newComment
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
	    const { value, name } = target;

	    this.setState({
	      [name]: value
	    });
	}


	render() {
		// JSX-синтаксис
		const {newAuthor, newComment, comments} = this.state;
		
		return (

			<div>
				<h1>Комментарии</h1>
				<CommentsList comments = { comments } remove = { this.remove }/>

				<CommentForm 
					newAuthor = {newAuthor} 
					newComment = {newComment} 
					addNewComment = { this.addNewComment } 
					changeElForm = { this.changeElForm }
				 />			

			</div>		
		);
		
	}
}

ReactDOM.render(
	<CommentApp />,
	document.querySelector('#app')
);