import React from 'react';
import ReactDOM from 'react-dom';
import CommentItem from './comment-item';
import CommentsList from './comments-list';
import CommentForm from './comment-form';
import css from './style.css';

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

    	// this.state.comments.map((comment, i) => {
    	// 	this.remove = this.remove.bind(this, i);
    	// })

    	//localStorage.setItem('comments', JSON.stringify(this.state.comments));			

		//localStorage.setItem('comments', '');

	}

	remove(id) {
		const { comments } = this.state;
		//comments.splice(id, 1);
		for ( var i = 0; i < comments.length; i++ ) {
			if (id === comments[i].id) {
				comments.splice(i, 1);
			}
		}

		//Обновляем состояние приложения
		localStorage.setItem('comments', JSON.stringify(this.state.comments));
		this.setState( { comments } );

	}

	addNewComment(event) {
		const {comments} = this.state;
		const nowDate = new Date();
		const newId = "" + Math.random().toString(36).substr(2, 9);
		
		const dayToday = nowDate.getDate();
		const monthToday = nowDate.getMonth()+1;
		const yearToday = nowDate.getFullYear();

		const fullDate = "" + dayToday+"-"+ monthToday + "-" + yearToday;
		//console.log('now');

		event.preventDefault();

		if ((this.state.newAuthor.replace(/\s+/g," ").trim() != '') && (this.state.newComment.replace(/\s+/g," ").trim() != '')) {

			comments.push({
				id: newId,
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

		event.preventDefault();
		
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

		return (

			<div>
				<h1>Комментарии</h1>
				<CommentsList comments = { comments } remove = { this.remove }/>

				<CommentForm 
					newAuthor = {this.state.newAuthor} 
					newComment = {this.state.newComment} 
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