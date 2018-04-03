import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import marked from 'marked';

class App extends Component {
	onChange = (e) => {
		const text = e.target.value;
		document.getElementById('markdown').innerHTML = marked(text);		
	};
	
	render() {
		return (
			<div
				className="row" 
				style={{
					width: '70%', 
					margin: '0 auto', 
					height: '95vh'
				}}
			>
				<div
					className="header"
					style={{
						marginTop: '30px',
						width: '100%',
						textAlign: 'center'
					}}
				>
					<h2>Markdown Previewer</h2>
					<p>Input your markdown text into the left textbox, and the formatted markdown will be shown in the right box.</p>
				</div>
				<textarea 
					onChange={this.onChange} 
					className="text-box col-sm-6" 
					style={{
						width: '100%', 
						height: '80%', 
						resize: 'none',
						border: '2px solid black',
						borderRight: '1px solid black',						
						overflowY: 'scroll'
					}}
				/>
				<div 
					className="markdown-box col-sm-6" 
					id="markdown" 
					style={{ 
						width: '100%', 
						height: '80%', 
						border: '2px solid black',
						borderLeft: '1px solid black',
						overflowY: 'scroll'												 
					}}
				/>
			</div>
		);
	}
}

export default App;
