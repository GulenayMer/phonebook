import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const contacts = [
	{
	  	id: 1,
	 	name: "",
		phone: ""
	},
  ]

ReactDOM.createRoot(document.getElementById('root')).render(
	<App contacts = {contacts}/>);


